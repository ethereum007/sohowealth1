"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { kiranPersonSchema } from "@/lib/seo";

const aboutBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://sohowealth.in/about" },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://sohowealth.in/about",
  name: "About SoHo Wealth — Hyderabad's Independent Boutique Wealth Advisory",
  about: { "@id": "https://sohowealth.in/#organization" },
  mainEntity: { "@id": "https://sohowealth.in/#organization" },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const credentials = [
  "\uD83C\uDF93 Columbia University Alum",
  "\uD83C\uDFDB AMFI Registered MF Distributor (ARN: 306593)",
  "\u2705 APMI Registered PMS Distributor (APRN01233)",
  "\uD83D\uDCCA AMFI Registered SIF Distributor (ARN: 306593)",
  "\uD83C\uDF0D Managing Partner — SoHo Ventures (Global Family Office)",
];

const credentialBoxes = [
  { title: "AMFI Registered", detail: "ARN: 306593" },
  { title: "APMI PMS Distributor", detail: "APRN01233" },
  { title: "AMFI Registered SIF Distributor", detail: "ARN: 306593" },
];

const AboutClient = () => {
  return (
    <main className="pt-20">
      <JsonLd data={kiranPersonSchema} />
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={aboutBreadcrumbs} />
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              We're Not a Bank.{" "}
              <span style={{ color: "#C9A84C" }}>We're On Your Side.</span>
            </h1>
            <p
              className="font-body text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              SoHo Wealth is a Hyderabad-based independent boutique wealth advisory.
              <br />
              No product quotas. Just your goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl aspect-[3/4] overflow-hidden">
                <Image
                  src="/kiran-dutta.jpeg"
                  alt="Kiran Dutta — Founder & Chief Investment Strategist, SoHo Wealth"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2" style={{ color: "#0B1F3A" }}>
                Kiran Dutta
              </h2>
              <p className="font-body text-base font-medium mb-6" style={{ color: "#C9A84C" }}>
                Founder, SoHo Wealth
              </p>

              <div className="space-y-4 mb-8">
                <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
                  Kiran Dutta is one of Hyderabad's most recognized fintech voices and a serial
                  entrepreneur across financial services.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
                  Before founding SoHo Wealth, Kiran served as Managing Partner at SoHo Ventures,
                  a global family office network, giving him direct exposure to how the world's
                  wealthiest families actually invest.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
                  He founded AlphaBull Trading Academy, training 2000+ traders in price action
                  methodology, and SIFPrime.com — India's first Specialized Investment Fund
                  comparison platform.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
                  His education at Columbia University and hands-on experience across global
                  markets, digital assets, and private investing shapes SoHo Wealth's unique
                  institutional-meets-boutique approach.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <span className="font-body text-base" style={{ color: "#0B1F3A" }}>
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/kirandutta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
                >
                  Connect on LinkedIn →
                </a>
                <a
                  href="https://wa.me/919032999466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
                >
                  WhatsApp Kiran →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
              Regulated. Registered.{" "}
              <span style={{ color: "#C9A84C" }}>Accountable.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
            {credentialBoxes.map((box) => (
              <AnimatedSection key={box.title}>
                <div
                  className="rounded-xl p-8 text-center shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4"
                  style={{ backgroundColor: "#FFFFFF", borderTopColor: "#0B1F3A" }}
                >
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#0B1F3A" }}>
                    {box.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "#4A5568" }}>
                    {box.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p
            className="font-body text-xs leading-relaxed text-center max-w-3xl mx-auto"
            style={{ color: "#9CA3AF" }}
          >
            SoHo Wealth is not a SEBI Registered Investment Advisor (RIA). Our services are
            provided as a mutual fund distributor (AMFI) and PMS distributor (APMI). Investments
            are subject to market risk.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
