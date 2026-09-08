"use client";

import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import NestedScrollPane from "@/components/ui/NestedScrollPane";
import ScrollStack from "@/components/ui/ScrollStack";
import { experience, projects, type Project } from "@/data/resume";
import { getSkillIcon } from "@/icons";
import { useActiveSection } from "@/hooks/useActiveSection";

const cardThemes = [
  {
    shell: "border-orange-200/70 ring-orange-100/50",
    header: "from-orange-50/90 via-white to-amber-50/50",
    accent: "text-orange-600",
    dot: "bg-orange-400",
    badge: "bg-orange-500",
    panel: "bg-orange-50/40",
    link: "text-orange-600 hover:text-orange-700",
    thead: "bg-orange-50/90 text-orange-800",
    row: "odd:bg-white even:bg-orange-50/40 hover:bg-orange-50/80",
  },
  {
    shell: "border-sky-200/70 ring-sky-100/50",
    header: "from-sky-50/90 via-white to-cyan-50/40",
    accent: "text-sky-600",
    dot: "bg-sky-400",
    badge: "bg-sky-500",
    panel: "bg-sky-50/40",
    link: "text-sky-600 hover:text-sky-700",
    thead: "bg-sky-50/90 text-sky-800",
    row: "odd:bg-white even:bg-sky-50/40 hover:bg-sky-50/80",
  },
  {
    shell: "border-emerald-200/70 ring-emerald-100/50",
    header: "from-emerald-50/90 via-white to-teal-50/40",
    accent: "text-emerald-600",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500",
    panel: "bg-emerald-50/40",
    link: "text-emerald-600 hover:text-emerald-700",
    thead: "bg-emerald-50/90 text-emerald-800",
    row: "odd:bg-white even:bg-emerald-50/40 hover:bg-emerald-50/80",
  },
  {
    shell: "border-amber-200/70 ring-amber-100/50",
    header: "from-amber-50/90 via-white to-orange-50/30",
    accent: "text-amber-700",
    dot: "bg-amber-400",
    badge: "bg-amber-500",
    panel: "bg-amber-50/40",
    link: "text-amber-700 hover:text-amber-800",
    thead: "bg-amber-50/90 text-amber-900",
    row: "odd:bg-white even:bg-amber-50/40 hover:bg-amber-50/80",
  },
];

type ProjectRow = {
  name: string;
  detail: string;
};

function parseKeyProject(raw: string): ProjectRow {
  const sep = " — ";
  const idx = raw.indexOf(sep);
  if (idx === -1) return { name: raw, detail: "" };
  return { name: raw.slice(0, idx), detail: raw.slice(idx + sep.length) };
}

function toRows(keyProjects: string[] | undefined, related: Project[]): ProjectRow[] {
  if (keyProjects && keyProjects.length > 0) {
    return keyProjects.map(parseKeyProject);
  }
  return related.map((p) => ({ name: p.name, detail: p.description }));
}

export default function ExperienceSection() {
  const { navigateTo } = useActiveSection();

  const openProjects = (roleId: string) => {
    window.history.replaceState(null, "", `#project-company-${roleId}`);
    window.dispatchEvent(new Event("hashchange"));
    navigateTo("#projects");
  };

  const items = experience.map((role, i) => {
    const related = projects.filter((p) => p.company === role.company);
    const theme = cardThemes[i % cardThemes.length];
    const rows = toRows(role.keyProjects, related);

    return {
      id: role.id,
      content: (
        <article
          className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-lg shadow-slate-200/40 ring-1 ${theme.shell}`}
        >
          <div
            className={`flex flex-wrap items-start justify-between gap-3 border-b border-slate-100/80 bg-gradient-to-r px-5 py-4 sm:px-8 sm:py-5 ${theme.header}`}
          >
            <div className="min-w-0 flex-1">
              <p className={`font-mono text-[11px] tracking-wider ${theme.accent}`}>
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(experience.length).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-syne)] text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                {role.company}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {role.role}
                {role.roleSubtitle ? (
                  <span className="font-normal text-slate-500">
                    {" "}
                    · {role.roleSubtitle}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 font-mono text-xs text-slate-500">
                {role.period}
                <span className="mx-2 text-slate-300">·</span>
                {role.location}
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

          <NestedScrollPane className="min-h-0 flex-1">
            <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]">
              <div className="min-w-0">
                <div className="px-5 py-5 sm:px-8">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Role focus
                  </p>
                  <ul className="space-y-2.5">
                    {role.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-slate-600"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {rows.length > 0 && (
                  <div className="border-t border-slate-100/80 px-5 py-5 sm:px-8">
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Key projects
                      </p>
                      <span className="font-mono text-[10px] text-slate-400">
                        {rows.length}
                      </span>
                    </div>
                    <div className="hide-scrollbar overflow-x-auto rounded-xl border border-slate-200/90">
                      <table className="w-full border-collapse text-left">
                        <thead className={`sticky top-0 z-10 ${theme.thead}`}>
                          <tr>
                            <th className="w-12 px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                              #
                            </th>
                            <th className="w-[28%] px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider">
                              Project
                            </th>
                            <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider">
                              Scope
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, idx) => (
                            <tr
                              key={row.name}
                              className={`border-t border-slate-100 transition ${theme.row}`}
                            >
                              <td className="px-3 py-2.5 align-top font-mono text-[11px] text-slate-400">
                                {String(idx + 1).padStart(2, "0")}
                              </td>
                              <td className="px-3 py-2.5 align-top text-[13px] font-semibold leading-snug text-slate-900">
                                {row.name}
                              </td>
                              <td className="px-3 py-2.5 text-[13px] leading-relaxed text-slate-600">
                                {row.detail}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`border-t border-slate-100/80 px-5 py-5 sm:px-6 lg:sticky lg:top-0 lg:border-l lg:border-t-0 ${theme.panel}`}
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Core tools
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {role.skills.slice(0, 12).map((skill) => {
                    const { Icon, color } = getSkillIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/80 bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
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
                    onClick={() => openProjects(role.id)}
                    className={`mt-6 text-left text-sm font-bold transition ${theme.link}`}
                  >
                    View {related.length} related project
                    {related.length === 1 ? "" : "s"} →
                  </button>
                )}
              </div>
            </div>
          </NestedScrollPane>
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
            subtitle="Scroll the role stack — key projects listed as a table"
          />
        </AnimatedSection>

        <ScrollStack items={items} fullWidth />
      </div>
    </section>
  );
}
