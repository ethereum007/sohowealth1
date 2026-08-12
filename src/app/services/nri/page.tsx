import type { Metadata } from "next";
import NRIClient from "./NRIClient";

export const metadata: Metadata = {
  title: "NRI Wealth Planning India | Investment Distribution | SoHo Wealth",
  description:
    "India-focused portfolio review and investment distribution for NRIs in the US, UK, UAE, Singapore and Australia. NRE/NRO, PMS, SIF and mutual funds.",
  keywords:
    "NRI wealth planning India, NRI investment in India, NRE NRO investment planning, NRI PMS India, FEMA compliant investing, NRI portfolio review",
  alternates: { canonical: "https://www.sohowealth.in/services/nri" },
  openGraph: {
    title: "NRI Wealth Planning for India-Linked Wealth | SoHo Wealth",
    description:
      "NRI portfolio review, investment distribution and specialist coordination for India-linked wealth.",
    url: "https://www.sohowealth.in/services/nri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Wealth Planning India | SoHo Wealth",
    description: "NRI portfolio review and investment distribution for India-linked wealth.",
  },
};

export default function NRIPage() {
  return <NRIClient />;
}
