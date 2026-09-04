import type { Metadata } from "next";
import Link from "next/link";
import { PmsResearchTable } from "@/components/pms/PmsResearchTable";
import { ContextualLeadForm } from "@/components/leads/ContextualLeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import type { PmsPeriod } from "@/lib/pms/research-types";
import { PMS_PERFORMANCE_AS_OF, PMS_PROFILE_AS_OF } from "@/lib/pms/research-server";

type Search = { q?: string; category?: string; period?: string; page?: string };
const canonical = "https://www.sohowealth.in/best-pms-in-india";

export async function generateMetadata({ searchParams }: { searchParams: Promise<Search> }): Promise<Metadata> {
  const params = await searchParams;
  const filtered = Boolean(params.q || params.category || params.period || (params.page && params.page !== "1"));
  return { title: "Best PMS in India: Compare 556 Strategies | SoHo Wealth", description: "Research 556 PMS strategies in India using published returns, category, benchmark, AUM and strategy details before shortlisting a manager.", alternates: { canonical }, robots: { index: !filtered, follow: true }, openGraph: { title: "Best PMS in India? A Data-Led Research Universe", description: "Compare published PMS data with visible methodology and dates.", url: canonical, type: "website" } };
}

export default async function BestPmsIndiaPage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const allowed: PmsPeriod[] = ["1M", "3M", "6M", "1Y", "2Y", "3Y", "5Y", "10Y", "SI"];
  const period = allowed.includes(params.period as PmsPeriod) ? params.period as PmsPeriod : "1Y";
  const page = Math.min(100, Math.max(1, Number.parseInt(params.page || "1", 10) || 1));
  const schema = { "@context":"https://schema.org", "@type":"Dataset", name:"India PMS strategy research universe", description:"Published PMS performance and profile information used for research and comparison.", url:canonical, dateModified:"2026-08-13", temporalCoverage:"2026-06-30", creator:{ "@id":"https://www.sohowealth.in/#organization" }, variableMeasured:["Returns", "AUM", "Benchmark", "Category", "Inception date"] };
  return <main className="pt-20"><JsonLd data={schema} />
    <section className="bg-[#0B1F3A] py-20 text-white"><div className="container mx-auto max-w-5xl px-6 text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#E7C96E]">Independent research universe</p><h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Best PMS in India? Compare the evidence before the headline.</h1><p className="mx-auto mt-6 max-w-3xl text-lg text-white/75">There is no single “best” PMS for every investor. Explore published data across 556 strategies, then evaluate mandate, manager, risk, fees, tax and whole-portfolio fit.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link className="rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-[#0B1F3A]" href="#research">Research strategies</Link><Link className="rounded-md border border-white/30 px-6 py-3 font-semibold" href="/pms-methodology">Read methodology</Link></div></div></section>
    <div id="research"><PmsResearchTable q={params.q} category={(params.category || "all").slice(0,80)} period={period} page={page} /></div>
    <section className="py-16"><div className="container mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2"><div><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">How to use this research</h2><ul className="mt-5 space-y-3 text-slate-700"><li>Use returns to frame questions, not choose a manager.</li><li>Compare like-for-like categories and time periods.</li><li>Verify current facts in provider documents before acting.</li><li>Check overlap, liquidity and tax effects across your full portfolio.</li></ul><p className="mt-5 text-sm text-slate-500">Performance data as of {PMS_PERFORMANCE_AS_OF}; profiles as of {PMS_PROFILE_AS_OF}. Past performance does not guarantee future results.</p><div className="mt-6 flex gap-4"><Link className="font-semibold underline" href="/pms-compare">Compare strategies</Link><Link className="font-semibold underline" href="/resources/sample-pms-comparison">View sample deliverable</Link></div></div><ContextualLeadForm intent="pms-comparison" /></div></section>
  </main>;
}
