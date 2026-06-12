import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Advisor in Hyderabad for HNIs, Founders & NRIs | SoHo Wealth",
  description:
    "Hyderabad wealth advisor for HNIs, founders, families and NRIs. PMS, SIF, AIF, mutual funds, pre-IPO and NRI investment advisory. Book a free portfolio review.",
  keywords:
    "wealth advisor Hyderabad, wealth management Hyderabad, investment advisor Hyderabad, PMS advisor Hyderabad, NRI investment advisor Hyderabad, financial advisor Hyderabad, SIF investment India",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Advisor in Hyderabad | SoHo Wealth",
    description:
      "Hyderabad boutique wealth advisor for HNIs, founders, families and NRIs. PMS, SIF, AIF, mutual funds, pre-IPO and NRI investing.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Advisor in Hyderabad | SoHo Wealth",
    description: "Boutique wealth advisor for HNIs, founders, families and NRIs. PMS, SIF, AIF and more.",
  },
};

export default function Home() {
  return <HomeClient />;
}
