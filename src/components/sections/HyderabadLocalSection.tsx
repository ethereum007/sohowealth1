"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Calendar, Globe } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: MapPin,
    title: "Based in Hyderabad",
    text: "Local presence in Hyderabad serving Banjara Hills, Jubilee Hills, Gachibowli, HITEC City and the wider city — plus Secunderabad and across Telangana.",
  },
  {
    icon: Calendar,
    title: "Mon–Sat, 9 AM – 6 PM",
    text: "In-person meetings at your office or home in Hyderabad, video consultations across India, and WhatsApp on +91 90329 99466.",
  },
  {
    icon: Globe,
    title: "Hyderabadis Abroad",
    text: "Built specifically for NRIs from Hyderabad living in the US, UK, UAE, Singapore and Australia who want their India money managed by someone they can actually reach.",
  },
];

export function HyderabadLocalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24"
      style={{ backgroundColor: "#FDF8EC" }}
      aria-labelledby="hyd-local-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: "#0B1F3A", color: "#C9A84C" }}
          >
            Wealth Advisor in Hyderabad
          </span>
          <h2
            id="hyd-local-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: "#0B1F3A" }}
          >
            Looking for a Wealth Advisor in{" "}
            <span style={{ color: "#C9A84C" }}>Hyderabad?</span>
          </h2>
          <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
            SoHo Wealth is Hyderabad&apos;s independent boutique wealth advisor — Columbia-trained,
            SEBI-aligned, and built around your goals instead of any single product&apos;s commission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="rounded-xl p-6 bg-white shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(11,31,58,0.06)" }}
              >
                <c.icon className="w-5 h-5" style={{ color: "#0B1F3A" }} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#0B1F3A" }}>
                {c.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio-review"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#0B1F3A", color: "#C9A84C" }}
          >
            Book a Free Consultation in Hyderabad →
          </Link>
          <a
            href="tel:+919032999466"
            className="inline-flex items-center gap-2 font-semibold text-sm"
            style={{ color: "#0B1F3A" }}
          >
            <Phone className="w-4 h-4" />
            +91 90329 99466
          </a>
        </div>
      </div>
    </section>
  );
}
