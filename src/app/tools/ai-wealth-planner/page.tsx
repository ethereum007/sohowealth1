import type { Metadata } from "next";
import { BrainCircuit, LockKeyhole, ShieldCheck } from "lucide-react";
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
  openGraph: {
    title: "AI Wealth Planner | SoHo Wealth",
    description: "Turn a financial goal into a clear, private wealth-planning roadmap in under three minutes.",
    url: canonicalUrl,
    type: "website",
  },
};

const faqs: FAQ[] = [
  { q: "What is an AI wealth planner?", a: "An AI wealth planner turns goal, time-horizon, savings and risk inputs into an illustrative financial roadmap. This version uses transparent planning calculations to estimate a future corpus, required monthly investment and broad asset allocation; it does not select products or replace personal advice." },
  { q: "How much SIP do I need to reach my financial goal?", a: "The required SIP depends on your target amount, current goal-linked savings, time available and assumed return. Enter those values for an instant monthly estimate. Actual returns will vary, so contributions and assumptions should be reviewed regularly." },
  { q: "Can I use this tool for retirement planning in India?", a: "Yes. Select Retirement, enter the corpus you want, your existing retirement savings and the years remaining. A complete retirement plan should also consider inflation, post-retirement expenses, taxes, insurance and longevity." },
  { q: "Does SoHo Wealth store my financial information?", a: "No. The values entered in this basic planner are calculated locally in your browser and are not saved. You do not need to provide a PAN, account number, email address or phone number." },
  { q: "Is the suggested asset allocation investment advice?", a: "No. It is an educational starting point based only on the selected risk preference. A suitable allocation requires a review of your complete finances, liquidity, taxes, dependants, insurance, existing holdings and ability to tolerate losses." },
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

      <FAQSection faqs={faqs} heading="AI Wealth Planner FAQs" background="#F7F8FA" />
    </main>
  );
}
