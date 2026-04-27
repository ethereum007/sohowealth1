import type { Metadata } from "next";
import PreIPOClient from "./PreIPOClient";

export const metadata: Metadata = {
  title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
  description:
    "Invest in high-growth companies before they go public. Curated Pre-IPO opportunities with rigorous due diligence for HNIs & family offices.",
  keywords:
    "Pre-IPO investments India, unlisted shares, pre-IPO deals Hyderabad, invest before IPO, SoHo Wealth Pre-IPO",
  alternates: { canonical: "https://sohowealth.in/pre-ipo" },
  openGraph: {
    title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
    description:
      "Invest in high-growth companies before they go public. Curated Pre-IPO opportunities with rigorous due diligence.",
    url: "https://sohowealth.in/pre-ipo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-IPO Investments | SoHo Wealth",
    description: "Access high-growth unlisted companies before IPO. Rigorous due diligence for HNIs.",
  },
};

export default function PreIPOPage() {
  return <PreIPOClient />;
}
