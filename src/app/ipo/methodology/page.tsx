import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPO Research Methodology | SoHo Wealth",
  description: "How SoHo Wealth evaluates IPO business quality, financials, valuation, governance, use of proceeds and risk.",
  alternates: { canonical: "https://www.sohowealth.in/ipo/methodology" },
};

const scorecard = [
  ["Business quality", "20%", "Market structure, moat, customer concentration, cyclicality and scalability."],
  ["Financial quality", "25%", "Revenue and profit durability, margins, cash conversion, leverage and working capital."],
  ["Valuation", "25%", "Issue-price multiples, peer comparability, growth-adjusted value and margin of safety."],
  ["Governance", "20%", "Promoter history, related parties, litigation, auditor signals and capital allocation."],
  ["Use of proceeds", "10%", "Fresh issue versus OFS, debt reduction, capex, working capital and stated flexibility."],
];

export default function IpoMethodologyPage() {
  return (
    <main className="bg-white pb-20 pt-28">
      <article className="container mx-auto max-w-4xl px-6">
        <Link href="/ipo" className="font-body text-sm font-bold" style={{ color: "#137A52" }}>← IPO Research</Link>
        <p className="mt-10 font-body text-xs font-bold uppercase tracking-[0.17em]" style={{ color: "#137A52" }}>Version 1.0 · August 13, 2026</p>
        <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl" style={{ color: "#0B1F3A" }}>How we research and rate an IPO</h1>
        <p className="mt-6 font-body text-lg leading-relaxed text-slate-600">Our job is to convert a dense offer document into a decision-useful research view without hiding uncertainty. The score creates consistency; analyst judgment explains what the score cannot.</p>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>The 100-point scorecard</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            {scorecard.map(([name, weight, detail], index) => (
              <div key={name} className={`grid gap-2 p-5 md:grid-cols-[1.2fr_80px_2fr] ${index ? "border-t border-slate-200" : ""}`}>
                <strong className="font-body text-sm text-slate-900">{name}</strong>
                <span className="font-body text-sm font-bold" style={{ color: "#137A52" }}>{weight}</span>
                <span className="font-body text-sm leading-relaxed text-slate-600">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-5 font-body leading-relaxed text-slate-600">
          <h2 className="font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>Evidence hierarchy</h2>
          <p>We prioritize the RHP/DRHP and prospectus, SEBI and exchange records, registrar data, issuer filings and audited financial statements. Reputable databases and news reports provide context. Aggregator pages can help discovery, but they do not override primary documents.</p>
          <p>Subscription data is split by category where available. QIB demand is treated as a market signal, not proof of quality. Grey-market premium is explicitly labelled unofficial and excluded from the fundamental score.</p>
        </section>

        <section className="mt-14 space-y-5 font-body leading-relaxed text-slate-600">
          <h2 className="font-display text-3xl font-semibold" style={{ color: "#0B1F3A" }}>What changes the analysis</h2>
          <p>The analysis can change when the price band is announced, an RHP replaces a DRHP, anchor allocation or subscription composition becomes known, material litigation or financial information changes, or the issuer lists. Every update retains its as-of date so readers can distinguish a revised analysis from hindsight.</p>
          <p>Reports present strengths, concerns, valuation context and facts to monitor. They do not publish apply, subscribe, invest, hold, sell or avoid recommendations.</p>
        </section>

        <aside className="mt-14 rounded-xl border border-amber-200 bg-amber-50 p-6 font-body text-sm leading-relaxed text-amber-900/80">
          This methodology is general research infrastructure, not individualized investment advice. A published report must additionally disclose its author, date, sources, relevant financial interests or conflicts, and the regulatory capacity in which the research is issued.
        </aside>
      </article>
    </main>
  );
}
