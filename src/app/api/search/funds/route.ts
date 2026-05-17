import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabase } from "@/integrations/supabase/server";

export const dynamic = "force-dynamic";

/**
 * GET /api/search/funds?q=axis&limit=15&type=equity_mf
 *   - q     : free-text query (required, min 2 chars)
 *   - limit : max results (default 12, capped at 30)
 *   - type  : 'equity_mf' | 'debt_mf' | 'any' (default any)
 *
 * Returns top matches by trigram similarity on scheme_name.
 */
export async function GET(req: NextRequest) {
  const supabase = await createServerSupabase();
  const { searchParams } = req.nextUrl;
  const q = (searchParams.get("q") || "").trim();
  const limit = Math.min(Number(searchParams.get("limit") || 12), 30);
  const type = searchParams.get("type") || "any";

  if (q.length < 2) return NextResponse.json({ items: [] });

  // Word-tokenised full-text search:  "mirae large"  →  "mirae:* & large:*"
  // (matches any scheme whose name contains words starting with both tokens, in any order)
  const tokens = q
    .toLowerCase()
    .split(/\s+/)
    .map(t => t.replace(/[^a-z0-9]/g, ""))
    .filter(t => t.length >= 2);

  let data: any[] | null = null;
  let error: any = null;

  if (tokens.length > 0) {
    const tsquery = tokens.map(t => `${t}:*`).join(" & ");
    const filterArgs: any = { type: "plain" };
    let q1 = supabase
      .from("mutual_funds")
      .select("scheme_code, scheme_name, amc, category, nav, nav_date")
      .textSearch("search_doc", tsquery, { type: "websearch", config: "simple" })
      .eq("scheme_type", "open_ended")
      .order("scheme_name")
      .limit(limit);

    if (type === "equity_mf")    q1 = q1.ilike("category", "%equity%");
    else if (type === "debt_mf") q1 = q1.or("category.ilike.%debt%,category.ilike.%liquid%,category.ilike.%money market%,category.ilike.%bond%,category.ilike.%gilt%");

    const r1 = await q1;
    data = r1.data;  error = r1.error;

    // Fallback: if FTS returned nothing, do substring search via trigram index
    if (!error && (!data || data.length === 0)) {
      const pattern = `%${q.replace(/[%_]/g, ch => "\\" + ch)}%`;
      let q2 = supabase
        .from("mutual_funds")
        .select("scheme_code, scheme_name, amc, category, nav, nav_date")
        .ilike("scheme_name", pattern)
        .eq("scheme_type", "open_ended")
        .order("scheme_name")
        .limit(limit);
      if (type === "equity_mf")    q2 = q2.ilike("category", "%equity%");
      else if (type === "debt_mf") q2 = q2.or("category.ilike.%debt%,category.ilike.%liquid%,category.ilike.%money market%,category.ilike.%bond%,category.ilike.%gilt%");
      const r2 = await q2;
      data = r2.data;  error = r2.error;
    }
  }
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({
    items: (data || []).map(d => ({
      value: d.scheme_code,
      label: d.scheme_name,
      hint: [d.amc, d.category].filter(Boolean).join(" · "),
      nav: d.nav,
      nav_date: d.nav_date,
    })),
  });
}
