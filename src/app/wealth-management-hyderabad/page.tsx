import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthManagementHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Wealth Management Hyderabad | Portfolio Review | SoHo Wealth",
  description:
    "Hyderabad wealth-planning process, portfolio review and investment distribution for HNIs, founders, families, tech professionals and NRIs.",
  keywords:
    "wealth management Hyderabad, portfolio review Hyderabad, investment distributor Hyderabad, HNI wealth planning Hyderabad, NRI investment services Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/wealth-management-hyderabad" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Wealth Management in Hyderabad | SoHo Wealth",
    description: "Hyderabad-based portfolio review and registered investment distribution for HNIs, founders, NRIs and families.",
    url: "https://www.sohowealth.in/wealth-management-hyderabad",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Wealth Management in Hyderabad | SoHo Wealth",
    description: "Portfolio review and registered investment distribution across mutual funds, PMS, SIF and NRI investing.",
  },
};

export default function WealthManagementHyderabadPage() {
  return <LandingPageClient config={wealthManagementHyderabad} />;
}
