import type { Metadata } from "next";
import PortfolioReviewClient from "./PortfolioReviewClient";

export const metadata: Metadata = {
  title: "Free Portfolio Review | SoHo Wealth Hyderabad",
  description:
    "Get a free 30-minute portfolio review with Kiran Dutta of SoHo Wealth. Honest analysis. No sales pitch. For portfolios \u20B925L+",
  keywords:
    "free portfolio review, wealth advisor Hyderabad, portfolio analysis India, SoHo Wealth review",
  alternates: { canonical: "https://sohowealth.in/portfolio-review" },
  openGraph: {
    title: "Free Portfolio Review | SoHo Wealth Hyderabad",
    description:
      "Get a free 30-minute portfolio review with Kiran Dutta. Honest analysis. No sales pitch. For portfolios \u20B925L+",
    url: "https://sohowealth.in/portfolio-review",
    type: "website",
    images: ["https://sohowealth.in/og-image.png"],
  },
};

export default function PortfolioReviewPage() {
  return <PortfolioReviewClient />;
}
