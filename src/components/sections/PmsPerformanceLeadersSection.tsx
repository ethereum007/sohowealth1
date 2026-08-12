"use client";

import { BarChart3, ChevronLeft, ChevronRight, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import pmsBazaarData from "../../../data/pmsbazaar/pms_profiles_enriched_2026-07-31_scraped_2026-08-13.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Period = "1M" | "3M" | "6M" | "1Y" | "2Y" | "3Y" | "5Y" | "10Y" | "SI";
type PmsRecord = (typeof pmsBazaarData.records)[number];

const periods: Period[] = ["1M", "3M", "6M", "1Y", "2Y", "3Y", "5Y", "10Y", "SI"];
const periodKeys: Record<Period, keyof PmsRecord> = {
  "1M": "return_1m", "3M": "return_3m", "6M": "return_6m", "1Y": "return_1y",
  "2Y": "return_2y", "3Y": "return_3y", "5Y": "return_5y", "10Y": "return_10y", SI: "return_since_inception",
};
const pageSize = 25;

function numericReturn(value: string) {
  const parsed = Number.parseFloat(value.replace("%", ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function strategyName(row: PmsRecord) {
  const prefix = `${row.amc_name} - `;
  return row.strategy_display_name.startsWith(prefix)
    ? row.strategy_display_name.slice(prefix.length)
    : row.strategy_display_name;
}

function disclosed(items: { name: string; weight: string }[]) {
  return items.filter((item) => item.name.toLowerCase() !== "undisclosed" && item.weight.toLowerCase() !== "undisclosed");
}

export function PmsPerformanceLeadersSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [period, setPeriod] = useState<Period>("1Y");
  const [page, setPage] = useState(1);
  const [selectedStrategy, setSelectedStrategy] = useState<PmsRecord | null>(null);

  const categories = useMemo(
    () => [...new Set(pmsBazaarData.records.map((row) => row.category))].sort(),
    [],
  );

  const rows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const key = periodKeys[period];
    return pmsBazaarData.records
      .map((row) => ({ row, value: numericReturn(String(row[key])) }))
      .filter(({ row, value }) => value !== null
        && (category === "all" || row.category === category)
        && (!normalizedQuery || `${row.strategy_display_name} ${row.amc_name} ${row.benchmark}`.toLowerCase().includes(normalizedQuery)))
      .sort((a, b) => (b.value ?? -Infinity) - (a.value ?? -Infinity));
  }, [category, period, query]);

  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const resetPage = () => setPage(1);

  return (
    <section className="bg-[#F7F8FA] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-body mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">
                Independent PMS research universe
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-4xl lg:text-5xl">
                Compare 556 PMS strategies across India
              </h2>
              <p className="font-body mt-5 text-base leading-relaxed text-[#4A5568]">
                Explore published performance, category, benchmark, AUM and inception data. Inclusion here does not mean a strategy is available through or recommended by SoHo Wealth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["Strategies", "556"],
                ["Profiles as on", "31 Jul 2026"],
                ["Periods", "9"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white p-5 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="font-display mt-2 whitespace-nowrap text-xl font-semibold text-[#0B1F3A]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-5 shadow-[0_12px_40px_-22px_rgba(11,31,58,0.35)] md:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => { setQuery(event.target.value); resetPage(); }}
                  placeholder="Search strategy, AMC or benchmark"
                  aria-label="Search PMS strategies"
                  className="h-11 border-[#CBD5E1] pl-10"
                />
              </div>
              <Select value={category} onValueChange={(value) => { setCategory(value); resetPage(); }}>
                <SelectTrigger className="h-11 border-[#CBD5E1]" aria-label="Filter by PMS category">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <Tabs value={period} onValueChange={(value) => { setPeriod(value as Period); resetPage(); }}>
                <TabsList className="h-auto max-w-full justify-start gap-1 overflow-x-auto bg-[#F1F5F9] p-1.5">
                  {periods.map((item) => (
                    <TabsTrigger key={item} value={item} className="min-w-12 px-3 py-2">{item}</TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <p className="font-body text-sm text-muted-foreground">
                {rows.length.toLocaleString("en-IN")} strategies with {period} data · ranked highest to lowest
              </p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0B1F3A] hover:bg-[#0B1F3A]">
                    <TableHead className="w-16 text-white/75">Rank</TableHead>
                    <TableHead className="min-w-[300px] text-white/75">PMS strategy</TableHead>
                    <TableHead className="min-w-[150px] text-white/75">Category</TableHead>
                    <TableHead className="min-w-[150px] text-white/75">Benchmark</TableHead>
                    <TableHead className="text-right text-white/75">AUM (₹ Cr)</TableHead>
                    <TableHead className="text-right text-white/75">{period}</TableHead>
                    <TableHead className="text-right text-white/75">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleRows.map(({ row, value }, index) => (
                    <TableRow key={row.strategy_url} className="hover:bg-[#FDF8EC]">
                      <TableCell className="font-semibold text-[#0B1F3A]">{(currentPage - 1) * pageSize + index + 1}</TableCell>
                      <TableCell>
                        <p className="font-body font-semibold text-[#0B1F3A]">{strategyName(row)}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{row.amc_name} · Since {row.inception_date}</p>
                      </TableCell>
                      <TableCell className="text-sm text-[#4A5568]">{row.category}</TableCell>
                      <TableCell className="text-sm text-[#4A5568]">{row.benchmark}</TableCell>
                      <TableCell className="text-right text-sm text-[#4A5568]">{row.aum_crore}</TableCell>
                      <TableCell className="text-right font-display text-lg font-semibold text-[#0B7A53]">
                        {value?.toFixed(2)}%
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-auto px-2 py-1 font-semibold text-[#0B1F3A]"
                          onClick={() => setSelectedStrategy(row)}
                          aria-label={`View details for ${strategyName(row)}`}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">Page {currentPage} of {pageCount}</p>
              <div className="flex gap-2">
                <Button variant="outline" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>
                <Button variant="outline" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}>
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Dialog open={Boolean(selectedStrategy)} onOpenChange={(open) => { if (!open) setSelectedStrategy(null); }}>
            <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-0 p-0">
              {selectedStrategy && (
                <>
                  <DialogHeader className="bg-[#0B1F3A] p-6 pr-12 text-left text-white">
                    <DialogTitle className="font-display text-2xl leading-tight text-white">
                      {strategyName(selectedStrategy)}
                    </DialogTitle>
                    <DialogDescription className="text-white/70">{selectedStrategy.amc_name}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 p-6">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        ["Category", selectedStrategy.category],
                        ["Benchmark", selectedStrategy.benchmark],
                        ["AUM", `₹${selectedStrategy.aum_crore_detail || selectedStrategy.aum_crore} Cr`],
                        ["Inception", selectedStrategy.inception_date_detail || selectedStrategy.inception_date],
                        ["Minimum", `₹${selectedStrategy.minimum_investment}`],
                        ["Portfolio age", selectedStrategy.portfolio_characteristics["Portfolio Age"]],
                        ["Stocks", selectedStrategy.portfolio_characteristics["Total Number of Stocks"]],
                        ["SIP / STP", `${selectedStrategy.portfolio_characteristics.SIP} / ${selectedStrategy.portfolio_characteristics.STP}`],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg bg-[#F7F8FA] p-4">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                          <p className="mt-2 font-semibold text-[#0B1F3A]">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">Published returns</h3>
                      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                        {periods.map((item) => {
                          const displayedValue = String(selectedStrategy[periodKeys[item]]);
                          return (
                            <div key={item} className="rounded-lg border border-[#E2E8F0] p-3 text-center">
                              <p className="text-xs text-muted-foreground">{item}</p>
                              <p className="mt-1 font-display font-semibold text-[#0B1F3A]">{displayedValue}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {(selectedStrategy.investment_approach || selectedStrategy.investment_objective) && (
                      <div className="grid gap-4 md:grid-cols-2">
                        {[["Investment approach", selectedStrategy.investment_approach], ["Investment objective", selectedStrategy.investment_objective]].map(([title, copy]) => copy && (
                          <div key={title} className="rounded-xl border border-[#E2E8F0] p-5">
                            <h3 className="font-display text-lg font-semibold text-[#0B1F3A]">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{copy}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {(disclosed(selectedStrategy.top_holdings).length > 0 || disclosed(selectedStrategy.top_sectors).length > 0) && (
                      <div className="grid gap-5 md:grid-cols-2">
                        {[["Top holdings", disclosed(selectedStrategy.top_holdings)], ["Top sectors", disclosed(selectedStrategy.top_sectors)]].map(([title, items]) => (items as { name: string; weight: string }[]).length > 0 && (
                          <div key={title as string}>
                            <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{title as string}</h3>
                            <div className="mt-3 divide-y divide-[#E2E8F0] rounded-xl border border-[#E2E8F0] px-4">
                              {(items as { name: string; weight: string }[]).map((item) => (
                                <div key={item.name} className="flex items-center justify-between gap-4 py-3 text-sm"><span className="text-[#4A5568]">{item.name}</span><span className="font-semibold text-[#0B1F3A]">{item.weight}</span></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {selectedStrategy.fee_plans.length > 0 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">Published fee structure</h3>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {selectedStrategy.fee_plans.map((plan, index) => (
                            <div key={`fee-plan-${index}`} className="rounded-xl bg-[#F7F8FA] p-4 text-sm">
                              <p className="font-semibold text-[#0B1F3A]">{"Class" in plan ? plan.Class : "Fee plan"}</p>
                              <dl className="mt-3 space-y-2 text-[#4A5568]">{Object.entries(plan).filter(([key]) => key !== "Class").map(([key, value]) => <div key={key} className="flex justify-between gap-3"><dt>{key}</dt><dd className="text-right font-semibold text-[#0B1F3A]">{value}</dd></div>)}</dl>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedStrategy.fund_managers.length > 0 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">Fund managers</h3>
                        <div className="mt-4 space-y-3">{selectedStrategy.fund_managers.map((manager) => (
                          <div key={`${manager.name}-${manager.role}`} className="rounded-xl border border-[#E2E8F0] p-5">
                            <p className="font-semibold text-[#0B1F3A]">{manager.name}</p><p className="mt-1 text-sm font-medium text-[#C9A84C]">{manager.role}</p>
                            {manager.bio && <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{manager.bio}</p>}
                          </div>
                        ))}</div>
                      </div>
                    )}
                    <div className="rounded-lg bg-[#FDF8EC] p-4 text-sm leading-relaxed text-[#4A5568]">
                      Performance data as of 30 June 2026; strategy profiles as of 31 July 2026. Inclusion is for research and does not indicate availability or a SoHo Wealth recommendation. Verify current provider documents, fees and risk disclosures before investing.
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link href="/portfolio-review" className="inline-flex justify-center rounded-lg bg-[#C9A84C] px-5 py-3 font-semibold text-[#0B1F3A]">
                        Discuss this PMS with SoHo Wealth
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <div className="mt-6 grid gap-4 md:grid-cols-[auto_1fr] rounded-xl border border-[#E2E8F0] bg-white p-5">
            <ShieldCheck className="h-6 w-6 text-[#C9A84C]" />
            <div className="font-body text-sm leading-relaxed text-[#4A5568]">
              <p>
                Performance information is compiled from published portfolio-manager data. Returns above one year are annualised and past performance does not guarantee future results. Rankings are period-specific discovery tools—not recommendations. Verify current returns, fees, drawdowns, portfolio concentration, manager continuity and availability before investing.
              </p>
              <Link href="/portfolio-review" className="mt-3 inline-flex items-center gap-2 font-semibold text-[#0B1F3A]">
                <BarChart3 className="h-4 w-4" /> Review PMS suitability with SoHo Wealth
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-[#C9A84C]">PMS learning centre</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-[#0B1F3A]">Read the rankings in context</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                ["Best PMS in India: How to Compare 556 Strategies", "/insights/best-pms-in-india-how-to-compare", "Build a shortlist without treating one return period as a recommendation."],
                ["PMS Returns Explained", "/insights/how-to-read-pms-returns", "Understand TWRR, benchmarks, annualised returns and ranking limitations."],
                ["PMS vs Mutual Funds in India", "/insights/pms-vs-mutual-funds-india", "Compare ownership, minimums, diversification, fees and tax experience."],
              ].map(([title, href, copy]) => (
                <Link key={href} href={href} className="rounded-xl border border-[#E2E8F0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="font-body mt-3 text-sm leading-relaxed text-[#4A5568]">{copy}</p>
                  <span className="mt-5 inline-flex font-body text-sm font-semibold text-[#0B1F3A]">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
