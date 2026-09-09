import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthVisakhapatnam } from "@/app/(seo)/regional-landing-configs";

export const metadata: Metadata = {
  title: "Wealth Management Visakhapatnam | SoHo Wealth",
  description: "Portfolio review and registered investment distribution for HNIs, business owners, doctors, families and NRIs in Visakhapatnam.",
  alternates: { canonical: "https://www.sohowealth.in/wealth-management-visakhapatnam" },
  openGraph: { title: "Wealth Management in Visakhapatnam | SoHo Wealth", description: "Video-led portfolio review and investment distribution backed by SoHo Wealth's Hyderabad office.", url: "https://www.sohowealth.in/wealth-management-visakhapatnam", type: "website" },
};

export default function WealthManagementVisakhapatnamPage() {
  return <LandingPageClient config={wealthVisakhapatnam} />;
}
