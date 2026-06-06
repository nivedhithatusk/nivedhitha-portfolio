"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
