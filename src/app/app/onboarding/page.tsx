import { createServerSupabase } from "@/integrations/supabase/server";
import OnboardingForm from "./OnboardingForm";
import type { PlanInput } from "../actions";

export const dynamic = "force-dynamic";

export default async function OnboardingPage() {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null; // layout already redirects

  const [profileR, familyR, incomeR, expenseR, assetR, liabR, goalR, insR] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase.from("family_members").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("income_items").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("expense_items").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("assets").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("liabilities").select("*").eq("user_id", user.id).order("created_at"),
    supabase.from("goals").select("*").eq("user_id", user.id).order("target_year"),
    supabase.from("insurance_policies").select("*").eq("user_id", user.id).order("created_at"),
  ]);

  const initial: PlanInput = {
    profile: {
      full_name: profileR.data?.full_name ?? "",
      phone: profileR.data?.phone ?? "",
      date_of_birth: profileR.data?.date_of_birth ?? "",
      retirement_age: profileR.data?.retirement_age ?? 60,
      city: profileR.data?.city ?? "",
      occupation: profileR.data?.occupation ?? "",
    },
    family: (familyR.data ?? []).map(r => ({
      name: r.name, relationship: r.relationship,
      date_of_birth: r.date_of_birth, notes: r.notes,
    })),
    income: (incomeR.data ?? []).map(r => ({
      source: r.source, label: r.label, monthly_amount: Number(r.monthly_amount),
    })),
    expenses: (expenseR.data ?? []).map(r => ({
      category: r.category, label: r.label, monthly_amount: Number(r.monthly_amount),
    })),
    assets: (assetR.data ?? []).map(r => ({
      asset_class: r.asset_class, description: r.description,
      current_value: Number(r.current_value), notes: r.notes,
    })),
    liabilities: (liabR.data ?? []).map(r => ({
      loan_type: r.loan_type,
      outstanding_amount: Number(r.outstanding_amount),
      emi_monthly: Number(r.emi_monthly),
      interest_rate: Number(r.interest_rate),
      notes: r.notes,
    })),
    goals: (goalR.data ?? []).map(r => ({
      goal_name: r.goal_name, goal_type: r.goal_type,
      target_year: r.target_year, present_value: Number(r.present_value),
      inflation_rate: Number(r.inflation_rate),
      earmarked_assets: Number(r.earmarked_assets),
      priority: r.priority,
    })),
    insurance: (insR.data ?? []).map(r => ({
      policy_type: r.policy_type, provider: r.provider,
      cover_amount: Number(r.cover_amount), annual_premium: Number(r.annual_premium),
      notes: r.notes,
    })),
  };

  const isFirstTime = !profileR.data?.onboarded_at;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-amber-700 font-bold">
          {isFirstTime ? "Step 1 of 1" : "Edit your plan"}
        </p>
        <h1 className="font-serif text-3xl text-slate-900 mt-2">
          {isFirstTime ? "Tell us about your finances" : "Update your data"}
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl">
          Fill what you know — leave the rest blank. The dashboard recomputes the moment you save.
          Everything is private to your account; only you (and Kiran, if you book a consultation) can see it.
        </p>
      </div>
      <OnboardingForm initial={initial} />
    </div>
  );
}
