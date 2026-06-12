"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, BriefcaseBusiness, GraduationCap, Landmark, MessageCircle, TrendingUp } from "lucide-react";
import { useRef } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { kiranPersonSchema } from "@/lib/seo";

const teamBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://www.sohowealth.in/team" },
  ],
};

const profileHighlights = [
  { icon: GraduationCap, label: "Columbia University" },
  { icon: Landmark, label: "Wall Street" },
  { icon: BriefcaseBusiness, label: "President Obama's team, Ethiopia" },
  { icon: TrendingUp, label: "$300M+ deployed in VC / PE" },
];

const credentials = [
  "Founder of SoHo Wealth and SIFPrime.com",
  "AMFI Registered Mutual Fund Distributor (ARN: 306593)",
  "APMI Registered PMS Distributor (APRN01233)",
  "AMFI Registered SIF Distributor (ARN: 306593)",
  "Built family-office networks across private markets and alternatives",
];

const TeamClient = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20" ref={ref}>
      <JsonLd data={kiranPersonSchema} />
      <JsonLd data={teamBreadcrumbs} />

      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-body text-xs font-bold tracking-[0.16em] uppercase mb-5" style={{ color: "#C9A84C" }}>
              Team
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Built by People Who Have Been on{" "}
              <span style={{ color: "#C9A84C" }}>Both Sides of the Table.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              From Wall Street to family offices to India&apos;s newest asset class.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="rounded-xl aspect-[3/4] overflow-hidden shadow-[0_20px_60px_-24px_rgba(11,31,58,0.35)]">
                <Image
                  src="/kiran-dutta.jpeg"
                  alt="Kiran Dutta, Founder of SoHo Wealth and SIFPrime"
                  width={720}
                  height={960}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="font-body text-xs font-bold tracking-[0.16em] uppercase mb-4" style={{ color: "#C9A84C" }}>
                Founder Profile
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2" style={{ color: "#0B1F3A" }}>
                Kiran Dutta
              </h2>
              <p className="font-body text-base font-semibold mb-8" style={{ color: "#4A5568" }}>
                Founder, SoHo Wealth and SIFPrime
              </p>

              <div className="space-y-5 mb-8">
                <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                  Kiran Dutta is the founder of SIFPrime.com, the Morningstar + BSE execution platform for SIFs, India&apos;s newest asset class.
                </p>
                <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                  Prior to SIFPrime, Kiran built one of the largest family office networks and helped families deploy $300 million in the VC / PE asset class.
                </p>
                <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                  He is an alum of Columbia University and has worked on Wall Street and for President Obama&apos;s team in Ethiopia.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {profileHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border p-4 flex items-center gap-3"
                    style={{ borderColor: "#E2E8F0", backgroundColor: "#F7F8FA" }}
                  >
                    <item.icon className="w-5 h-5 shrink-0" style={{ color: "#C9A84C" }} />
                    <span className="font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <blockquote
                className="border-l-4 pl-5 py-1 mb-8"
                style={{ borderColor: "#C9A84C" }}
              >
                <p className="font-display text-xl md:text-2xl leading-snug mb-3" style={{ color: "#0B1F3A" }}>
                  &quot;Give investors highly informative and knowledgeable access to this new asset class, and help distributors build a decent SIF AUM.&quot;
                </p>
                <footer className="font-body text-sm font-semibold" style={{ color: "#4A5568" }}>
                  Kiran&apos;s goal for SIFPrime
                </footer>
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://linkedin.com/in/kirandutta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://wa.me/919032999466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Kiran
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10 text-center" style={{ color: "#0B1F3A" }}>
              Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-4 p-5 rounded-lg bg-white border" style={{ borderColor: "#E2E8F0" }}>
                  <Award className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-sm md:text-base font-medium" style={{ color: "#1a2d4a" }}>
                    {cred}
                  </span>
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
