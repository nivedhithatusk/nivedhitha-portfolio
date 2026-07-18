"use client";

import { motion } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { personal, education } from "@/data/resume";

const focusAreas = [
  {
    title: "Full-stack delivery",
    text: "Enterprise applications built with Java, Spring Boot, Node.js, React.js, and Next.js.",
  },
  {
    title: "Deployment & cloud",
    text: "Hands-on Linux and AWS delivery — Nginx, PM2, EC2, DNS, SSL, Load Balancers, and WAF.",
  },
  {
    title: "Production support",
    text: "Stable releases through troubleshooting, server administration, and cross-team collaboration.",
  },
];

const domains = ["Banking", "Fintech", "Healthcare", "Media", "Enterprise"];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.06),_transparent_50%)]"
      />

      <div className="container-main relative">
        <AnimatedSection>
          <SectionHeader
            number="03"
            label="About Me"
            title="Who I Am"
            subtitle={`${personal.yearsOfExperience} years of production-grade engineering`}
          />
        </AnimatedSection>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-[var(--bg)] shadow-sm">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Profile panel */}
            <div className="border-b border-slate-200 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Profile
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-bold text-slate-900 sm:text-3xl">
                {personal.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-orange-600 sm:text-base">
                {personal.designation}
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600">
                Designs, develops, and supports enterprise web applications —
                with hands-on ownership of deployment, cloud infrastructure, and
                production reliability.
              </p>

              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                {focusAreas.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06 }}
                    className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-4"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:pt-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Domains
                </p>
                <div className="flex flex-wrap gap-2">
                  {domains.map((d) => (
                    <span
                      key={d}
                      className="border border-orange-100 bg-orange-50/70 px-3 py-1.5 text-xs font-semibold text-orange-800/80"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education + CTAs */}
            <div className="flex flex-col justify-between bg-white p-8 sm:p-10">
              <div>
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                  Education
                </p>
                <ul className="space-y-5">
                  {education.map((edu, i) => (
                    <motion.li
                      key={edu.degree}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="border-l-2 border-orange-200 pl-4"
                    >
                      <p className="font-semibold text-slate-900">{edu.degree}</p>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {edu.institution}
                      </p>
                      <p className="mt-1 font-mono text-xs text-slate-400">
                        {edu.period}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:brightness-105"
                >
                  View Resume
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-[var(--bg)] px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
