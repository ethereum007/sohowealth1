import type { Metadata } from "next";
import SIFClient from "./SIFClient";

export const metadata: Metadata = {
  title: "SIF Distributor India | Specialized Investment Funds | SoHo Wealth",
  description:
    "AMFI-registered SIF distributor serving investors across India. Compare Specialized Investment Fund structures, Rs. 10L minimum, SIF vs PMS and product fit.",
  keywords:
    "SIF investment India, SIF distributor India, specialized investment fund, SEBI SIF, SIF comparison India, SIF vs PMS, SIFPrime",
  alternates: { canonical: "https://www.sohowealth.in/sif" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "SIF Distributor India | SoHo Wealth",
    description:
      "Compare Specialized Investment Funds in India with SoHo Wealth. Rs. 10L minimum and SIF vs PMS fitment.",
    url: "https://www.sohowealth.in/sif",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "SIF Distributor India | SoHo Wealth",
    description: "Compare Specialized Investment Funds in India. Rs. 10L minimum and SIF vs PMS fitment.",
  },
};

export default function SIFPage() {
  return <SIFClient />;
}
