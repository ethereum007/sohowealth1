"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trustItems = [
  "AMFI Registered Mutual Fund Distributor",
  "APMI PMS Distributor",
  "AMFI Registered SIF Distributor (ARN: 306593)",
  "Columbia Alum",
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0B1F3A" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.08) 40px, rgba(255,255,255,0.08) 41px)",
        }}
      />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            Wealth Planning Across India for{" "}
            <span style={{ color: "#C9A84C" }}>HNIs, Founders &amp; NRIs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display italic text-lg md:text-xl mb-6"
            style={{ color: "#C9A84C" }}
          >
            Boutique Wealth. Institutional Thinking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-12 font-body leading-relaxed"
          >
            Portfolio review, goal mapping and investment distribution across
            Mutual Funds, PMS and SIF, with access support for AIF, Pre-IPO and
            global investing for eligible investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              className="text-base px-8 h-14 font-semibold group rounded-md"
              style={{ background: "#C9A84C", color: "#0B1F3A" }}
              asChild
            >
              <Link href="/portfolio-review">
                Book Your Free Portfolio Review
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <a
              href="https://wa.me/919032999466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-base transition-colors group"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-white/70">
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="whitespace-nowrap">{item}</span>
                  {i < trustItems.length - 1 && (
                    <span className="text-white/20 hidden sm:inline mx-1">|</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-5 text-xs leading-relaxed text-white/45"
          >
            SoHo Wealth is an AMFI mutual fund and SIF distributor (ARN 306593)
            and an APMI PMS distributor (APRN01233), not a SEBI Registered
            Investment Adviser.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
