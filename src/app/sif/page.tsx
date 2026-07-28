import type { Metadata } from "next";
import SIFClient from "./SIFClient";

export const metadata: Metadata = {
  title: "SIF Distributor Hyderabad | Specialized Investment Funds | SoHo Wealth",
  description:
    "AMFI-registered SIF distributor in Hyderabad. Compare Specialized Investment Fund structures, Rs. 10L minimum, SIF vs PMS and product fit.",
  keywords:
    "SIF investment India, SIF investment Hyderabad, specialized investment fund, SEBI SIF, SIF advisor Hyderabad, SIF vs PMS, SIFPrime",
  alternates: { canonical: "https://www.sohowealth.in/sif" },
  openGraph: {
    title: "SIF Distributor Hyderabad | SoHo Wealth",
    description:
      "Compare Specialized Investment Funds in India with SoHo Wealth, Hyderabad. Rs. 10L minimum and SIF vs PMS fitment.",
    url: "https://www.sohowealth.in/sif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF Distributor Hyderabad | SoHo Wealth",
    description: "Compare Specialized Investment Funds in India. Rs. 10L minimum and SIF vs PMS fitment.",
  },
};

export default function SIFPage() {
  return <SIFClient />;
}
