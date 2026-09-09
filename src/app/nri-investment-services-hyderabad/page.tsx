import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { nriHyderabad } from "@/app/(seo)/regional-landing-configs";

export const metadata: Metadata = {
  title: "NRI Investment Services Hyderabad | SoHo Wealth",
  description: "India-linked portfolio review and investment distribution for NRIs seeking a trusted Hyderabad relationship point. Telugu and English.",
  alternates: { canonical: "https://www.sohowealth.in/nri-investment-services-hyderabad" },
  openGraph: { title: "NRI Investment Services in Hyderabad | SoHo Wealth", description: "Coordinate India-linked holdings, documentation and eligible investment products.", url: "https://www.sohowealth.in/nri-investment-services-hyderabad", type: "website" },
};

export default function NriInvestmentServicesHyderabadPage() {
  return <LandingPageClient config={nriHyderabad} />;
}
