"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "SIF (SIFPrime)", href: "/sif" },
      { name: "PMS Advisory", href: "/pms-advisory" },
      { name: "AIF Advisory", href: "/aif-advisory" },
      { name: "NRI Advisory", href: "/services/nri" },
      { name: "Pre-IPO", href: "/pre-ipo" },
      { name: "RSU & ESOPs", href: "/rsu-esops" },
      { name: "Mutual Funds", href: "/mutual-funds" },
      { name: "Global Investing", href: "/global-investing" },
    ],
  },
  { name: "Insights", href: "/budget-2026" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border/30"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/soho-logo.jpeg"
              alt="SoHo Wealth — Premier Wealth Management Firm Hyderabad"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors cursor-pointer tracking-wide font-body"
                    onMouseEnter={() => setOpenSubmenu(link.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />

                    <AnimatePresence>
                      {openSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-3 w-52 bg-background border border-border/50 rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-3 text-sm font-medium font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors relative tracking-wide font-body"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="font-body font-semibold tracking-wide"
              style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
            >
              <Link href="/portfolio-review">Book Free Review</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-base font-semibold font-body text-foreground py-2.5 border-b border-border/40"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === link.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block py-2.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-base font-semibold font-body text-foreground py-2.5 border-b border-border/40"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="mt-4 w-full font-body font-semibold"
                style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
              >
                <Link href="/portfolio-review" onClick={() => setIsMobileMenuOpen(false)}>
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
