"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/TerminalWindow";
import { useActiveSection } from "@/hooks/useActiveSection";
import { HiOutlineArrowRight, HiOutlineArrowTopRightOnSquare } from "@/icons";
import { personal, stats } from "@/data/resume";

export default function Hero() {
  const { navigateTo } = useActiveSection();

  const goTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(href);
  };
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#fafbff_0%,#f0f4ff_100%)]" />

      <div className="container-main relative grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 w-full min-w-0 lg:order-1"
        >
          <TerminalWindow />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 w-full min-w-0 lg:order-2"
        >
          <p className="mb-4 font-mono text-sm text-emerald-600">
            ~/developer/nivedhitha<span className="animate-pulse">_</span>
          </p>

          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-slate-900">
            Full Stack Developer
            <br />
            <span className="gradient-text-animated">& DevOps Engineer</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Hi, I&apos;m{" "}
            <strong className="text-slate-900">{personal.name}</strong>.{" "}
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={goTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Projects
              <HiOutlineArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              View Resume
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              onClick={goTo("#contact")}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
              >
                <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-slate-900 sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
