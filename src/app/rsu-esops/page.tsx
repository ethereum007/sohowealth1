import type { Metadata } from "next";
import RSUESOPsClient from "./RSUESOPsClient";

export const metadata: Metadata = {
  title: "RSU & ESOP Advisory — Tax-Efficient Stock Option Strategies | SoHo Wealth",
  description:
    "Expert RSU & ESOP advisory for tech professionals. Tax-efficient diversification strategies, FEMA compliance, GIFT City investments. Book a free consultation.",
  keywords:
    "RSU advisory India, ESOP tax planning, RSU taxation India, GIFT City funds, stock option diversification, RSU FEMA compliance, SoHo Wealth",
  alternates: { canonical: "https://sohowealth.in/rsu-esops" },
  openGraph: {
    title: "RSU & ESOP Advisory — Tax-Efficient Stock Option Strategies | SoHo Wealth",
    description:
      "Expert RSU & ESOP advisory for tech professionals. Tax-efficient diversification, FEMA compliance, and GIFT City investment strategies.",
    url: "https://sohowealth.in/rsu-esops",
  },
};

export default function RSUESOPsPage() {
  return <RSUESOPsClient />;
}
