alter table public.portfolio_leads
  add column if not exists service text;

create index if not exists portfolio_leads_service_idx
  on public.portfolio_leads (service);
