"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Compass } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every strategy is built around your unique life goals and aspirations.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your interests always come first. We succeed only when you succeed.",
  },
  {
    icon: Compass,
    title: "Transparent",
    description: "Complete clarity in fees, processes, and investment recommendations.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="line-accent mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Wealth Management,{" "}
              <span className="text-gradient-gold">Reimagined</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At SOHO Wealth, we believe that true wealth goes beyond numbers. It's about
              achieving the life you envision – whether that's financial freedom, your
              children's education, or a comfortable retirement.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to democratize quality financial advice, we combine
              decades of expertise with cutting-edge technology to deliver institutional-grade
              wealth management to discerning individuals and families.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-background" />

              {/* Content Card */}
              <div className="absolute inset-8 rounded-2xl glass p-8 flex flex-col justify-between">
                <div>
                  <div className="text-6xl font-display font-bold text-gradient-gold mb-4">15+</div>
                  <div className="text-xl text-foreground font-medium mb-2">Years of Excellence</div>
                  <p className="text-muted-foreground">
                    Guiding families through market cycles with unwavering commitment to their goals.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="font-semibold text-primary">98%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <span className="text-muted-foreground">Assets Under Guidance</span>
                    <span className="font-semibold text-primary">₹500Cr+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Recognized as</div>
                  <div className="font-semibold text-foreground">Top RIA 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
