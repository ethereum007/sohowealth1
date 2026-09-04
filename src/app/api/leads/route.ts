import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { createAdminSupabase } from "@/integrations/supabase/admin";
import { leadSubmissionSchema, toLeadRow, type ValidLeadSubmission } from "@/lib/leads/validation";

export const dynamic = "force-dynamic";
const LEAD_NOTIFICATION_EMAIL = "kiran@sohowealth.in";
const MAX_BODY_BYTES = 32_000;
const requestWindow = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: NextRequest) {
  const key = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now();
  const current = requestWindow.get(key);
  if (!current || current.resetAt < now) { requestWindow.set(key, { count: 1, resetAt: now + 60_000 }); return false; }
  current.count += 1;
  return current.count > 8;
}

function escapeHtml(value: unknown) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

async function sendLeadEmail(lead: ValidLeadSubmission) {
  if (!process.env.RESEND_API_KEY) return false;
  const rows = Object.entries({
    Reference: lead.request_id.slice(0, 8).toUpperCase(), Name: lead.name, Phone: lead.phone,
    Email: lead.email || "Not supplied", Intent: lead.intent, Offer: lead.lead_offer,
    Portfolio: lead.portfolio_size, Residency: lead.resident_status, "Call window": lead.call_time,
    Qualification: lead.qualification_value, Message: lead.message, Page: lead.attribution.page_path,
  }).filter(([, value]) => value).map(([key, value]) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;color:#64748b">${escapeHtml(key)}</td><td style="padding:6px 10px;border-bottom:1px solid #e5e7eb"><strong>${escapeHtml(value)}</strong></td></tr>`).join("");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: process.env.LEAD_EMAIL_FROM || "SoHo Wealth <leads@sohowealth.in>", to: LEAD_NOTIFICATION_EMAIL,
    ...(lead.email ? { replyTo: lead.email } : {}), subject: `New SoHo Wealth ${lead.intent} request: ${lead.name}`,
    html: `<div style="font-family:Inter,Arial,sans-serif;max-width:680px;margin:auto"><h1>New SoHo Wealth request</h1><table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table></div>`,
  });
  if (response.error) { console.error("[api/leads] notification delivery failed", { name: response.error.name }); return false; }
  return true;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) return NextResponse.json({ saved: false, error: "Please wait before trying again." }, { status: 429 });
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return NextResponse.json({ saved: false, error: "We could not process this request." }, { status: 413 });
  const raw = await request.text().catch(() => "");
  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) return NextResponse.json({ saved: false, error: "We could not process this request." }, { status: 413 });
  let body: unknown = null;
  try { body = raw ? JSON.parse(raw) : null; } catch { return NextResponse.json({ saved: false, error: "Please check the form and try again." }, { status: 400 }); }
  const parsed = leadSubmissionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ saved: false, error: "Please check the form and try again." }, { status: 400 });
  const lead = parsed.data;
  if (lead.website) return NextResponse.json({ saved: false, error: "We could not process this request." }, { status: 400 });
  try {
    const supabase = createAdminSupabase();
    const { error } = await supabase.from("portfolio_leads").insert(toLeadRow(lead));
    if (error?.code === "23505") return NextResponse.json({ saved: true, duplicate: true, notificationDelivered: false, requestId: lead.request_id });
    if (error) { console.error("[api/leads] lead insert failed", { code: error.code }); return NextResponse.json({ saved: false, error: "We could not save your request. Please use WhatsApp or try again." }, { status: 500 }); }
    const notificationDelivered = await sendLeadEmail(lead).catch((error: unknown) => { console.error("[api/leads] notification exception", { name: error instanceof Error ? error.name : "unknown" }); return false; });
    return NextResponse.json({ saved: true, notificationDelivered, requestId: lead.request_id });
  } catch (error) {
    console.error("[api/leads] server configuration error", { name: error instanceof Error ? error.name : "unknown" });
    return NextResponse.json({ saved: false, error: "We could not save your request. Please use WhatsApp or try again." }, { status: 500 });
  }
}
