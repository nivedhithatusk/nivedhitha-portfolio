"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type StackItem = {
  id: string;
  content: ReactNode;
};

/**
 * Sticky card stack — Framer Motion scroll scale (GSAP-like, no GSAP).
 */
export default function ScrollStack({
  items,
  offsetTop = "6.5rem",
  fullWidth = false,
}: {
  items: StackItem[];
  offsetTop?: string;
  fullWidth?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${items.length * 90}vh` }}
    >
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.035;
        return (
          <StackCard
            key={item.id}
            index={i}
            total={items.length}
            progress={scrollYProgress}
            targetScale={Math.max(targetScale, 0.82)}
            offsetTop={offsetTop}
            fullWidth={fullWidth}
          >
            {item.content}
          </StackCard>
        );
      })}
    </div>
  );
}

function StackCard({
  children,
  index,
  total,
  progress,
  targetScale,
  offsetTop,
  fullWidth,
}: {
  children: ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
  offsetTop: string;
  fullWidth: boolean;
}) {
  const start = index / total;
  const end = 1;
  const scale = useTransform(progress, [start, end], [1, targetScale]);
  const opacity = useTransform(
    progress,
    [start, Math.min(start + 0.4, 1)],
    [1, 0.95],
  );

  return (
    <div
      className="sticky flex items-start justify-center px-0"
      style={{
        top: offsetTop,
        height: "80vh",
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`origin-top h-[min(72vh,720px)] w-full will-change-transform ${
          fullWidth ? "max-w-none" : "max-w-4xl"
        }`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollRevealCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 45%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [56, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}
