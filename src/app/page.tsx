import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Management in Hyderabad | SoHo Wealth",
  description:
    "Hyderabad-based wealth planning, portfolio review and investment distribution for HNIs, founders, families and NRIs across mutual funds, SIF, PMS and AIF.",
  keywords:
    "wealth management India, wealth planning India, investment distribution India, portfolio review India, HNI wealth management, NRI wealth management India, SoHo Wealth Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Management in Hyderabad | SoHo Wealth",
    description:
      "Hyderabad-based portfolio review and investment distribution for HNIs, founders, families and NRIs.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management in Hyderabad | SoHo Wealth",
    description: "Portfolio review and investment distribution from Hyderabad for HNIs, founders, families and NRIs.",
  },
};

export default function Home() {
  return <HomeClient />;
}
