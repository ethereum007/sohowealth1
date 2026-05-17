import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// NOTE: untyped client — the Database type only knows about the marketing site's
// `portfolio_leads` table; it would fight us on every wealth-review query. Once
// we regenerate types post-migration we can re-add `<Database>`.
export async function createServerSupabase() {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Wealth Review is not configured. Set NEXT_PUBLIC_SUPABASE_REVIEW_URL and NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY in Vercel → Settings → Environment Variables, then redeploy."
    );
  }
  return createServerClient(
    url,
    key,
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
