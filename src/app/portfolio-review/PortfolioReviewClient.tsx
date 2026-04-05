"use client";

import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/gtag";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  portfolio_size: z.string().min(1, "Please select portfolio size"),
  is_nri: z.boolean(),
  call_time: z.string().optional(),
  referral_source: z.string().optional(),
});

const portfolioSizes = ["\u20B925L \u2013 \u20B950L", "\u20B950L \u2013 \u20B91Cr", "\u20B91Cr \u2013 \u20B95Cr", "\u20B95Cr+"];
const callTimes = ["Morning 9-12", "Afternoon 12-4", "Evening 4-7"];
const referralSources = ["LinkedIn", "Instagram", "WhatsApp", "Google", "Referral", "Other"];

const PortfolioReviewClient = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", portfolio_size: "", is_nri: false, call_time: "", referral_source: "",
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
      result.error.issues.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("portfolio_leads").insert([{
      name: result.data.name, phone: result.data.phone, email: result.data.email,
      portfolio_size: result.data.portfolio_size, is_nri: result.data.is_nri,
      call_time: result.data.call_time || null, referral_source: result.data.referral_source || null, source: "direct-landing",
    }]);
    setLoading(false);
    if (error) { toast({ title: "Something went wrong", description: "Please try again or WhatsApp us.", variant: "destructive" }); return; }
    trackEvent("form_submit", { form_source: "direct-landing", portfolio_size: result.data.portfolio_size });
    setSubmitted(true);
  };

  const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition";
  const selectClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition appearance-none";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5 font-body";
  const errorClass = "text-xs mt-1 font-body text-red-500";

  const checklistItems = [
    "How your portfolio compares to your actual goals",
    "Where you're paying hidden fees (most pay 1-2% extra)",
    "Whether PMS, SIF, or AIF is right for you",
    "Your real returns vs inflation benchmark",
    "A clear next-step roadmap",
  ];

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column */}
      <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-20" style={{ backgroundColor: "#0B1F3A" }}>
        <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white mb-2">Get a Free Portfolio Review</h1>
        <p className="font-body text-lg text-white/60 italic mb-10">(No sales pitch. Seriously.)</p>
        <p className="font-body text-base text-white/80 mb-6">In 30 minutes we'll show you:</p>
        <ul className="space-y-4 mb-10">
          {checklistItems.map((item) => (
            <li key={item} className="flex items-start gap-3"><span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span><span className="font-body text-base text-white/90">{item}</span></li>
          ))}
        </ul>
        <p className="font-body text-sm text-white/50 mb-12">This is for you if your investable portfolio is <strong className="text-white/80">\u20B925 lakh or more.</strong></p>
        <div className="rounded-xl p-6" style={{ backgroundColor: "#C9A84C" }}>
          <p className="font-body text-base italic leading-relaxed" style={{ color: "#0B1F3A" }}>"SoHo Wealth helped us realign from FDs and underperforming MFs into a structured allocation that reflects our goals."</p>
          <p className="font-body text-sm font-semibold mt-3" style={{ color: "#0B1F3A" }}>\u2014 Entrepreneur, Hyderabad</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-20 bg-white">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-5">\u2705</div>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-3">Booked!</h2>
            <p className="font-body text-base text-gray-600 leading-relaxed">
              Kiran will reach out within 24 hours.<br />
              For faster response, WhatsApp:{" "}
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#C9A84C" }}>+91 90329 99466</a>
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Book My Free 30-Min Review</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label className={labelClass}>Full Name *</label><input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />{errors.name && <p className={errorClass}>{errors.name}</p>}</div>
              <div><label className={labelClass}>Phone Number *</label><input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} className={inputClass} />{errors.phone && <p className={errorClass}>{errors.phone}</p>}</div>
              <div><label className={labelClass}>Email *</label><input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputClass} />{errors.email && <p className={errorClass}>{errors.email}</p>}</div>
              <div><label className={labelClass}>Portfolio Size *</label><select name="portfolio_size" value={form.portfolio_size} onChange={handleChange} className={selectClass}><option value="" disabled>Select range</option>{portfolioSizes.map((s) => (<option key={s} value={s}>{s}</option>))}</select>{errors.portfolio_size && <p className={errorClass}>{errors.portfolio_size}</p>}</div>
              <div>
                <label className={labelClass}>Are you an NRI?</label>
                <div className="flex gap-4">
                  {[false, true].map((val) => (
                    <button key={String(val)} type="button" onClick={() => setForm((prev) => ({ ...prev, is_nri: val }))}
                      className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 font-body border"
                      style={form.is_nri === val ? { backgroundColor: "#C9A84C", color: "#0B1F3A", borderColor: "#C9A84C" } : { backgroundColor: "white", color: "#6b7280", borderColor: "#d1d5db" }}>
                      {val ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
              <div><label className={labelClass}>Best time to call</label><select name="call_time" value={form.call_time} onChange={handleChange} className={selectClass}><option value="" disabled>Select time</option>{callTimes.map((t) => (<option key={t} value={t}>{t}</option>))}</select></div>
              <div><label className={labelClass}>How did you hear about us?</label><select name="referral_source" value={form.referral_source} onChange={handleChange} className={selectClass}><option value="" disabled>Select</option>{referralSources.map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-50 font-body" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                {loading ? "Submitting..." : "Claim My Free Portfolio Review \u2192"}
              </button>
            </form>
            <p className="font-body text-xs text-gray-400 mt-6 text-center leading-relaxed">Your information is never shared with third parties.<br />SoHo Wealth is AMFI and APMI registered.</p>
          </>
        )}
      </div>
    </main>
  );
};

export default PortfolioReviewClient;
