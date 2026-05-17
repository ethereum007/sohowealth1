import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { bestPmsHyderabad } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "Best PMS in Hyderabad | Compare PMS Strategies | SoHo Wealth",
  description:
    "Looking for the best PMS in Hyderabad? Compare PMS strategies, fees, drawdowns, taxation and portfolio fit before investing Rs. 50 lakh or more.",
  alternates: { canonical: "https://sohowealth.in/best-pms-in-hyderabad" },
  openGraph: {
    title: "Best PMS in Hyderabad | SoHo Wealth",
    description: "Independent PMS comparison and advisory for Hyderabad HNIs.",
    url: "https://sohowealth.in/best-pms-in-hyderabad",
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
