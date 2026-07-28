import type { Metadata } from "next";
import AIFAdvisoryClient from "./AIFAdvisoryClient";

export const metadata: Metadata = {
  title: "AIF Evaluation & Investment Support India | SoHo Wealth",
  description:
    "Evaluate AIF structure, liquidity, manager documents, costs and portfolio fit in Hyderabad. Category I, II and III funds; minimum ₹1 crore.",
  keywords:
    "AIF advisory India, alternative investment funds Hyderabad, AIF minimum investment, private equity India, venture capital funds India",
  alternates: { canonical: "https://www.sohowealth.in/aif-advisory" },
  openGraph: {
    title: "AIF Evaluation & Investment Support | SoHo Wealth",
    description: "AIF structure and portfolio-fit evaluation across private equity, venture capital and structured credit. Min ₹1 Cr.",
    url: "https://www.sohowealth.in/aif-advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIF Evaluation | SoHo Wealth",
    description: "AIF structure and portfolio-fit evaluation across private equity, venture capital and structured credit.",
  },
};

export default function AIFAdvisoryPage() {
  return <AIFAdvisoryClient />;
}
