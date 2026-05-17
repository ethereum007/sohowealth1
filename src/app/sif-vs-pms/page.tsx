import type { Metadata } from "next";
import { LandingPageClient } from "@/app/(seo)/LandingPageClient";
import { sifVsPms } from "@/app/(seo)/landing-configs";

export const metadata: Metadata = {
  title: "SIF vs PMS | Minimums, Risk, Tax & Suitability | SoHo Wealth",
  description:
    "Compare SIF vs PMS in India: minimum investment, structure, transparency, customization, tax treatment and suitability for HNIs.",
  alternates: { canonical: "https://sohowealth.in/sif-vs-pms" },
  openGraph: {
    title: "SIF vs PMS | SoHo Wealth",
    description: "A clear comparison of Specialized Investment Funds and Portfolio Management Services.",
    url: "https://sohowealth.in/sif-vs-pms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF vs PMS | SoHo Wealth",
    description: "Compare minimums, structure, risk and suitability before choosing.",
  },
};

export default function SifVsPmsPage() {
  return <LandingPageClient config={sifVsPms} />;
}
