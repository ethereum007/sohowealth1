import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, Landmark, RefreshCw, ShieldCheck, UsersRound, WalletCards } from "lucide-react";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

const canonicalUrl = "https://www.sohowealth.in/retirement-planning";

export const metadata: Metadata = {
  title: "Retirement Planning in Hyderabad | SoHo Wealth",
  description: "Build a retirement income plan around spending, inflation, healthcare, liquidity, NPS, annuities and family protection—not around a single product.",
  keywords: ["retirement planning Hyderabad", "retirement income planning India", "NPS annuity planning", "retirement planner Hyderabad"],
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Retirement Planning That Starts With Your Life", description: "A retirement-income service separate from investment products, built around cash flow, resilience and family needs.", url: canonicalUrl, type: "website" },
};

const pillars = [
  { icon: WalletCards, title: "Your spending floor", text: "Separate essential monthly expenses from lifestyle choices and one-off goals." },
  { icon: CalendarClock, title: "Income by phase", text: "Plan the active, slower and care-intensive years instead of assuming one flat expense number." },
  { icon: ShieldCheck, title: "Liquidity and shocks", text: "Keep near-term spending and emergency money away from assets that may be down when you need them." },
  { icon: UsersRound, title: "Spouse and family", text: "Test what happens to household income after either spouse dies and organise nominees and records." },
  { icon: Landmark, title: "Pension choices", text: "Compare NPS, EPF, pensions and annuities by the job each must do—not by headline rate alone." },
  { icon: RefreshCw, title: "Annual course correction", text: "Update spending, returns, health costs and family responsibilities at least once a year." },
];

const faqs: FAQ[] = [
  { q: "Is retirement planning an investment product?", a: "No. It is a planning service. We first define spending, income, liquidity, risk and family needs. Investment products are considered only later, where they fit the plan." },
  { q: "Does SoHo Wealth provide an NPS annuity rate?", a: "Annuity quotes vary by provider, age, option, payment frequency and market conditions. We help you compare live, like-for-like quotes and the contract features that come with them." },
  { q: "Should I choose the annuity with the highest payout?", a: "Not automatically. A higher starting payout may come with less spouse protection, no return of purchase price or other trade-offs. Compare the complete contract and your household needs." },
  { q: "Can you guarantee a retirement corpus or income?", a: "No. Projections use assumptions and need periodic review. The purpose of planning is to create a resilient decision framework, not a guarantee." },
];

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
  name: "Retirement Planning", serviceType: "Retirement Income Planning", url: canonicalUrl,
  description: "Retirement cash-flow, income, liquidity, NPS annuity and family-continuity planning in Hyderabad and online across India.",
  provider: { "@id": "https://www.sohowealth.in/#organization" }, areaServed: { "@type": "Country", name: "India" },
};

export default function RetirementPlanningPage() {
  return (
    <main className="pt-20">
      <JsonLd data={serviceSchema} />
      <section className="relative overflow-hidden bg-[#07192f]">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">Planning service · not an investment product</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">Retirement is not one number. It is a <span className="text-[#C9A84C]">30-year income plan.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">We connect everyday spending, inflation, healthcare, family protection, pensions, NPS, investments and property into one plan you can actually use.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#retirement-review" className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0B1F3A]">Book a Retirement Review <ArrowRight className="ml-2 h-4 w-4" /></a>
            <Link href="/tools/retirement-calculator" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white">Use Retirement Calculator</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E7D7A9] bg-[#FDF8EC] py-10 lg:py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <Link href="/insights/epf-vs-ppf-vs-nps" className="group mx-auto grid max-w-6xl gap-7 rounded-3xl border border-[#C9A84C]/40 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(11,31,58,.55)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(11,31,58,.65)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]"><span className="rounded-full bg-[#0B1F3A] px-3 py-1.5 text-white">Start here</span><span className="text-[#9A761F]">EPF · PPF · NPS</span></div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">They sound similar. They do three different jobs.</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">See employment-linked EPF, personal PPF and market-linked NPS side by side—who can use them, how returns work, when money is accessible and where each fits in retirement.</p>
              <div className="mt-6 grid gap-2 text-sm sm:grid-cols-3"><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">EPF: salary-linked base</span><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">PPF: personal fixed income</span><span className="rounded-lg bg-[#F7F8FA] px-4 py-3 font-semibold text-[#0B1F3A]">NPS: market-linked pension</span></div>
            </div>
            <span className="inline-flex items-center justify-center rounded-xl bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#0B1F3A]">Compare all three <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">The retirement dashboard</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Six questions before any product</h2></div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">{pillars.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-7"><item.icon className="h-6 w-6 text-[#B18C2D]" /><h3 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">A living plan</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">What we keep adding and reviewing</h2><p className="mt-5 leading-relaxed text-slate-600">This service is designed as a growing retirement knowledge hub. New guides, checklists and decision tools can sit here without mixing planning with the investment-product catalogue.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Retirement expense estimate", "Income-floor calculation", "NPS exit and annuity comparison", "Healthcare and contingency reserve", "Withdrawal sequence", "Spouse-continuity test", "Property and rent decisions", "Nominee and estate coordination"].map((item) => <div key={item} className="flex gap-3 rounded-xl bg-white p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B18C2D]" /><span className="text-sm font-semibold text-[#0B1F3A]">{item}</span></div>)}</div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-5xl rounded-3xl border border-[#C9A84C]/30 bg-[#FDF9EF] p-8 md:p-12"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A761F]">Featured plain-English guide</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A]">NPS annuity rates: the retirement choice that is bigger than the rate</h2><p className="mt-5 max-w-3xl leading-relaxed text-slate-700">An annuity converts part of your savings into regular income. The tempting shortcut is to choose the highest quote. But that quote changes when you add spouse income, return of purchase price or other protection. Our guide shows how to compare the trade-offs in the right order.</p><Link href="/insights/nps-annuity-rates-retirement-decision" className="mt-7 inline-flex items-center font-bold text-[#0B1F3A]">Read the guide <ArrowRight className="ml-2 h-4 w-4" /></Link></div></div>
      </section>

      <section className="bg-[#07192F] py-20 text-white">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Retirement knowledge hub</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">Build the plan one decision at a time</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
          ["How Much Money Do You Need to Retire?", "/insights/how-much-money-needed-to-retire-india"], ["NPS Lump Sum vs Annuity", "/insights/nps-lump-sum-vs-annuity"], ["SWP vs Annuity", "/insights/swp-vs-annuity-retirement"], ["Retirement Bucket Strategy", "/insights/retirement-bucket-strategy-india"], ["Retirement Planning at 50", "/insights/retirement-planning-at-50-india"], ["Healthcare Reserve", "/insights/healthcare-cost-retirement-india"]
        ].map(([title, href]) => <Link key={href} href={href} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#C9A84C]/60 hover:bg-white/10"><h3 className="font-display text-xl font-semibold">{title}</h3><span className="mt-5 inline-flex items-center text-sm font-bold text-[#C9A84C]">Read guide <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div>
      </section>

      <LeadCaptureForm source="retirement-planning page" service="Retirement Planning" heading="Book Your Retirement Planning Review" sectionId="retirement-review" leftContent={<><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Start with the plan</p><h2 className="mb-5 font-display text-3xl font-semibold text-white md:text-4xl">Turn your retirement savings into a usable income map.</h2><p className="mb-8 leading-relaxed text-white/70">Bring your NPS, EPF, pensions, investments, property, loans and expected monthly spending. We will organise the decisions in the right sequence.</p></>} />
      <FAQSection faqs={faqs} heading="Retirement Planning: Frequently Asked Questions" background="#FFFFFF" />
    </main>
  );
}
