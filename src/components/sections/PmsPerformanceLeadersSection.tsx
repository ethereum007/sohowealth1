"use client";

import { BarChart3, ExternalLink, Repeat2, Scale, Search, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  pmsPerformanceMeta,
  pmsPerformanceRows,
  type PmsPerformancePeriod,
  type PmsPerformanceSourceRow,
} from "@/lib/pms/performance-data";
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

const periodReturnKeys: Record<PmsPerformancePeriod, keyof PmsPerformanceSourceRow> = {
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
    title: "AUM changes the interpretation",
    copy: "A smaller strategy can top a short-period table, but capacity, liquidity and investor fit matter. Compare returns alongside AUM, churn and portfolio concentration.",
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

function formatAum(value: number) {
  return `INR ${value.toFixed(2)} Cr`;
}

export function PmsPerformanceLeadersSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const rankedRowsByPeriod = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return periods.reduce((acc, period) => {
      const returnKey = periodReturnKeys[period];
      const rankedRows = [...pmsPerformanceRows]
        .sort((first, second) => Number(second[returnKey]) - Number(first[returnKey]))
        .map((row, index) => ({ ...row, rank: index + 1, returnPct: Number(row[returnKey]) }));

      acc[period] = query
        ? rankedRows.filter((row) =>
            `${row.strategyName} ${row.provider} ${row.strategy} ${row.serviceType}`.toLowerCase().includes(query),
          )
        : rankedRows;

      return acc;
    }, {} as Record<PmsPerformancePeriod, Array<PmsPerformanceSourceRow & { rank: number; returnPct: number }>>);
  }, [searchQuery]);

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
                A source-backed ranking of PMS strategies from the latest available APMI reported return tables
                across recent 1, 3 and 6 month periods.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">As on</p>
                <p className="font-display mt-2 text-xl font-semibold" style={{ color: "#0B1F3A" }}>
                  {pmsPerformanceMeta.asOnDate}
                </p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">APMI snapshot</p>
                <p className="font-display mt-2 text-xl font-semibold" style={{ color: "#0B1F3A" }}>
                  {pmsPerformanceMeta.rankedStrategyCount.toLocaleString("en-IN")}
                </p>
                <p className="font-body mt-1 text-xs text-muted-foreground">
                  ranked strategies from latest return tables
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
                  Ranked from highest to lowest return for each period, using the latest APMI performance snapshot.
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
                  {pmsPerformanceMeta.rankedStrategyCount.toLocaleString("en-IN")} APMI-ranked strategies.
                </p>
                <div className="overflow-hidden rounded-xl bg-white shadow-[0_10px_34px_-18px_rgba(11,31,58,0.35)]">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent" style={{ backgroundColor: "#0B1F3A" }}>
                        <TableHead className="w-16 text-white/75">Rank</TableHead>
                        <TableHead className="min-w-[220px] text-white/75">PMS strategy</TableHead>
                        <TableHead className="min-w-[240px] text-white/75">Provider</TableHead>
                        <TableHead className="text-right text-white/75">Return</TableHead>
                        <TableHead className="text-right text-white/75">AUM</TableHead>
                        <TableHead className="text-white/75">Type</TableHead>
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
                              {leader.strategyName}
                            </p>
                            <p className="font-body mt-1 text-xs text-muted-foreground">
                              {leader.strategy} strategy
                              {leader.oneYearPct !== null ? ` . 1Y: ${formatPct(leader.oneYearPct)}` : ""}
                            </p>
                          </TableCell>
                          <TableCell className="font-body text-sm" style={{ color: "#4A5568" }}>
                            {leader.provider}
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="inline-flex items-center gap-1 font-display text-lg font-semibold" style={{ color: "#0B7A53" }}>
                              <TrendingUp className="h-4 w-4" />
                              {formatPct(leader.returnPct)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-body text-sm" style={{ color: "#4A5568" }}>
                            {formatAum(leader.aumCr)}
                          </TableCell>
                          <TableCell className="font-body text-sm" style={{ color: "#4A5568" }}>
                            {leader.serviceType}
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

          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 md:flex-row md:items-start">
            <ShieldCheck className="h-6 w-6 shrink-0" style={{ color: "#C9A84C" }} />
            <div className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>
              <p>
                There are many PMS strategies beyond this short-period leaderboard. This table is based on the
                available {pmsPerformanceMeta.sourceName} snapshot, downloaded on {pmsPerformanceMeta.downloadedOn},
                and is not an investment recommendation. PMS selection should also review drawdowns, fees, churn,
                concentration, taxation, manager continuity and portfolio fit.
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
