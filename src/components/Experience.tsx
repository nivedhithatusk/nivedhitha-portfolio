"use client";

import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import ScrollStack from "@/components/ui/ScrollStack";
import { experience, projects } from "@/data/resume";
import { getSkillIcon } from "@/icons";
import { useActiveSection } from "@/hooks/useActiveSection";

/** Mild per-role tints — keeps the stack design, softer color */
const cardThemes = [
  {
    shell: "border-orange-200/70 ring-orange-100/50",
    header: "from-orange-50/90 via-white to-amber-50/50",
    accent: "text-orange-600",
    dot: "bg-orange-400",
    badge: "bg-orange-500",
    panel: "bg-orange-50/40",
    link: "text-orange-600 hover:text-orange-700",
  },
  {
    shell: "border-sky-200/70 ring-sky-100/50",
    header: "from-sky-50/90 via-white to-cyan-50/40",
    accent: "text-sky-600",
    dot: "bg-sky-400",
    badge: "bg-sky-500",
    panel: "bg-sky-50/40",
    link: "text-sky-600 hover:text-sky-700",
  },
  {
    shell: "border-emerald-200/70 ring-emerald-100/50",
    header: "from-emerald-50/90 via-white to-teal-50/40",
    accent: "text-emerald-600",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500",
    panel: "bg-emerald-50/40",
    link: "text-emerald-600 hover:text-emerald-700",
  },
  {
    shell: "border-amber-200/70 ring-amber-100/50",
    header: "from-amber-50/90 via-white to-orange-50/30",
    accent: "text-amber-700",
    dot: "bg-amber-400",
    badge: "bg-amber-500",
    panel: "bg-amber-50/40",
    link: "text-amber-700 hover:text-amber-800",
  },
];

export default function ExperienceSection() {
  const { navigateTo } = useActiveSection();

  const items = experience.map((role, i) => {
    const related = projects.filter((p) => p.company === role.company);
    const theme = cardThemes[i % cardThemes.length];
    return {
      id: role.id,
      content: (
        <article
          className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-lg shadow-slate-200/40 ring-1 ${theme.shell}`}
        >
          <div
            className={`flex flex-wrap items-start justify-between gap-4 border-b border-slate-100/80 bg-gradient-to-r px-6 py-5 sm:px-10 sm:py-6 ${theme.header}`}
          >
            <div className="min-w-0 flex-1">
              <p className={`font-mono text-xs tracking-wider ${theme.accent}`}>
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(experience.length).padStart(2, "0")}
                <span className="mx-2 text-slate-300">·</span>
                {role.period}
                <span className="mx-2 text-slate-300">·</span>
                {role.location}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                {role.company}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-600 sm:text-base">
                {role.role}
              </p>
            </div>
            {i === 0 && (
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${theme.badge}`}
              >
                Present
              </span>
            )}
          </div>

          <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <ul
              data-lenis-prevent
              className="min-h-0 space-y-3 overflow-y-auto overscroll-contain px-6 py-6 sm:px-10 [scrollbar-width:thin]"
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Role focus
              </p>
              {role.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]"
                >
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div
              className={`flex flex-col border-t border-slate-100/80 px-6 py-6 sm:px-8 lg:border-l lg:border-t-0 ${theme.panel}`}
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Core tools
              </p>
              <div className="flex flex-wrap gap-2">
                {role.skills.slice(0, 12).map((skill) => {
                  const { Icon, color } = getSkillIcon(skill);
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/80 bg-white/90 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color }} />
                      {skill}
                    </span>
                  );
                })}
                {role.skills.length > 12 && (
                  <span className="px-2 py-1.5 text-[11px] text-slate-400">
                    +{role.skills.length - 12}
                  </span>
                )}
              </div>

              {related.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    window.history.replaceState(
                      null,
                      "",
                      `#project-company-${role.id}`,
                    );
                    window.dispatchEvent(new Event("hashchange"));
                    navigateTo("#projects");
                  }}
                  className={`mt-auto pt-6 text-left text-sm font-bold transition ${theme.link}`}
                >
                  View {related.length} related project
                  {related.length === 1 ? "" : "s"} →
                </button>
              )}
            </div>
          </div>
        </article>
      ),
    };
  });

  return (
    <section id="experience" className="section-padding bg-[var(--bg)]">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="02"
            label="Experience"
            title="My Career Journey"
            subtitle="Scroll the role stack — full-width cards pin as you go"
          />
        </AnimatedSection>

        <ScrollStack items={items} fullWidth />
      </div>
    </section>
  );
}
