-- Apply only after the server-only /api/leads endpoint and new forms are live and verified.
drop policy if exists "public lead insert" on public.portfolio_leads;
