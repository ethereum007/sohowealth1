import pmsData from "../../../data/pmsbazaar/pms_profiles_enriched_2026-07-31_scraped_2026-08-13.json";
import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { bestPmsIndia } from "@/app/(seo)/landing-configs";
import { JsonLd } from "@/components/seo/JsonLd";

const strategyCount = pmsData.records.length;

export const metadata: Metadata = {
  title: `Best PMS in India: Compare ${strategyCount} Strategies | SoHo Wealth`,
  description: `Compare ${strategyCount} PMS strategies using dated performance and profile snapshots. Review mandate, fees and risks before shortlisting a PMS.`,
  keywords: "best PMS in India, PMS comparison India, PMS returns India, portfolio management services India, PMS rankings India",
  alternates: { canonical: "https://www.sohowealth.in/best-pms-in-india" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Best PMS in India? Data-Led Comparison | SoHo Wealth",
    description: "Research published PMS returns and compare strategies before investing. Rankings are a discovery tool, not a recommendation.",
    url: "https://www.sohowealth.in/best-pms-in-india",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Best PMS in India? | SoHo Wealth",
    description: "Data-led PMS rankings and comparison for investors across India.",
  },
  robots: { index: true, follow: true },
};

export default function BestPmsIndiaPage() {
  const pageUrl = "https://www.sohowealth.in/best-pms-in-india";
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: `Best PMS in India: Compare ${strategyCount} Strategies`,
      description: metadata.description,
      url: pageUrl,
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://www.sohowealth.in/#website" },
      about: { "@type": "FinancialProduct", name: "Portfolio Management Services in India" },
      mainEntity: { "@id": `${pageUrl}#dataset` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "@id": `${pageUrl}#dataset`,
      name: "India PMS Strategy Comparison — June 2026",
      description: `Comparison of ${strategyCount} Indian PMS strategies across nine return periods, category, benchmark, AUM and inception date.`,
      url: pageUrl,
      dateModified: "2026-08-12",
      temporalCoverage: "2026-06-30",
      spatialCoverage: { "@type": "Place", name: "India" },
      creator: { "@id": "https://www.sohowealth.in/#organization" },
      variableMeasured: ["PMS returns", "Assets under management", "Benchmark", "Category", "Inception date"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
        { "@type": "ListItem", position: 2, name: "Best PMS in India", item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <LandingPageClient config={bestPmsIndia} />
    </>
  );
}
