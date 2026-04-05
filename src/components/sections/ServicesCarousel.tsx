"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, BarChart3, LineChart, Globe } from "lucide-react";

const services = [
  { icon: PieChart, label: "Mutual Funds", href: "/mutual-funds" },
  { icon: BarChart3, label: "PMS", href: "/pms-advisory" },
  { icon: TrendingUp, label: "SIF", href: "https://sifprime.com" },
  { icon: LineChart, label: "Equity Advisory", href: null },
  { icon: Globe, label: "Global Investing", href: "/global-investing" },
  { icon: BarChart3, label: "AIF", href: "/aif-advisory" },
];

// Duplicate for seamless loop
const duplicatedServices = [...services, ...services, ...services];

export function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.8;

    const scroll = () => {
      scrollPosition += speed;

      // Reset position when we've scrolled through one set
      const singleSetWidth = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-primary overflow-hidden relative z-10 mt-20">
      <div
        ref={scrollRef}
        className="flex gap-12 py-4 overflow-x-hidden whitespace-nowrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedServices.map((service, index) => {
          const content = (
            <>
              <service.icon className="w-5 h-5 text-primary-foreground" />
              <span className="text-base font-semibold text-primary-foreground tracking-wide">
                {service.label}
              </span>
              <span className="text-primary-foreground/60 ml-6">•</span>
            </>
          );

          return (
            <motion.div
              key={`${service.label}-${index}`}
              className="flex items-center gap-3 px-6 shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {service.href ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3">{content}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
