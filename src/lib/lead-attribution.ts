"use client";

const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "msclkid", "fbclid"] as const;
export type AttributionTouch = Record<(typeof attributionKeys)[number] | "landing_page" | "referrer" | "captured_at", string | null>;
export type LeadAttribution = { first_touch: AttributionTouch; last_touch: AttributionTouch; page_path: string | null };
const storageKey = "soho_lead_first_touch_v1";

function emptyTouch(): AttributionTouch {
  return { landing_page: null, referrer: null, captured_at: null, utm_source: null, utm_medium: null, utm_campaign: null, utm_term: null, utm_content: null, gclid: null, gbraid: null, wbraid: null, msclkid: null, fbclid: null };
}

function currentTouch(): AttributionTouch {
  const params = new URLSearchParams(window.location.search);
  const touch = emptyTouch();
  touch.landing_page = window.location.href;
  touch.referrer = document.referrer || null;
  touch.captured_at = new Date().toISOString();
  for (const key of attributionKeys) touch[key] = params.get(key);
  return touch;
}

export function resolveFirstTouch(lastTouch: AttributionTouch, storage?: Pick<Storage, "getItem" | "setItem">): AttributionTouch {
  if (!storage) return lastTouch;
  try {
    const stored = storage.getItem(storageKey);
    if (stored) return { ...emptyTouch(), ...JSON.parse(stored) } as AttributionTouch;
    storage.setItem(storageKey, JSON.stringify(lastTouch));
  } catch { /* Storage can be blocked by privacy settings. */ }
  return lastTouch;
}

export function captureLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return { first_touch: emptyTouch(), last_touch: emptyTouch(), page_path: null };
  const lastTouch = currentTouch();
  const firstTouch = resolveFirstTouch(lastTouch, window.localStorage);
  return { first_touch: firstTouch, last_touch: lastTouch, page_path: window.location.pathname };
}
