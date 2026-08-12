import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Planning India for HNIs, Founders & NRIs | SoHo Wealth",
  description:
    "Pan-India wealth planning, portfolio review and registered investment distribution for HNIs, founders, families and NRIs. Book a complimentary review.",
  keywords:
    "wealth planning India, wealth management India, portfolio review India, PMS distributor India, NRI wealth planning India, SIF investment India",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Planning Across India | SoHo Wealth",
    description:
      "Portfolio review and investment distribution for HNIs, founders, families and NRIs across India.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Planning Across India | SoHo Wealth",
    description: "Portfolio review and investment distribution for HNIs, founders, families and NRIs.",
  },
};

export default function Home() {
  return <HomeClient />;
}
