import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { bestPmsHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Best PMS in Hyderabad? Data-Led Comparison | SoHo Wealth",
  description:
    "A data-led PMS comparison for Hyderabad investors: review published returns by period, universe coverage, fees, drawdowns and fit before investing.",
  keywords:
    "best PMS in Hyderabad, PMS advisor Hyderabad, PMS comparison Hyderabad, portfolio management services Hyderabad, HNI PMS India",
  alternates: { canonical: "https://www.sohowealth.in/best-pms-in-hyderabad" },
  openGraph: {
    title: "Best PMS in Hyderabad | SoHo Wealth",
    description: "Data-led PMS research and comparison for Hyderabad HNIs. Rankings are a discovery tool, not a recommendation.",
    url: "https://www.sohowealth.in/best-pms-in-hyderabad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best PMS in Hyderabad | SoHo Wealth",
    description: "Compare PMS strategies beyond past returns before investing.",
  },
};

export default function BestPmsHyderabadPage() {
  return <LandingPageClient config={bestPmsHyderabad} />;
}
