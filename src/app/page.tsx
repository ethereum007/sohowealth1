import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySohoSection } from "@/components/sections/WhySohoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { SIFBannerSection } from "@/components/sections/SIFBannerSection";
import { PortfolioReviewSection } from "@/components/sections/PortfolioReviewSection";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";

export const metadata: Metadata = {
  title: "Wealth Management & Investment Distribution India | SoHo Wealth",
  description:
    "Wealth planning, portfolio review and registered investment distribution for HNIs, founders, families and NRIs across mutual funds, PMS and SIF.",
  keywords:
    "wealth management India, wealth planning India, investment distribution India, portfolio review India, HNI wealth management, NRI wealth management India",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Management & Investment Distribution India | SoHo Wealth",
    description:
      "Portfolio review and investment distribution for HNIs, founders, families and NRIs across India.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management & Investment Distribution India | SoHo Wealth",
    description: "Portfolio review and investment distribution for HNIs, founders, families and NRIs.",
  },
};

const homeFaqs: FAQ[] = [
  {
    q: "How should I choose a wealth-planning firm in India?",
    a: "Compare registration, disclosed role, product range, process, fees and service model. SoHo Wealth serves investors across India and is founded by Columbia alum Kiran Dutta. It is an AMFI mutual fund and SIF distributor (ARN 306593) and an APMI PMS distributor (APRN01233); it is not a SEBI Registered Investment Adviser.",
  },
  {
    q: "What services does SoHo Wealth offer across India?",
    a: "We provide pan-India portfolio review, goal mapping and investment distribution across mutual funds, PMS and SIF, plus evaluation and access support for eligible AIF, Pre-IPO, NRI and global-investing routes.",
  },
  {
    q: "How is SoHo Wealth different from a bank's wealth manager?",
    a: "Service models vary across banks and firms. SoHo Wealth is not tied to a single AMC or PMS provider and begins with portfolio context, goals, risk, liquidity and product documents. Its distributor role and registrations are disclosed clearly before implementation.",
  },
  {
    q: "What is the minimum portfolio size to work with SoHo Wealth?",
    a: "Our complimentary portfolio review is available for investors with Rs. 25 lakh or more in investable assets. Investors below that level can still explore the mutual fund distribution page and decide whether a simple SIP route fits their goals and risk context.",
  },
  {
    q: "Do you work with NRIs from outside India?",
    a: "Yes. We support NRIs in the US, UK, UAE, Singapore, Australia and Canada with portfolio coordination, product distribution and documentation support. Tax returns, legal opinions and country-specific advice remain with appropriately qualified professionals.",
  },
  {
    q: "How do I book a portfolio review with SoHo Wealth?",
    a: "Call or WhatsApp +91 90329 99466, email invest@sohowealth.in, or fill out the portfolio review form on this site. We respond within 24 hours and work with clients across India by video, with in-person meetings available in Hyderabad by appointment.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhySohoSection />
        <ServicesGridSection />
        <WhoWeServeSection />
        <SIFBannerSection />
        <FAQSection faqs={homeFaqs} heading="Wealth Planning in India FAQs" background="#FFFFFF" />
        <PortfolioReviewSection />
      </main>
    </div>
  );
}
