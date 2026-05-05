import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// NOTE: untyped client — the Database type only knows about the marketing site's
// `portfolio_leads` table; it would fight us on every wealth-review query. Once
// we regenerate types post-migration we can re-add `<Database>`.
export function createServerSupabase() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options: CookieOptions) => {
          try { cookieStore.set({ name, value, ...options }); } catch { /* read-only in RSC */ }
        },
        remove: (name: string, options: CookieOptions) => {
          try { cookieStore.set({ name, value: "", ...options, maxAge: 0 }); } catch { /* */ }
        },
      },
    }
  );
}
