import type { Metadata } from "next";
import GlobalInvestingClient from "./GlobalInvestingClient";

export const metadata: Metadata = {
  title: "Global Investing from India — US Stocks, International ETFs & MFs | SoHo Wealth Hyderabad",
  description:
    "Invest globally from India. US stocks, international ETFs, GIFT City funds & global MFs. Full RBI/FEMA compliance. Expert LRS, forex & tax guidance.",
  alternates: { canonical: "https://www.sohowealth.in/global-investing" },
  openGraph: {
    title: "Invest Globally from India — US Stocks, ETFs & International MF | SoHo Wealth",
    description:
      "Diversify beyond India. US stocks, global ETFs, GIFT City funds, international MF. Full RBI compliance.",
    url: "https://www.sohowealth.in/global-investing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Investing from India | SoHo Wealth",
    description: "US stocks, global ETFs, GIFT City funds. Full RBI/FEMA compliance.",
  },
};

export default function GlobalInvestingPage() {
  return <GlobalInvestingClient />;
}
