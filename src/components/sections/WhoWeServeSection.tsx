"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Stethoscope,
  Building2,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    icon: Briefcase,
    title: "Professionals & CXOs",
    description: "Senior executives seeking sophisticated wealth strategies aligned with their career trajectory and retirement goals.",
  },
  {
    icon: Stethoscope,
    title: "Doctors & Healthcare Professionals",
    description: "Medical practitioners requiring specialized financial planning that accounts for irregular income patterns and practice growth.",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Entrepreneurs looking to separate personal wealth from business assets while building generational legacy.",
  },
  {
    icon: Globe,
    title: "NRIs",
    description: "Non-resident Indians seeking expert guidance on India-focused investments, tax optimization, and repatriation strategies.",
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
            We specialize in serving discerning investors who value personalized attention,
            transparent advice, and long-term wealth building strategies.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            See if we're a good fit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
