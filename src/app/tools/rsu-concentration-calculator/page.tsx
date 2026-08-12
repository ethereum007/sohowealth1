import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RSUConcentrationWorksheet } from "@/app/wealth-planning-for-it-professionals/rsu-guide/RSUConcentrationWorksheet";

const canonicalUrl = "https://www.sohowealth.in/tools/rsu-concentration-calculator";

export const metadata: Metadata = {
  title: "RSU Concentration Calculator India | SoHo Wealth",
  description:
    "Calculate what percentage of your liquid portfolio is held in employer stock. A private, browser-only RSU concentration worksheet for Indian professionals.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "RSU Concentration Calculator for Indian Professionals",
    description:
      "Measure employer-stock concentration privately in your browser and identify the questions to take into a portfolio review.",
    url: canonicalUrl,
    type: "website",
  },
};

const faqs: FAQ[] = [
  {
    q: "What is RSU concentration?",
    a: "RSU concentration is the share of your investable portfolio represented by vested employer stock. Salary, future grants and career prospects may increase your overall dependency on the same company even though they are not included in the calculator percentage.",
  },
  {
    q: "What is a safe percentage to hold in employer stock?",
    a: "There is no universal safe percentage. The decision depends on goal timing, liquidity, other assets, future awards, salary dependency, taxes and your ability to absorb a large fall in the share price. The result is a discussion prompt, not a recommended limit.",
  },
  {
    q: "Should unvested RSUs be included in my portfolio value?",
    a: "Unvested awards are normally better shown separately because they remain conditional on plan terms, employment and future market value. Essential goals should not rely on them as though they were liquid investments today.",
  },
  {
    q: "Does SoHo Wealth receive or store the values I enter?",
    a: "No. The calculation runs locally in your browser. Values are not uploaded or saved by this worksheet. Do not enter account numbers, login details or other sensitive information.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${canonicalUrl}#application`,
    name: "RSU Concentration Calculator",
    url: canonicalUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    description:
      "A browser-only worksheet that calculates vested employer stock as a percentage of the liquid investment portfolio.",
    provider: { "@id": "https://www.sohowealth.in/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "RSU Concentration Calculator India",
    inLanguage: "en-IN",
    mainEntity: { "@id": `${canonicalUrl}#application` },
    isPartOf: { "@id": "https://www.sohowealth.in/#website" },
  },
];

export default function RSUConcentrationCalculatorPage() {
  return (
    <main className="bg-white pt-20">
      <JsonLd data={structuredData} id="rsu-calculator-schema" />
      <Breadcrumbs
        items={[
          { name: "Insights", href: "/insights" },
          { name: "RSU Concentration Calculator", href: "/tools/rsu-concentration-calculator" },
        ]}
      />

      <section className="bg-[#07192F] py-16 text-white lg:py-24">
        <div className="container mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E5CB83]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Free browser-only tool
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            RSU concentration calculator for Indian professionals.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            See how much of your liquid investment portfolio depends on one employer—then bring the result into a clearer conversation about goals, taxes and diversification.
          </p>
        </div>
      </section>

      <RSUConcentrationWorksheet />

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-[#F7F8FA] p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">
              Put the percentage in context.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The visible holding is only one layer of employer dependency. A useful review also maps salary, bonuses, future vesting, trading windows, goal deadlines and the records your tax professional needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/wealth-planning-for-it-professionals/rsu-guide" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0B1F3A] px-6 text-sm font-semibold text-white">
                Read the complete RSU guide
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/portfolio-review" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-6 text-sm font-semibold text-[#0B1F3A]">
                Book a portfolio review
              </Link>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            Educational illustration only. This tool does not provide tax, legal, FEMA or security-specific advice and does not recommend a concentration limit or a sale.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="RSU Concentration Calculator FAQs" background="#F7F8FA" />
    </main>
  );
}
