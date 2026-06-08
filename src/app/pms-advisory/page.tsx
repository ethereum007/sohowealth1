import type { Metadata } from "next";
import PMSAdvisoryClient from "./PMSAdvisoryClient";

export const metadata: Metadata = {
  title: "PMS Advisor in Hyderabad | Compare Portfolio Management Services | SoHo Wealth",
  description:
    "PMS advisor in Hyderabad for HNIs investing Rs. 50 lakh or more. Compare 50+ PMS strategies, fees, drawdowns, taxation and portfolio fit.",
  keywords:
    "PMS advisor Hyderabad, PMS in Hyderabad, portfolio management services Hyderabad, best PMS in Hyderabad, PMS comparison India, HNI investment Hyderabad",
  alternates: { canonical: "https://sohowealth.in/pms-advisory" },
  openGraph: {
    title: "PMS Advisor in Hyderabad | SoHo Wealth",
    description:
      "Compare PMS strategies before investing Rs. 50 lakh or more. Manager due diligence, fees, drawdowns and tax review.",
    url: "https://sohowealth.in/pms-advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMS Advisor in Hyderabad | SoHo Wealth",
    description: "Compare PMS strategies before investing Rs. 50 lakh or more.",
  },
};

export default function PMSAdvisoryPage() {
  return <PMSAdvisoryClient />;
}
