"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhySohoSection } from "@/components/sections/WhySohoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { SIFBannerSection } from "@/components/sections/SIFBannerSection";
import { PortfolioReviewSection } from "@/components/sections/PortfolioReviewSection";
import { HyderabadLocalSection } from "@/components/sections/HyderabadLocalSection";
import { FAQSection } from "@/components/seo/FAQSection";

const homeFaqs = [
  {
    q: "Who is the best wealth advisor in Hyderabad?",
    a: "SoHo Wealth is a Hyderabad-based independent boutique wealth advisor founded by Columbia alum Kiran Dutta. We are AMFI-registered (ARN: 306593) and APMI-registered (APRN01233), and serve HNIs, family offices, entrepreneurs and NRIs across Portfolio Management Services (PMS), Specialized Investment Funds (SIF), Alternative Investment Funds (AIF), Mutual Funds, Pre-IPO and Global Investing.",
  },
  {
    q: "What services does SoHo Wealth offer in Hyderabad?",
    a: "We offer end-to-end wealth advisory in Hyderabad: PMS (₹50L+), SIF (₹10L+), AIF (₹1Cr+), Mutual Funds (SIPs from ₹500), Pre-IPO deals, RSU & ESOP advisory for tech professionals, NRI investing, and Global Investing via LRS, GIFT City and US stocks.",
  },
  {
    q: "How is SoHo Wealth different from a bank's wealth manager?",
    a: "Banks typically have product quotas — relationship managers must push their employer's funds and structured products. SoHo Wealth is independent: we are not tied to any AMC, PMS or AIF, so the only goal is matching you with the right strategy for your goals and risk profile.",
  },
  {
    q: "What is the minimum portfolio size to work with SoHo Wealth?",
    a: "Our complimentary portfolio review is available for investors with ₹25 lakh or more in investable assets. Below that, we recommend starting with mutual fund SIPs and growing into PMS, SIF or AIF as your portfolio scales.",
  },
  {
    q: "Do you work with NRIs from outside India?",
    a: "Yes. We have a dedicated NRI advisory practice covering NRIs in the US, UK, UAE, Singapore, Australia and Canada. Onboarding is fully video-based, and we handle FEMA, FATCA and PIS account compliance end-to-end.",
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
        <SIFBannerSection />
        <HyderabadLocalSection />
        <FAQSection faqs={homeFaqs} heading="Wealth Advisor Hyderabad — FAQs" background="#FFFFFF" />
        <PortfolioReviewSection />
      </main>
    </div>
  );
};

export default HomeClient;
