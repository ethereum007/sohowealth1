import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // 1) Remove trailing slashes (except root) — applies to everything.
  if (pathname !== "/" && pathname.endsWith("/")) {
    const dest = url.clone();
    dest.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(dest, 308);
  }

  // 2) Auth gating only for the wealth-review product routes.
  const needsAuth =
    pathname.startsWith("/app") ||
    pathname === "/sign-in" ||
    pathname.startsWith("/auth/");

  if (!needsAuth) return NextResponse.next();

  const res = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!,
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

  const { data: { user } } = await supabase.auth.getUser();

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

// Match everything except static files / API routes — same as the existing
// trailing-slash middleware, so we don't break that behaviour.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
