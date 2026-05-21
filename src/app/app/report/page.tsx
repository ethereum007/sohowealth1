import { redirect } from "next/navigation";
import { createServerSupabase } from "@/integrations/supabase/server";
import { computePlan } from "@/lib/wealth/calculations";
import { buildImplementation } from "@/lib/wealth/implementation";
import { projectCashflows, buildActionPlan } from "@/lib/wealth/projections";
import type { UserData } from "@/lib/wealth/types";
import ReportView from "./ReportView";

export const dynamic = "force-dynamic";
export const metadata = { title: "Your Financial Plan — SoHo Wealth" };

export default async function ReportPage() {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const [profileR, familyR, incomeR, expenseR, assetR, liabR, goalR, insR, holdingR] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase.from("family_members").select("*").eq("user_id", user.id),
    supabase.from("income_items").select("*").eq("user_id", user.id),
    supabase.from("expense_items").select("*").eq("user_id", user.id),
    supabase.from("assets").select("*").eq("user_id", user.id),
    supabase.from("liabilities").select("*").eq("user_id", user.id),
    supabase.from("goals").select("*").eq("user_id", user.id).order("target_year"),
    supabase.from("insurance_policies").select("*").eq("user_id", user.id),
    supabase.from("holdings").select("*").eq("user_id", user.id),
  ]);

  if (!profileR.data?.onboarded_at) redirect("/app/onboarding");

  const data: UserData = {
    profile: profileR.data!,
    family: familyR.data ?? [],
    income: incomeR.data ?? [],
    expenses: expenseR.data ?? [],
    assets: assetR.data ?? [],
    liabilities: liabR.data ?? [],
    goals: goalR.data ?? [],
    insurance: insR.data ?? [],
    holdings: holdingR.data ?? [],
  };

  const plan = computePlan(data);
  const impl = buildImplementation(plan, data.profile);
  const cashflows = projectCashflows(data, plan, data.profile, 10);
  const actions = buildActionPlan(plan, data, impl);

  return <ReportView data={data} plan={plan} impl={impl} cashflows={cashflows} actions={actions} />;
}
