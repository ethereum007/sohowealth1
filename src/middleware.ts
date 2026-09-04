import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Auth gating only for the wealth-review product routes.
  const needsAuth =
    pathname.startsWith("/app") ||
    pathname === "/sign-in" ||
    pathname.startsWith("/auth/");

  if (!needsAuth) return NextResponse.next();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY;

  // If env vars are missing, don't crash — let the page render so we can show
  // a clean error rather than a Vercel 500 / MIDDLEWARE_INVOCATION_FAILED.
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("[middleware] Missing NEXT_PUBLIC_SUPABASE_REVIEW_* env vars");
    return NextResponse.next();
  }

  const res = NextResponse.next();
  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get: (name: string) => req.cookies.get(name)?.value,
        set: (name: string, value: string, options: CookieOptions) => {
          res.cookies.set({ name, value, ...options });
        },
        remove: (name: string, options: CookieOptions) => {
          res.cookies.set({ name, value: "", ...options, maxAge: 0 });
        },
      },
    }
  );

  // Fail open if Supabase is unreachable (project paused/deleted, network):
  // a dead auth backend must not take down marketing pages or hard-crash /app —
  // the /app pages re-check auth and their error boundary shows a clean message.
  let user = null;
  try {
    ({ data: { user } } = await supabase.auth.getUser());
  } catch (err) {
    console.error("[middleware] Supabase unreachable:", err);
    return NextResponse.next();
  }

  // /app/* requires sign-in
  if (pathname.startsWith("/app") && !user) {
    const signIn = url.clone();
    signIn.pathname = "/sign-in";
    signIn.searchParams.set("next", pathname);
    return NextResponse.redirect(signIn);
  }

  // Already signed in → /sign-in bounces to /app
  if (pathname === "/sign-in" && user) {
    const dest = url.clone();
    dest.pathname = "/app";
    dest.search = "";
    return NextResponse.redirect(dest);
  }

  return res;
}

// Keep middleware off public marketing pages. Next.js already normalizes
// trailing slashes, and invoking auth middleware for every public request
// needlessly consumes edge/function allocation on Vercel's Hobby plan.
export const config = {
  matcher: ["/app/:path*", "/sign-in", "/auth/:path*"],
};
