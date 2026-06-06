"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$ ", text: "whoami", delay: 0 },
  { prompt: "> ", text: "Nivedhitha A", delay: 800, color: "text-emerald-400" },
  { prompt: "$ ", text: "cat role.txt", delay: 1400 },
  { prompt: "> ", text: "Senior Full Stack Developer & DevOps Engineer", delay: 2200, color: "text-sky-400" },
  { prompt: "$ ", text: "cat location.txt", delay: 3000 },
  { prompt: "> ", text: "Chennai, Tamil Nadu", delay: 3600, color: "text-violet-400" },
  { prompt: "$ ", text: "stack --list", delay: 4200 },
  {
    prompt: "> ",
    text: "React.js · Next.js · Node.js · Java · Spring Boot · AWS · Nginx · PM2",
    delay: 5000,
    color: "text-amber-300",
  },
  { prompt: "$ ", text: "deploy --status", delay: 5800 },
  { prompt: "> ", text: "10+ production projects live ✓", delay: 6500, color: "text-emerald-400" },
  { prompt: "$ ", text: "_", delay: 7200, blink: true },
];

export default function TerminalWindow() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisible(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d1117] shadow-2xl shadow-slate-900/20">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 font-mono text-xs text-slate-500">nivedhitha@portfolio ~ bash</span>
      </div>
      <div className="min-h-[320px] p-5 font-mono text-sm leading-relaxed sm:min-h-[360px] sm:p-6 sm:text-[15px]">
        {lines.slice(0, visible).map((line, i) => (
          <div key={i} className="flex flex-wrap gap-x-1">
            <span className="text-emerald-500">{line.prompt}</span>
            <span className={line.color ?? "text-slate-300"}>
              {line.text}
              {line.blink && (
                <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-400" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
