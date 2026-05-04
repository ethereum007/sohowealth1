-- =====================================================================
-- mutual_funds — public reference table refreshed daily from AMFI.
-- =====================================================================

create extension if not exists pg_trgm;

create table if not exists public.mutual_funds (
  scheme_code      text primary key,
  isin_growth      text,
  isin_div_payout  text,
  scheme_name      text not null,
  amc              text,
  category         text,
  scheme_type      text,                            -- 'open_ended' | 'close_ended' | 'interval'
  nav              numeric,
  nav_date         date,
  search_doc       tsvector generated always as (
                     to_tsvector('simple',
                       coalesce(scheme_name, '') || ' ' ||
                       coalesce(amc, '')          || ' ' ||
                       coalesce(category, '')
                     )
                   ) stored,
  updated_at       timestamptz default now()
);

-- Full-text search (token-based)
create index if not exists mutual_funds_search_idx
  on public.mutual_funds using gin (search_doc);

-- Trigram search (fast LIKE / ILIKE for "kotak fle" → "Kotak Flexicap")
create index if not exists mutual_funds_name_trgm_idx
  on public.mutual_funds using gin (scheme_name gin_trgm_ops);

-- Quick filters
create index if not exists mutual_funds_amc_idx      on public.mutual_funds(amc);
create index if not exists mutual_funds_category_idx on public.mutual_funds(category);

-- =====================================================================
-- RLS — public reference data: anyone can READ; writes only via service-role
-- =====================================================================
alter table public.mutual_funds enable row level security;

-- Read for everyone (anon + authenticated)
drop policy if exists "anyone can read funds" on public.mutual_funds;
create policy "anyone can read funds" on public.mutual_funds
  for select using (true);

-- No insert/update/delete policies → service_role bypasses; no other role can write.
