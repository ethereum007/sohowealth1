"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { captureLeadAttribution } from "@/lib/lead-attribution";
import { trackAnalyticsEvent } from "@/lib/analytics/events";
import { getLeadIntent } from "@/lib/leads/lead-intents";
import type { LeadIntent } from "@/lib/leads/types";
import { submitPortfolioLead } from "@/lib/lead-submit";
import { LeadStepOne, type LeadFormState } from "./LeadStepOne";
import { LeadStepTwo } from "./LeadStepTwo";
import { LeadSuccess } from "./LeadSuccess";

type Props = { intent: LeadIntent; service?: string; ctaVariant?: string; heading?: string; comparedStrategies?: string[] };

export function ContextualLeadForm({ intent, service, ctaVariant = "default", heading, comparedStrategies }: Props) {
  const startedAt = useRef(new Date().toISOString());
  const startTracked = useRef(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<LeadFormState>({ name: "", phone: "", intent, portfolio_size: "", email: "", resident_status: "resident", call_time: "", message: "", qualification_value: "", privacy_consent: false, website: "" });
  const config = useMemo(() => getLeadIntent(form.intent), [form.intent]);
  const analytics = { intent: config.intent, keyword_cluster: config.keywordCluster, lead_offer: config.leadOffer, cta_variant: ctaVariant, source_component: "contextual-lead-form", service };

  useEffect(() => { trackAnalyticsEvent("lead_offer_view", { intent: config.intent, keyword_cluster: config.keywordCluster, lead_offer: config.leadOffer, cta_variant: ctaVariant, source_component: "contextual-lead-form", service }); }, [config.intent, config.keywordCluster, config.leadOffer, ctaVariant, service]);

  function change(name: keyof LeadFormState, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function continueToStepTwo() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\+?[0-9][0-9\s()-]{7,19}$/.test(form.phone.trim())) next.phone = "Enter a valid mobile or WhatsApp number.";
    if (Object.keys(next).length) { setErrors(next); trackAnalyticsEvent("lead_form_error", { ...analytics, error_stage: "step_1" }); queueMicrotask(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()); return; }
    setStep(2); trackAnalyticsEvent("lead_form_step_1_complete", analytics); trackAnalyticsEvent("lead_form_step_2_view", analytics);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.portfolio_size) next.portfolio_size = "Select your portfolio range.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email or leave it blank.";
    if (!form.privacy_consent) next.privacy_consent = "Consent is required so we can respond.";
    if (Object.keys(next).length) { setErrors(next); trackAnalyticsEvent("lead_form_error", { ...analytics, error_stage: "step_2" }); queueMicrotask(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()); return; }
    setLoading(true);
    const id = crypto.randomUUID();
    const { error, result } = await submitPortfolioLead({
      request_id: id, name: form.name, phone: form.phone, email: form.email || null,
      intent: config.intent, keyword_cluster: config.keywordCluster, lead_offer: config.leadOffer,
      page_type: config.pageType, cta_variant: ctaVariant, source: config.source, service: service || null,
      portfolio_size: form.portfolio_size, resident_status: form.resident_status, call_time: form.call_time || null,
      message: form.message || null, qualification_key: config.qualification?.key || null,
      qualification_value: form.qualification_value || null, privacy_consent: true,
      consented_at: new Date().toISOString(), form_started_at: startedAt.current, website: form.website,
      compared_strategies: comparedStrategies, attribution: captureLeadAttribution(),
    });
    setLoading(false);
    if (error) { setErrors({ submit: error.message }); trackAnalyticsEvent("lead_form_error", { ...analytics, error_stage: "submit" }); return; }
    setRequestId(result?.requestId || id); trackAnalyticsEvent("lead_form_submit", analytics);
  }

  if (requestId) return <LeadSuccess heading={config.successHeading} copy={config.successCopy} requestId={requestId} />;
  return (
    <div className="rounded-2xl bg-[#0B1F3A] p-6 md:p-8" onFocus={() => { if (!startTracked.current) { startTracked.current = true; trackAnalyticsEvent("lead_form_start", analytics); } }}>
      <div className="mb-7 flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#C9A84C]">Step {step} of 2</p><h3 className="mt-2 font-display text-2xl font-semibold text-white">{heading || config.heading}</h3><p className="mt-2 text-sm leading-relaxed text-white/65">{config.supportingCopy}</p></div><span className="shrink-0 text-sm text-white/50">{step}/2</span></div>
      {step === 1 ? <LeadStepOne form={form} errors={errors} onChange={change} onContinue={continueToStepTwo} /> : <LeadStepTwo config={config} form={form} errors={errors} loading={loading} onChange={change} onBack={() => setStep(1)} onSubmit={submit} />}
      {errors.submit ? <p role="alert" className="mt-4 rounded-lg bg-red-950/40 p-3 text-sm text-red-200">{errors.submit}</p> : null}
      <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" data-analytics-location="lead-form" className="mt-5 block text-center text-sm font-semibold text-[#E5CB83] underline">Prefer WhatsApp? Message SoHo Wealth</a>
    </div>
  );
}
