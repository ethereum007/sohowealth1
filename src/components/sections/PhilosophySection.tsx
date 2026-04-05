"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  BarChart3,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

const philosophyPillars = [
  {
    icon: TrendingUp,
    title: "Long-Term Approach",
    description: "We focus on building sustainable wealth over decades, not chasing short-term market trends or speculative gains.",
  },
  {
    icon: BarChart3,
    title: "Asset Allocation",
    description: "Strategic diversification across asset classes tailored to your risk profile, time horizon, and financial goals.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Disciplined approach to protecting capital through systematic rebalancing and downside protection strategies.",
  },
  {
    icon: Target,
    title: "Goal-Based Investing",
    description: "Every investment decision is aligned with your specific life goals—retirement, education, legacy, or wealth preservation.",
  },
];

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="line-accent mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Our Investment <span className="text-gradient-gold">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that successful wealth creation is not about timing the market
              or finding the next hot stock. It's about having a clear process, staying
              disciplined, and maintaining focus on your long-term objectives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our philosophy is built on decades of experience navigating market cycles
              and helping families achieve their financial aspirations through thoughtful,
              evidence-based investment strategies.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
