import type { Metadata } from "next";
import PreIPOClient from "./PreIPOClient";

export const metadata: Metadata = {
  title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
  description:
    "Invest in high-growth companies before they go public. SoHo Wealth provides curated Pre-IPO opportunities with rigorous due diligence for HNIs and family offices.",
  keywords:
    "Pre-IPO investments India, unlisted shares, pre-IPO deals Hyderabad, invest before IPO, SoHo Wealth Pre-IPO",
  alternates: { canonical: "https://sohowealth.in/pre-ipo" },
  openGraph: {
    title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
    description:
      "Invest in high-growth companies before they go public. Curated Pre-IPO opportunities with rigorous due diligence.",
    url: "https://sohowealth.in/pre-ipo",
  },
};

export default function PreIPOPage() {
  return <PreIPOClient />;
}
