import type { Metadata } from "next";
import PMSAdvisoryClient from "./PMSAdvisoryClient";

export const metadata: Metadata = {
  title: "PMS Distributor in Hyderabad | Selection & Onboarding | SoHo Wealth",
  description:
    "APMI-registered PMS distributor in Hyderabad for HNIs investing Rs. 50 lakh or more. Compare structure, fees, drawdowns and portfolio fit.",
  keywords:
    "PMS advisor Hyderabad, PMS in Hyderabad, portfolio management services Hyderabad, best PMS in Hyderabad, PMS comparison India, HNI investment Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/pms-advisory" },
  openGraph: {
    title: "PMS Distributor in Hyderabad | SoHo Wealth",
    description:
      "Compare PMS strategies before investing Rs. 50 lakh or more. Manager due diligence, fees, drawdowns and tax review.",
    url: "https://www.sohowealth.in/pms-advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMS Distributor in Hyderabad | SoHo Wealth",
    description: "Compare PMS strategies before investing Rs. 50 lakh or more.",
  },
};

export default function PMSAdvisoryPage() {
  return <PMSAdvisoryClient />;
}
