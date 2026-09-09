import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { wealthVijayawada } from "@/app/(seo)/regional-landing-configs";

export const metadata: Metadata = {
  title: "Wealth Management Vijayawada | SoHo Wealth",
  description: "Portfolio review and registered investment distribution for HNIs, business owners, doctors, families and NRIs in Vijayawada.",
  alternates: { canonical: "https://www.sohowealth.in/wealth-management-vijayawada" },
  openGraph: { title: "Wealth Management in Vijayawada | SoHo Wealth", description: "Video-led portfolio review and investment distribution backed by SoHo Wealth's Hyderabad office.", url: "https://www.sohowealth.in/wealth-management-vijayawada", type: "website" },
};

export default function WealthManagementVijayawadaPage() {
  return <LandingPageClient config={wealthVijayawada} />;
}
