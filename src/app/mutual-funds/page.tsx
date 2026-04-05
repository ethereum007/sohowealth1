import type { Metadata } from "next";
import MutualFundsClient from "./MutualFundsClient";

export const metadata: Metadata = {
  title: "Mutual Fund Advisory Hyderabad — SIP, Equity, Debt & ELSS | SoHo Wealth",
  description:
    "Get expert mutual fund advisory from SoHo Wealth, Hyderabad. Best equity, debt, hybrid & ELSS funds. Start SIP from Rs. 500. Free portfolio review.",
  keywords:
    "mutual fund advisor Hyderabad, best SIP plans India, equity mutual funds, debt funds, ELSS tax saving funds, mutual fund distributor Hyderabad",
  alternates: { canonical: "https://sohowealth.in/mutual-funds" },
  openGraph: {
    title: "Best Mutual Fund Advisory in Hyderabad — SoHo Wealth",
    description: "Expert mutual fund selection. Equity, debt, hybrid & ELSS. SIP from Rs. 500.",
    url: "https://sohowealth.in/mutual-funds",
  },
};

export default function MutualFundsPage() {
  return <MutualFundsClient />;
}
