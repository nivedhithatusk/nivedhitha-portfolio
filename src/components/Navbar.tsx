"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { navLinks, personal } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  FaLinkedin,
  HiOutlineBars3,
  HiOutlineEnvelope,
  HiOutlineXMark,
} from "@/icons";

function NavItem({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
      }}
      className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
        active ? "text-orange-600" : "text-slate-600 hover:text-orange-600"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
      {active && (
        <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
      )}
    </a>
  );
}

export default function Navbar() {
  const lenis = useLenis();
  const { activeId, navigateTo } = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = (href: string) => {
    navigateTo(href);
    setOpen(false);
  };

  useLenis(({ scroll, progress: p }) => {
    setScrolled(scroll > 40);
    setProgress(p * 100);
  });

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(0, { duration: 0.85 });
            }}
            className="group flex items-center gap-2"
          >
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
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={activeId === id}
                  onNavigate={navigate}
                />
              );
            })}
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
            <motion.button
              type="button"
              onClick={() => navigate("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30"
            >
              Hire Me
            </motion.button>
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
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
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
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const active = activeId === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                    className={`block border-b py-4 text-lg font-medium transition-colors duration-150 ${
                      active
                        ? "border-orange-200 text-orange-600"
                        : "border-slate-100 text-slate-700"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-orange-500" />
                    )}
                  </motion.a>
                );
              })}
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
