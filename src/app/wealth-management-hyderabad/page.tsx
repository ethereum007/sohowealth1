import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthManagementHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Wealth Advisor Hyderabad | HNI, Founder & NRI Wealth Management | SoHo Wealth",
  description:
    "Boutique wealth advisor in Hyderabad for HNIs, founders, families, tech professionals and NRIs. PMS, SIF, AIF, mutual funds, global investing and portfolio review.",
  keywords:
    "wealth advisor Hyderabad, wealth management Hyderabad, investment advisor Hyderabad, financial advisor Hyderabad, HNI wealth management Hyderabad, NRI investment advisor Hyderabad",
  alternates: { canonical: "https://sohowealth.in/wealth-management-hyderabad" },
  openGraph: {
    title: "Wealth Advisor Hyderabad | SoHo Wealth",
    description: "Hyderabad-based boutique wealth advisor for HNIs, founders, NRIs and families.",
    url: "https://sohowealth.in/wealth-management-hyderabad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Advisor Hyderabad | SoHo Wealth",
    description: "Boutique wealth advisory across PMS, SIF, AIF, mutual funds and NRI investing.",
  },
};

export default function WealthManagementHyderabadPage() {
  return <LandingPageClient config={wealthManagementHyderabad} />;
}
