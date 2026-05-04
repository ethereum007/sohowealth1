"use client";
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

export const browserSupabase = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_REVIEW_ANON_KEY!
  );
