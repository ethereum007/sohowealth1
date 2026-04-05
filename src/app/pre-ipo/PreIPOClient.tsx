"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShieldCheck, Search, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>{children}</motion.div>
  );
}

const advantages = [
  { icon: TrendingUp, title: "Early-Stage Upside", description: "Access high-growth companies before they list publicly and capture value that public-market investors miss." },
  { icon: ShieldCheck, title: "Curated Deal Flow", description: "We vet every opportunity rigorously \u2014 financials, governance, sector tailwinds, and exit visibility \u2014 so you don't have to." },
  { icon: Search, title: "Full Transparency", description: "Detailed company profiles, valuation rationale, and risk disclosures shared upfront. No hidden layers." },
  { icon: Clock, title: "Strategic Timing", description: "We focus on late-stage Pre-IPO rounds with clearer paths to listing, reducing the holding-period uncertainty." },
];

const whoShouldInvest = [
  "HNIs looking for portfolio alpha beyond listed equities",
  "Business owners who understand private company dynamics",
  "NRIs seeking India's growth story through curated private deals",
  "Family offices allocating to alternative assets",
];

const PreIPOClient = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #132D50 100%)" }}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>Alternative Investments</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Invest Before the{" "}<span style={{ color: "#C9A84C" }}>Market Does</span></h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">Pre-IPO investing lets you participate in India's most promising companies before they list on exchanges. We bring you vetted, late-stage opportunities with institutional-grade due diligence.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 font-semibold" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                <Link href="/contact">Explore Opportunities<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Pre-IPO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#0B1F3A" }}>What is Pre-IPO Investing?</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>Pre-IPO investments allow you to buy shares of a private company before it files for an Initial Public Offering. These companies are typically in their late growth stage \u2014 strong revenue, expanding market share, and a clear path to listing. By entering early, investors can potentially benefit from the valuation jump that often occurs on listing day and beyond.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 lg:py-32 bg-muted/30" ref={ref}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>The SoHo Wealth{" "}<span style={{ color: "#C9A84C" }}>Pre-IPO Advantage</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A5568" }}>We don't just source deals \u2014 we build conviction through deep research and align every opportunity with your risk appetite.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(201,168,76,0.12)" }}><item.icon className="w-7 h-7" style={{ color: "#C9A84C" }} /></div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Invest */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#0B1F3A" }}>Who Should Consider{" "}<span style={{ color: "#C9A84C" }}>Pre-IPO?</span></h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#4A5568" }}>Pre-IPO investing is not for everyone. It suits investors who have the patience, risk appetite, and capital to participate in private markets alongside institutional investors.</p>
              <ul className="space-y-4">
                {whoShouldInvest.map((item) => (
                  <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} /><span className="font-body" style={{ color: "#4A5568" }}>{item}</span></li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection>
              <div className="p-10 rounded-2xl border" style={{ backgroundColor: "rgba(11,31,58,0.03)", borderColor: "rgba(11,31,58,0.1)" }}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>Important Considerations</h3>
                <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  <li>\u2022 Pre-IPO shares are illiquid until the company lists.</li>
                  <li>\u2022 There is no guarantee of listing timeline or valuation.</li>
                  <li>\u2022 Past performance of similar deals is not indicative of future results.</li>
                  <li>\u2022 Minimum investment thresholds may apply based on the deal.</li>
                  <li>\u2022 SoHo Wealth acts as an advisor \u2014 all investments are subject to your own due diligence and risk assessment.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #132D50 100%)" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Explore Pre-IPO{" "}<span style={{ color: "#C9A84C" }}>Opportunities?</span></h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">Schedule a confidential consultation with our advisory team. We'll walk you through currently available deals, the due diligence process, and how Pre-IPO fits into your overall wealth strategy.</p>
            <Button asChild size="lg" className="h-14 px-10 font-semibold" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              <Link href="/contact">Schedule a Consultation<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default PreIPOClient;
