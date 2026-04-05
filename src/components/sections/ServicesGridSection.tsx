"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface ServiceCard {
  badge?: { text: string; variant: "gold" | "navy" };
  title: string;
  text: string;
  ctaLink: string;
  ctaText: string;
}

const services: ServiceCard[] = [
  {
    badge: { text: "🆕 NEW IN INDIA", variant: "gold" },
    title: "Specialized Investment Funds (SIF)",
    text: "India's newest SEBI-regulated product. Min ₹10L. PMS-level flexibility with mutual fund transparency.",
    ctaLink: "/sif",
    ctaText: "Explore SIFs →",
  },
  {
    title: "Portfolio Management Services (PMS)",
    text: "Professionally managed equity portfolios. Direct stock ownership. Min ₹50L. Curated PMS managers.",
    ctaLink: "/pms-advisory",
    ctaText: "Explore PMS →",
  },
  {
    title: "Alternative Investment Funds (AIF)",
    text: "Access VC, PE, real estate credit & hedge strategies. Min ₹1Cr. For sophisticated investors.",
    ctaLink: "/aif-advisory",
    ctaText: "Explore AIFs →",
  },
  {
    badge: { text: "HIGH VALUE", variant: "navy" },
    title: "NRI Wealth Management",
    text: "India-linked wealth built right. NRO/NRE optimized. FEMA compliant. Repatriation-friendly.",
    ctaLink: "/services/nri",
    ctaText: "NRI Investing →",
  },
  {
    title: "Pre-IPO & Private Deals",
    text: "Invest in companies before they list. Curated deal flow. Qualified investors only.",
    ctaLink: "/pre-ipo",
    ctaText: "Explore Pre-IPO →",
  },
  {
    title: "Mutual Funds Advisory",
    text: "AMFI registered. Goal-based portfolios. SIP, rebalancing, tax-loss harvesting. No conflict of interest.",
    ctaLink: "/mutual-funds",
    ctaText: "Get Started →",
  },
  {
    badge: { text: "GLOBAL", variant: "navy" },
    title: "Global Investing",
    text: "Diversify beyond India via LRS, GIFT City funds & US equities. Tax-efficient offshore strategies for HNIs & NRIs.",
    ctaLink: "/global-investing",
    ctaText: "Explore Global →",
  },
];

export function ServicesGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F7F8FA" }}
      ref={ref}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          style={{ color: "#0B1F3A" }}
        >
          What We Manage For You
        </motion.h2>

        {/* 2x3 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border border-transparent hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              {card.badge && (
                <span
                  className="inline-block self-start text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                  style={
                    card.badge.variant === "gold"
                      ? { backgroundColor: "#C9A84C", color: "#FFFFFF" }
                      : { backgroundColor: "#0B1F3A", color: "#FFFFFF" }
                  }
                >
                  {card.badge.text}
                </span>
              )}

              {/* Title */}
              <h3
                className="font-display text-xl font-semibold mb-3"
                style={{ color: "#0B1F3A" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="font-body text-base leading-relaxed mb-6 flex-grow"
                style={{ color: "#4A5568" }}
              >
                {card.text}
              </p>

              {/* CTA Link */}
              <Link
                href={card.ctaLink}
                className="inline-flex items-center font-semibold text-sm tracking-wide transition-colors duration-200"
                style={{ color: "#C9A84C" }}
              >
                {card.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
