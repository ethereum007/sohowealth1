import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { pmsHyderabad } from "@/app/(seo)/regional-landing-configs";

export const metadata: Metadata = {
  title: "Portfolio Management Services Hyderabad | SoHo Wealth",
  description: "Compare PMS strategies, fees, drawdowns and portfolio fit with an APMI-registered PMS distributor in Hyderabad. Rs. 50 lakh minimum.",
  alternates: { canonical: "https://www.sohowealth.in/portfolio-management-services-hyderabad" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }], title: "Portfolio Management Services in Hyderabad | SoHo Wealth", description: "Research-led PMS comparison and distribution support for eligible Hyderabad investors.", url: "https://www.sohowealth.in/portfolio-management-services-hyderabad", type: "website" },
};

export default function PortfolioManagementServicesHyderabadPage() {
  return <LandingPageClient config={pmsHyderabad} />;
}
