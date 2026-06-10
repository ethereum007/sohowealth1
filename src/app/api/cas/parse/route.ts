import { NextResponse, type NextRequest } from "next/server";
import { parseCasPdf, classifyScheme } from "@/lib/wealth/parse-cas";

// Parses an uploaded CAMS/KFintech CAS PDF and returns holdings ready to
// prefill the onboarding form. Stateless: the file is parsed in memory and
// never written to disk or storage.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 10 * 1024 * 1024; // CAS PDFs are typically < 2 MB

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    const password = String(form.get("password") || "");

    if (!(file instanceof Blob)) {
      return NextResponse.json({ error: "Attach the CAS PDF as 'file'." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "File too large (max 10 MB)." }, { status: 413 });
    }

    const buffer = await file.arrayBuffer();
    const result = await parseCasPdf(buffer, password || undefined);

    const assets = result.holdings.map(h => ({
      asset_class: classifyScheme(h.schemeName),
      description: h.schemeName,
      current_value: Math.round(h.marketValue),
      notes: [h.folio ? `Folio ${h.folio}` : null, h.isin].filter(Boolean).join(" · ") || null,
    }));

    return NextResponse.json({
      ok: true,
      as_on: result.asOnDate,
      total_market_value: Math.round(result.totalMarketValue),
      total_cost_value: Math.round(result.totalCostValue),
      count: assets.length,
      assets,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to parse the PDF.";
    const needsPassword = /password/i.test(message);
    return NextResponse.json({ error: message, needs_password: needsPassword }, { status: 422 });
  }
}
