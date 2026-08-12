import type { Metadata } from "next";
import RSUESOPsClient from "./RSUESOPsClient";

export const metadata: Metadata = {
  title: "RSU Wealth Planning for Indian Tech Professionals | SoHo",
  description:
    "Coordinate RSU concentration, vesting records, Indian tax questions and diversification with a practical wealth plan for Indian tech professionals.",
  keywords:
    "NRI RSU planning, RSU tax India, ESOP tax planning India, FEMA OPI RSUs, RSU dividend tax India, US estate tax Indian resident, UCITS ETF India, foreign asset reporting Schedule FA, RSU consultation",
  alternates: { canonical: "https://www.sohowealth.in/rsu-esops" },
  openGraph: {
    title: "RSU Wealth Planning for Indian Tech Professionals | SoHo Wealth",
    description:
      "Bring employer-stock concentration, vesting records, tax questions and long-term goals into one coordinated wealth plan.",
    url: "https://www.sohowealth.in/rsu-esops",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSU Wealth Planning | SoHo Wealth",
    description: "A coordinated approach to employer stock, tax records, diversification and long-term goals.",
  },
};

export default function RSUESOPsPage() {
  return <RSUESOPsClient />;
}
