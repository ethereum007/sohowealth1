"use client";

import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FAQSection } from "@/components/seo/FAQSection";
import { RelatedServices } from "@/components/seo/RelatedServices";

const pmsFaqs = [
  { q: "What is a Portfolio Management Service (PMS)?", a: "PMS is a SEBI-regulated, professionally-managed investment service where a fund manager runs a concentrated portfolio of 15-25 stocks on your behalf, with direct ownership of the underlying securities held in your demat account." },
  { q: "What is the minimum investment for PMS in India?", a: "The SEBI-mandated minimum investment for any PMS in India is ₹50 lakh per investor. This applies across all PMS providers and strategies." },
  { q: "How is PMS different from a mutual fund?", a: "Mutual funds pool money from many investors and hold 40-80 stocks; you own units of the scheme. PMS runs a concentrated 15-25 stock portfolio with direct stock ownership in your name, allowing personalisation, transparency at the security level, and individual capital-gains tax treatment." },
  { q: "How do I choose the best PMS in Hyderabad?", a: "Look beyond past returns: evaluate portfolio concentration, drawdown history, fund manager tenure, fee structure (fixed vs profit-share), exit loads, and how the strategy fits your risk profile and horizon. SoHo Wealth is empanelled with 50+ PMS providers and helps you compare these factors objectively." },
  { q: "What returns can I expect from a PMS?", a: "Returns vary widely by strategy and market cycle. Past performance does not guarantee future results. We help set realistic expectations based on the manager's strategy, market conditions and your time horizon." },
  { q: "How is PMS taxed in India?", a: "Because you own the underlying stocks directly, every trade by the manager triggers a capital gain or loss in your name — short-term (held under 12 months) at 20% and long-term at 12.5%. We help you plan around this tax treatment." },
  { q: "Can NRIs invest in PMS?", a: "Yes. NRIs can invest in PMS subject to FEMA regulations, with a PIS account linked to NRE or NRO. We handle the documentation end-to-end." },
];

const pmsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portfolio Management Services (PMS) Advisory",
  description: "Independent PMS advisory in Hyderabad. Compare 50+ PMS strategies. Minimum ₹50 lakh. Manager due diligence, portfolio fit assessment and ongoing monitoring.",
  serviceType: "Portfolio Management Services",
  url: "https://sohowealth.in/pms-advisory",
  provider: { "@id": "https://sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
  ],
  audience: { "@type": "Audience", audienceType: "HNIs and family offices" },
  offers: { "@type": "Offer", priceCurrency: "INR", price: "5000000", description: "Minimum PMS investment ₹50 lakh" },
};

const pmsBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "PMS Advisory", item: "https://sohowealth.in/pms-advisory" },
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

const whyUs = [
  { title: "Multi-Manager Access", description: "We are empanelled with 50+ PMS providers across India — from large-cap stalwarts to niche small-cap specialists." },
  { title: "Unbiased Comparison", description: "We have no proprietary PMS. Our only job is to match you with the strategy that fits your risk profile, return expectations, and investment horizon." },
  { title: "Deep Due Diligence", description: "We go beyond published returns. We analyze portfolio concentration, drawdown history, fund manager tenure, fee structures, and redemption terms." },
  { title: "Performance Monitoring", description: "Monthly NAV updates, quarterly performance reviews, and annual strategy reassessment." },
  { title: "Tax Optimization", description: "PMS triggers individual stock-level capital gains. We help you understand and optimize the tax implications of each transaction." },
];

const categories = [
  { title: "Large Cap PMS", description: "Strategies focused on Nifty 50 and top 100 companies. Lower volatility, steady compounding." },
  { title: "Multi Cap PMS", description: "Flexible strategies that shift across market capitalizations based on valuations and opportunity." },
  { title: "Small & Mid Cap PMS", description: "Higher growth potential with higher volatility. Best suited for 5+ year horizons." },
  { title: "Thematic PMS", description: "Manufacturing, digital India, consumption, ESG-focused, and other thematic strategies." },
  { title: "Quant PMS", description: "Algorithm-driven, factor-based strategies using momentum, value, quality, and low-volatility factors." },
  { title: "Long-Short PMS", description: "Strategies that go long on winners and short on losers for absolute return generation." },
];

const PMSAdvisoryClient = () => {
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pmsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pmsBreadcrumbs) }} />
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Beyond Mutual Funds.{" "}
              <span style={{ color: "#C9A84C" }}>Welcome to Concentrated Alpha.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Portfolio Management Services represent the next evolution for serious investors. Unlike mutual funds that hold 40-80 stocks,
              PMS strategies run concentrated portfolios of 15-25 high-conviction picks.
            </p>
            <p className="font-body text-base leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              With a minimum investment of \u20B950 lakhs (SEBI-mandated), PMS is designed for investors who want direct stock ownership,
              personalized portfolio construction, and higher alpha generation potential.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Book PMS Consultation →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY SOHO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>
              Why Invest in PMS Through <span style={{ color: "#C9A84C" }}>SoHo Wealth?</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-0">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title}>
                <div className="flex gap-6 items-start py-6 border-b" style={{ borderColor: "#E2E8F0" }}>
                  <span className="font-display text-2xl font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                    <p className="font-body text-sm mt-1 leading-relaxed" style={{ color: "#4A5568" }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PMS CATEGORIES */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
              PMS <span style={{ color: "#C9A84C" }}>Categories</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <AnimatedSection key={cat.title}>
                <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                  <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#0B1F3A" }}>{cat.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{cat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
              Start Your PMS <span style={{ color: "#C9A84C" }}>Journey</span>
            </h2>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Compare 50+ PMS strategies. Find the one that fits your risk profile and return expectations.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Schedule a Consultation →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection faqs={pmsFaqs} heading="PMS — Frequently Asked Questions" background="#FFFFFF" />

      <RelatedServices
        items={[
          { title: "SIF Advisory", href: "/sif", description: "Step down to ₹10 lakh entry with PMS-style strategies in a SEBI-regulated framework." },
          { title: "AIF Advisory", href: "/aif-advisory", description: "Diversify beyond listed equity into PE, VC and structured credit from ₹1 Cr." },
          { title: "Mutual Funds Advisory", href: "/mutual-funds", description: "Goal-based MF portfolios that complement your PMS allocation." },
        ]}
        heading="Explore Adjacent Services"
      />
    </main>
  );
};

export default PMSAdvisoryClient;
