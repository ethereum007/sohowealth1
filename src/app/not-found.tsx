import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to SoHo Wealth homepage.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="font-display text-6xl font-semibold mb-4" style={{ color: "#C9A84C" }}>
          404
        </h1>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg font-body font-semibold text-sm"
          style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
