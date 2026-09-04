import Link from "next/link";
import { getPmsResearchPage, PMS_PERFORMANCE_AS_OF } from "@/lib/pms/research-server";
import type { PmsPeriod } from "@/lib/pms/research-types";

const periods: PmsPeriod[] = ["1M", "3M", "6M", "1Y", "2Y", "3Y", "5Y", "10Y", "SI"];

export function PmsResearchTable({ q = "", category = "all", period = "1Y", page = 1 }: { q?: string; category?: string; period?: PmsPeriod; page?: number }) {
  const data = getPmsResearchPage({ query: q, category, period, page });
  const linkFor = (nextPage: number) => {
    const params = new URLSearchParams();
    if (data.query) params.set("q", data.query);
    if (data.category !== "all") params.set("category", data.category);
    if (data.period !== "1Y") params.set("period", data.period);
    if (nextPage > 1) params.set("page", String(nextPage));
    const query = params.toString();
    return `/best-pms-in-india${query ? `?${query}` : ""}`;
  };

  return <section aria-labelledby="pms-table-heading" className="bg-slate-50 py-16">
    <div className="container mx-auto max-w-7xl px-6">
      <h2 id="pms-table-heading" className="font-display text-3xl font-semibold text-[#0B1F3A]">Research the PMS universe</h2>
      <p className="mt-3 max-w-3xl text-slate-600">Published performance as of {PMS_PERFORMANCE_AS_OF}. Rankings are research inputs, not recommendations.</p>
      <form method="get" className="mt-8 grid gap-3 rounded-xl bg-white p-5 shadow-sm md:grid-cols-4">
        <label className="text-sm font-semibold text-slate-700">Strategy or provider<input name="q" defaultValue={data.query} maxLength={80} className="mt-1 w-full rounded-md border p-3 font-normal" /></label>
        <label className="text-sm font-semibold text-slate-700">Category<select name="category" defaultValue={data.category} className="mt-1 w-full rounded-md border p-3 font-normal"><option value="all">All categories</option>{data.categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="text-sm font-semibold text-slate-700">Return period<select name="period" defaultValue={data.period} className="mt-1 w-full rounded-md border p-3 font-normal">{periods.map((item) => <option key={item}>{item}</option>)}</select></label>
        <button className="self-end rounded-md bg-[#0B1F3A] px-5 py-3 font-semibold text-white">Apply filters</button>
      </form>
      <p className="mt-5 text-sm text-slate-600">{data.total} strategies found · page {data.page} of {data.pageCount}</p>
      <div className="mt-3 overflow-x-auto rounded-xl border bg-white"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-[#0B1F3A] text-white"><tr><th className="p-4">Strategy</th><th className="p-4">Category</th><th className="p-4">Benchmark</th><th className="p-4">AUM (₹ crore)</th><th className="p-4">{data.period} return</th></tr></thead><tbody>{data.records.map((row) => <tr key={row.slug} className="border-b last:border-0"><td className="p-4"><Link className="font-semibold text-[#0B1F3A] underline-offset-4 hover:underline" href={`/pms-strategies/${row.slug}`}>{row.strategy_display_name}</Link><span className="mt-1 block text-xs text-slate-500">{row.amc_name}</span></td><td className="p-4">{row.category}</td><td className="p-4">{row.benchmark}</td><td className="p-4">{row.aum_crore || "—"}</td><td className="p-4 font-semibold">{String(row[{ "1M":"return_1m", "3M":"return_3m", "6M":"return_6m", "1Y":"return_1y", "2Y":"return_2y", "3Y":"return_3y", "5Y":"return_5y", "10Y":"return_10y", SI:"return_since_inception" }[data.period] as keyof typeof row])}</td></tr>)}</tbody></table></div>
      <nav aria-label="PMS research pagination" className="mt-6 flex justify-between"><span>{data.page > 1 ? <Link className="rounded border px-4 py-2" href={linkFor(data.page - 1)}>Previous</Link> : null}</span><span>{data.page < data.pageCount ? <Link className="rounded border px-4 py-2" href={linkFor(data.page + 1)}>Next</Link> : null}</span></nav>
    </div>
  </section>;
}
