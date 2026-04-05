"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const columns = [
  {
    emoji: "🏦",
    title: "Boutique. Not Banking.",
    text: "Our approach is centered on thoughtful portfolio construction, aligned with your long-term goals and growth. Just one objective: making your money work smarter and grow sustainably.",
  },
  {
    emoji: "🎯",
    title: "Institutional Thinking. Personal Attention.",
    text: "Every client gets a custom allocation strategy — not a template. We work with family offices, C-suite executives, and entrepreneurs building serious wealth.",
  },
  {
    emoji: "🚀",
    title: "First-Mover Access.",
    text: "From India's newest Specialized Investment Funds (SIFs) to Pre-IPO deals and offshore investing — we bring you high quality proprietary access.",
  },
];

export function WhySohoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          style={{ color: "#0B1F3A" }}
        >
          Why Serious Investors Choose{" "}
          <span style={{ color: "#C9A84C" }}>SoHo Wealth</span>
        </motion.h2>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4"
              style={{ borderTopColor: "#0B1F3A" }}
            >
              <div className="text-4xl mb-5">{col.emoji}</div>
              <h3
                className="font-display text-xl font-semibold mb-3"
                style={{ color: "#0B1F3A" }}
              >
                {col.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
                {col.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
