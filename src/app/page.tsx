import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Management & Investment Distribution India | SoHo Wealth",
  description:
    "Wealth planning, portfolio review and registered investment distribution for HNIs, founders, families and NRIs across mutual funds, PMS and SIF.",
  keywords:
    "wealth management India, wealth planning India, investment distribution India, portfolio review India, HNI wealth management, NRI wealth management India",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Management & Investment Distribution India | SoHo Wealth",
    description:
      "Portfolio review and investment distribution for HNIs, founders, families and NRIs across India.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management & Investment Distribution India | SoHo Wealth",
    description: "Portfolio review and investment distribution for HNIs, founders, families and NRIs.",
  },
};

export default function Home() {
  return <HomeClient />;
}
