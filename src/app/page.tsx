import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Planning India + Free AI Wealth Planner | SoHo Wealth",
  description:
    "Start with SoHo Wealth's free AI wealth planning tool. Estimate your goal corpus, required monthly SIP and asset mix, then book a professional portfolio review.",
  keywords:
    "wealth planning India, AI wealth planner India, financial goal planner, SIP goal calculator, wealth management India, portfolio review India",
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
