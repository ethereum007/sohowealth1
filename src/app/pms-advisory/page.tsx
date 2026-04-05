import type { Metadata } from "next";
import PMSAdvisoryClient from "./PMSAdvisoryClient";

export const metadata: Metadata = {
  title: "Best PMS in Hyderabad — Portfolio Management Services | SoHo Wealth",
  description:
    "Access India's top Portfolio Management Services (PMS) through SoHo Wealth, Hyderabad. Compare 50+ PMS strategies, invest with minimum \u20B950 lakhs.",
  keywords:
    "PMS Hyderabad, portfolio management services India, best PMS strategies 2026, PMS advisor Hyderabad, top PMS managers India",
  alternates: { canonical: "https://sohowealth.in/pms-advisory" },
  openGraph: {
    title: "Best PMS Advisory in Hyderabad — SoHo Wealth",
    description: "Access 50+ PMS strategies. Compare performance. Invest from \u20B950 lakhs.",
    url: "https://sohowealth.in/pms-advisory",
  },
};

export default function PMSAdvisoryPage() {
  return <PMSAdvisoryClient />;
}
