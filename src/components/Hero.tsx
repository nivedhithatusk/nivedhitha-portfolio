"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/TerminalWindow";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  HiOutlineArrowRight,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineMapPin,
  heroTechIcons,
} from "@/icons";
import { personal, stats } from "@/data/resume";

export default function Hero() {
  const { navigateTo } = useActiveSection();

  const goTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-14">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#fafbff_0%,#f4f6ff_55%,#eef2ff_100%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]"
      />
      <div
        aria-hidden
        className="mesh-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="mesh-blob animation-delay-2000 absolute top-24 -right-16 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl"
      />
      <div
        aria-hidden
        className="mesh-blob animation-delay-4000 absolute bottom-8 left-1/3 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div className="container-main relative grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full min-w-0"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Cloud &amp; DevOps roles
          </div>

          <p className="font-mono text-sm text-slate-500">
            {personal.name}
            <span className="mx-2 text-slate-300">·</span>
            <span className="inline-flex items-center gap-1">
              <HiOutlineMapPin className="h-3.5 w-3.5 text-orange-500" />
              {personal.location}
            </span>
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(2.4rem,6.2vw,4.15rem)] font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Cloud &amp;
            <br />
            <span className="gradient-text-animated">DevOps Engineer</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {heroTechIcons.map(({ Icon, color, label }) => (
              <span
                key={label}
                title={label}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 shadow-sm"
              >
                <Icon className="h-4 w-4" style={{ color }} />
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={goTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105"
            >
              View Projects
              <HiOutlineArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:border-orange-400 hover:text-orange-700"
            >
              View Resume
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              onClick={goTo("#contact")}
              className="text-sm font-semibold text-slate-500 underline-offset-4 transition hover:text-orange-600 hover:underline"
            >
              Contact
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 sm:border-l sm:border-slate-200 sm:pl-4 sm:first:border-l-0 sm:first:pl-0">
                <p className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative w-full min-w-0"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-200/40 via-pink-100/25 to-cyan-100/40 blur-2xl"
          />
          <div className="relative">
            <TerminalWindow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
