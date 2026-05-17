create table if not exists public.portfolio_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  portfolio_size text not null,
  is_nri boolean not null default false,
  call_time text,
  referral_source text,
  source text
);

alter table public.portfolio_leads
  add column if not exists notes text,
  add column if not exists landing_page text,
  add column if not exists page_path text,
  add column if not exists referrer text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_term text,
  add column if not exists utm_content text;

alter table public.portfolio_leads enable row level security;

drop policy if exists "public lead insert" on public.portfolio_leads;
create policy "public lead insert"
  on public.portfolio_leads
  for insert
  with check (true);

drop policy if exists "authenticated lead read" on public.portfolio_leads;
create policy "authenticated lead read"
  on public.portfolio_leads
  for select
  using (auth.role() = 'authenticated');

create index if not exists portfolio_leads_created_at_idx on public.portfolio_leads (created_at desc);
create index if not exists portfolio_leads_source_idx on public.portfolio_leads (source);
create index if not exists portfolio_leads_utm_source_idx on public.portfolio_leads (utm_source);
