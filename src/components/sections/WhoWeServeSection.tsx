"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Laptop2,
  Stethoscope,
  Languages,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    icon: Stethoscope,
    title: "For Doctors",
    description: "Connect personal wealth, variable professional income, clinic capital and the freedom to practise by choice.",
    linkLabel: "Explore doctor wealth planning",
    href: "/financial-planning-for-doctors",
  },
  {
    icon: Laptop2,
    title: "For IT Professionals",
    description: "Turn salary, bonuses, RSUs and ESOPs into a system for diversification, career optionality and financial independence.",
    linkLabel: "Explore tech wealth planning",
    href: "/wealth-planning-for-it-professionals",
  },
  {
    icon: Languages,
    title: "For Telugu NRIs",
    description: "Coordinate India investments, NRI accounts, tax-filing questions and return-to-India goals in English or Telugu.",
    linkLabel: "Explore Telugu NRI wealth",
    href: "/nri-telugu",
  },
];

export function WhoWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-serve" className="py-24 lg:py-32 relative bg-muted/30" ref={ref}>
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
            Who We <span className="text-gradient-gold">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Different careers create different financial pressure points. Choose
            the journey that starts with the decisions you actually face.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="mx-auto grid max-w-6xl md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
              <Link
                href={audience.href}
                className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                {audience.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Compare all three client journeys
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
