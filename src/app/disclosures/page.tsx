import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclosures | SoHo Wealth",
  description:
    "Regulatory, distributor and investment-risk disclosures for SoHo Wealth website visitors and prospective clients.",
  alternates: { canonical: "https://www.sohowealth.in/disclosures" },
  openGraph: {
    title: "Disclosures | SoHo Wealth",
    description:
      "Regulatory, distributor and investment-risk disclosures for SoHo Wealth.",
    url: "https://www.sohowealth.in/disclosures",
    type: "website",
  },
};

const disclosures = [
  {
    title: "Registration and Role",
    points: [
      "SoHo Wealth is an AMFI Registered Mutual Fund Distributor. ARN: 306593.",
      "SoHo Wealth is an AMFI Registered SIF Distributor. ARN: 306593.",
      "SoHo Wealth is an APMI Registered PMS Distributor. APRN01233.",
      "SoHo Wealth is a distributor and is not a SEBI Registered Investment Advisor (RIA).",
    ],
  },
  {
    title: "No Guarantee of Returns",
    points: [
      "Investments are subject to market risk. Past performance is not indicative of future results.",
      "Any return, ranking, comparison, model portfolio or performance discussion is for information and evaluation support only, not a guarantee.",
      "Final investment decisions should consider risk profile, time horizon, liquidity, taxation, concentration, costs and suitability.",
    ],
  },
  {
    title: "Product Suitability",
    points: [
      "Mutual funds, SIFs, PMS, AIFs, Pre-IPO opportunities, global investments, RSUs/ESOPs and other products carry different risks, costs, liquidity terms and documentation requirements.",
      "Minimum investment thresholds may apply. PMS and AIF minimums are subject to applicable regulations and provider terms.",
      "NRI, global investing and cross-border investment workflows may involve FEMA, LRS, tax and account-structure considerations.",
    ],
  },
  {
    title: "Third-Party Products and Data",
    points: [
      "SoHo Wealth may distribute or facilitate access to third-party investment products and platforms. Product terms are governed by the respective provider documents.",
      "Performance, PMS universe, fund, market or tax data shown on the website may be sourced from public or third-party sources and should be verified before acting.",
      "Please read all scheme information documents, disclosure documents, offer documents and risk factors carefully before investing.",
    ],
  },
];

export default function DisclosuresPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <section className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <p className="font-body text-xs font-bold uppercase tracking-[0.16em] mb-4" style={{ color: "#C9A84C" }}>
          SoHo Wealth
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>
          Disclosures
        </h1>
        <p className="font-body text-sm mb-10" style={{ color: "#4A5568" }}>
          Last updated: June 12, 2026
        </p>

        <div className="space-y-10">
          {disclosures.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="font-body leading-relaxed flex gap-3" style={{ color: "#4A5568" }}>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-lg border p-6" style={{ borderColor: "#E2E8F0", backgroundColor: "#F7F8FA" }}>
          <p className="font-body text-sm leading-relaxed mb-0" style={{ color: "#4A5568" }}>
            Questions about these disclosures? Contact{" "}
            <a href="mailto:invest@sohowealth.in" className="font-semibold" style={{ color: "#0B1F3A" }}>
              invest@sohowealth.in
            </a>
            . You can also review our{" "}
            <Link href="/privacy-policy" className="font-semibold" style={{ color: "#0B1F3A" }}>
              privacy policy
            </Link>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
