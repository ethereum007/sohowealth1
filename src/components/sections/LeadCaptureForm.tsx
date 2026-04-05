"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackEvent } from "@/lib/gtag";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  portfolio_size: z.string().min(1, "Please select portfolio size"),
  is_nri: z.boolean(),
  call_time: z.string().optional(),
});

const portfolioSizes = ["₹25L – ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "₹5Cr+"];
const callTimes = ["Morning 9-12", "Afternoon 12-4", "Evening 4-7"];

interface LeadCaptureFormProps {
  source?: string;
  heading?: string;
  leftContent?: React.ReactNode;
  sectionId?: string;
}

export function LeadCaptureForm({
  source,
  heading = "Book Your Free Portfolio Review",
  leftContent,
  sectionId = "portfolio-review",
}: LeadCaptureFormProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    portfolio_size: "",
    is_nri: false,
    call_time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("portfolio_leads").insert([{
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      portfolio_size: result.data.portfolio_size,
      is_nri: result.data.is_nri,
      call_time: result.data.call_time || null,
      source: source || null,
    }]);
    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or WhatsApp us.", variant: "destructive" });
      return;
    }
    trackEvent("form_submit", { form_source: source || "homepage", portfolio_size: result.data.portfolio_size });
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition";
  const selectClass =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition appearance-none";
  const labelClass = "block text-sm font-semibold text-white/80 mb-1.5 font-body";
  const errorClass = "text-xs mt-1 font-body";

  const defaultLeftContent = (
    <>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">
        Is Your Portfolio Actually Working For You?
      </h2>
      <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
        Most Hyderabad investors are over-allocated to FDs, underperforming MFs, and LIC plans — and don't know it.
      </p>
      <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
        What you'll get
      </p>
      <ul className="space-y-4 mb-10">
        {[
          "Asset allocation analysis vs your goals",
          "Return benchmarking vs inflation",
          "Fee leakage identification",
          "Personalized investment roadmap",
          "30-minute 1-on-1 with Kiran Dutta",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>✅</span>
            <span className="font-body text-base text-white/90">{item}</span>
          </li>
        ))}
      </ul>
      <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>
        For portfolios of ₹25 lakh and above. No obligation. No sales pitch.
      </p>
    </>
  );

  return (
    <section id={sectionId} ref={ref} className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {leftContent || defaultLeftContent}
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-5">🎉</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">Thank you!</h3>
                <p className="font-body text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  Kiran will personally reach out within 24 hours.
                  <br />
                  Meanwhile, WhatsApp us at{" "}
                  <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#C9A84C" }}>
                    +91 90329 99466
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-8">{heading}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />
                    {errors.name && <p className={errorClass} style={{ color: "#f87171" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className={inputClass} />
                    {errors.phone && <p className={errorClass} style={{ color: "#f87171" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputClass} />
                    {errors.email && <p className={errorClass} style={{ color: "#f87171" }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Portfolio Size</label>
                    <select name="portfolio_size" value={form.portfolio_size} onChange={handleChange} className={selectClass}>
                      <option value="" disabled>Select range</option>
                      {portfolioSizes.map((s) => (<option key={s} value={s} className="text-gray-900">{s}</option>))}
                    </select>
                    {errors.portfolio_size && <p className={errorClass} style={{ color: "#f87171" }}>{errors.portfolio_size}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Are you an NRI?</label>
                    <div className="flex gap-4">
                      {[false, true].map((val) => (
                        <button key={String(val)} type="button" onClick={() => setForm((prev) => ({ ...prev, is_nri: val }))}
                          className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 font-body"
                          style={form.is_nri === val ? { backgroundColor: "#C9A84C", color: "#0B1F3A" } : { backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
                        >
                          {val ? "Yes" : "No"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Best time to call</label>
                    <select name="call_time" value={form.call_time} onChange={handleChange} className={selectClass}>
                      <option value="" disabled>Select time</option>
                      {callTimes.map((t) => (<option key={t} value={t} className="text-gray-900">{t}</option>))}
                    </select>
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-50 font-body"
                    style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
                  >
                    {loading ? "Submitting..." : "Get My Free Review →"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
