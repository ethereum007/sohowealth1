import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SubscriptionExplainer } from "@/components/ipo/SubscriptionExplainer";

export const metadata: Metadata = {
  title: "IPO Subscription Calculator & Allotment Explainer",
  description: "Calculate an IPO subscription multiple and understand QIB, NII and retail demand with a simple allotment illustration for Indian IPOs.",
  alternates: { canonical: "https://www.sohowealth.in/ipo/tools/subscription-explainer" },
  openGraph: {
    title: "IPO Subscription Calculator and Retail Allotment Explainer",
    description: "Turn IPO demand figures into a category-level subscription multiple and a clearly caveated retail allotment illustration.",
    url: "https://www.sohowealth.in/ipo/tools/subscription-explainer",
    type: "website",
  },
};

const faqs = [
  { q: "How is an IPO subscription multiple calculated?", a: "Divide the number of shares bid for in a category by the number of shares offered or reserved in that same category. For example, bids for 50 lakh shares against 10 lakh available shares equal 5 times subscription." },
  { q: "Does total IPO subscription determine retail allotment?", a: "No. Retail allotment is driven by valid demand and shares available in the retail category, not the headline total across all categories." },
  { q: "Is this an IPO allotment probability calculator?", a: "No. It provides an educational applicant-coverage ratio under simplified assumptions. Only the final exchange-approved basis of allotment determines distribution." },
  { q: "Does higher QIB subscription guarantee listing gains?", a: "No. QIB demand is one market signal. Issue valuation, business performance, broader markets and post-listing supply can produce a different result." },
  { q: "Why can live subscription figures change after an IPO closes?", a: "Exchange and registrar reconciliation can remove invalid, duplicate, withdrawn or technically rejected bids. The final validated demand can therefore differ from live data." },
];

export default function SubscriptionExplainerPage() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "IPO Subscription Calculator and Allotment Explainer",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: "https://www.sohowealth.in/ipo/tools/subscription-explainer",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    author: { "@type": "Organization", name: "SoHo Wealth", url: "https://www.sohowealth.in" },
  };

  return (
    <main className="bg-white pb-20">
      <JsonLd data={webApplicationSchema} />
      <Breadcrumbs items={[{ name: "IPO Research", href: "/ipo" }, { name: "IPO Learning Centre", href: "/ipo/learn" }, { name: "Subscription Calculator", href: "/ipo/tools/subscription-explainer" }]} />
      <header className="container mx-auto max-w-5xl px-6 pb-12 pt-10">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Free IPO education tool</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ color: "#0B1F3A" }}>IPO subscription calculator and retail allotment explainer</h1>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-slate-600">Calculate category-level IPO demand, interpret subscription multiples and see why heavily oversubscribed retail issues may require a draw of lots.</p>
        <p className="mt-5 font-body text-xs text-slate-500">Educational methodology · Reviewed 13 August 2026 · <Link href="/team" className="font-semibold text-emerald-800">SoHo Wealth editorial review</Link></p>
      </header>
      <section className="container mx-auto max-w-5xl px-6 pb-16">
        <SubscriptionExplainer />
      </section>
      <FAQSection faqs={faqs} heading="IPO subscription calculator FAQs" />
      <section className="container mx-auto max-w-5xl px-6 pt-14">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 font-body text-sm leading-relaxed text-amber-900/80">This tool provides simplified educational calculations. It does not predict allotment, listing gains or investment returns, and it is not a recommendation to apply for any IPO. Verify final demand and allotment information with the exchange and registrar.</div>
      </section>
    </main>
  );
}

