import type { Metadata } from "next";
import NRIClient from "./NRIClient";

export const metadata: Metadata = {
  title: "NRI Investment Advisory India | Hyderabad | SoHo Wealth",
  description:
    "FEMA-compliant NRI investment advisory for US, UK, UAE & Singapore NRIs. PMS, SIF, Mutual Funds. Video consultation available.",
  keywords:
    "NRI investment advisory, NRI India investing, FEMA compliant investment, NRI PMS, NRI mutual funds",
  alternates: { canonical: "https://sohowealth.in/services/nri" },
  openGraph: {
    title: "NRI Investment Advisory India | SoHo Wealth",
    description:
      "FEMA-compliant NRI investment advisory for US, UK, UAE & Singapore NRIs. PMS, SIF, Mutual Funds.",
    url: "https://sohowealth.in/services/nri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Investment Advisory India | SoHo Wealth",
    description: "FEMA-compliant NRI investment advisory. PMS, SIF, Mutual Funds for US, UK, UAE & Singapore NRIs.",
  },
};

export default function NRIPage() {
  return <NRIClient />;
}
