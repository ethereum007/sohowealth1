import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, GraduationCap, Home, LockKeyhole, PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { WealthPlanner } from "./WealthPlanner";

const canonicalUrl = "https://www.sohowealth.in/tools/ai-wealth-planner";

export const metadata: Metadata = {
  title: "AI Wealth Planner India: Goal & SIP Calculator | SoHo Wealth",
  description: "Use our free AI wealth planner to estimate your goal corpus, required monthly SIP and asset allocation for retirement, education, a home or wealth creation.",
  keywords: ["AI wealth planner India", "financial goal planner", "SIP goal calculator", "retirement planning calculator India", "wealth planning tool", "investment goal calculator"],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "AI Wealth Planner | SoHo Wealth",
    description: "Turn a financial goal into a clear, private wealth-planning roadmap in under three minutes.",
    url: canonicalUrl,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free AI Wealth Planner India | SoHo Wealth", description: "Estimate your goal corpus, required SIP and illustrative asset mix in under three minutes." },
};

const faqs: FAQ[] = [
  { q: "What is an AI wealth planner?", a: "An AI wealth planner turns goal, time-horizon, savings and risk inputs into an illustrative financial roadmap. This version uses transparent planning calculations to estimate a future corpus, required monthly investment and broad asset allocation; it does not select products or replace personal advice." },
  { q: "How much SIP do I need to reach my financial goal?", a: "The required SIP depends on your target amount, current goal-linked savings, time available and assumed return. Enter those values for an instant monthly estimate. Actual returns will vary, so contributions and assumptions should be reviewed regularly." },
  { q: "Can I use this tool for retirement planning in India?", a: "Yes. Select Retirement, enter the corpus you want, your existing retirement savings and the years remaining. A complete retirement plan should also consider inflation, post-retirement expenses, taxes, insurance and longevity." },
  { q: "Does SoHo Wealth store my financial information?", a: "No. The values entered in this basic planner are calculated locally in your browser and are not saved. You do not need to provide a PAN, account number, email address or phone number." },
  { q: "Is the suggested asset allocation investment advice?", a: "No. It is an educational starting point based only on the selected risk preference. A suitable allocation requires a review of your complete finances, liquidity, taxes, dependants, insurance, existing holdings and ability to tolerate losses." },
  { q: "What return assumptions does the wealth planner use?", a: "The planner uses illustrative annual return assumptions of 8% for Stability First, 10% for Balanced and 11.5% for Growth Focused. These are planning assumptions, not forecasts or guaranteed returns." },
  { q: "Does the calculator adjust my goal for inflation?", a: "The basic planner expects you to enter the future amount you want to accumulate. If your goal is expressed in today's rupees, first increase it for expected inflation. Education and healthcare costs may rise differently from general inflation." },
  { q: "How often should I review my financial goal plan?", a: "Review a goal plan at least annually and after major changes such as marriage, a new child, a home purchase, job change, inheritance or market-driven shifts in your asset allocation." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SoHo Wealth AI Wealth Planner",
  url: canonicalUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  description: "A browser-based goal planning tool with an illustrative corpus projection, monthly investment estimate and asset allocation.",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  author: { "@id": "https://www.sohowealth.in/#kiran-dutta" },
  dateModified: "2026-08-13",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: ["Goal corpus projection", "Required monthly SIP estimate", "Risk-based asset allocation", "Retirement planning", "Education goal planning"],
};

export default function AIWealthPlannerPage() {
  return (
    <main className="bg-white pt-20">
      <JsonLd data={structuredData} id="ai-wealth-planner-schema" />
      <Breadcrumbs items={[{ name: "Tools", href: "/tools/ai-wealth-planner" }, { name: "AI Wealth Planner", href: "/tools/ai-wealth-planner" }]} />

      <section className="relative overflow-hidden bg-[#07192F] py-16 text-white lg:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E5CB83]">
            <BrainCircuit className="h-4 w-4" aria-hidden="true" /> Free smart planning tool
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Turn your next big goal into a clearer wealth roadmap.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Estimate the monthly investment, future corpus and asset mix for one financial goal—in under three minutes.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-white/65 sm:flex-row sm:gap-7">
            <span className="inline-flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-[#E5CB83]" /> No sign-up</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#E5CB83]" /> Values stay in your browser</span>
            <span className="inline-flex items-center gap-2">No product recommendations</span>
          </div>
        </div>
      </section>

      <WealthPlanner />

      <section className="border-y border-slate-200 bg-[#F7F8FA] py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#A9862D]">One calculator, four financial goals</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Use the financial goal planner for the milestone that matters now.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [PiggyBank, "Retirement planning", "Estimate the corpus and monthly SIP needed for financial independence."],
              [GraduationCap, "Child education planning", "Work backwards from a future college or higher-education amount."],
              [Home, "Home purchase planning", "Build a down-payment corpus without confusing it with retirement money."],
              [TrendingUp, "Wealth creation", "Model a long-term corpus using existing savings and regular investments."],
            ].map(([Icon, title, copy]) => {
              const GoalIcon = Icon as typeof PiggyBank;
              return <article key={title as string} className="rounded-2xl border border-slate-200 bg-white p-6"><GoalIcon className="h-6 w-6 text-[#A9862D]" /><h3 className="mt-4 font-display text-xl font-semibold text-[#0B1F3A]">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A9862D]">How the financial goal planner works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">From a target amount to an actionable monthly number.</h2>
          <div className="mt-8 grid gap-6 text-slate-600 md:grid-cols-3">
            <div><strong className="block text-lg text-[#0B1F3A]">1. Define one goal</strong><p className="mt-2 leading-relaxed">Choose retirement, education, a home purchase or wealth creation, then set the amount and timeline.</p></div>
            <div><strong className="block text-lg text-[#0B1F3A]">2. Add your starting point</strong><p className="mt-2 leading-relaxed">Enter savings already assigned to the goal, your affordable monthly SIP and your comfort with market fluctuations.</p></div>
            <div><strong className="block text-lg text-[#0B1F3A]">3. Review the roadmap</strong><p className="mt-2 leading-relaxed">Compare the projected corpus with your goal, see the estimated required SIP and review an illustrative asset mix.</p></div>
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F7F8FA] p-6 text-sm leading-relaxed text-slate-600"><strong className="text-[#0B1F3A]">Planning note:</strong> A calculator can frame the first conversation, but a robust wealth plan also coordinates inflation, taxation, emergency reserves, insurance, estate considerations and multiple competing goals.</div>
        </div>
      </section>

      <section className="bg-[#07192F] py-16 text-white lg:py-20">
        <div className="container mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5CB83]">Calculator methodology</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">How the SIP and corpus projection is calculated.</h2>
            <p className="mt-5 leading-relaxed text-white/70">The planner compounds existing savings annually and adds the future value of monthly investments. It then works backwards from your target corpus to estimate the monthly SIP required over the selected horizon.</p>
            <p className="mt-4 leading-relaxed text-white/70">The asset mix is a broad educational framework linked to your chosen risk preference. It does not recommend mutual funds, PMS, SIF, AIF or individual securities.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
            <div className="border-b border-white/10 px-5 py-4 font-semibold">Illustrative assumptions</div>
            {[["Stability First", "8.0% p.a."], ["Balanced", "10.0% p.a."], ["Growth Focused", "11.5% p.a."], ["Compounding", "Monthly SIP + annual corpus"], ["Fees and taxes", "Not included"]].map(([label, value]) => <div key={label} className="flex justify-between border-b border-white/10 px-5 py-3.5 text-sm last:border-0"><span className="text-white/60">{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-slate-200 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A9862D]">Reviewed for SoHo Wealth</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">Financial planning context matters.</h2><p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Reviewed by Kiran Dutta, Founder of SoHo Wealth, Columbia MBA and NISM-certified professional. This tool supports education and an initial planning conversation—not a substitute for suitability assessment or regulated advice.</p></div>
            <Link href="/team" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-6 font-semibold text-[#0B1F3A]">About the reviewer <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <h2 className="mt-14 font-display text-3xl font-semibold text-[#0B1F3A]">Continue your wealth-planning research</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[["Goal-based mutual fund investing", "/mutual-funds"], ["Portfolio health review", "/portfolio-review"], ["Wealth planning in Hyderabad", "/wealth-management-hyderabad"]].map(([label, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 font-semibold text-[#0B1F3A] hover:border-[#C9A84C]"><span>{label}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="AI Wealth Planner FAQs" background="#F7F8FA" />
    </main>
  );
}
