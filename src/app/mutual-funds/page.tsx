import type { Metadata } from "next";
import MutualFundsClient from "./MutualFundsClient";

export const metadata: Metadata = {
  title: "Mutual Fund Distributor India — SIP, Equity, Debt | SoHo Wealth",
  description:
    "AMFI-registered mutual fund distributor serving investors across India. Compare equity, debt, hybrid and ELSS structures, SIPs and existing holdings.",
  keywords:
    "mutual fund distributor India, mutual fund portfolio review, SIP investment India, equity mutual funds, debt funds, ELSS tax saving funds",
  alternates: { canonical: "https://www.sohowealth.in/mutual-funds" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Mutual Fund Distribution Across India — SoHo Wealth",
    description: "Goal mapping, fund comparison, SIP implementation and ongoing service. Equity, debt, hybrid and ELSS.",
    url: "https://www.sohowealth.in/mutual-funds",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Mutual Fund Distributor India | SoHo Wealth",
    description: "Goal mapping, fund comparison, SIP implementation and ongoing service.",
  },
};

export default function MutualFundsPage() {
  return <MutualFundsClient />;
}
