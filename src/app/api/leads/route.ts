import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  portfolio_size: z.string().trim().min(1).max(100),
  is_nri: z.boolean().default(false),
  call_time: z.string().nullable().optional(),
  referral_source: z.string().nullable().optional(),
  source: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  landing_page: z.string().nullable().optional(),
  page_path: z.string().nullable().optional(),
  referrer: z.string().nullable().optional(),
  utm_source: z.string().nullable().optional(),
  utm_medium: z.string().nullable().optional(),
  utm_campaign: z.string().nullable().optional(),
  utm_term: z.string().nullable().optional(),
  utm_content: z.string().nullable().optional(),
});

function rows(data: Record<string, unknown>) {
  return Object.entries(data)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([key, value]) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;color:#64748b;">${key}</td><td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;color:#0f172a;"><strong>${String(value)}</strong></td></tr>`)
    .join("");
}

async function sendLeadEmail(lead: z.infer<typeof leadSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[api/leads] RESEND_API_KEY not configured; lead saved without email notification");
    return { sent: false, error: "RESEND_API_KEY is not configured in Vercel" };
  }

  const resend = new Resend(apiKey);
  const subject = `New SoHo Wealth lead: ${lead.name} (${lead.portfolio_size})`;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f172a;">
      <h1 style="font-size:22px;margin-bottom:8px;">New SoHo Wealth Lead</h1>
      <p style="color:#475569;margin-top:0;">A new lead was submitted from ${lead.source || lead.page_path || "the website"}.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">${rows(lead)}</table>
      <p style="margin-top:18px;">
        <a href="https://wa.me/${lead.phone.replace(/\\D/g, "")}" style="color:#0B1F3A;font-weight:700;">Open WhatsApp</a>
        &nbsp;|&nbsp;
        <a href="mailto:${lead.email}" style="color:#0B1F3A;font-weight:700;">Reply by email</a>
      </p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: process.env.LEAD_EMAIL_FROM || "SoHo Wealth <leads@sohowealth.in>",
    to: process.env.LEAD_EMAIL_TO || "kiran@sohowealth.in",
    replyTo: lead.email,
    subject,
    html,
  });

  if (error) {
    console.error("[api/leads] Resend email failed", error);
    return { sent: false, error: error.message };
  }

  return { sent: true, error: null };
}

export async function POST(req: NextRequest) {
  const parsed = leadSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead data" }, { status: 400 });
  }

  const lead = parsed.data;
  const email = await sendLeadEmail(lead);
  return NextResponse.json({ ok: true, email });
}
