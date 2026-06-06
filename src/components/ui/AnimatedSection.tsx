"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  dark = false,
}: {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-14 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${
          dark
            ? "border-orange-500/30 bg-orange-500/10"
            : "border-orange-200 bg-orange-50"
        }`}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-[10px] font-bold text-white">
          {number}
        </span>
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${
            dark ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {label}
        </span>
      </motion.div>
      <h2
        className={`font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
