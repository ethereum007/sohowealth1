import assert from "node:assert/strict";
import test from "node:test";
import { leadIntents } from "./lead-intents";
import { leadSubmissionSchema, normalizePhone } from "./validation";
import { sanitizeAnalyticsParams } from "../analytics/events";
import { resolveFirstTouch, type AttributionTouch } from "../lead-attribution";

const now = Date.now();
const base = {
  request_id: "901d0149-e73a-46fb-9355-76daee2b817c", name: "Test Lead", phone: "+91 90329 99466", email: null,
  intent: "portfolio-review", keyword_cluster: "core", lead_offer: "Private portfolio review", page_type: "service",
  cta_variant: "test", source: "test", portfolio_size: "₹25L – ₹50L", resident_status: "resident",
  privacy_consent: true, consented_at: new Date(now).toISOString(), form_started_at: new Date(now - 3000).toISOString(), website: "",
  attribution: { first_touch: { landing_page: "https://www.sohowealth.in/" }, last_touch: { referrer: null }, page_path: "/" },
};

test("accepts a phone-first lead without email", () => assert.equal(leadSubmissionSchema.safeParse(base).success, true));
test("rejects an invalid supplied email", () => assert.equal(leadSubmissionSchema.safeParse({ ...base, email: "bad" }).success, false));
test("rejects a populated honeypot", () => assert.equal(leadSubmissionSchema.safeParse({ ...base, website: "spam.example" }).success, false));
test("normalizes phone punctuation", () => assert.equal(normalizePhone("+91 (90329) 99466"), "+919032999466"));
test("analytics sanitization removes PII", () => assert.deepEqual(sanitizeAnalyticsParams({ name: "A", phone: "1", email: "a@b.com", intent: "pms", count: 1 }), { intent: "pms", count: 1 }));
test("every lead intent has a contextual offer", () => { for (const config of Object.values(leadIntents)) { assert.ok(config.leadOffer.length > 8); assert.notEqual(config.primaryButton.toLowerCase(), "submit"); } });
test("attribution falls back when storage is unavailable", () => {
  const touch = { landing_page: "https://www.sohowealth.in/", referrer: null, captured_at: new Date().toISOString(), utm_source: null, utm_medium: null, utm_campaign: null, utm_term: null, utm_content: null, gclid: null, gbraid: null, wbraid: null, msclkid: null, fbclid: null } satisfies AttributionTouch;
  const storage = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } };
  assert.equal(resolveFirstTouch(touch, storage), touch);
});
