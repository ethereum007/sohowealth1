import type { Metadata } from "next";
import NRIClient from "./NRIClient";

export const metadata: Metadata = {
  title: "NRI Investment Advisor Hyderabad | Invest in India from US, UAE, UK | SoHo Wealth",
  description:
    "NRI investment advisor in Hyderabad for US, UK, UAE, Singapore and Australia NRIs. FEMA-aware PMS, SIF, mutual funds, NRE/NRO and repatriation guidance.",
  keywords:
    "NRI investment advisor Hyderabad, NRI wealth management Hyderabad, NRI investment in India, NRE NRO investment advisor, NRI PMS India, FEMA compliant investing",
  alternates: { canonical: "https://www.sohowealth.in/services/nri" },
  openGraph: {
    title: "NRI Investment Advisor Hyderabad | SoHo Wealth",
    description:
      "NRI investment advisory from Hyderabad for US, UK, UAE and Singapore NRIs. PMS, SIF, mutual funds, NRE/NRO and repatriation guidance.",
    url: "https://www.sohowealth.in/services/nri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Investment Advisor Hyderabad | SoHo Wealth",
    description: "NRI investment advisory from Hyderabad. PMS, SIF, mutual funds and NRE/NRO guidance.",
  },
};

export default function NRIPage() {
  return <NRIClient />;
}
