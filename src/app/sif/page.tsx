import type { Metadata } from "next";
import SIFClient from "./SIFClient";

export const metadata: Metadata = {
  title: "Specialized Investment Fund (SIF) Advisory | SoHo Wealth Hyderabad",
  description:
    "Invest in India's newest SEBI-regulated SIFs. Min \u20B910L. Expert SIF advisory from SoHo Wealth, Hyderabad. Also operators of SIFPrime.com.",
  keywords:
    "SIF investment India, specialized investment fund, SEBI SIF, SIF advisory Hyderabad, SIFPrime",
  alternates: { canonical: "https://sohowealth.in/sif" },
  openGraph: {
    title: "Specialized Investment Fund (SIF) Advisory | SoHo Wealth",
    description:
      "Invest in India's newest SEBI-regulated SIFs. Min \u20B910L. Expert SIF advisory from SoHo Wealth, Hyderabad.",
    url: "https://sohowealth.in/sif",
    type: "website",
    images: ["https://sohowealth.in/og-image.png"],
  },
};

export default function SIFPage() {
  return <SIFClient />;
}
