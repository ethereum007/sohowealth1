import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  goal: z.enum(["retirement", "education", "home", "wealth"]),
  horizonYears: z.number().min(1).max(50),
  risk: z.enum(["conservative", "balanced", "growth"]),
  target: z.number().nonnegative().max(1e12),
  projected: z.number().nonnegative().max(1e12),
  monthlyInvestment: z.number().nonnegative().max(1e9),
  requiredSip: z.number().nonnegative().max(1e9),
  sipStepUpPct: z.number().min(0).max(30),
  fundingRatioPct: z.number().min(0).max(10000),
  downsideRatioPct: z.number().min(0).max(10000),
}).strict();

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 10;
const requestLog = new Map<string, number[]>();

function rateLimited(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = forwarded || request.headers.get("x-real-ip") || "anonymous";
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  requestLog.set(key, [...recent, now]);
  if (requestLog.size > 5_000) {
    for (const [entry, times] of requestLog) {
      if (!times.some((time) => now - time < RATE_WINDOW_MS)) requestLog.delete(entry);
    }
  }
  return false;
}

export async function POST(request: Request) {
  try {
    if (rateLimited(request)) {
      return NextResponse.json({ explanation: null, mode: "deterministic", reason: "rate_limited" }, { status: 429 });
    }
    const parsed = requestSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Only non-identifying planning fields are accepted" }, { status: 400 });
    }
    const body = parsed.data;
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return NextResponse.json({ explanation: null, mode: "deterministic", reason: "provider_unavailable" });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: controller.signal,
      headers: { "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        system: "You explain educational Indian wealth-planning projections. Be calm, specific and concise. Never recommend a product, promise returns or claim regulated advice. Write exactly three short paragraphs: diagnosis, highest-impact action, and risk/review reminder. Use Indian rupee formatting.",
        messages: [{ role: "user", content: JSON.stringify(body) }],
      }),
    });
    clearTimeout(timeout);
    if (!response.ok) return NextResponse.json({ explanation: null, mode: "deterministic", reason: "provider_error" });
    const data = await response.json() as { content?: Array<{ type: string; text?: string }> };
    const explanation = data.content?.find((item) => item.type === "text")?.text?.trim();
    return NextResponse.json({ explanation: explanation || null, mode: explanation ? "ai" : "deterministic", reason: explanation ? null : "empty_response" });
  } catch {
    return NextResponse.json({ explanation: null, mode: "deterministic", reason: "provider_timeout" });
  }
}
