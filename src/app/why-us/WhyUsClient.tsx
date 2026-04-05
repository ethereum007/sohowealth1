"use client";

import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { CTASection } from "@/components/sections/CTASection";

const WhyUsClient = () => {
  return (
    <main className="pt-20">
      <WhyUsSection />
      <PhilosophySection />
      <WhoWeServeSection />
      <CTASection />
    </main>
  );
};

export default WhyUsClient;
