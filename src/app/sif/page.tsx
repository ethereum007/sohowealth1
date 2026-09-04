import type { Metadata } from "next";
import SIFClient from "./SIFClient";

export const metadata: Metadata = {
  title: "SIF Distributor India | Specialized Investment Funds | SoHo Wealth",
  description:
    "AMFI-registered SIF distributor serving investors across India. Compare Specialized Investment Fund structures, Rs. 10L minimum, SIF vs PMS and product fit.",
  alternates: { canonical: "https://www.sohowealth.in/sif" },
  openGraph: {
    title: "SIF Distributor India | SoHo Wealth",
    description:
      "Compare Specialized Investment Funds in India with SoHo Wealth. Rs. 10L minimum and SIF vs PMS fitment.",
    url: "https://www.sohowealth.in/sif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF Distributor India | SoHo Wealth",
    description: "Compare Specialized Investment Funds in India. Rs. 10L minimum and SIF vs PMS fitment.",
  },
};

export default function SIFPage() {
  return <SIFClient />;
}
