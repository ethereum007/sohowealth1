import type { Metadata } from "next";
import GiftCityOutboundClient from "./GiftCityOutboundClient";

export const metadata: Metadata = {
  title: "GIFT City Outbound Investing — Global Funds, AIF & PMS | SoHo Wealth",
  description: "Compare GIFT City outbound investing routes for global diversification, including retail funds, AIFs and PMS strategies. Understand ticket sizes, structures and key risks.",
  alternates: { canonical: "https://www.sohowealth.in/gift-city-outbound-investing" },
  openGraph: {
    title: "GIFT City Outbound Investing | SoHo Wealth",
    description: "A practical comparison of retail funds, AIFs and PMS routes for global investing through GIFT City IFSC.",
    url: "https://www.sohowealth.in/gift-city-outbound-investing",
    type: "website",
  },
};

export default function GiftCityOutboundPage() {
  return <GiftCityOutboundClient />;
}
