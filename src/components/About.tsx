"use client";

import { motion } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { personal, summary, education } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="01"
            label="About Me"
            title="Who I Am"
            subtitle={`${personal.yearsOfExperience} years of production-grade delivery`}
          />
        </AnimatedSection>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-200/40 via-pink-200/40 to-purple-200/40 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <p className="text-lg leading-relaxed text-slate-600">{summary}</p>
                <p className="mt-4 leading-relaxed text-slate-500">
                  I bridge development and infrastructure — writing React & Next.js frontends,
                  building Java & Node.js backends, and deploying on AWS with Nginx, PM2, and
                  production-grade security.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Banking", "Healthcare", "Enterprise"].map((d, i) => (
                    <motion.span
                      key={d}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-full bg-gradient-to-r from-orange-100 to-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-800"
                    >
                      {d}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Education</p>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-lg font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{edu.degree}</p>
                    <p className="text-sm text-slate-500">{edu.institution}</p>
                    <p className="mt-1 text-xs font-semibold text-orange-500">{edu.period}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
                >
                  View Resume
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-1 items-center justify-center rounded-2xl border-2 border-slate-300 bg-white py-4 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
