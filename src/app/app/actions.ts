"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createServerSupabase } from "@/integrations/supabase/server";

// ---------- schemas ----------
const familySchema = z.object({
  name: z.string().min(1),
  relationship: z.enum(["self","spouse","son","daughter","parent","sibling","other"]),
  date_of_birth: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
});

const incomeSchema = z.object({
  source: z.enum(["salary","bonus","rental","business","other"]),
  label: z.string().nullable().optional(),
  monthly_amount: z.coerce.number().min(0),
});

const expenseSchema = z.object({
  category: z.enum(["household","lifestyle","dependents","insurance","investments","other"]),
  label: z.string().nullable().optional(),
  monthly_amount: z.coerce.number().min(0),
});

const assetSchema = z.object({
  asset_class: z.enum(["liquid","debt","equity","gold","real_estate","personal"]),
  description: z.string().nullable().optional(),
  current_value: z.coerce.number().min(0),
  notes: z.string().nullable().optional(),
});

const liabilitySchema = z.object({
  loan_type: z.enum(["home","car","personal","credit_card","other"]),
  outstanding_amount: z.coerce.number().min(0),
  emi_monthly: z.coerce.number().min(0).default(0),
  interest_rate: z.coerce.number().min(0).default(0),
  notes: z.string().nullable().optional(),
});

const goalSchema = z.object({
  goal_name: z.string().min(1),
  goal_type: z.enum(["emergency","education","marriage","house","car","vacation","retirement","other"]),
  target_year: z.coerce.number().int().min(2024).max(2100),
  present_value: z.coerce.number().min(0),
  inflation_rate: z.coerce.number().min(0).default(7),
  earmarked_assets: z.coerce.number().min(0).default(0),
  priority: z.enum(["high","medium","low"]).default("medium"),
});

const insuranceSchema = z.object({
  policy_type: z.enum(["term_life","health","motor","critical_illness","personal_accident"]),
  provider: z.string().nullable().optional(),
  cover_amount: z.coerce.number().min(0),
  annual_premium: z.coerce.number().min(0).default(0),
  notes: z.string().nullable().optional(),
});

const profileSchema = z.object({
  full_name: z.string().min(1),
  phone: z.string().nullable().optional(),
  date_of_birth: z.string().min(8),
  retirement_age: z.coerce.number().int().min(40).max(80),
  city: z.string().nullable().optional(),
  occupation: z.string().nullable().optional(),
});

const planSchema = z.object({
  profile: profileSchema,
  family:    z.array(familySchema).default([]),
  income:    z.array(incomeSchema).default([]),
  expenses:  z.array(expenseSchema).default([]),
  assets:    z.array(assetSchema).default([]),
  liabilities: z.array(liabilitySchema).default([]),
  goals:     z.array(goalSchema).default([]),
  insurance: z.array(insuranceSchema).default([]),
});

export type PlanInput = z.infer<typeof planSchema>;

// ---------- the action ----------
export async function savePlan(raw: unknown) {
  const parsed = planSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false as const, error: parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`).join("; ") };
  }
  const data = parsed.data;

  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false as const, error: "Not authenticated" };

  // 1) profile upsert
  const profileErr = (await supabase
    .from("profiles")
    .update({ ...data.profile, onboarded_at: new Date().toISOString() })
    .eq("id", user.id)).error;
  if (profileErr) return { ok: false as const, error: profileErr.message };

  // 2) wipe + reinsert each child collection (simple, transactional via RLS)
  const collections: Array<[string, any[]]> = [
    ["family_members",     data.family.map(r => ({ ...r, user_id: user.id }))],
    ["income_items",       data.income.map(r => ({ ...r, user_id: user.id }))],
    ["expense_items",      data.expenses.map(r => ({ ...r, user_id: user.id }))],
    ["assets",             data.assets.map(r => ({ ...r, user_id: user.id }))],
    ["liabilities",        data.liabilities.map(r => ({ ...r, user_id: user.id }))],
    ["goals",              data.goals.map(r => ({ ...r, user_id: user.id }))],
    ["insurance_policies", data.insurance.map(r => ({ ...r, user_id: user.id }))],
  ];

  for (const [table, rows] of collections) {
    const { error: delErr } = await supabase.from(table).delete().eq("user_id", user.id);
    if (delErr) return { ok: false as const, error: `${table}: ${delErr.message}` };
    if (rows.length > 0) {
      const { error: insErr } = await supabase.from(table).insert(rows);
      if (insErr) return { ok: false as const, error: `${table}: ${insErr.message}` };
    }
  }

  revalidatePath("/app");
  revalidatePath("/app/onboarding");
  return { ok: true as const };
}

export async function savePlanAndGo(raw: unknown) {
  const result = await savePlan(raw);
  if (result.ok) redirect("/app");
  return result;
}
