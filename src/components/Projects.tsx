"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { experience, projects } from "@/data/resume";
import { getSkillIcon } from "@/icons";

function companyToId(company: string) {
  const match = experience.find((e) => e.company === company);
  return match?.id ?? company.toLowerCase().replace(/\s+/g, "-");
}

export default function Projects() {
  const byCompany = useMemo(() => {
    const order = experience
      .map((e) => e.company)
      .filter((c) => projects.some((p) => p.company === c));
    for (const p of projects) {
      if (!order.includes(p.company)) order.push(p.company);
    }
    return order.map((company) => ({
      company,
      id: companyToId(company),
      items: projects.filter((p) => p.company === company),
      role: experience.find((e) => e.company === company)?.role,
    }));
  }, []);

  const [activeId, setActiveId] = useState(byCompany[0]?.id ?? "");

  // Deep-link from Experience “related projects”
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash.startsWith("project-company-")) return;
      const id = hash.replace("project-company-", "");
      if (byCompany.some((g) => g.id === id)) {
        setActiveId(id);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [byCompany]);

  const active = byCompany.find((g) => g.id === activeId) ?? byCompany[0];

  const selectCompany = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#project-company-${id}`);
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="04"
            label="Projects"
            title="What I Shipped"
            subtitle="Compact company switcher — same details, shorter page"
          />
        </AnimatedSection>

        <div className="mx-auto max-w-6xl scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-[var(--bg)] shadow-sm">
          {/* Company tabs — one panel at a time */}
          <div className="flex flex-wrap gap-1 border-b border-slate-200 bg-white p-2 sm:p-3">
            {byCompany.map((group) => {
              const on = group.id === activeId;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => selectCompany(group.id)}
                  className={`rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition sm:px-4 ${
                    on
                      ? "bg-orange-500 text-white shadow-sm shadow-orange-500/25"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  <span className="block sm:inline">
                    {group.company.split(" ").slice(0, 2).join(" ")}
                  </span>
                  <span
                    className={`ml-0 font-mono sm:ml-2 ${on ? "text-white/70" : "text-slate-400"}`}
                  >
                    {group.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {active && (
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-wrap items-end justify-between gap-2 border-b border-slate-200/80 px-5 py-4 sm:px-7">
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-slate-900 sm:text-2xl">
                      {active.company}
                    </h3>
                    {active.role && (
                      <p className="mt-0.5 text-sm text-slate-500">{active.role}</p>
                    )}
                  </div>
                  <p className="font-mono text-xs text-slate-400">
                    {active.items.length} project
                    {active.items.length === 1 ? "" : "s"}
                  </p>
                </div>

                <ul className="divide-y divide-slate-200/80">
                  {active.items.map((project, i) => (
                    <li
                      key={project.name}
                      className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] sm:gap-6 sm:px-7 sm:py-3.5"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded border border-orange-100 bg-orange-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-700">
                            {project.domain}
                          </span>
                        </div>
                        <p className="mt-1.5 font-[family-name:var(--font-syne)] text-base font-bold text-slate-900">
                          {project.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          Client · {project.client}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm leading-snug text-slate-600">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.stack.map((tech) => {
                            const { Icon, color } = getSkillIcon(tech);
                            return (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-slate-200/90"
                              >
                                <Icon className="h-3 w-3" style={{ color }} />
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-slate-400">
          {projects.length} projects · switch company tabs to browse
        </p>
      </div>
    </section>
  );
}
