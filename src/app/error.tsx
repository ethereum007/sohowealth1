"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
          Something went wrong
        </h1>
        <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg font-body font-semibold text-sm"
            style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-body font-semibold text-sm border border-border text-foreground hover:bg-muted transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
