import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

// Handles the magic link redirect: exchanges the ?code for a session cookie.
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/app";

  const res = NextResponse.redirect(new URL(next, url.origin));

  if (!code) return res;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!,
    {
      cookies: {
        get: (name) => req.cookies.get(name)?.value,
        set: (name, value, options: CookieOptions) => res.cookies.set({ name, value, ...options }),
        remove: (name, options: CookieOptions) => res.cookies.set({ name, value: "", ...options, maxAge: 0 }),
      },
    }
  );

  await supabase.auth.exchangeCodeForSession(code);
  return res;
}
