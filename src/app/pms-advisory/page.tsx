import type { Metadata } from "next";
import PMSAdvisoryClient from "./PMSAdvisoryClient";

export const metadata: Metadata = {
  title: "PMS Distributor India | Compare PMS Strategies | SoHo Wealth",
  description:
    "APMI-registered PMS distributor serving investors across India. Compare PMS returns, fees, drawdowns, managers and portfolio fit before investing.",
  keywords:
    "PMS distributor India, PMS comparison India, best PMS in India, portfolio management services India, PMS returns India, HNI investment India",
  alternates: { canonical: "https://www.sohowealth.in/pms-advisory" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "PMS Distributor India | Compare PMS Strategies | SoHo Wealth",
    description:
      "Compare PMS strategies before investing Rs. 50 lakh or more. Manager due diligence, fees, drawdowns and tax review.",
    url: "https://www.sohowealth.in/pms-advisory",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "PMS Distributor India | SoHo Wealth",
    description: "Compare PMS strategies before investing Rs. 50 lakh or more.",
  },
};

export default function PMSAdvisoryPage() {
  return <PMSAdvisoryClient />;
}
