"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { browserSupabase } from "@/integrations/supabase/client-browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function SignInForm() {
  const search = useSearchParams();
  const next = search.get("next") || "/app";
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    try {
      const supabase = browserSupabase();
      const origin = window.location.origin;
      const redirect = `${origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirect },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Check your email for the sign-in link.");
    } catch (err: any) {
      toast.error(err.message || "Could not send magic link.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center space-y-3 py-4">
        <div className="text-4xl">📬</div>
        <h2 className="font-serif text-xl text-slate-900">Check your email</h2>
        <p className="text-sm text-slate-600">
          We sent a sign-in link to <strong className="text-slate-900">{email}</strong>.
          Click it to access your dashboard.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-xs text-amber-700 hover:underline"
        >
          Use a different email →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-slate-700">Email address</Label>
        <Input
          id="email"
          type="email"
          required
          autoFocus
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mt-1.5"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold"
      >
        {sending ? "Sending…" : "Email me a sign-in link"}
      </Button>
    </form>
  );
}
