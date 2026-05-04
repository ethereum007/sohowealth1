"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  email: string;
  fullName: string | null;
  onboarded: boolean;
}

const links = [
  { href: "/app",            label: "Dashboard" },
  { href: "/app/onboarding", label: "Edit Plan" },
];

export default function AppNav({ email, fullName, onboarded }: Props) {
  const path = usePathname();

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {onboarded && links.map(l => {
        const active = path === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={
              "text-sm px-3 py-1.5 rounded-md transition-colors " +
              (active
                ? "bg-amber-400/15 text-amber-300"
                : "text-slate-300 hover:text-white hover:bg-white/5")
            }
          >
            {l.label}
          </Link>
        );
      })}

      <div className="hidden md:flex items-center gap-2 ml-3 pl-3 border-l border-white/10 text-xs text-slate-400">
        <span>{fullName || email}</span>
      </div>

      <form action="/auth/sign-out" method="post" className="ml-2">
        <button
          type="submit"
          className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-white/5"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
