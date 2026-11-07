import { HomeHeroCarousel } from "@/components/sections/HomeHeroCarousel";
import { WhySohoSection } from "@/components/sections/WhySohoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { SIFBannerSection } from "@/components/sections/SIFBannerSection";
import { PortfolioReviewSection } from "@/components/sections/PortfolioReviewSection";
import { FAQSection } from "@/components/seo/FAQSection";
import Image from "next/image";

const homeFaqs = [
  {
    q: "How should I choose a wealth-planning firm in India?",
    a: "Compare registration, disclosed role, product range, process, fees and service model. SoHo Wealth serves investors across India and is founded by Columbia alum Kiran Dutta. It is AMFI-registered for mutual funds and SIFs (ARN 306593) and APMI-registered for PMS distribution (APRN01233); it is not a SEBI Registered Investment Adviser.",
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
    q: "How do I book a wealth consultation with SoHo Wealth?",
    a: "Call or WhatsApp +91 90329 99466, email invest@sohowealth.in, or fill out the portfolio review form on this site. We respond within 24 hours and work with clients across India by video, with in-person meetings available in Hyderabad by appointment.",
  },
];

const HomeClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="bg-[#0B1F3A] pt-20">
          <section aria-labelledby="diwali-greeting" className="relative isolate overflow-hidden border-y border-[#C9A84C]/30 bg-[#101c33]">
            <Image
              src="/diwali-diya.webp"
              alt=""
              fill
              sizes="(min-width: 640px) 55vw, 100vw"
              className="-z-20 object-cover object-center opacity-45 sm:!left-auto sm:!w-[55%] sm:opacity-100"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#101c33]/65 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#101c33] sm:via-[#101c33] sm:to-transparent" />
            <div className="mx-auto max-w-6xl px-6 py-9 text-center sm:px-10 sm:py-12 sm:text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#E5CB83]">From all of us at SoHo Wealth</p>
              <h2 id="diwali-greeting" className="font-display text-4xl font-semibold text-[#F6DF9C] sm:text-5xl">Happy Diwali</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">Wishing you and your family a festival filled with light, joy and prosperity.</p>
            </div>
          </section>
        </div>
        <HomeHeroCarousel />
        <WhySohoSection />
        <ServicesGridSection />
        <WhoWeServeSection />
        <SIFBannerSection />
        <FAQSection faqs={homeFaqs} heading="Wealth Planning in India FAQs" background="#FFFFFF" />
        <PortfolioReviewSection />
      </main>
    </div>
  );
};

export default HomeClient;
