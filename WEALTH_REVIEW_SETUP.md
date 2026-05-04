# Wealth Review — Phase 1 Setup

A logged-in product at **`/app`** where users sign in with a magic link, fill in their finances, and get a live dashboard with HLV insurance gap, retirement readiness, goal funding status, and SIP requirements.

Built on top of `sohowealth-next`. Routes added are **isolated** — nothing on the existing marketing site changes.

---

## What was added

```
G:\sohowealth-next\
├── package.json                                           (added @supabase/ssr)
├── supabase\migrations\20260503_wealth_review_schema.sql  ← run on a fresh Supabase project
├── src\
│   ├── middleware.ts                                       ← gates /app/*
│   ├── lib\wealth\
│   │   ├── types.ts                                        ← TS domain types
│   │   └── calculations.ts                                 ← pure HLV / SIP / retirement math
│   ├── integrations\supabase\
│   │   ├── server.ts                                       ← server-component Supabase client
│   │   └── client-browser.ts                               ← browser Supabase client
│   └── app\
│       ├── sign-in\
│       │   ├── page.tsx                                    ← /sign-in
│       │   └── SignInForm.tsx
│       ├── auth\
│       │   ├── callback\route.ts                           ← magic link redirect handler
│       │   └── sign-out\route.ts                           ← POST to sign out
│       └── app\
│           ├── layout.tsx                                  ← /app shell, hides marketing chrome
│           ├── AppNav.tsx
│           ├── page.tsx                                    ← /app dashboard (server)
│           ├── Dashboard.tsx                               ← dashboard UI
│           ├── actions.ts                                  ← savePlan() server action
│           └── onboarding\
│               ├── page.tsx                                ← /app/onboarding
│               └── OnboardingForm.tsx
```

Existing files modified: **`package.json` only** (added one dependency).

---

## Setup steps

### 1. Create a new Supabase project

Go to https://supabase.com/dashboard → **New Project**.
- Name: `sohowealth-review`
- Region: Mumbai or Singapore (closest to your users)
- Save the **Project URL** and **anon public key** (Settings → API).
- Save the **service_role key** too (you'll only need it if you later script back-end ops; the app itself only uses the anon key).

### 2. Apply the migration

In the Supabase dashboard → **SQL Editor** → New query → paste the entire contents of:

```
supabase/migrations/20260503_wealth_review_schema.sql
```

…and click **Run**. This creates 10 tables, RLS policies, the `user-documents` storage bucket, and an `on_auth_user_created` trigger that auto-creates a `profiles` row on sign-up.

### 3. Configure auth (magic link)

Supabase dashboard → **Authentication → URL Configuration**:
- **Site URL**: `https://sohowealth.in` (or `http://localhost:3000` for local dev)
- **Redirect URLs** (add both):
  - `https://sohowealth.in/auth/callback`
  - `http://localhost:3000/auth/callback`

Optional: Authentication → Email Templates → **Magic Link** → customise the from-name to "SoHo Wealth" and reword the body.

### 4. Add env vars

Edit `G:\sohowealth-next\.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-NEW-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

Then add the **same two vars** in Vercel → Project Settings → Environment Variables (for Production, Preview, and Development).

### 5. Install + run

```powershell
cd G:\sohowealth-next
npm install
npm run dev
```

Visit:
- `http://localhost:3000/sign-in` — enter your email, click the link in the magic-link email
- You'll land on `/app/onboarding` (because you have no data yet)
- Fill the form, hit **Save & view dashboard** → you're on `/app`

### 6. (Optional but recommended) Regenerate Supabase types

The existing `src/integrations/supabase/types.ts` only knows about `portfolio_leads`. Regenerate it to get full type-safety for the new tables:

```powershell
npx supabase gen types typescript --project-id YOUR-PROJECT-REF > src/integrations/supabase/types.ts
```

The app works without this — Supabase queries just return `any` for unknown tables — but typing is nicer.

### 7. Deploy

```powershell
git add .
git commit -m "Add /app — authenticated wealth review (Phase 1)"
git push origin main
```

Vercel auto-deploys. Done.

---

## What works today

- ✅ **Magic-link sign-in** at `/sign-in`
- ✅ **Auto-redirect** to `/app/onboarding` for first-time users
- ✅ **Dynamic onboarding form** — add/remove family members, income, expenses, assets, liabilities, goals, insurance policies
- ✅ **Live dashboard** at `/app` — KPIs, asset allocation chart, goal funding table, retirement gauge, HLV insurance gap, action alerts
- ✅ **Edit any time** — `/app/onboarding` reloads existing data
- ✅ **Sign out** via the top-right button
- ✅ **Marketing chrome hidden** on `/app/*` (the existing site stays untouched)
- ✅ **RLS** — users can only read/write their own rows, enforced at the database level

## What's intentionally NOT in Phase 1

- File uploads (table & storage bucket exist, no UI yet)
- CAS file parsing (Phase 3)
- Multi-step wizard (one-page form is fine for v1)
- AI insights / commentary (Phase 4)
- PDF export of the dashboard
- Spouse / co-applicant collaboration
- Email notifications when a plan is generated (you'd wire this via a Supabase webhook → Resend later)

---

---

# Phase A — Mutual Fund Autocomplete (AMFI)

Adds: search-as-you-type for ~10,000 AMFI mutual fund schemes inside the Asset rows.
The fund picker only appears when the asset class is **Equity** or **Debt**.

## What was added

```
supabase/migrations/20260503b_mutual_funds.sql   ← apply on the same project
src/lib/amfi/parse.ts                             ← AMFI NAVAll.txt parser
src/app/api/admin/refresh-funds/route.ts          ← daily refresh endpoint
src/app/api/search/funds/route.ts                 ← /api/search/funds?q=axis
src/components/ui/combobox.tsx                    ← extended with async loadOptions
src/app/app/onboarding/OnboardingForm.tsx         ← AssetRow now uses fund Combobox
vercel.json                                       ← daily cron (16:30 UTC = 22:00 IST)
```

## Setup steps for Phase A

### 1. Apply the new migration

Supabase SQL Editor → paste contents of `supabase/migrations/20260503b_mutual_funds.sql` → Run.
Creates the `mutual_funds` table, the `pg_trgm` extension, two GIN indexes, and an open-read RLS policy.

### 2. Add two new env vars

Edit `.env.local` and fill in the empty values:

```env
# Service role key — Supabase → Settings → API → "Legacy" tab → service_role
SUPABASE_REVIEW_SERVICE_ROLE_KEY=eyJhbGc...

# Generate any random string:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
CRON_SECRET=<paste the generated 64-char hex>
```

Add the **same two vars** to Vercel → Settings → Environment Variables (Production + Preview).

### 3. Trigger the first refresh manually

```powershell
# Local
curl "http://localhost:3000/api/admin/refresh-funds?secret=YOUR_CRON_SECRET"

# Production (after Vercel deploy)
curl "https://sohowealth.in/api/admin/refresh-funds?secret=YOUR_CRON_SECRET"
```

Takes 30-60 seconds. Returns JSON like `{ ok: true, parsed: 9847, upserted: 9847, elapsed_ms: 42000 }`.

### 4. (Production) Daily cron

`vercel.json` is already configured to hit `/api/admin/refresh-funds` daily at 16:30 UTC (22:00 IST — after AMFI publishes the day's NAVs at ~21:00 IST).

Vercel automatically signs cron requests with `Authorization: Bearer ${CRON_SECRET}`, so it just works as long as `CRON_SECRET` is set in Vercel env.

## Verifying it works

1. Open `/app/onboarding`
2. In **Assets**, click "Add asset"
3. Pick asset class **Equity** → the description field becomes a search box
4. Type `axis` → see Axis Bluechip / Axis Midcap / etc. drop down with NAV info as hint
5. Click one — it saves the scheme name to your asset row

---

## Next-turn ideas (in priority order)

1. **Document upload UI** — drag-drop into Supabase Storage, list with delete (1 turn)
2. **Email notification to you** — Supabase webhook when `profiles.onboarded_at` is set, fires a Resend email so you know a new lead came in (1 turn)
3. **Multi-step wizard** — split onboarding into 6 steps with progress bar, better mobile UX (1 turn)
4. **CAS file parser** — Claude API call that extracts holdings from a CDSL/NSDL CAS PDF and pre-populates `holdings` table (2-3 turns)
5. **Marketing landing page** — `/wealth-review` that pitches the product to logged-out users and CTAs to `/sign-in` (1 turn)

---

## Architecture notes

**Why route-group hack instead of proper route groups?**
The root `layout.tsx` hard-codes `<Header /><Footer /><WhatsAppButton />`, which would wrap the app dashboard too. Properly fixing this means moving every existing page into a `(marketing)` route group — a large diff with risk to live SEO pages. For Phase 1 we hide the marketing chrome with CSS in `app/app/layout.tsx`. Clean refactor when convenient.

**Why wipe-and-reinsert in `savePlan`?**
Simplicity for MVP. With ~50 rows max per user, perf is fine. Once we add per-row edits (delete one goal, change one asset value) we'll switch to upserts.

**Why magic link, not Google OAuth?**
Lower friction, no Google Cloud project setup, works immediately. We can add Google as an extra provider in Supabase Auth without changing any code.
