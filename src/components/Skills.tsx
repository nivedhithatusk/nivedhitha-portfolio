"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import NestedScrollPane from "@/components/ui/NestedScrollPane";
import { allSkills, experience, skillCategories } from "@/data/resume";
import { getSkillIcon, skillCategoryIcons } from "@/icons";

type View = { type: "category"; index: number } | { type: "company"; index: number };

const categoryColors = [
  "text-orange-400",
  "text-violet-400",
  "text-cyan-400",
  "text-emerald-400",
  "text-amber-400",
  "text-rose-400",
  "text-sky-400",
  "text-lime-400",
];

type SkillEntry = { name: string; category?: string; inScope: boolean };

type OutputPanel =
  | {
      command: string;
      title: string;
      count: number;
      skills: SkillEntry[];
      grouped?: false;
    }
  | {
      command: string;
      title: string;
      subtitle: string;
      count: number;
      skills: SkillEntry[];
      grouped: true;
    };

export default function Skills() {
  const [view, setView] = useState<View>({ type: "category", index: 0 });

  const output: OutputPanel = useMemo(() => {
    if (view.type === "category") {
      const cat = skillCategories[view.index];
      return {
        command: `cat skills/${cat.title.toLowerCase().replace(/\s+/g, "-")}.json`,
        title: cat.title,
        count: cat.skills.length,
        skills: cat.skills.map((s) => ({ name: s, inScope: true })),
      };
    }
    const job = experience[view.index];
    const jobSet = new Set(job.skills);
    const skills: SkillEntry[] = skillCategories.flatMap((cat) =>
      cat.skills
        .filter((s) => jobSet.has(s))
        .map((s) => ({ name: s, category: cat.title, inScope: true })),
    );
    const extra: SkillEntry[] = job.skills
      .filter((s) => !skills.some((x) => x.name === s))
      .map((s) => ({ name: s, category: "Other", inScope: true }));
    return {
      command: `skills --company="${job.id}" --verbose`,
      title: job.company,
      subtitle: job.role,
      count: job.skills.length,
      skills: [...skills, ...extra],
      grouped: true,
    };
  }, [view]);

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="01"
            label="Skills & Knowledge"
            title="What I Know & Use"
            subtitle={`${allSkills.length} technologies — scroll inside the panel; page scroll continues at the edges`}
          />
        </AnimatedSection>

        {/* Fixed-height terminal — content scrolls inside, not the page */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex h-[90vh] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1117] shadow-2xl shadow-slate-900/15"
        >
          <div className="flex shrink-0 items-center gap-2 border-b border-slate-800 bg-[#161b22] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-xs text-slate-500">
              nivedhitha@skills ~ bash — skill-explorer
            </span>
          </div>

          <div className="shrink-0 border-b border-slate-800/80 px-4 py-3 font-mono text-sm sm:px-6">
            <span className="text-emerald-500">$ </span>
            <span className="text-slate-300">{output.command}</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
          </div>

          <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(200px,260px)_1fr]">
            {/* Sidebar: scroll inside, then pass to page */}
            <NestedScrollPane className="border-b border-slate-800/80 font-mono text-sm lg:border-b-0 lg:border-r [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
              <div className="sticky top-0 z-10 bg-[#0d1117] px-4 py-3 text-[10px] uppercase tracking-widest text-slate-600">
                ./skills/
              </div>

              <div className="px-2 pb-2">
                <p className="px-2 py-1 text-[10px] text-slate-600">categories/</p>
                {skillCategories.map((cat, i) => {
                  const active = view.type === "category" && view.index === i;
                  const CatIcon = skillCategoryIcons[i] ?? skillCategoryIcons[0];
                  return (
                    <button
                      key={cat.title}
                      type="button"
                      onClick={() => setView({ type: "category", index: i })}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                        active
                          ? "bg-slate-800 text-white"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      <CatIcon
                        className={`h-3.5 w-3.5 shrink-0 ${
                          active
                            ? categoryColors[i % categoryColors.length]
                            : "text-slate-500"
                        }`}
                      />
                      <span
                        className={`truncate ${
                          active ? categoryColors[i % categoryColors.length] : ""
                        }`}
                      >
                        {cat.title}/
                      </span>
                      <span className="ml-auto shrink-0 text-[10px] text-slate-600">
                        {cat.skills.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mx-4 border-t border-slate-800/80" />

              <div className="px-2 py-2 pb-4">
                <p className="px-2 py-1 text-[10px] text-slate-600">companies/</p>
                {experience.map((job, i) => {
                  const active = view.type === "company" && view.index === i;
                  return (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setView({ type: "company", index: i })}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                        active
                          ? "bg-slate-800 text-white"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-sky-400">├──</span>
                      <span className="truncate">{job.company.split(" ")[0]}/</span>
                      <span className="ml-auto shrink-0 text-[10px] text-slate-600">
                        {job.skills.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </NestedScrollPane>

            {/* Body: scroll inside, then pass to page */}
            <NestedScrollPane className="p-4 sm:p-6 [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${view.type}-${view.index}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 font-mono text-xs">
                    <span className="text-slate-500">{"// "}</span>
                    <span className="text-emerald-400">{output.title}</span>
                    {output.grouped && (
                      <>
                        <span className="text-slate-600"> · </span>
                        <span className="text-sky-400">{output.subtitle}</span>
                      </>
                    )}
                    <span className="text-slate-600"> — </span>
                    <span className="text-amber-300">{output.count} entries</span>
                  </div>

                  {output.grouped ? (
                    <div className="space-y-5">
                      {skillCategories.map((cat, ci) => {
                        const items = output.skills.filter(
                          (s) => s.category === cat.title,
                        );
                        if (items.length === 0) return null;
                        return (
                          <div key={cat.title}>
                            <p
                              className={`mb-2 font-mono text-[10px] uppercase tracking-widest ${categoryColors[ci % categoryColors.length]}`}
                            >
                              [{cat.title}]
                            </p>
                            <ul className="grid gap-1 sm:grid-cols-2">
                              {items.map((s) => (
                                <SkillRow key={s.name} name={s.name} />
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                      {output.skills.some((s) => s.category === "Other") && (
                        <div>
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                            [Other]
                          </p>
                          <ul className="grid gap-1 sm:grid-cols-2">
                            {output.skills
                              .filter((s) => s.category === "Other")
                              .map((s) => (
                                <SkillRow key={s.name} name={s.name} />
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                      {output.skills.map((s) => (
                        <SkillRow key={s.name} name={s.name} />
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </NestedScrollPane>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-slate-800 bg-[#161b22] px-4 py-2 font-mono text-[10px] text-slate-500 sm:px-6">
            <span>total: {allSkills.length} skills</span>
            <span>companies: {experience.length}</span>
            <span>categories: {skillCategories.length}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillRow({ name }: { name: string }) {
  const { Icon, color } = getSkillIcon(name);
  return (
    <li className="group flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-700 hover:bg-slate-800/40">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80"
        style={{ color }}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm text-slate-300 group-hover:text-white">{name}</span>
    </li>
  );
}
