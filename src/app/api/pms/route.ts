import { NextResponse, type NextRequest } from "next/server";
import { getPmsResearchPage } from "@/lib/pms/research-server";
import type { PmsPeriod } from "@/lib/pms/research-types";

export const dynamic = "force-dynamic";

const periods = new Set<PmsPeriod>(["1M", "3M", "6M", "1Y", "2Y", "3Y", "5Y", "10Y", "SI"]);

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const requestedPeriod = params.get("period") as PmsPeriod | null;
  const requestedPage = Number.parseInt(params.get("page") || "1", 10);

  return NextResponse.json(getPmsResearchPage({
    query: (params.get("q") || "").slice(0, 120),
    category: (params.get("category") || "all").slice(0, 120),
    period: requestedPeriod && periods.has(requestedPeriod) ? requestedPeriod : "1Y",
    page: Number.isFinite(requestedPage) ? requestedPage : 1,
  }));
}
