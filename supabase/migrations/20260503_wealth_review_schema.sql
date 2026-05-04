-- =====================================================================
-- SoHo Wealth — Wealth Review Schema
-- Run this on a fresh Supabase project before deploying /app routes
-- =====================================================================

-- ---------- profiles (1:1 with auth.users) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  date_of_birth date,
  retirement_age int default 60,
  city text,
  occupation text,
  -- assumption overrides (defaults match the SoHo template)
  inflation_rate numeric default 7.0,
  education_inflation numeric default 10.0,
  income_growth_rate numeric default 7.0,
  equity_returns numeric default 12.0,
  debt_returns numeric default 8.0,
  gold_returns numeric default 6.0,
  real_estate_returns numeric default 3.0,
  home_loan_rate numeric default 8.0,
  onboarded_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------- family members ----------
create table if not exists public.family_members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  relationship text not null check (relationship in ('self','spouse','son','daughter','parent','sibling','other')),
  date_of_birth date,
  notes text,
  created_at timestamptz default now()
);
create index if not exists family_members_user_idx on public.family_members(user_id);

-- ---------- income ----------
create table if not exists public.income_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  source text not null,        -- 'salary' | 'bonus' | 'rental' | 'business' | 'other'
  label text,
  monthly_amount numeric not null default 0,
  created_at timestamptz default now()
);
create index if not exists income_user_idx on public.income_items(user_id);

-- ---------- expenses ----------
create table if not exists public.expense_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null,      -- 'household' | 'lifestyle' | 'dependents' | 'insurance' | 'investments' | 'other'
  label text,
  monthly_amount numeric not null default 0,
  created_at timestamptz default now()
);
create index if not exists expense_user_idx on public.expense_items(user_id);

-- ---------- assets ----------
create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  asset_class text not null,   -- 'liquid' | 'debt' | 'equity' | 'gold' | 'real_estate' | 'personal'
  description text,
  current_value numeric not null default 0,
  notes text,
  created_at timestamptz default now()
);
create index if not exists assets_user_idx on public.assets(user_id);

-- ---------- liabilities ----------
create table if not exists public.liabilities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  loan_type text not null,     -- 'home' | 'car' | 'personal' | 'credit_card' | 'other'
  outstanding_amount numeric not null default 0,
  emi_monthly numeric default 0,
  interest_rate numeric default 0,
  notes text,
  created_at timestamptz default now()
);
create index if not exists liabilities_user_idx on public.liabilities(user_id);

-- ---------- goals ----------
create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  goal_name text not null,
  goal_type text not null,     -- 'emergency' | 'education' | 'marriage' | 'house' | 'car' | 'vacation' | 'retirement' | 'other'
  target_year int not null,
  present_value numeric not null,
  inflation_rate numeric default 7.0,
  earmarked_assets numeric default 0,
  priority text default 'medium' check (priority in ('high','medium','low')),
  created_at timestamptz default now()
);
create index if not exists goals_user_idx on public.goals(user_id);

-- ---------- insurance ----------
create table if not exists public.insurance_policies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  policy_type text not null,   -- 'term_life' | 'health' | 'motor' | 'critical_illness' | 'personal_accident'
  provider text,
  cover_amount numeric not null,
  annual_premium numeric default 0,
  notes text,
  created_at timestamptz default now()
);
create index if not exists insurance_user_idx on public.insurance_policies(user_id);

-- ---------- holdings ----------
create table if not exists public.holdings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  holding_type text not null,  -- 'equity_mf' | 'debt_mf' | 'direct_equity' | 'bond' | 'fd' | 'gold' | 'crypto'
  name text not null,
  invested_amount numeric default 0,
  current_value numeric default 0,
  monthly_sip numeric default 0,
  notes text,
  created_at timestamptz default now()
);
create index if not exists holdings_user_idx on public.holdings(user_id);

-- ---------- documents ----------
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  doc_type text not null,      -- 'cas' | 'bank_statement' | 'salary_slip' | 'insurance_policy' | 'property' | 'other'
  file_name text not null,
  storage_path text not null,
  file_size int,
  uploaded_at timestamptz default now()
);
create index if not exists documents_user_idx on public.documents(user_id);

-- ---------- updated_at trigger for profiles ----------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ---------- auto-create profile row on signup ----------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =====================================================================
-- ROW LEVEL SECURITY — every table is user-scoped
-- =====================================================================
alter table public.profiles            enable row level security;
alter table public.family_members      enable row level security;
alter table public.income_items        enable row level security;
alter table public.expense_items       enable row level security;
alter table public.assets              enable row level security;
alter table public.liabilities         enable row level security;
alter table public.goals               enable row level security;
alter table public.insurance_policies  enable row level security;
alter table public.holdings            enable row level security;
alter table public.documents           enable row level security;

-- profiles: id IS the user_id
create policy "own profile read"   on public.profiles for select using (auth.uid() = id);
create policy "own profile update" on public.profiles for update using (auth.uid() = id);
create policy "own profile insert" on public.profiles for insert with check (auth.uid() = id);

-- generic per-user policies for the rest
do $$
declare t text;
begin
  for t in select unnest(array[
    'family_members','income_items','expense_items','assets','liabilities',
    'goals','insurance_policies','holdings','documents'
  ]) loop
    execute format($f$create policy "own rows read"   on public.%I for select using (auth.uid() = user_id);$f$, t);
    execute format($f$create policy "own rows insert" on public.%I for insert with check (auth.uid() = user_id);$f$, t);
    execute format($f$create policy "own rows update" on public.%I for update using (auth.uid() = user_id);$f$, t);
    execute format($f$create policy "own rows delete" on public.%I for delete using (auth.uid() = user_id);$f$, t);
  end loop;
end $$;

-- =====================================================================
-- STORAGE BUCKET — user-documents (private, RLS-scoped)
-- =====================================================================
insert into storage.buckets (id, name, public)
values ('user-documents','user-documents', false)
on conflict (id) do nothing;

create policy "users read own files" on storage.objects
  for select using (bucket_id = 'user-documents' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "users upload own files" on storage.objects
  for insert with check (bucket_id = 'user-documents' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "users delete own files" on storage.objects
  for delete using (bucket_id = 'user-documents' and auth.uid()::text = (storage.foldername(name))[1]);
