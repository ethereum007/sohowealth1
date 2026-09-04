import type { Metadata } from "next";
import PMSAdvisoryClient from "./PMSAdvisoryClient";
import { PmsResearchPreview } from "@/components/pms/PmsResearchPreview";

export const metadata: Metadata = {
  title: "PMS Distributor India | Compare PMS Strategies | SoHo Wealth",
  description:
    "APMI-registered PMS distributor serving investors across India. Compare PMS returns, fees, drawdowns, managers and portfolio fit before investing.",
  alternates: { canonical: "https://www.sohowealth.in/pms-advisory" },
  openGraph: {
    title: "PMS Distributor India | Compare PMS Strategies | SoHo Wealth",
    description:
      "Compare PMS strategies before investing Rs. 50 lakh or more. Manager due diligence, fees, drawdowns and tax review.",
    url: "https://www.sohowealth.in/pms-advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMS Distributor India | SoHo Wealth",
    description: "Compare PMS strategies before investing Rs. 50 lakh or more.",
  },
};

export default function PMSAdvisoryPage() {
  return <PMSAdvisoryClient pmsResearch={<PmsResearchPreview />} />;
}
