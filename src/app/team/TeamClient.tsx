"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Globe, Award } from "lucide-react";

const teamMembers = [
  {
    icon: GraduationCap,
    title: "Founder & Chief Investment Strategist",
    description: "Columbia University MBA, 10+ years trading US and Indian markets, former Managing Partner at SoHo Ventures (venture capital), founder of multiple fintech platforms.",
  },
  {
    icon: Users,
    title: "Advisory Board",
    description: "Experienced professionals from banking, private equity, chartered accountancy, and family office management.",
  },
  {
    icon: Globe,
    title: "Research Team",
    description: "Dedicated analysts covering Indian equities, global markets, macro-economics, and alternative investments.",
  },
];

const credentials = [
  "AMFI Registered Mutual Fund Distributor",
  "Empanelled with 30+ AMCs across India",
  "Partnerships with leading PMS and SIF providers",
  "Global investing partnerships for US, European, and Asian market access",
  "DTAA and cross-border tax advisory network",
];

const TeamClient = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20" ref={ref}>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <div className="line-accent mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Meet Your <span className="text-gradient-gold">Trusted Advisors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The SoHo Wealth advisory team combines deep expertise across multiple domains —
              from Columbia University training to venture capital acumen.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {teamMembers.map((member, index) => (
              <motion.div key={member.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <member.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">{member.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="line-accent mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10">
              Our <span className="text-gradient-gold">Credentials</span>
            </h2>
            <div className="space-y-4">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TeamClient;
