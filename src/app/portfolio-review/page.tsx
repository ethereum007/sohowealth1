import type { Metadata } from "next";
import PortfolioReviewClient from "./PortfolioReviewClient";

export const metadata: Metadata = {
  title: "Free Portfolio Review India | SoHo Wealth",
  description:
    "Get a free 30-minute portfolio review with Kiran Dutta of SoHo Wealth. Honest analysis. No sales pitch. For portfolios \u20B925L+",
  keywords:
    "free portfolio review India, portfolio analysis India, investment portfolio review, SoHo Wealth review",
  alternates: { canonical: "https://www.sohowealth.in/portfolio-review" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Free Portfolio Review India | SoHo Wealth",
    description:
      "Get a free 30-minute portfolio review with Kiran Dutta. Honest analysis. No sales pitch. For portfolios \u20B925L+",
    url: "https://www.sohowealth.in/portfolio-review",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Free Portfolio Review India | SoHo Wealth",
    description: "Free 30-minute portfolio review. Honest analysis. No sales pitch.",
  },
};

export default function PortfolioReviewPage() {
  return <PortfolioReviewClient />;
}
