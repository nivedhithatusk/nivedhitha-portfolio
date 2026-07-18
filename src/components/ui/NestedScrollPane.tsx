"use client";

import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;

/**
 * Nested scroll pane for Skills terminal.
 * Relies on Lenis `allowNestedScroll`:
 * - scrolls inside while content remains
 * - at top/bottom edges, page scroll continues
 * Do not use data-lenis-prevent or overscroll-contain here.
 */
export default function NestedScrollPane({
  children,
  className = "",
  ...rest
}: Props) {
  return (
    <div
      data-nested-scroll
      className={`min-h-0 overflow-y-auto overscroll-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
