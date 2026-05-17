import { redirect } from "next/navigation";
import Link from "next/link";
import { createServerSupabase } from "@/integrations/supabase/server";
import AppNav from "./AppNav";

export const metadata = {
  title: "Your Wealth Review",
  description: "Your personalised SoHo Wealth review.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "https://sohowealth.in/app" },
};

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email, onboarded_at")
    .eq("id", user.id)
    .single();

  return (
    <>
      {/* Hide marketing chrome on /app/* — the root layout still renders Header/Footer/WhatsApp.
          Once we route-group properly, this can be removed. */}
      <style>{`
        body > div > header,
        body > div > footer,
        body > div > a[aria-label="Chat with Kiran on WhatsApp"] { display: none !important; }
        body { background: #f8fafc; }
      `}</style>

      <div className="min-h-screen flex flex-col">
        <header className="bg-slate-900 text-white border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/app" className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-wide">
                SoHo <span className="text-amber-400">Wealth</span>
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400 ml-2 px-2 py-0.5 rounded bg-white/5">
                Wealth Review
              </span>
            </Link>
            <AppNav
              email={profile?.email || user.email || ""}
              fullName={profile?.full_name || null}
              onboarded={!!profile?.onboarded_at}
            />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-900 text-slate-400 text-xs py-6 mt-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} SoHo Wealth · Confidential</span>
            <span>
              Need help? <a href="mailto:invest@sohowealth.in" className="hover:text-amber-400">invest@sohowealth.in</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
