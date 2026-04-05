"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Award } from "lucide-react";

const team = [
  {
    name: "Gaurav Agarwal",
    role: "Founder & Principal Advisor",
    credentials: ["CFP", "CFA Level II", "SEBI RIA"],
    bio: "15+ years of experience in wealth management. Previously with leading private banks and AMCs.",
    image: null,
  },
  {
    name: "Priya Sharma",
    role: "Head of Research",
    credentials: ["MBA Finance", "NISM Certified"],
    bio: "Leads our in-house research team with expertise in equity and fixed income markets.",
    image: null,
  },
  {
    name: "Rahul Mehta",
    role: "Client Relations Director",
    credentials: ["CFP", "CPFA"],
    bio: "Ensures every client receives personalized attention and seamless service experience.",
    image: null,
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 relative" ref={ref}>
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
            Meet Your{" "}
            <span className="text-gradient-gold">Trusted Advisors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A team of certified professionals dedicated to your financial success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
                {/* Avatar/Image Area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-muted to-card relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-3xl font-semibold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Credentials Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-xs px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-foreground font-medium"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/sohowealth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href="mailto:invest@sohowealth.in"
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl glass text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">SEBI Registered</div>
                <div className="text-sm text-muted-foreground">Investment Advisor</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">AMFI Registered</div>
                <div className="text-sm text-muted-foreground">Mutual Fund Distributor</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">CFP Certified</div>
                <div className="text-sm text-muted-foreground">Financial Planners</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
