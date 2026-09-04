# SEO growth implementation report

## Implemented in code

- Canonical route registry, sitemap generation, robots/headers, metadata checks, server-rendered FAQ and no global loading fallback.
- Intent-specific two-step lead forms, attribution, idempotent server endpoint, validation, honeypot, body limit, basic rate limiting, save-before-email flow, and a restricted lifecycle dashboard.
- Server-only PMS dataset, 25-row research pagination, filtered-page noindex rules, stable eligible strategy profiles, methodology and comparison pages.
- National homepage positioning, six-audience structure, evidence-led trust copy, three ungated fictional sample deliverables, and hidden unverified testimonials.
- Typed non-PII analytics, CI checks, bundle budget and local crawl tooling.

## Release-gated work

- Apply `20260904_lead_funnel.sql`, deploy the new endpoint and form, verify a production enquiry and notification, then apply `20260904b_remove_public_lead_insert.sql`.
- Configure `SUPABASE_SERVICE_ROLE_KEY`, `SOHO_ADMIN_EMAILS`, Resend settings and a platform-level rate-limit rule.
- Run the production crawl, Search Console runbook and post-release funnel checks.

## Rollback

Roll back the Vercel deployment if pages, canonical tags or the lead endpoint regress. The additive migration can remain. Do not apply the policy-removal migration before production verification; if already applied, restore the previous deployment only after confirming it does not depend on browser-side inserts.
