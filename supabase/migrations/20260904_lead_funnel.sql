-- Additive first phase: safe to apply while the legacy public form is still live.
alter table public.portfolio_leads alter column email drop not null;

alter table public.portfolio_leads
  add column if not exists client_request_id uuid,
  add column if not exists intent text,
  add column if not exists lead_offer text,
  add column if not exists keyword_cluster text,
  add column if not exists page_type text,
  add column if not exists cta_variant text,
  add column if not exists qualification_key text,
  add column if not exists qualification_value text,
  add column if not exists privacy_consent boolean not null default false,
  add column if not exists consented_at timestamptz,
  add column if not exists consent_scope text,
  add column if not exists first_touch jsonb not null default '{}'::jsonb,
  add column if not exists last_touch jsonb not null default '{}'::jsonb,
  add column if not exists compared_strategies text[] not null default '{}',
  add column if not exists lead_stage text not null default 'new',
  add column if not exists qualified_status text,
  add column if not exists qualified_reason text,
  add column if not exists scheduled_at timestamptz,
  add column if not exists meeting_completed_at timestamptz,
  add column if not exists opportunity_created_at timestamptz,
  add column if not exists client_won_at timestamptz,
  add column if not exists opportunity_value_band text,
  add column if not exists owner text,
  add column if not exists follow_up_due_at timestamptz;

create unique index if not exists portfolio_leads_request_id_uidx on public.portfolio_leads (client_request_id) where client_request_id is not null;
create index if not exists portfolio_leads_intent_created_idx on public.portfolio_leads (intent, created_at desc);
create index if not exists portfolio_leads_stage_follow_up_idx on public.portfolio_leads (lead_stage, follow_up_due_at);

alter table public.portfolio_leads drop constraint if exists portfolio_leads_stage_check;
alter table public.portfolio_leads add constraint portfolio_leads_stage_check check (lead_stage in ('new','contacted','qualified','scheduled','meeting-completed','opportunity','won','lost','spam'));

drop policy if exists "authenticated lead update" on public.portfolio_leads;
create policy "authenticated lead update" on public.portfolio_leads for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

comment on column public.portfolio_leads.client_request_id is 'Public-safe idempotency key; never expose the database primary key.';
comment on column public.portfolio_leads.first_touch is 'Non-PII acquisition attribution captured at the first visit.';
comment on column public.portfolio_leads.last_touch is 'Non-PII acquisition attribution captured at submission.';
