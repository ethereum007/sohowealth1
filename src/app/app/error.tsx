"use client";

// Segment-level error boundary for /app/* — catches any runtime failure in the
// Wealth Review (dead backend, bad data, render bug) and shows a branded,
// recoverable screen instead of the generic site-wide error page.

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WealthReviewError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[wealth-review]", error);
  }, [error]);

  const isBackendDown =
    /fetch failed|network|ECONNREFUSED|ENOTFOUND|timeout|unreachable/i.test(
      error.message || ""
    );

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-amber-600" />
      </div>
      <h1 className="font-serif text-2xl text-slate-900 mt-5">
        {isBackendDown ? "We couldn't reach your data" : "Your Wealth Review hit a snag"}
      </h1>
      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
        {isBackendDown
          ? "Our data service didn't respond. This is usually temporary — try again in a moment."
          : "Something unexpected happened while preparing your review. Your data is safe."}
        {error.digest && (
          <span className="block mt-1 text-xs text-slate-400">Ref: {error.digest}</span>
        )}
      </p>
      <div className="flex items-center justify-center gap-2 mt-6">
        <Button onClick={reset} className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
          <RotateCcw className="w-4 h-4 mr-1.5" /> Try again
        </Button>
        <Link href="/">
          <Button variant="outline">Go home</Button>
        </Link>
        <a
          href="https://wa.me/919032999466?text=Hi%20Kiran%2C%20my%20Wealth%20Review%20isn't%20loading."
          target="_blank"
          rel="noopener"
        >
          <Button variant="outline">
            <MessageCircle className="w-4 h-4 mr-1.5" /> Tell Kiran
          </Button>
        </a>
      </div>
    </div>
  );
}
