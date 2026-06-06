"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-main flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <motion.div whileHover={{ scale: 1.02 }}>
          <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-slate-900">
            {personal.name}
          </p>
          <p className="text-sm text-slate-500">{personal.designation}</p>
        </motion.div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} · Crafted with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
