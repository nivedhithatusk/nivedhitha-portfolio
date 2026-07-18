"use client";

import { marqueeSkills } from "@/data/resume";
import { getSkillIcon } from "@/icons";

export default function MarqueeBand() {
  const doubled = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="flex w-max animate-marquee gap-6">
        {doubled.map((skill, i) => {
          const { Icon, color } = getSkillIcon(skill);
          return (
            <span
              key={`${skill}-${i}`}
              className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500"
            >
              <Icon className="h-4 w-4 shrink-0" style={{ color }} />
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
