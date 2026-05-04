import { Suspense } from "react";
import SignInForm from "./SignInForm";

export const metadata = {
  title: "Sign in to your Wealth Review",
  description: "Sign in to access your personalised SoHo Wealth review.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-700 font-bold">SoHo Wealth</p>
          <h1 className="font-serif text-3xl text-slate-900 mt-2">Wealth Review</h1>
          <p className="text-sm text-slate-500 mt-2">A confidential, AI-proof view of your finances.</p>
        </div>
        <Suspense>
          <SignInForm />
        </Suspense>
        <p className="text-xs text-slate-400 text-center mt-6">
          We never share your data. Powered by Supabase Auth (magic link — no password).
        </p>
      </div>
    </div>
  );
}
