import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const investmentLinks = [
  { name: "Investment Products", href: "/investment-products" },
  { name: "Mutual Funds", href: "/mutual-funds" },
  { name: "PMS", href: "/pms-advisory" },
  { name: "SIF", href: "/sif" },
  { name: "AIF", href: "/aif-advisory" },
  { name: "Pre-IPO", href: "/pre-ipo" },
  { name: "Global Investing", href: "/global-investing" },
];

const audienceLinks = [
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "For Doctors", href: "/financial-planning-for-doctors" },
  { name: "For IT Professionals", href: "/wealth-planning-for-it-professionals" },
  { name: "For Telugu NRIs", href: "/nri-telugu" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Why SoHo", href: "/why-us" },
  { name: "Insights", href: "/insights" },
  { name: "Hyderabad Wealth", href: "/wealth-management-hyderabad" },
  { name: "Portfolio Review", href: "/portfolio-review" },
  { name: "Contact", href: "/contact" },
  { name: "Disclosures", href: "/disclosures" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-block" aria-label="SoHo Wealth — Home">
              <Image
                src="/soho-logo.png"
                alt="SoHo Wealth — Wealth Advisor in Hyderabad"
                width={56}
                height={56}
                className="h-14 w-14 rounded-md"
              />
            </Link>
            <p className="mb-4 font-display text-sm italic leading-relaxed text-white/50">
              Boutique Wealth.
              <br />
              Institutional Thinking.
            </p>
            <address className="font-body text-xs not-italic leading-relaxed text-white/50">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>
                  110, Green Grace, Khajaguda
                  <br />
                  Hyderabad — 500032
                </span>
              </span>
            </address>
          </div>

          <FooterLinkColumn title="Investment Products" links={investmentLinks} />
          <FooterLinkColumn title="Who We Serve" links={audienceLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />

          <div>
            <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-wide text-[#C9A84C]">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919032999466"
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  +91 90329 99466
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919032999466"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp SoHo Wealth at +91 90329 99466"
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.214l-.257-.154-2.874.854.854-2.874-.154-.257A8 8 0 1 1 12 20z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:invest@sohowealth.in"
                  className="flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  invest@sohowealth.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/sohowealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SoHo Wealth on LinkedIn"
                  className="font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <p className="font-body text-xs leading-relaxed text-white/40">
            Investments are subject to market risk. Please read all scheme-related documents carefully. SoHo Wealth
            is a distributor, not a SEBI Registered Investment Advisor. Past performance is not indicative of future
            results.
          </p>
        </div>

        <div className="border-t border-white/10 py-4">
          <p className="text-center font-body text-xs text-white/50">
            AMFI Registered Mutual Fund Distributor | AMFI Registered SIF Distributor (ARN: 306593) | APMI
            Registered PMS Distributor (APRN01233) | © {new Date().getFullYear()} SoHo Wealth. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkColumnProps {
  title: string;
  links: Array<{ name: string; href: string }>;
}

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h2 className="mb-4 font-body text-sm font-semibold uppercase tracking-wide text-[#C9A84C]">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
