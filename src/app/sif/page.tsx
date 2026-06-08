import type { Metadata } from "next";
import SIFClient from "./SIFClient";

export const metadata: Metadata = {
  title: "SIF Investment Advisor Hyderabad | Specialized Investment Funds India | SoHo Wealth",
  description:
    "SIF investment advisor in Hyderabad. Compare Specialized Investment Funds in India, Rs. 10L minimum, SIF vs PMS fitment and portfolio suitability.",
  keywords:
    "SIF investment India, SIF investment Hyderabad, specialized investment fund, SEBI SIF, SIF advisor Hyderabad, SIF vs PMS, SIFPrime",
  alternates: { canonical: "https://sohowealth.in/sif" },
  openGraph: {
    title: "SIF Investment Advisor Hyderabad | SoHo Wealth",
    description:
      "Compare Specialized Investment Funds in India with SoHo Wealth, Hyderabad. Rs. 10L minimum and SIF vs PMS fitment.",
    url: "https://sohowealth.in/sif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIF Investment Advisor Hyderabad | SoHo Wealth",
    description: "Compare Specialized Investment Funds in India. Rs. 10L minimum and SIF vs PMS fitment.",
  },
};

export default function SIFPage() {
  return <SIFClient />;
}
