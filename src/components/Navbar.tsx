"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "@/data/resume";
import {
  FaLinkedin,
  HiOutlineBars3,
  HiOutlineEnvelope,
  HiOutlineXMark,
} from "@/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 transition-all"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: 12, scale: 1.05 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
            >
              N
            </motion.span>
            <span className="hidden font-[family-name:var(--font-syne)] text-sm font-bold text-slate-800 sm:block">
              {personal.firstName}
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-600 transition hover:scale-110"
              aria-label="Email"
            >
              <HiOutlineEnvelope className="h-5 w-5" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Resume
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30"
            >
              Hire Me
            </motion.a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <HiOutlineBars3 className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28 }}
              className="absolute inset-y-0 right-0 w-[min(88vw,320px)] bg-white p-8 shadow-2xl"
            >
              <button type="button" className="mb-8 ml-auto flex" onClick={() => setOpen(false)}>
                <HiOutlineXMark className="h-6 w-6" />
              </button>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-4 text-lg font-semibold text-emerald-800"
              >
                View Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
