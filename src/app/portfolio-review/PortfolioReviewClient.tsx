import { CheckCircle2 } from "lucide-react";
import { ContextualLeadForm } from "@/components/leads/ContextualLeadForm";
import { JsonLd } from "@/components/seo/JsonLd";

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" }, { "@type": "ListItem", position: 2, name: "Portfolio Review", item: "https://www.sohowealth.in/portfolio-review" }] },
  { "@context": "https://schema.org", "@type": "Service", name: "Portfolio Review", description: "A confidential portfolio review for investors with ₹25 lakh or more covering allocation, concentration, costs and goal fit.", serviceType: "Portfolio Review", url: "https://www.sohowealth.in/portfolio-review", provider: { "@id": "https://www.sohowealth.in/#organization" }, areaServed: { "@type": "Country", name: "India" }, audience: { "@type": "Audience", audienceType: "Investors with ₹25 lakh or more" } },
];

export default function PortfolioReviewClient() {
  const checklist = ["Asset allocation and goal-fit review", "Product, provider and employer-stock concentration", "Liquidity, cost and tax questions", "A practical next-decision checklist", "A founder-led initial conversation"];
  return (
    <main className="grid min-h-screen bg-[#0B1F3A] pt-20 lg:grid-cols-2"><JsonLd data={schemas} />
      <section className="flex flex-col justify-center px-8 py-16 md:px-14 lg:px-16"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#C9A84C]">Private portfolio review</p><h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white lg:text-6xl">See the complete portfolio before making the next investment.</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Bring mutual funds, PMS, SIFs, employer stock, property and cash into one decision framework. This is a distribution-led portfolio conversation, not SEBI investment advice.</p><ul className="mt-9 space-y-4">{checklist.map((item) => <li key={item} className="flex gap-3 text-white/85"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />{item}</li>)}</ul><p className="mt-9 text-sm text-white/50">Designed for investable portfolios of ₹25 lakh or more. No appointment is booked until a time is separately confirmed.</p></section>
      <section className="flex items-center bg-white px-6 py-14 md:px-14 lg:px-16"><div className="w-full rounded-2xl bg-[#0B1F3A] p-7 md:p-10"><ContextualLeadForm intent="portfolio-review" ctaVariant="portfolio-review-page" /></div></section>
    </main>
  );
}
