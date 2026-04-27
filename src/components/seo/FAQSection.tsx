"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  background?: string;
}

function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E2E8F0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base md:text-lg font-semibold pr-4" style={{ color: "#0B1F3A" }}>
          {q}
        </span>
        <ChevronDown
          className="flex-shrink-0 transition-transform duration-200"
          style={{ color: "#C9A84C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          size={20}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-5"
        >
          <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>
            {a}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export function FAQSection({ faqs, heading = "Frequently Asked Questions", background = "#F7F8FA" }: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="py-24 lg:py-32" style={{ backgroundColor: background }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-14"
            style={{ color: "#0B1F3A" }}
          >
            {heading}
          </h2>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
