# Search Console release runbook

1. Verify both apex and `www` properties; keep `https://www.sohowealth.in` as the canonical host.
2. Submit `https://www.sohowealth.in/sitemap.xml` after the production release.
3. Inspect the homepage, each cluster owner, the three sample deliverables, PMS methodology, and several eligible strategy profiles.
4. Confirm canonical selection, mobile rendering, indexing eligibility and structured-data output.
5. Record baseline clicks, impressions, indexed count and query/page exports before release; compare at 7, 28 and 56 days.
6. If widespread canonical, rendering or lead failures appear, roll back the deployment and retain the additive database migration. Do not apply the public-insert removal migration until the new lead endpoint has passed production tests.
