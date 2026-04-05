"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisonRows = [
  { label: "Min Investment", mf: "₹500", sif: "₹10 Lakh", pms: "₹50 Lakh" },
  { label: "Long-Short", mf: "❌", sif: "✅", pms: "✅" },
  { label: "SEBI Regulated", mf: "✅", sif: "✅", pms: "✅" },
  { label: "Flexibility", mf: "Basic", sif: "Advanced", pms: "Custom" },
];

const bullets = [
  "₹10L minimum (vs ₹50L for PMS)",
  "Access to long-short equity & derivatives",
  "Managed by SEBI-registered AMCs",
  "SoHo Wealth: Hyderabad's earliest SIF distributor",
];

export function SIFBannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ backgroundColor: "#C9A84C" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <span
              className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "#0B1F3A", color: "#C9A84C" }}
            >
              SEBI INTRODUCED IN 2025
            </span>

            {/* Headline */}
            <h2
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-4"
              style={{ color: "#0B1F3A" }}
            >
              India's Newest Investment Category Is Here.
            </h2>

            {/* Subtext */}
            <p
              className="font-body text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: "#1a2d4a" }}
            >
              Specialized Investment Funds (SIFs) bridge the gap between Mutual Funds and PMS.
              Min ₹10 lakh. Long-short strategies. SEBI-regulated.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-body text-base font-medium"
                  style={{ color: "#0B1F3A" }}
                >
                  <span className="mt-0.5">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/919032999466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
            >
              Talk to Us About SIFs →
            </a>
          </motion.div>

          {/* Right — Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr style={{ backgroundColor: "#0B1F3A" }}>
                  <th className="py-4 px-4 text-left font-semibold text-white/70 font-body" />
                  <th className="py-4 px-4 text-center font-semibold text-white/80 font-body">
                    Mutual Fund
                  </th>
                  <th
                    className="py-4 px-4 text-center font-bold font-display"
                    style={{ color: "#C9A84C" }}
                  >
                    SIF
                  </th>
                  <th className="py-4 px-4 text-center font-semibold text-white/80 font-body">
                    PMS
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className="border-b last:border-b-0"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <td
                      className="py-4 px-4 font-semibold font-body"
                      style={{ color: "#0B1F3A" }}
                    >
                      {row.label}
                    </td>
                    <td className="py-4 px-4 text-center font-body" style={{ color: "#4A5568" }}>
                      {row.mf}
                    </td>
                    <td
                      className="py-4 px-4 text-center font-bold font-body"
                      style={{ color: "#0B1F3A", backgroundColor: "#FDF8EC" }}
                    >
                      {row.sif}
                    </td>
                    <td className="py-4 px-4 text-center font-body" style={{ color: "#4A5568" }}>
                      {row.pms}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
