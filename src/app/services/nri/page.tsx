import type { Metadata } from "next";
import NRIClient from "./NRIClient";

export const metadata: Metadata = {
  title: "NRI Wealth Planning & Investment Distribution Hyderabad | SoHo Wealth",
  description:
    "NRI portfolio review and investment distribution from Hyderabad for US, UK, UAE, Singapore and Australia NRIs. NRE/NRO, PMS, SIF and mutual funds.",
  keywords:
    "NRI investment advisor Hyderabad, NRI wealth management Hyderabad, NRI investment in India, NRE NRO investment advisor, NRI PMS India, FEMA compliant investing",
  alternates: { canonical: "https://www.sohowealth.in/services/nri" },
  openGraph: {
    title: "NRI Wealth Planning from Hyderabad | SoHo Wealth",
    description:
      "NRI portfolio review, investment distribution and specialist coordination from Hyderabad.",
    url: "https://www.sohowealth.in/services/nri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Wealth Planning from Hyderabad | SoHo Wealth",
    description: "NRI portfolio review and investment distribution from Hyderabad.",
  },
};

export default function NRIPage() {
  return <NRIClient />;
}
