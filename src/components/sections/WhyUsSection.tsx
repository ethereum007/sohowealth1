"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  GraduationCap,
  Layers,
  Monitor,
  MapPin
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Independent & Unbiased",
    description: "We are not tied to any single AMC or product manufacturer. Our recommendations are driven purely by what is right for you.",
  },
  {
    icon: GraduationCap,
    title: "Institutional Pedigree, Personal Touch",
    description: "Our founding team brings Columbia University training, 10+ years of US and Indian market experience, and venture capital acumen — all deployed with the care of a family office.",
  },
  {
    icon: Layers,
    title: "Full-Stack Wealth Management",
    description: "From your first SIP to a ₹10 Cr PMS allocation, from NRI tax optimization to global portfolio construction — we cover the entire spectrum.",
  },
  {
    icon: Monitor,
    title: "Technology-Forward",
    description: "Our proprietary tools, calculators, and client portal ensure you always have visibility and control over your wealth.",
  },
  {
    icon: MapPin,
    title: "Hyderabad-First, India-Wide",
    description: "We are proud Hyderabadis serving clients across India and the diaspora worldwide.",
  },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="line-accent mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              We Don't Sell Products.{" "}
              <span className="text-gradient-gold">We Build Wealth Ecosystems.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SoHo Wealth was founded with a singular belief: wealth management in India
              needs a fundamental reset. Too many firms push commissions over client outcomes.
              We are built differently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach rests on evidence-based investing, holistic wealth architecture,
              alignment of interests, and radical transparency. No hidden charges, no opaque
              fee structures, no product pushing.
            </p>
          </motion.div>

          {/* Right - Reasons */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
