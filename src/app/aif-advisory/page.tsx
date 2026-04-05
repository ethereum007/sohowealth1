import type { Metadata } from "next";
import AIFAdvisoryClient from "./AIFAdvisoryClient";

export const metadata: Metadata = {
  title: "Alternative Investment Fund (AIF) Advisory India | SoHo Wealth Hyderabad",
  description:
    "Expert AIF advisory from SoHo Wealth, Hyderabad. Evaluate private equity, venture capital, structured credit, and real asset opportunities. Minimum \u20B91 crore. Unbiased fund selection.",
  keywords:
    "AIF advisory India, alternative investment funds Hyderabad, AIF minimum investment, private equity India, venture capital funds India",
  alternates: { canonical: "https://sohowealth.in/aif-advisory" },
  openGraph: {
    title: "AIF Advisory — Alternative Investment Funds | SoHo Wealth",
    description: "Expert AIF evaluation. Private equity, venture capital, structured credit. Min \u20B91 Cr.",
    url: "https://sohowealth.in/aif-advisory",
    type: "website",
    images: ["https://sohowealth.in/og-image.png"],
  },
};

export default function AIFAdvisoryPage() {
  return <AIFAdvisoryClient />;
}
