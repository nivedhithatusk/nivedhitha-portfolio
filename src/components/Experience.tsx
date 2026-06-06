"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { experience } from "@/data/resume";
import { HiOutlineBriefcase, HiOutlineChevronRight } from "@/icons";

const colors = [
  { bg: "from-orange-500 to-pink-500", light: "bg-orange-50 border-orange-200 text-orange-700", dot: "bg-orange-500" },
  { bg: "from-purple-500 to-indigo-500", light: "bg-purple-50 border-purple-200 text-purple-700", dot: "bg-purple-500" },
  { bg: "from-cyan-500 to-blue-500", light: "bg-cyan-50 border-cyan-200 text-cyan-700", dot: "bg-cyan-500" },
  { bg: "from-emerald-500 to-teal-500", light: "bg-emerald-50 border-emerald-200 text-emerald-700", dot: "bg-emerald-500" },
];

export default function ExperienceSection() {
  const [active, setActive] = useState(0);
  const job = experience[active];
  const color = colors[active % colors.length];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="02"
            label="Experience"
            title="My Career Journey"
            subtitle="Click each role to explore what I built and delivered"
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="relative space-y-3">
              <div className="absolute bottom-4 left-[22px] top-4 w-0.5 bg-gradient-to-b from-orange-300 via-purple-300 to-cyan-300" />
              {experience.map((exp, i) => (
                <motion.button
                  key={exp.id}
                  type="button"
                  onClick={() => setActive(i)}
                  whileHover={{ x: 4 }}
                  className={`relative flex w-full items-start gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                    active === i
                      ? `${color.light} shadow-md`
                      : "border-transparent bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i].bg} text-white shadow-md`}
                  >
                    <HiOutlineBriefcase className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-800">{exp.company}</p>
                    <p className="truncate text-xs text-slate-500">{exp.role}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">{exp.period}</p>
                  </div>
                  <HiOutlineChevronRight
                    className={`mt-3 h-4 w-4 shrink-0 transition ${active === i ? "text-orange-500" : "text-slate-300"}`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl"
              >
                <div className={`bg-gradient-to-r ${color.bg} px-8 py-6 text-white`}>
                  <p className="text-sm font-medium text-white/80">
                    {job.period} · {job.location}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-bold md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-lg text-white/90">{job.company}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4">
                    {job.highlights.map((point, i) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"
                      >
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${color.dot}`} />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Skills at this role
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.04 }}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
