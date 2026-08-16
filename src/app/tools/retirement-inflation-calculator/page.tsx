import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RetirementInflationCalculator } from "./RetirementInflationCalculator";

const canonicalUrl = "https://www.sohowealth.in/tools/retirement-inflation-calculator";

export const metadata: Metadata = {
  title: "Retirement Inflation Calculator India | SoHo",
  description: "Calculate how today's monthly expenses may grow by retirement and see the future purchasing power of a fixed pension using editable inflation assumptions.",
  keywords: ["retirement inflation calculator India", "future retirement expenses calculator", "pension purchasing power calculator", "inflation after retirement"],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: { title: "Retirement Inflation Calculator India", description: "Estimate future retirement expenses and the purchasing power of a fixed pension.", url: canonicalUrl, type: "website", images: ["https://www.sohowealth.in/retirement-planning/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Retirement Inflation Calculator India", description: "See how inflation may change retirement expenses and fixed-pension purchasing power.", images: ["https://www.sohowealth.in/retirement-planning/opengraph-image"] },
};

const faqs: FAQ[] = [
  { q: "How does inflation affect retirement expenses?", a: "Inflation raises the rupee cost of maintaining the same lifestyle. Over a long retirement, even moderate annual inflation can substantially reduce purchasing power." },
  { q: "What inflation rate should I use for retirement planning?", a: "There is no guaranteed rate. Test multiple assumptions and consider a separate healthcare estimate where medical costs are material." },
  { q: "Does a fixed pension increase with inflation?", a: "Only if the pension or annuity terms explicitly provide an increase. A fixed rupee pension generally buys less as prices rise." },
  { q: "Are the values I enter saved?", a: "No. This calculator runs in your browser and does not require personal identifiers or account details." },
];

const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Retirement Inflation Calculator India", url: canonicalUrl, applicationCategory: "FinanceApplication", operatingSystem: "Any", isAccessibleForFree: true, description: "A browser-based calculator for future retirement expenses and fixed-pension purchasing power.", featureList: ["Future monthly expense estimate", "First-year retirement expenses", "Fixed-pension purchasing power", "Editable inflation assumption"], citation: ["https://investor.sebi.gov.in/moneymatters-planforearlyretire.html", "https://investor.sebi.gov.in/calculators/financial_goal_planner.html"], offers: { "@type": "Offer", price: 0, priceCurrency: "INR" }, provider: { "@id": "https://www.sohowealth.in/#organization" } };

export default function RetirementInflationCalculatorPage() {
  return <main className="bg-white pt-20"><JsonLd data={schema} /><Breadcrumbs items={[{ name: "Retirement Planning", href: "/retirement-planning" }, { name: "Inflation Calculator", href: "/tools/retirement-inflation-calculator" }]} /><section className="bg-[#07192F] py-16 text-white lg:py-24"><div className="container mx-auto max-w-5xl px-6 text-center lg:px-8"><span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#E5CB83]"><TrendingUp className="h-4 w-4" /> Free planning tool</span><h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold md:text-6xl">Retirement inflation calculator for India.</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">See what today&apos;s monthly lifestyle may cost at retirement—and how much purchasing power a fixed pension may lose.</p></div></section><RetirementInflationCalculator /><section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">Inflation is only one part of the retirement answer</h2><p className="mt-4 leading-relaxed text-slate-600">After estimating future expenses, calculate the corpus and monthly investment required, then test how pensions, NPS, healthcare and withdrawal risk fit together.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/tools/retirement-calculator" className="inline-flex items-center justify-center rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white">Calculate retirement corpus <ArrowRight className="ml-2 h-4 w-4" /></Link><Link href="/retirement-planning" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-[#0B1F3A]">Explore retirement planning</Link></div></div></section><FAQSection faqs={faqs} heading="Retirement Inflation Calculator FAQs" background="#F7F8FA" /></main>;
}
