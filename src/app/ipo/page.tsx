import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpenCheck, FileSearch, ShieldAlert } from "lucide-react";
import { ipoReports } from "@/lib/ipo/reports";
import { AugustIpoCalendar } from "@/components/ipo/AugustIpoCalendar";

export const metadata: Metadata = {
  title: "IPO Analysis India | Deep, Source-Led Research | SoHo Wealth",
  description:
    "Independent, source-led IPO analysis covering business quality, financials, valuation, governance, issue structure and key risks.",
  alternates: { canonical: "https://www.sohowealth.in/ipo" },
  openGraph: {
    title: "IPO Research | SoHo Wealth",
    description: "Go beyond dates and GMP with structured, source-led IPO analysis.",
    url: "https://www.sohowealth.in/ipo",
    type: "website",
  },
};

const pillars = [
  { icon: FileSearch, title: "Primary-source first", text: "Offer documents, exchange notices, registrar updates and issuer disclosures sit above aggregators." },
  { icon: BarChart3, title: "Numbers with context", text: "Growth, margins, cash conversion, leverage, dilution and peer valuation are read together—not as isolated ratios." },
  { icon: ShieldAlert, title: "Risk before excitement", text: "Promoter history, related parties, customer concentration, litigation, OFS and use of proceeds get explicit attention." },
  { icon: BookOpenCheck, title: "Dated, traceable analysis", text: "Every report carries an as-of date, source pack, assumptions and a clear list of facts to monitor." },
];

const lenses = [
  { label: "STRENGTHS", color: "#137A52", bg: "#EAF7F1", text: "The strongest evidence supporting the business quality and issue case." },
  { label: "CONCERNS", color: "#B42318", bg: "#FFF0EE", text: "Financial, governance, valuation and issue-structure risks that deserve attention." },
  { label: "MONITOR", color: "#9A6500", bg: "#FFF7E3", text: "Unresolved facts and post-issue milestones that could materially change the analysis." },
];

export default function IpoHubPage() {
  return (
    <main className="pt-20 bg-white">
      <section className="relative overflow-hidden px-6 py-20 lg:py-28" style={{ background: "#071A2F" }}>
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 80% 20%, #1E8D68 0, transparent 34%)" }} />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#77D3B1" }}>SoHo IPO Research</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            IPO analysis for readers who want more than dates, demand and grey-market noise.
          </h1>
          <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-white/70">
            We examine the business, financial quality, valuation, governance and issue structure—then state what matters, what can go wrong and what would change our view.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#coverage" className="inline-flex items-center rounded-md px-6 py-3 font-body text-sm font-bold" style={{ background: "#C9A84C", color: "#071A2F" }}>
              View IPO coverage <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/ipo/methodology" className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 font-body text-sm font-semibold text-white">
              Read our methodology
            </Link>
            <Link href="/ipo/learn" className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 font-body text-sm font-semibold text-white">
              Learn IPO basics
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-slate-200 p-6">
              <Icon className="mb-5 h-6 w-6" style={{ color: "#137A52" }} />
              <h2 className="font-display text-xl font-semibold" style={{ color: "#0B1F3A" }}>{title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#137A52" }}>The analysis framework</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>Evidence on both sides</h2>
            <p className="mt-4 font-body leading-relaxed text-slate-600">Each report separates observable facts, analytical interpretation and unresolved questions. It does not tell readers whether to apply.</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {lenses.map((item) => (
              <article key={item.label} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="inline-flex rounded-full px-3 py-1 font-body text-xs font-extrabold tracking-[0.12em]" style={{ color: item.color, background: item.bg }}>{item.label}</span>
                <p className="mt-5 font-body text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AugustIpoCalendar />

      {ipoReports.length > 0 ? null : (
        <section className="container mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 md:p-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Company analysis</p>
            <h2 className="mt-3 font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Deep-dive company pages are the next layer.</h2>
            <p className="mt-4 max-w-3xl font-body leading-relaxed text-slate-600">Each analysis will be traceable to the offer document and current exchange data, with strengths, concerns, valuation context and facts to monitor—without application recommendations.</p>
          </div>
        </section>
      )}

      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold text-amber-950">Important disclosure</h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-amber-900/80">
            IPOs are high-risk investments. This content is factual analysis and education, not a recommendation to apply, subscribe, buy, sell or hold, and not an assurance of allotment, listing gains or returns. Read the RHP/DRHP and risk factors, verify current issue data, and consider your own objectives, liquidity and risk capacity before acting. Grey-market premium is unofficial and unregulated.
          </p>
          <Link href="/disclosures" className="mt-4 inline-block font-body text-sm font-bold text-amber-950">Read full disclosures →</Link>
        </div>
      </section>
    </main>
  );
}
