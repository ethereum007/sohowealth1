import type { Metadata } from "next";
import GlobalInvestingClient from "./GlobalInvestingClient";

export const metadata: Metadata = {
  title: "Global Investing from India — US Stocks, International ETFs & MFs | SoHo Wealth Hyderabad",
  description:
    "Invest globally from India with SoHo Wealth. US stocks, international ETFs, GIFT City funds, and global mutual funds. Full RBI/FEMA compliance. Expert guidance on LRS, forex, tax.",
  keywords:
    "global investing India, US stocks from India, international mutual funds, LRS investment, GIFT City funds, global ETFs, forex compliance India, offshore investing",
  alternates: { canonical: "https://sohowealth.in/global-investing" },
  openGraph: {
    title: "Invest Globally from India — US Stocks, ETFs & International MF | SoHo Wealth",
    description:
      "Diversify beyond India. US stocks, global ETFs, GIFT City funds, international MF. Full RBI compliance.",
    url: "https://sohowealth.in/global-investing",
  },
};

export default function GlobalInvestingPage() {
  return <GlobalInvestingClient />;
}
