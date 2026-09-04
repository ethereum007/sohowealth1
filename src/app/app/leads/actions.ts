"use server";
import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/integrations/supabase/server";
import { createAdminSupabase } from "@/integrations/supabase/admin";
import { z } from "zod";
const stages = new Set(["new","contacted","qualified","scheduled","meeting-completed","opportunity","won","lost","spam"]);
function allowed(email?:string){ const configured=(process.env.SOHO_ADMIN_EMAILS || "kiran@sohowealth.in").toLowerCase().split(",").map(v=>v.trim()); return Boolean(email && configured.includes(email.toLowerCase())); }
export async function updateLeadStage(formData:FormData){ const parsed=z.object({id:z.string().uuid(),stage:z.string().refine(value=>stages.has(value))}).safeParse({id:formData.get("id"),stage:formData.get("stage")}); if(!parsed.success)return; const auth=await createServerSupabase(); const {data:{user}}=await auth.auth.getUser(); if(!allowed(user?.email)) return; const {error}=await createAdminSupabase().from("portfolio_leads").update({lead_stage:parsed.data.stage}).eq("id",parsed.data.id); if(error) console.error("[app/leads] update failed",{code:error.code}); revalidatePath("/app/leads"); }
