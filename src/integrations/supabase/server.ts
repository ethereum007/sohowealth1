import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./types";

export function createServerSupabase() {
  const cookieStore = cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!,
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
        set: (name, value, options: CookieOptions) => {
          try { cookieStore.set({ name, value, ...options }); } catch { /* read-only in RSC */ }
        },
        remove: (name, options: CookieOptions) => {
          try { cookieStore.set({ name, value: "", ...options, maxAge: 0 }); } catch { /* */ }
        },
      },
    }
  );
}
