"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { FAQSection } from "@/components/seo/FAQSection";
import { RelatedServices } from "@/components/seo/RelatedServices";

const sifFaqs = [
  { q: "What is a Specialized Investment Fund (SIF)?", a: "A Specialized Investment Fund (SIF) is a SEBI-regulated investment vehicle introduced in 2025 that bridges the gap between Mutual Funds and PMS. It allows investors to access institutional-grade strategies — including long-short equity, derivatives and hybrid approaches — at a much lower entry point than PMS." },
  { q: "What is the minimum investment for a SIF?", a: "The SEBI-mandated minimum investment in a Specialized Investment Fund is ₹10 lakh per investor — significantly lower than the ₹50 lakh minimum required for Portfolio Management Services (PMS)." },
  { q: "How is a SIF different from a Mutual Fund and PMS?", a: "A SIF sits between MFs and PMS. Mutual funds start at ₹500 with limited strategies; PMS requires ₹50L for fully customised portfolios. SIFs require ₹10L and offer advanced strategies like long-short equity and derivatives within an MF-style transparent structure." },
  { q: "Who regulates SIFs?", a: "SIFs are regulated by SEBI (Securities and Exchange Board of India) under the Mutual Fund framework. They are managed by SEBI-registered Asset Management Companies (AMCs)." },
  { q: "Who should invest in a SIF?", a: "SIFs suit HNIs with ₹10L–₹50L looking for PMS-like strategies, investors graduating beyond mutual funds, those wanting long-short or market-neutral exposure, NRIs seeking regulated India exposure, and existing PMS investors seeking complementary allocation." },
  { q: "Can NRIs invest in SIFs?", a: "Yes, NRIs can invest in SIFs through NRE/NRO accounts subject to AMC-level FATCA compliance. Minimum investment remains ₹10 lakh." },
  { q: "How can I invest in a SIF in Hyderabad?", a: "SoHo Wealth is among Hyderabad's earliest SIF distributors. We compare every available SIF scheme, handle end-to-end onboarding, and provide ongoing portfolio monitoring. Book a free SIF consultation to get started." },
];

const sifServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Specialized Investment Fund (SIF) Advisory",
  description: "SEBI-regulated SIF advisory in Hyderabad. Compare every available SIF scheme. Minimum ₹10 lakh. End-to-end onboarding and monitoring.",
  serviceType: "Specialized Investment Fund Advisory",
  url: "https://sohowealth.in/sif",
  provider: { "@id": "https://sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
  ],
  audience: { "@type": "Audience", audienceType: "HNIs and family offices" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1000000",
    description: "Minimum SIF investment ₹10 lakh",
  },
};

const sifBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "SIF Advisory", item: "https://sohowealth.in/sif" },
  ],
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const keyFacts = [
  { icon: "\uD83D\uDCCC", label: "Min Investment", value: "\u20B910 lakh" },
  { icon: "\uD83D\uDCCC", label: "Regulated by", value: "SEBI (under MF framework)" },
  { icon: "\uD83D\uDCCC", label: "Managed by", value: "SEBI-registered AMCs" },
  { icon: "\uD83D\uDCCC", label: "Strategies", value: "Long-short, derivatives, hybrid" },
];

const comparisonRows = [
  { feature: "Min Investment", mf: "\u20B9500", sif: "\u20B910L", pms: "\u20B950L" },
  { feature: "Long-Short", mf: "\u274C", sif: "\u2705", pms: "\u2705" },
  { feature: "Derivatives", mf: "Limited", sif: "\u2705", pms: "\u2705" },
  { feature: "SEBI Regulated", mf: "\u2705", sif: "\u2705", pms: "\u2705" },
  { feature: "Transparency", mf: "High", sif: "High", pms: "Medium" },
  { feature: "Customization", mf: "None", sif: "Moderate", pms: "Full" },
];

const whoShouldInvest = [
  "HNIs with \u20B910L\u2013\u20B950L wanting PMS-like strategies",
  "Investors ready to graduate beyond mutual funds",
  "Those wanting long-short or market-neutral exposure",
  "NRIs looking for regulated India exposure",
  "Existing PMS investors seeking complementary allocation",
];

const whySohoBenefits = [
  "Compare all available SIF schemes objectively",
  "Independent guidance \u2014 no AMC affiliation",
  "End-to-end onboarding support",
  "Ongoing portfolio monitoring",
];

const SIFClient = () => {
  const scrollToForm = () => {
    document.getElementById("sif-consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sifServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sifBreadcrumbs) }} />
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>SEBI INTRODUCED IN 2025</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Specialized Investment Funds (SIF):{" "}
              <span style={{ color: "#C9A84C" }}>India&apos;s Newest SEBI-Regulated Category.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              SEBI introduced Specialized Investment Funds in 2025. SoHo Wealth is among Hyderabad's earliest SIF distributors \u2014 and we also run SIFPrime.com, India's first SIF comparison platform.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Book a SIF Consultation \u2192
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT IS A SIF */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8" style={{ color: "#0B1F3A" }}>
              What is a Specialized Investment Fund <span style={{ color: "#C9A84C" }}>(SIF)</span>?
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 mb-14">
              <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>A SIF is a new SEBI-regulated investment vehicle introduced in 2025 to bridge the gap between Mutual Funds and Portfolio Management Services (PMS).</p>
              <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>It allows investors to access institutional-grade strategies \u2014 including long-short equity, derivatives, and hybrid approaches \u2014 at a much lower entry point than PMS.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact) => (
              <AnimatedSection key={fact.label}>
                <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: "#C9A84C", backgroundColor: "#FFFDF5" }}>
                  <div className="text-2xl mb-3">{fact.icon}</div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#C9A84C" }}>{fact.label}</p>
                  <p className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{fact.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12" style={{ color: "#0B1F3A" }}>SIF vs Mutual Fund vs PMS</h2>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr style={{ backgroundColor: "#0B1F3A" }}>
                    <th className="py-4 px-4 text-left font-semibold text-white/70 font-body">Feature</th>
                    <th className="py-4 px-4 text-center font-semibold text-white/80 font-body">Mutual Fund</th>
                    <th className="py-4 px-4 text-center font-bold font-display" style={{ color: "#C9A84C" }}>SIF</th>
                    <th className="py-4 px-4 text-center font-semibold text-white/80 font-body">PMS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b last:border-b-0" style={{ borderColor: "#E2E8F0" }}>
                      <td className="py-4 px-4 font-semibold font-body" style={{ color: "#0B1F3A" }}>{row.feature}</td>
                      <td className="py-4 px-4 text-center font-body" style={{ color: "#4A5568" }}>{row.mf}</td>
                      <td className="py-4 px-4 text-center font-bold font-body" style={{ color: "#0B1F3A", backgroundColor: "#FDF8EC" }}>{row.sif}</td>
                      <td className="py-4 px-4 text-center font-body" style={{ color: "#4A5568" }}>{row.pms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHO SHOULD INVEST */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12" style={{ color: "#0B1F3A" }}>Is SIF Right For <span style={{ color: "#C9A84C" }}>You</span>?</h2>
            <ul className="space-y-5">
              {whoShouldInvest.map((item) => (
                <li key={item} className="flex items-start gap-4 font-body text-base lg:text-lg" style={{ color: "#1a2d4a" }}>
                  <span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY SOHO WEALTH FOR SIF */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <p className="font-body text-lg lg:text-xl leading-relaxed text-center mb-12" style={{ color: "rgba(255,255,255,0.85)" }}>
              We don't just distribute SIFs \u2014 we built{" "}
              <a href="https://sifprime.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#C9A84C" }}>SIFPrime.com</a>
              , India's first SIF comparison platform. That means we have deeper product knowledge than any distributor in Hyderabad.
            </p>
            <ul className="space-y-4 max-w-xl mx-auto mb-12">
              {whySohoBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-base font-medium text-white/90">
                  <span className="mt-0.5" style={{ color: "#C9A84C" }}>\u2192</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>Talk to Us About SIFs \u2192</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <LeadCaptureForm source="SIF page" heading="Book Your SIF Consultation" sectionId="sif-consultation" leftContent={
        <>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">Ready to Explore SIFs?</h2>
          <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>Get a personalized SIF recommendation based on your risk profile, investment horizon, and goals.</p>
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you'll get</p>
          <ul className="space-y-4 mb-10">
            {["SIF scheme comparison & shortlist", "Risk-return analysis", "Onboarding support", "Ongoing portfolio monitoring", "Direct access to Kiran Dutta"].map((item) => (
              <li key={item} className="flex items-start gap-3"><span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span><span className="font-body text-base text-white/90">{item}</span></li>
            ))}
          </ul>
          <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>Min \u20B910 lakh investment. No obligation.</p>
        </>
      } />

      <FAQSection faqs={sifFaqs} heading="SIF — Frequently Asked Questions" />

      <RelatedServices
        items={[
          { title: "PMS Advisory", href: "/pms-advisory", description: "Step up to portfolios from 50 lakh with concentrated, professionally-managed strategies." },
          { title: "AIF Advisory", href: "/aif-advisory", description: "Access private equity, venture capital and structured credit from 1 crore." },
          { title: "Mutual Funds Advisory", href: "/mutual-funds", description: "Goal-based portfolios with SIPs from 500 rupees. AMFI registered." },
        ]}
        heading="Compare SIF With Other Options"
      />
    </main>
  );
};

export default SIFClient;
