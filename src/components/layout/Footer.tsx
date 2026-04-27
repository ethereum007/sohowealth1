"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicesLinks = [
  { name: "SIF (SIFPrime)", href: "/sif" },
  { name: "PMS Advisory", href: "/pms-advisory" },
  { name: "AIF Advisory", href: "/aif-advisory" },
  { name: "NRI Advisory", href: "/services/nri" },
  { name: "Pre-IPO", href: "/pre-ipo" },
  { name: "RSU & ESOPs", href: "/rsu-esops" },
  { name: "Mutual Funds", href: "/mutual-funds" },
  { name: "Global Investing", href: "/global-investing" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Insights", href: "/budget-2026" },
  { name: "Portfolio Review", href: "/portfolio-review" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="SoHo Wealth — Home">
              <Image src="/soho-logo.png" alt="SoHo Wealth — Wealth Advisor in Hyderabad" width={56} height={56} className="h-14 w-14 rounded-md" />
            </Link>
            <p className="font-display text-sm italic leading-relaxed text-white/50 mb-4">
              Boutique Wealth.<br />Institutional Thinking.
            </p>
            <address className="not-italic font-body text-xs leading-relaxed text-white/50">
              <span className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  110, Green Grace, Khajaguda<br />Hyderabad — 500032
                </span>
              </span>
            </address>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 text-sm tracking-wide uppercase" style={{ color: "#C9A84C" }}>Services</h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-body text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 text-sm tracking-wide uppercase" style={{ color: "#C9A84C" }}>Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-body text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 text-sm tracking-wide uppercase" style={{ color: "#C9A84C" }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919032999466" className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-white" />
                  +91 90329 99466
                </a>
              </li>
              <li>
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SoHo Wealth at +91 90329 99466" className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.874.854.854-2.874-.154-.257A8 8 0 1 1 12 20z"/></svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:invest@sohowealth.in" className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-white" />
                  invest@sohowealth.in
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/sohowealth" target="_blank" rel="noopener noreferrer" aria-label="SoHo Wealth on LinkedIn" className="flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 border-t border-white/10">
          <p className="text-xs font-body leading-relaxed text-white/40">
            Investments are subject to market risk. Please read all scheme-related documents carefully.
            SoHo Wealth is a distributor, not a SEBI Registered Investment Advisor.
            Past performance is not indicative of future results.
          </p>
        </div>

        <div className="py-4 border-t border-white/10">
          <p className="text-xs font-body text-center text-white/50">
            AMFI Registered Mutual Fund Distributor | AMFI Registered SIF Distributor (ARN: 306593) | APMI Registered PMS Distributor (APRN01233) | © {new Date().getFullYear()} SoHo Wealth. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
