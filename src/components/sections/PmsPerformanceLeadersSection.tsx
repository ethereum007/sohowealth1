"use client";

import { BarChart3, ExternalLink, Repeat2, Scale, Search, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  pmsPerformanceMeta,
  type PmsPerformancePeriod,
} from "@/lib/pms/performance-data";
import {
  pmsInsightReturnMeta,
  pmsInsightReturnRows,
  type PmsInsightReturnRow,
} from "@/lib/pms/insight-returns-data";
import { pmsUniverseApproaches } from "@/lib/pms/universe-data";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const periods: PmsPerformancePeriod[] = ["1 Month", "3 Months", "6 Months"];

const periodReturnKeys: Record<PmsPerformancePeriod, keyof PmsInsightReturnRow> = {
  "1 Month": "oneMonthPct",
  "3 Months": "threeMonthsPct",
  "6 Months": "sixMonthsPct",
};

const analysisCards = [
  {
    icon: Search,
    title: "Universe first, leaderboard second",
    copy: `APMI lists ${pmsPerformanceMeta.investmentApproachCount.toLocaleString("en-IN")} investment approaches across ${pmsPerformanceMeta.providerCount.toLocaleString("en-IN")} providers. The table below is only a recent performance slice, useful for discovery and not final selection.`,
  },
  {
    icon: Repeat2,
    title: "Repeat leaders deserve attention",
    copy: "KINETIC appears across 1M, 3M and 6M leaderboards, which makes it worth reviewing more deeply. Repeated presence is a signal to investigate process, not proof of suitability.",
  },
  {
    icon: BarChart3,
    title: "As-on dates matter",
    copy: "The broadest comparable IA Insight set is Apr-2026. Some PMS pages have older latest dates, so the ranking keeps the shared month visible instead of blending stale rows into the top table.",
  },
  {
    icon: Scale,
    title: "Selection needs a full framework",
    copy: "Before investing, review drawdowns, tax impact, fee structure, manager continuity, mandate style and how the PMS complements your mutual funds, SIFs or AIFs.",
  },
];

function formatPct(value: number | null) {
  return typeof value === "number" ? `${value.toFixed(2)}%` : "NA";
}

export function PmsPerformanceLeadersSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [universeSearchQuery, setUniverseSearchQuery] = useState("");
  const insightReturnIds = useMemo(() => new Set(pmsInsightReturnRows.map((row) => row.iaId)), []);

  const rankedRowsByPeriod = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return periods.reduce((acc, period) => {
      const returnKey = periodReturnKeys[period];
      const comparableRows = pmsInsightReturnRows.filter(
        (row) => row.asOnLabel === pmsInsightReturnMeta.broadAsOnLabel && typeof row[returnKey] === "number",
      );
      const rankedRows = [...comparableRows]
        .sort((first, second) => Number(second[returnKey]) - Number(first[returnKey]))
        .map((row, index) => ({ ...row, rank: index + 1, returnPct: Number(row[returnKey]) }));

      acc[period] = query
        ? rankedRows.filter((row) =>
            `${row.name} ${row.asOnLabel ?? ""}`.toLowerCase().includes(query),
          )
        : rankedRows;

      return acc;
    }, {} as Record<PmsPerformancePeriod, Array<PmsInsightReturnRow & { rank: number; returnPct: number }>>);
  }, [searchQuery]);

  const filteredUniverseApproaches = useMemo(() => {
    const query = universeSearchQuery.trim().toLowerCase();

    if (!query) {
      return pmsUniverseApproaches;
    }

    return pmsUniverseApproaches.filter((approach) => approach.name.toLowerCase().includes(query));
  }, [universeSearchQuery]);

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p
                className="font-body mb-4 text-xs font-bold uppercase tracking-[0.15em]"
                style={{ color: "#C9A84C" }}
              >
                APMI performance scan
              </p>
              <h2
                className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#0B1F3A" }}
              >
                Recent PMS performance leaders
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed" style={{ color: "#4A5568" }}>
                A source-backed PMS universe from APMI, now enriched with IA Insight page returns for most strategies.
                Comparable rankings use the broadest shared as-on month.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">As on</p>
                <p className="font-display mt-2 text-xl font-semibold" style={{ color: "#0B1F3A" }}>
                  {pmsInsightReturnMeta.broadAsOnLabel}
                </p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Full universe</p>
                <p className="font-display mt-2 text-xl font-semibold" style={{ color: "#0B1F3A" }}>
                  {pmsPerformanceMeta.investmentApproachCount.toLocaleString("en-IN")}
                </p>
                <p className="font-body mt-1 text-xs text-muted-foreground">
                  investment approaches
                </p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">IA Insight returns</p>
                <p className="font-display mt-2 text-xl font-semibold" style={{ color: "#0B1F3A" }}>
                  {pmsInsightReturnMeta.withReturns.toLocaleString("en-IN")}
                </p>
                <p className="font-body mt-1 text-xs text-muted-foreground">
                  strategies with detail-page returns
                </p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Source</p>
                <a
                  href={pmsPerformanceMeta.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-2 inline-flex items-center gap-1.5 text-lg font-semibold hover:opacity-75"
                  style={{ color: "#0B1F3A" }}
                >
                  APMI <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {analysisCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]"
                >
                  <div
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#FDF8EC", color: "#0B1F3A" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>
                    {item.title}
                  </h3>
                  <p className="font-body mt-3 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>

          <Tabs defaultValue="1 Month" className="mt-12">
            <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>
                  Complete PMS ranking list
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  Ranked from highest to lowest return for each period using{" "}
                  {pmsInsightReturnMeta.broadAsOnCount.toLocaleString("en-IN")} IA Insight rows with the same{" "}
                  {pmsInsightReturnMeta.broadAsOnLabel} as-on month.
                </p>
              </div>
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search PMS or provider"
                  className="h-11 rounded-lg border-[#CBD5E1] bg-white pl-10 font-body"
                />
              </div>
            </div>

            <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-lg bg-white p-2 shadow-sm md:w-auto">
              {periods.map((period) => (
                <TabsTrigger
                  key={period}
                  value={period}
                  className="rounded-md px-5 py-3 font-body text-sm font-semibold data-[state=active]:shadow-none"
                  style={{ color: "#0B1F3A" }}
                >
                  {period}
                </TabsTrigger>
              ))}
            </TabsList>

            {periods.map((period) => (
              <TabsContent key={period} value={period} className="mt-6">
                <p className="font-body mb-3 text-sm text-muted-foreground">
                  Showing {rankedRowsByPeriod[period].length.toLocaleString("en-IN")} of{" "}
                  {pmsInsightReturnMeta.broadAsOnCount.toLocaleString("en-IN")} comparable APMI IA Insight strategies.
                </p>
                <div className="overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_-18px_rgba(11,31,58,0.35)]">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent" style={{ backgroundColor: "#0B1F3A" }}>
                        <TableHead className="w-16 text-white/75">Rank</TableHead>
                        <TableHead className="min-w-[260px] text-white/75">PMS strategy</TableHead>
                        <TableHead className="text-white/75">As on</TableHead>
                        <TableHead className="text-right text-white/75">Return</TableHead>
                        <TableHead className="text-right text-white/75">1Y</TableHead>
                        <TableHead className="text-right text-white/75">3Y</TableHead>
                        <TableHead className="text-right text-white/75">5Y</TableHead>
                        <TableHead className="text-right text-white/75">APMI</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rankedRowsByPeriod[period].map((leader) => (
                        <TableRow key={`${period}-${leader.rank}`} className="hover:bg-[#FDF8EC]">
                          <TableCell>
                            <span
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                              style={{ backgroundColor: leader.rank === 1 ? "#C9A84C" : "#F1F5F9", color: "#0B1F3A" }}
                            >
                              {leader.rank}
                            </span>
                          </TableCell>
                          <TableCell>
                            <p className="font-body font-semibold" style={{ color: "#0B1F3A" }}>
                              {leader.name}
                            </p>
                            <p className="font-body mt-1 text-xs text-muted-foreground">
                              APMI IA ID: {leader.iaId}
                            </p>
                          </TableCell>
                          <TableCell className="font-body text-sm" style={{ color: "#4A5568" }}>
                            {leader.asOnLabel ?? "NA"}
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="inline-flex items-center gap-1 font-display text-lg font-semibold" style={{ color: "#0B7A53" }}>
                              <TrendingUp className="h-4 w-4" />
                              {formatPct(leader.returnPct)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-body text-sm" style={{ color: "#4A5568" }}>
                            {formatPct(leader.oneYearPct)}
                          </TableCell>
                          <TableCell className="text-right font-body text-sm" style={{ color: "#4A5568" }}>
                            {formatPct(leader.threeYearsPct)}
                          </TableCell>
                          <TableCell className="text-right font-body text-sm" style={{ color: "#4A5568" }}>
                            {formatPct(leader.fiveYearsPct)}
                          </TableCell>
                          <TableCell className="text-right">
                            <a
                              href={leader.iaInsightUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-end gap-1.5 text-sm font-semibold hover:opacity-75"
                              style={{ color: "#0B1F3A" }}
                            >
                              View <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>
                  Full APMI PMS universe
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  All {pmsPerformanceMeta.investmentApproachCount.toLocaleString("en-IN")} investment approaches
                  scraped from the APMI PMS menu. The performance table above is a subset where APMI returned
                  latest period returns.
                </p>
              </div>
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={universeSearchQuery}
                  onChange={(event) => setUniverseSearchQuery(event.target.value)}
                  placeholder="Search all PMS approaches"
                  className="h-11 rounded-lg border-[#CBD5E1] bg-white pl-10 font-body"
                />
              </div>
            </div>

            <p className="font-body mb-3 mt-5 text-sm text-muted-foreground">
              Showing {filteredUniverseApproaches.length.toLocaleString("en-IN")} of{" "}
              {pmsPerformanceMeta.investmentApproachCount.toLocaleString("en-IN")} scraped approaches.
            </p>
            <div className="max-h-[520px] overflow-auto rounded-xl bg-white shadow-[0_10px_34px_-18px_rgba(11,31,58,0.35)]">
              <Table>
                <TableHeader>
                  <TableRow className="sticky top-0 z-10 hover:bg-transparent" style={{ backgroundColor: "#0B1F3A" }}>
                    <TableHead className="w-20 text-white/75">No.</TableHead>
                    <TableHead className="min-w-[320px] text-white/75">Investment approach</TableHead>
                    <TableHead className="min-w-[170px] text-white/75">Latest returns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUniverseApproaches.map((approach, index) => (
                    <TableRow key={approach.id} className="hover:bg-[#FDF8EC]">
                      <TableCell className="font-body text-sm text-muted-foreground">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <p className="font-body font-semibold" style={{ color: "#0B1F3A" }}>
                          {approach.name}
                        </p>
                        <p className="font-body mt-1 text-xs text-muted-foreground">APMI approach ID: {approach.id}</p>
                      </TableCell>
                      <TableCell className="font-body text-sm" style={{ color: "#4A5568" }}>
                        {insightReturnIds.has(approach.id) ? "IA Insight returns available" : "No IA Insight returns found"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 md:flex-row md:items-start">
            <ShieldCheck className="h-6 w-6 shrink-0" style={{ color: "#C9A84C" }} />
            <div className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>
              <p>
                The full universe list comes from the APMI PMS menu. The ranking table uses IA Insight detail-page
                returns scraped across {pmsInsightReturnMeta.scrapedCount.toLocaleString("en-IN")} approaches, with{" "}
                {pmsInsightReturnMeta.withReturns.toLocaleString("en-IN")} return records found. This is not an
                investment recommendation. PMS selection should also review drawdowns, fees, churn, concentration,
                taxation, manager continuity and portfolio fit.
              </p>
              <Link href="/portfolio-review" className="mt-3 inline-flex font-semibold" style={{ color: "#0B1F3A" }}>
                Review PMS suitability with SoHo Wealth
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
