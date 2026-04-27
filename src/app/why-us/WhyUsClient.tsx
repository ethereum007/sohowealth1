"use client";

import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

const whyUsBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Why Us", item: "https://sohowealth.in/why-us" },
  ],
};

const WhyUsClient = () => {
  return (
    <main className="pt-20">
      <JsonLd data={whyUsBreadcrumbs} />
      <WhyUsSection />
      <PhilosophySection />
      <WhoWeServeSection />
      <CTASection />
    </main>
  );
};

export default WhyUsClient;
