"use client";
import { createBrowserClient } from "@supabase/ssr";

// Untyped — see note in server.ts.
export const browserSupabase = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!
  );
