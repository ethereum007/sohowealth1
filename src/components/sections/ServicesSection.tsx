"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  PieChart,
  TrendingUp,
  BarChart3,
  Globe,
  Users,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: PieChart,
    title: "Mutual Funds",
    description: "Curated mutual fund portfolios aligned to your goals — from SIPs to lumpsum, equity to debt. We cut through the noise and pick what works.",
    href: "/mutual-funds",
    cta: "Learn More",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management (PMS)",
    description: "Access high-conviction, concentrated equity strategies managed by India's top portfolio managers. Minimum ₹50 lakhs.",
    href: "/pms-advisory",
    cta: "Learn More",
  },
  {
    icon: BarChart3,
    title: "Specialized Investment Funds (SIF)",
    description: "India's newest investment vehicle combining the best of PMS and AIF. Long-short, sector-specific, and alpha-generating strategies. Minimum ₹10 lakhs.",
    href: "https://sifprime.com",
    cta: "Explore SIFPrime",
    external: true,
  },
  {
    icon: Globe,
    title: "Global Investing",
    description: "Diversify beyond India. Invest in US equities, international ETFs, and global mutual funds with full RBI and FEMA compliance.",
    href: "/global-investing",
    cta: "Learn More",
  },
  {
    icon: Users,
    title: "NRI Wealth Advisory",
    description: "Seamless investing in India for NRIs worldwide. NRE/NRO account guidance, DTAA optimization, repatriation, and tax-efficient structuring.",
    href: "/contact",
    cta: "Learn More",
  },
  {
    icon: ShieldCheck,
    title: "Tax & Estate Planning",
    description: "Comprehensive tax-saving strategies, HUF structuring, estate planning, trust creation, and succession planning for multi-generational wealth.",
    href: "/contact",
    cta: "Learn More",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="line-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Wealth Solutions{" "}
            <span className="text-gradient-gold">Under One Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From your first SIP to a ₹10 Cr PMS allocation — we cover the entire wealth spectrum.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
