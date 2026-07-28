import type { Metadata } from "next";
import MutualFundsClient from "./MutualFundsClient";

export const metadata: Metadata = {
  title: "Mutual Fund Distributor Hyderabad — SIP, Equity, Debt | SoHo Wealth",
  description:
    "AMFI-registered mutual fund distributor in Hyderabad. Compare equity, debt, hybrid and ELSS structures, start SIPs and review existing holdings.",
  keywords:
    "mutual fund advisor Hyderabad, best SIP plans India, equity mutual funds, debt funds, ELSS tax saving funds, mutual fund distributor Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/mutual-funds" },
  openGraph: {
    title: "Mutual Fund Distribution in Hyderabad — SoHo Wealth",
    description: "Goal mapping, fund comparison, SIP implementation and ongoing service. Equity, debt, hybrid and ELSS.",
    url: "https://www.sohowealth.in/mutual-funds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Fund Distributor Hyderabad | SoHo Wealth",
    description: "Goal mapping, fund comparison, SIP implementation and ongoing service.",
  },
};

export default function MutualFundsPage() {
  return <MutualFundsClient />;
}
