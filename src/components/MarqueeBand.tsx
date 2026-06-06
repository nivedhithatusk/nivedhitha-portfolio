"use client";

import { marqueeSkills } from "@/data/resume";

export default function MarqueeBand() {
  const doubled = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="flex w-max animate-marquee gap-8">
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
