import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { fetchAndParseAmfi } from "@/lib/amfi/parse";

// Long-running route — give it room.
export const maxDuration = 300; // 5 min on Vercel
export const dynamic = "force-dynamic";

/**
 * Refresh the mutual_funds table from AMFI's daily NAV file.
 *
 * Auth (any one of):
 *   - Header `Authorization: Bearer ${CRON_SECRET}` (Vercel Cron)
 *   - Query `?secret=${CRON_SECRET}` (manual trigger)
 */
async function handle(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 500 });
  }
  const auth = req.headers.get("authorization");
  const querySecret = req.nextUrl.searchParams.get("secret");
  const ok = auth === `Bearer ${secret}` || querySecret === secret;
  if (!ok) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL;
  const serviceRole = process.env.SUPABASE_REVIEW_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRole) {
    return NextResponse.json({ error: "Supabase env vars missing" }, { status: 500 });
  }

  const t0 = Date.now();
  const supabase = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });

  let funds;
  try {
    funds = await fetchAndParseAmfi();
  } catch (e: any) {
    return NextResponse.json({ error: `AMFI fetch failed: ${e.message}` }, { status: 502 });
  }

  if (funds.length === 0) {
    return NextResponse.json({ error: "No funds parsed" }, { status: 500 });
  }

  // Upsert in chunks — Supabase has a payload size limit per request.
  const CHUNK = 1000;
  let upserted = 0;
  for (let i = 0; i < funds.length; i += CHUNK) {
    const chunk = funds.slice(i, i + CHUNK).map(f => ({ ...f, updated_at: new Date().toISOString() }));
    const { error } = await supabase
      .from("mutual_funds")
      .upsert(chunk, { onConflict: "scheme_code" });
    if (error) {
      return NextResponse.json({
        error: `Upsert failed at row ${i}: ${error.message}`,
        progress: { upserted, total: funds.length },
      }, { status: 500 });
    }
    upserted += chunk.length;
  }

  return NextResponse.json({
    ok: true,
    parsed: funds.length,
    upserted,
    sample: funds.slice(0, 3),
    elapsed_ms: Date.now() - t0,
  });
}

export const GET  = handle;
export const POST = handle;
