import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { mutualFundsHyderabad } from "@/app/(seo)/regional-landing-configs";

export const metadata: Metadata = {
  title: "Mutual Fund Distributor Hyderabad | SoHo Wealth",
  description: "Goal-linked mutual fund portfolio review, regular-plan distribution and ongoing service from SoHo Wealth in Khajaguda, Hyderabad.",
  alternates: { canonical: "https://www.sohowealth.in/mutual-fund-distributor-hyderabad" },
  openGraph: { title: "Mutual Fund Distributor in Hyderabad | SoHo Wealth", description: "Portfolio review, regular-plan implementation and service with transparent commission disclosure.", url: "https://www.sohowealth.in/mutual-fund-distributor-hyderabad", type: "website" },
};

export default function MutualFundDistributorHyderabadPage() {
  return <LandingPageClient config={mutualFundsHyderabad} />;
}
