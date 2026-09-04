import { NextResponse, type NextRequest } from "next/server";
import { getPmsResearchPage } from "@/lib/pms/research-server";
import type { PmsPeriod } from "@/lib/pms/research-types";

export const dynamic = "force-dynamic";

const periods = new Set<PmsPeriod>(["1M", "3M", "6M", "1Y", "2Y", "3Y", "5Y", "10Y", "SI"]);

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const requestedPeriod = params.get("period") as PmsPeriod | null;
  const requestedPage = Number.parseInt(params.get("page") || "1", 10);

  const response = NextResponse.json(getPmsResearchPage({
    query: (params.get("q") || "").slice(0, 80),
    category: (params.get("category") || "all").slice(0, 80),
    period: requestedPeriod && periods.has(requestedPeriod) ? requestedPeriod : "1Y",
    page: Number.isFinite(requestedPage) ? requestedPage : 1,
  }));
  response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return response;
}
