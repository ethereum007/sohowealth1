import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthManagementHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Wealth Planning & Investment Distribution Hyderabad | SoHo Wealth",
  description:
    "Hyderabad wealth-planning process, portfolio review and investment distribution for HNIs, founders, families, tech professionals and NRIs.",
  keywords:
    "wealth advisor Hyderabad, wealth management Hyderabad, investment advisor Hyderabad, financial advisor Hyderabad, HNI wealth management Hyderabad, NRI investment advisor Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/wealth-management-hyderabad" },
  openGraph: {
    title: "Wealth Planning & Investment Distribution Hyderabad | SoHo Wealth",
    description: "Hyderabad-based portfolio review and registered investment distribution for HNIs, founders, NRIs and families.",
    url: "https://www.sohowealth.in/wealth-management-hyderabad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Planning in Hyderabad | SoHo Wealth",
    description: "Portfolio review and registered investment distribution across mutual funds, PMS, SIF and NRI investing.",
  },
};

export default function WealthManagementHyderabadPage() {
  return <LandingPageClient config={wealthManagementHyderabad} />;
}
