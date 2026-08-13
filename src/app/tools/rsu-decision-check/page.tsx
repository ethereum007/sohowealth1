import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RSUDecisionCheck } from "./RSUDecisionCheck";

const url = "https://www.sohowealth.in/tools/rsu-decision-check";
export const metadata: Metadata = { title: "Should I Sell My RSUs? Decision Check | SoHo Wealth", description: "Answer five questions to identify which RSU planning route deserves review: sell at vest, a fixed percentage, staged reduction or a documented hold policy.", alternates: { canonical: url } };

export default function Page() {
  return <main className="bg-[#F7F8FA] pt-20"><JsonLd id="rsu-decision-schema" data={{ "@context": "https://schema.org", "@type": "WebApplication", name: "RSU Decision Check", url, applicationCategory: "FinanceApplication", isAccessibleForFree: true }} /><Breadcrumbs items={[{ name: "Tools", href: "/tools/rsu-concentration-calculator" }, { name: "RSU Decision Check", href: "/tools/rsu-decision-check" }]} /><section className="bg-[#07192F] py-16 text-center text-white lg:py-24"><div className="container mx-auto max-w-4xl px-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#C9A84C]">Five-question planning tool</p><h1 className="mt-5 font-display text-4xl font-semibold md:text-6xl">Should you sell, reduce or hold your RSUs?</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">This check does not predict the stock or prescribe a trade. It identifies the planning route worth discussing before the next vest or sale.</p></div></section><section className="py-16 lg:py-24"><div className="container mx-auto px-6"><RSUDecisionCheck /></div></section></main>;
}
