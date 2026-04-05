"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhySohoSection } from "@/components/sections/WhySohoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { SIFBannerSection } from "@/components/sections/SIFBannerSection";
import { PortfolioReviewSection } from "@/components/sections/PortfolioReviewSection";

const HomeClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhySohoSection />
        <ServicesGridSection />
        <SIFBannerSection />
        <PortfolioReviewSection />
      </main>
    </div>
  );
};

export default HomeClient;
