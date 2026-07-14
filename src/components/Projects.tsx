"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, {
  SectionHeader,
} from "@/components/ui/AnimatedSection";
import { projectCompanies, projects } from "@/data/resume";

const companyMeta: Record<
  string,
  { short: string; accent: string; stripe: string; domain: string }
> = {
  "Tuskmelon Business Solutions": {
    short: "Tuskmelon",
    accent: "text-orange-600",
    stripe: "bg-orange-500",
    domain: "Current · DevOps & Full Stack",
  },
  CreditMantri: {
    short: "CreditMantri",
    accent: "text-purple-600",
    stripe: "bg-purple-500",
    domain: "Banking & Fintech APIs",
  },
  "Soft Media ERP": {
    short: "Soft Media",
    accent: "text-emerald-600",
    stripe: "bg-emerald-500",
    domain: "Enterprise Media ERP",
  },
};

const domainDot: Record<string, string> = {
  Banking: "bg-amber-400",
  Healthcare: "bg-emerald-400",
  Education: "bg-sky-400",
  Enterprise: "bg-violet-400",
  Fintech: "bg-pink-400",
  Media: "bg-orange-400",
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(projectCompanies[0]);

  const grouped = useMemo(
    () =>
      projectCompanies.map((company) => ({
        company,
        meta: companyMeta[company] ?? {
          short: company.split(" ")[0],
          accent: "text-slate-600",
          stripe: "bg-slate-400",
          domain: "",
        },
        items: projects.filter((p) => p.company === company),
      })),
    [],
  );

  const toggle = (company: string) =>
    setExpanded((prev) => (prev === company ? null : company));

  return (
    <section id="projects" className="section-padding bg-[#fafbff]">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="04"
            label="Projects"
            title="Client & Company Projects"
            subtitle={`${projects.length} production deployments — grouped by employer, expand each to browse`}
          />
        </AnimatedSection>

        {/* Accordion manifest — not cards, not filter pills */}
        <div className="mx-auto max-w-5xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {grouped.map(({ company, meta, items }, groupIndex) => {
            const open = expanded === company;
            return (
              <div key={company}>
                <button
                  type="button"
                  onClick={() => toggle(company)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-slate-50/80 sm:px-8"
                >
                  <span
                    className={`h-10 w-1 shrink-0 rounded-full ${meta.stripe}`}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className={`font-[family-name:var(--font-syne)] text-lg font-bold sm:text-xl ${meta.accent}`}
                      >
                        {meta.short}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {String(items.length).padStart(2, "0")} projects
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {meta.domain}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-400"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 bg-slate-50/50 px-5 pb-6 pt-2 sm:px-8">
                        {/* Column headers — desktop only */}
                        <div className="mb-2 hidden grid-cols-12 gap-4 px-2 py-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 sm:grid">
                          <span className="col-span-1">#</span>
                          <span className="col-span-3">Client</span>
                          <span className="col-span-4">Project</span>
                          <span className="col-span-4">Details</span>
                        </div>

                        <ol className="space-y-0">
                          {items.map((project, i) => (
                            <motion.li
                              key={project.name}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: groupIndex * 0.05 + i * 0.04,
                              }}
                              className="group border-b border-slate-100 last:border-0"
                            >
                              <div className="grid grid-cols-1 gap-2 px-2 py-4 sm:grid-cols-12 sm:items-start sm:gap-4">
                                <span className="hidden font-mono text-sm text-slate-300 sm:col-span-1 sm:block">
                                  {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="sm:col-span-3">
                                  <div className="flex items-center gap-2 sm:block">
                                    <span
                                      className={`h-2 w-2 shrink-0 rounded-full sm:mb-2 sm:inline-block ${
                                        domainDot[project.domain] ??
                                        "bg-slate-300"
                                      }`}
                                    />
                                    <p className="font-semibold text-slate-900">
                                      {project.client}
                                    </p>
                                    <p className="font-mono text-[10px] uppercase tracking-wide text-slate-400">
                                      {project.domain}
                                    </p>
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <p className="font-[family-name:var(--font-syne)] font-bold text-slate-800">
                                    {project.name}
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                    {project.description}
                                  </p>
                                </div>

                                <div className="sm:col-span-4">
                                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-slate-400 sm:hidden">
                                    Details
                                  </p>
                                  <p className="font-mono text-xs leading-relaxed text-slate-600">
                                    {project.stack.join(" · ")}
                                  </p>
                                </div>
                              </div>
                            </motion.li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-6 border-t border-slate-200 pt-8"
        >
          {Object.entries(
            projects.reduce<Record<string, number>>((acc, p) => {
              acc[p.domain] = (acc[p.domain] ?? 0) + 1;
              return acc;
            }, {}),
          ).map(([domain, count]) => (
            <div
              key={domain}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <span
                className={`h-2 w-2 rounded-full ${domainDot[domain] ?? "bg-slate-300"}`}
              />
              <span className="font-medium">{domain}</span>
              <span className="font-mono text-xs text-slate-400">{count}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
