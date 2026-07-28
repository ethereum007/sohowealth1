"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhySohoSection } from "@/components/sections/WhySohoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { SIFBannerSection } from "@/components/sections/SIFBannerSection";
import { PortfolioReviewSection } from "@/components/sections/PortfolioReviewSection";
import { HyderabadLocalSection } from "@/components/sections/HyderabadLocalSection";
import { FAQSection } from "@/components/seo/FAQSection";

const homeFaqs = [
  {
    q: "Who is the best wealth advisor in Hyderabad?",
    a: "There is no objective single best firm for every investor. Compare registration, disclosed role, product range, process, fees and service model. SoHo Wealth is a Hyderabad-based wealth-planning and investment-distribution firm founded by Columbia alum Kiran Dutta. It is AMFI-registered for mutual funds and SIFs (ARN 306593) and APMI-registered for PMS distribution (APRN01233); it is not a SEBI Registered Investment Adviser.",
  },
  {
    q: "What services does SoHo Wealth offer in Hyderabad?",
    a: "We provide portfolio review, goal mapping and investment distribution in Hyderabad across mutual funds, PMS and SIF, plus evaluation and access support for eligible AIF, Pre-IPO, NRI and global-investing routes.",
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
    q: "How do I book a wealth consultation in Hyderabad?",
    a: "Call or WhatsApp +91 90329 99466, email invest@sohowealth.in, or fill out the portfolio review form on this site. We respond within 24 hours and can meet in person in Hyderabad or via video.",
  },
];

const HomeClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhySohoSection />
        <ServicesGridSection />
        <WhoWeServeSection />
        <SIFBannerSection />
        <HyderabadLocalSection />
        <FAQSection faqs={homeFaqs} heading="Wealth Planning in Hyderabad FAQs" background="#FFFFFF" />
        <PortfolioReviewSection />
      </main>
    </div>
  );
};

export default HomeClient;
