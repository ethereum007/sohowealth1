import type { Metadata } from "next";
import PreIPOClient from "./PreIPOClient";

export const metadata: Metadata = {
  title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
  description:
    "Invest in high-growth companies before they go public. Curated Pre-IPO opportunities with rigorous due diligence for HNIs & family offices.",
  keywords:
    "Pre-IPO investments India, unlisted shares, pre-IPO deals Hyderabad, invest before IPO, SoHo Wealth Pre-IPO",
  alternates: { canonical: "https://www.sohowealth.in/pre-ipo" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Pre-IPO Investments | SoHo Wealth — Access High-Growth Unlisted Companies",
    description:
      "Invest in high-growth companies before they go public. Curated Pre-IPO opportunities with rigorous due diligence.",
    url: "https://www.sohowealth.in/pre-ipo",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Pre-IPO Investments | SoHo Wealth",
    description: "Access high-growth unlisted companies before IPO. Rigorous due diligence for HNIs.",
  },
};

export default function PreIPOPage() {
  return <PreIPOClient />;
}
