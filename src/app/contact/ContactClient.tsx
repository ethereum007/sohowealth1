"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { JsonLd } from "@/components/seo/JsonLd";

const contactBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://sohowealth.in/contact" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://sohowealth.in/contact",
  name: "Contact SoHo Wealth — Wealth Advisor in Hyderabad",
  about: { "@id": "https://sohowealth.in/#organization" },
  mainEntity: { "@id": "https://sohowealth.in/#localbusiness" },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "110, Green Grace, Khajaguda, Hyderabad — 500032",
    href: "https://www.google.com/maps/search/?api=1&query=110+Green+Grace+Khajaguda+Hyderabad+500032",
  },
  { icon: Phone, title: "Call Us", content: "+91 90329 99466", href: "tel:+919032999466" },
  { icon: Mail, title: "Email Us", content: "invest@sohowealth.in", href: "mailto:invest@sohowealth.in" },
  { icon: Clock, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const whyReachOut = [
  {
    title: "Portfolio Review",
    items: ["Free assessment of current holdings", "Gap analysis & rebalancing suggestions", "Risk-return optimization"],
  },
  {
    title: "New Investments",
    items: ["SIF, PMS, AIF guidance", "Mutual fund selection", "Pre-IPO opportunities"],
  },
  {
    title: "NRI Advisory",
    items: ["FEMA-compliant investing", "NRE/NRO account guidance", "Repatriation planning"],
  },
  {
    title: "Wealth Planning",
    items: ["Retirement corpus building", "Children's education fund", "Tax-efficient strategies"],
  },
];

const steps = [
  { num: "01", title: "Fill out the form or call us", detail: "Takes less than 2 minutes" },
  { num: "02", title: "We schedule a consultation", detail: "At your convenience — call or video" },
  { num: "03", title: "Personalized wealth roadmap", detail: "Tailored to your goals & risk profile" },
  { num: "04", title: "Ongoing advisory & reviews", detail: "Quarterly monitoring & rebalancing" },
];

const faqs = [
  {
    q: "Is the initial consultation really free?",
    a: "Yes, absolutely. Our first consultation is complimentary with no obligations. We believe in earning your trust before you commit.",
  },
  {
    q: "What is the minimum investment amount?",
    a: "For mutual funds, there's no minimum. SIFs start at \u20B910L, PMS at \u20B950L, and AIFs at \u20B91Cr. We'll guide you to the right product.",
  },
  {
    q: "Can NRIs consult with you?",
    a: "Yes! We specialize in NRI advisory with FEMA-compliant solutions. Video consultations available worldwide.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We respond to all inquiries within 24 hours. For urgent matters, call us directly at +91 90329 99466.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E2E8F0" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-display text-base md:text-lg font-semibold pr-4" style={{ color: "#0B1F3A" }}>{q}</span>
        <ChevronDown
          className="flex-shrink-0 transition-transform duration-200"
          style={{ color: "#C9A84C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          size={20}
        />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pb-5">
          <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>{a}</p>
        </motion.div>
      )}
    </div>
  );
}

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investorType: "",
    investmentRange: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast.success("Thank you! We'll get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", investorType: "", investmentRange: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="pt-20">
      <JsonLd data={contactBreadcrumbs} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={contactFaqSchema} />
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Let's Build Your{" "}
              <span style={{ color: "#C9A84C" }}>Wealth Roadmap</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Book a complimentary, no-obligation consultation with our advisory team. We'll assess your portfolio, identify gaps, and create a roadmap tailored to your goals.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
            >
              Book Free Consultation →
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY REACH OUT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>
              How Can We <span style={{ color: "#C9A84C" }}>Help You</span>?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyReachOut.map((card) => (
              <AnimatedSection key={card.title}>
                <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                  <h3 className="font-display text-xl font-semibold mb-5" style={{ color: "#0B1F3A" }}>{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: "#C9A84C" }}>\u2192</span>
                        <span className="font-body text-base" style={{ color: "#4A5568" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>How It Works</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {steps.map((step) => (
              <AnimatedSection key={step.num}>
                <div className="flex gap-6 items-start py-6 border-b" style={{ borderColor: "#E2E8F0" }}>
                  <span className="font-display text-2xl font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>{step.num}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{step.title}</h3>
                    <p className="font-body text-sm mt-1" style={{ color: "#4A5568" }}>{step.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>
              Get in <span style={{ color: "#C9A84C" }}>Touch</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info) => (
              <AnimatedSection key={info.title}>
                <div className="rounded-xl bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full text-center" style={{ borderTopColor: "#0B1F3A" }}>
                  <div className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
                    <info.icon className="w-6 h-6" style={{ color: "#0B1F3A" }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#0B1F3A" }}>{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} className="font-body text-sm transition-colors hover:underline" style={{ color: "#4A5568" }}>{info.content}</a>
                  ) : (
                    <p className="font-body text-sm" style={{ color: "#4A5568" }}>{info.content}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
              Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span>
            </h2>
          </AnimatedSection>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="contact-form" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">
                Start Your Wealth Journey Today
              </h2>
              <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
                Fill out the form and our advisory team will reach out within 24 hours to schedule your complimentary consultation.
              </p>
              <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you'll get</p>
              <ul className="space-y-4 mb-10">
                {["Free portfolio health check", "Personalized investment roadmap", "Tax-efficient strategies", "Direct access to Kiran Dutta", "No obligations \u2014 ever"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span>
                    <span className="font-body text-base text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 rounded-xl border" style={{ borderColor: "rgba(201,168,76,0.3)", backgroundColor: "rgba(201,168,76,0.05)" }}>
                <h3 className="font-display text-lg font-semibold text-white mb-3">Prefer a Quick Chat?</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/919032999466?text=Hi%20SoHo%20Wealth%2C%20I%27d%20like%20to%20discuss%20wealth%20management%20advisory." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sm group" style={{ color: "#C9A84C" }}>
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+919032999466" className="inline-flex items-center gap-2 font-semibold text-sm group" style={{ color: "#C9A84C" }}>
                    <Phone className="w-4 h-4" /> +91 90329 99466 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-2xl bg-white p-8 lg:p-10 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)]">
                <h3 className="font-display text-2xl font-semibold mb-6" style={{ color: "#0B1F3A" }}>Book Your Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 border-gray-200 focus:border-[#C9A84C] focus:ring-[#C9A84C]" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-12 border-gray-200 focus:border-[#C9A84C] focus:ring-[#C9A84C]" />
                    <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 border-gray-200 focus:border-[#C9A84C] focus:ring-[#C9A84C]" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select onValueChange={(val) => setFormData({ ...formData, investorType: val })}>
                      <SelectTrigger className="h-12 border-gray-200"><SelectValue placeholder="Investor Type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual / HNI</SelectItem>
                        <SelectItem value="family">Family Office</SelectItem>
                        <SelectItem value="nri">NRI</SelectItem>
                        <SelectItem value="business">Business Owner</SelectItem>
                        <SelectItem value="professional">Doctor / Professional</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={(val) => setFormData({ ...formData, investmentRange: val })}>
                      <SelectTrigger className="h-12 border-gray-200"><SelectValue placeholder="Investment Range" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-10l">Below \u20B910 Lakhs</SelectItem>
                        <SelectItem value="10l-50l">\u20B910L - \u20B950L</SelectItem>
                        <SelectItem value="50l-1cr">\u20B950L - \u20B91 Crore</SelectItem>
                        <SelectItem value="1cr-5cr">\u20B91Cr - \u20B95 Crores</SelectItem>
                        <SelectItem value="above-5cr">Above \u20B95 Crores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea placeholder="Tell us about your financial goals..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[120px] resize-none border-gray-200 focus:border-[#C9A84C] focus:ring-[#C9A84C]" />
                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center h-14 px-8 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                    {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </button>
                </form>
                <p className="font-body text-xs text-center mt-4" style={{ color: "#4A5568" }}>
                  By submitting, you agree to our privacy policy. We never share your data.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactClient;
