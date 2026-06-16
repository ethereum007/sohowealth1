"use client";

import type { CSSProperties, ReactNode } from "react";

type ScrollToSectionButtonProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function ScrollToSectionButton({ targetId, children, className, style }: ScrollToSectionButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button type="button" onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
