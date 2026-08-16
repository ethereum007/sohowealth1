"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type MenuLink = {
  name: string;
  href: string;
  description: string;
};

type NavigationItem =
  | { name: string; href: string }
  | {
      name: string;
      href: string;
      menuId: string;
      submenu: MenuLink[];
      overviewLabel: string;
    };

const investmentProducts: MenuLink[] = [
  {
    name: "Mutual Funds",
    href: "/mutual-funds",
    description: "Goal-based core portfolios and disciplined investing.",
  },
  {
    name: "PMS",
    href: "/pms-advisory",
    description: "Compare concentrated, professionally managed portfolios.",
  },
  {
    name: "SIF",
    href: "/sif",
    description: "Explore flexible strategies with a ₹10 lakh minimum.",
  },
  {
    name: "AIF",
    href: "/aif-advisory",
    description: "Private-market and alternative strategies for eligible investors.",
  },
  {
    name: "Pre-IPO",
    href: "/pre-ipo",
    description: "Curated private opportunities with deal-specific eligibility.",
  },
  {
    name: "Global Investing",
    href: "/global-investing",
    description: "Build measured exposure beyond Indian markets.",
  },
  {
    name: "GIFT City Outbound",
    href: "/gift-city-outbound-investing",
    description: "Compare global retail funds, AIFs and PMS routes from IFSC.",
  },
];

const audienceLinks: MenuLink[] = [
  {
    name: "Retirement Planning",
    href: "/retirement-planning",
    description: "Turn savings, pensions and NPS into a resilient retirement-income plan.",
  },
  {
    name: "Retirement Calculator",
    href: "/tools/retirement-calculator",
    description: "Estimate future expenses, retirement corpus and monthly investment.",
  },
  {
    name: "Inflation Calculator",
    href: "/tools/retirement-inflation-calculator",
    description: "See future retirement expenses and a fixed pension's purchasing power.",
  },
  {
    name: "Retirement Income Calculator",
    href: "/tools/retirement-income-calculator",
    description: "Estimate monthly income from an existing corpus and pension.",
  },
  {
    name: "NPS Annuity Calculator",
    href: "/tools/nps-annuity-calculator",
    description: "Compare monthly, quarterly and annual income from a live NPS annuity quote.",
  },
  {
    name: "EPF Calculator",
    href: "/tools/epf-calculator",
    description: "Project an EPF balance with editable contributions and interest assumptions.",
  },
  {
    name: "PPF Calculator",
    href: "/tools/ppf-calculator",
    description: "Estimate PPF maturity with editable deposits, term and rate.",
  },
  {
    name: "Retirement Readiness Check",
    href: "/tools/retirement-readiness-check",
    description: "Check ten retirement foundations and find the next planning step.",
  },
  {
    name: "AI Wealth Planner",
    href: "/tools/ai-wealth-planner",
    description: "Estimate your goal corpus, monthly SIP and illustrative asset mix.",
  },
  {
    name: "For Doctors",
    href: "/financial-planning-for-doctors",
    description: "Connect practice finances, investments and family wealth.",
  },
  {
    name: "For IT Professionals",
    href: "/wealth-planning-for-it-professionals",
    description: "Plan salary, bonuses, RSUs, ESOPs and financial independence.",
  },
  {
    name: "RSU Wealth Planning",
    href: "/rsu-esops",
    description: "Coordinate employer stock, records, goals and diversification.",
  },
  {
    name: "RSU Calculator",
    href: "/tools/rsu-concentration-calculator",
    description: "Measure current concentration and broader employer dependency.",
  },
  {
    name: "RSU Decision Check",
    href: "/tools/rsu-decision-check",
    description: "Compare sell-at-vest, fixed-rule and staged approaches.",
  },
  {
    name: "For Telugu NRIs",
    href: "/nri-telugu",
    description: "Coordinate India-linked wealth in Telugu or English.",
  },
];

const navigationItems: NavigationItem[] = [
  {
    name: "Investment Products",
    href: "/investment-products",
    menuId: "investment-products-menu",
    submenu: investmentProducts,
    overviewLabel: "View all investment products",
  },
  {
    name: "Who We Serve",
    href: "/who-we-serve",
    menuId: "who-we-serve-menu",
    submenu: audienceLinks,
    overviewLabel: "Explore who we serve",
  },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "IPO Research", href: "/ipo" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

function hasSubmenu(item: NavigationItem): item is Extract<NavigationItem, { submenu: MenuLink[] }> {
  return "submenu" in item;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavigation = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/30 bg-background/95 shadow-md backdrop-blur-xl"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center" aria-label="SoHo Wealth — Home">
            <Image
              src="/soho-logo.png"
              alt="SoHo Wealth — Wealth Planning and Investment Distribution in Hyderabad"
              width={56}
              height={56}
              className="h-14 w-14 rounded-md"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="group relative"
                onMouseEnter={() => hasSubmenu(item) && setOpenMenu(item.name)}
                onMouseLeave={() => hasSubmenu(item) && setOpenMenu(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpenMenu(null);
                  }
                }}
              >
                {hasSubmenu(item) ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openMenu === item.name}
                      aria-controls={item.menuId}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                      className="relative flex items-center gap-1.5 py-2 font-body text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          openMenu === item.name ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                    </button>

                    <AnimatePresence>
                      {openMenu === item.name && (
                        <motion.div
                          id={item.menuId}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute left-1/2 top-full -translate-x-1/2 rounded-2xl border border-border/60 bg-background p-3 shadow-2xl ${
                            item.name === "Investment Products" ? "w-[38rem]" : "w-[32rem]"
                          }`}
                        >
                          <div className={item.name === "Investment Products" ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeNavigation}
                                className="rounded-xl px-4 py-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              >
                                <span className="block font-body text-sm font-bold text-foreground">{subitem.name}</span>
                                <span className="mt-1 block font-body text-xs leading-relaxed text-muted-foreground">
                                  {subitem.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 border-t border-border/60 px-2 pt-2">
                            <Link
                              href={item.href}
                              onClick={closeNavigation}
                              className="inline-flex rounded-lg px-2 py-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-primary transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                              {item.overviewLabel} →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="relative py-2 font-body text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button
              asChild
              className="font-body font-semibold tracking-wide"
              style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
            >
              <Link href="/portfolio-review">Book Free Review</Link>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setOpenMenu(null);
            }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-primary-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-border bg-background xl:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-6 py-6" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {hasSubmenu(item) ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMenu === item.name}
                        aria-controls={`mobile-${item.menuId}`}
                        onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                        className="flex w-full items-center justify-between border-b border-border/40 py-3 font-body text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMenu === item.name ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {openMenu === item.name && (
                          <motion.div
                            id={`mobile-${item.menuId}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden border-b border-border/40"
                          >
                            <div className="space-y-1 py-2 pl-4">
                              <Link
                                href={item.href}
                                onClick={closeNavigation}
                                className="block rounded-lg py-2.5 font-body text-sm font-bold text-primary"
                              >
                                {item.overviewLabel} →
                              </Link>
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={closeNavigation}
                                  className="block rounded-lg py-2.5 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <span className="block font-semibold text-foreground">{subitem.name}</span>
                                  <span className="mt-0.5 block text-xs leading-relaxed">{subitem.description}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block border-b border-border/40 py-3 font-body text-base font-semibold text-foreground"
                      onClick={closeNavigation}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="mt-4 w-full font-body font-semibold"
                style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
              >
                <Link href="/portfolio-review" onClick={closeNavigation}>
                  Book Free Review
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
