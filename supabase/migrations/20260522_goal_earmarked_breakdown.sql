-- Adds per-goal asset earmarking: which existing assets fund which goal.
-- Stored as a jsonb array of { source: text, amount: numeric }, where `source`
-- is the asset description (the stable human key, since assets are re-inserted
-- on each save). `earmarked_assets` continues to hold the total, so legacy rows
-- and the dashboard math keep working unchanged.

alter table public.goals
  add column if not exists earmarked_breakdown jsonb not null default '[]'::jsonb;
