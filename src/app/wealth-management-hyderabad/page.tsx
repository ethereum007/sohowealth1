import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthManagementHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Wealth Management Hyderabad | HNI & NRI Advisory | SoHo Wealth",
  description:
    "Boutique wealth management in Hyderabad for HNIs, founders, families and NRIs. PMS, SIF, AIF, mutual funds, global investing and portfolio review.",
  alternates: { canonical: "https://sohowealth.in/wealth-management-hyderabad" },
  openGraph: {
    title: "Wealth Management Hyderabad | SoHo Wealth",
    description: "Hyderabad-based boutique wealth advisory for HNIs, NRIs, founders and families.",
    url: "https://sohowealth.in/wealth-management-hyderabad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management Hyderabad | SoHo Wealth",
    description: "Boutique wealth advisory across PMS, SIF, AIF, mutual funds and NRI investing.",
  },
};

export default function WealthManagementHyderabadPage() {
  return <LandingPageClient config={wealthManagementHyderabad} />;
}
