import { NextResponse } from "next/server";

const ALLOWED_KEYS = new Set(["goal", "horizonYears", "risk", "target", "projected", "monthlyInvestment", "requiredSip", "sipStepUpPct", "fundingRatioPct", "downsideRatioPct"]);

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (Object.keys(body).some((key) => !ALLOWED_KEYS.has(key))) {
      return NextResponse.json({ error: "Only non-identifying planning fields are accepted" }, { status: 400 });
    }
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return NextResponse.json({ explanation: null, mode: "deterministic" });

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
    if (!response.ok) return NextResponse.json({ explanation: null, mode: "deterministic" });
    const data = await response.json() as { content?: Array<{ type: string; text?: string }> };
    const explanation = data.content?.find((item) => item.type === "text")?.text?.trim();
    return NextResponse.json({ explanation: explanation || null, mode: explanation ? "ai" : "deterministic" });
  } catch {
    return NextResponse.json({ explanation: null, mode: "deterministic" });
  }
}
