"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Ready to Put Your Wealth{" "}
            <span className="text-gradient-gold">to Work?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a complimentary, no-obligation wealth consultation with our advisory team.
            We'll assess your current portfolio, identify gaps, and create a roadmap tailored
            to your financial goals.
          </p>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base px-10 h-14 group"
            asChild
          >
            <Link href="/contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
