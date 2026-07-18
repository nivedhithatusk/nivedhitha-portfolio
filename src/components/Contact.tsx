"use client";

import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { ScrollRevealCard } from "@/components/ui/ScrollStack";
import { personal } from "@/data/resume";
import {
  FaLinkedin,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineArrowRight,
  HiOutlineLink,
} from "@/icons";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}?subject=Work%20Inquiry`,
    Icon: HiOutlineEnvelope,
    hint: "Primary",
  },
  {
    label: "LinkedIn",
    value: "nivedhitha-praba",
    href: personal.linkedin,
    Icon: FaLinkedin,
    hint: "Network",
    external: true,
  },
  {
    label: "Portfolio",
    value: "nivedhitha-portfolio.vercel.app",
    href: personal.portfolio,
    Icon: HiOutlineLink,
    hint: "Live site",
    external: true,
  },
  {
    label: "Location",
    value: personal.location,
    href: null as string | null,
    Icon: HiOutlineMapPin,
    hint: "Based in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[var(--bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08),_transparent_55%)]"
      />

      <div className="container-main relative">
        <AnimatedSection>
          <SectionHeader
            number="05"
            label="Contact"
            title="Get In Touch"
            subtitle="Open to full-time, contract, and DevOps consulting"
          />
        </AnimatedSection>

        <div className="mx-auto max-w-5xl">
          <ScrollRevealCard>
            <div className="mb-10 text-center">
              <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Let&apos;s build something{" "}
                <span className="gradient-text-animated">production-ready.</span>
              </p>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
                Full-stack delivery, cloud deployment, and production support —
                drop a message anytime.
              </p>
            </div>
          </ScrollRevealCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((item) => {
              const Icon = item.Icon;
              const body = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {item.hint}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 truncate text-base font-semibold text-slate-900">
                    {item.value}
                  </p>
                  {item.href && (
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 transition group-hover:text-orange-700">
                      Open
                      <HiOutlineArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  )}
                </>
              );

              const className =
                "group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md";

              return (
                <ScrollRevealCard key={item.label} className="h-full">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={className}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </ScrollRevealCard>
              );
            })}
          </div>

          <ScrollRevealCard className="mt-6">
            <a
              href={`mailto:${personal.email}?subject=Work%20Inquiry`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105"
            >
              Send a message
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </ScrollRevealCard>
        </div>
      </div>
    </section>
  );
}
