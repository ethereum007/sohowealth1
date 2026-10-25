"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useEffect } from "react";
import { initCtaTracking } from "@/lib/gtag";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initCtaTracking();
  }, []);

  return (
    <TooltipProvider>
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}
