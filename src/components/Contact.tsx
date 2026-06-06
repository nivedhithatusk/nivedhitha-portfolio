"use client";

import { motion } from "framer-motion";
import AnimatedSection, { SectionHeader } from "@/components/ui/AnimatedSection";
import { personal } from "@/data/resume";
import {
  FaLinkedin,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineArrowRight,
} from "@/icons";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main">
        <AnimatedSection>
          <SectionHeader
            number="05"
            label="Contact"
            title="Get In Touch"
            subtitle="Open to full-time roles, contract work, and DevOps consulting"
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-slate-900 sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whether you need a scalable web application, AWS cloud deployment, Java backend
              development, or production support — I&apos;m ready to help. Drop me a message and
              I&apos;ll respond as soon as possible.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Full-time & contract opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                DevOps & cloud infrastructure consulting
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                React, Next.js, Java & Spring Boot projects
              </li>
            </ul>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={`mailto:${personal.email}?subject=Work%20Inquiry`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-50/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <HiOutlineEnvelope className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
                <p className="truncate font-semibold text-slate-900">{personal.email}</p>
              </div>
              <HiOutlineArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-emerald-600" />
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <HiOutlineMapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
                <p className="font-semibold text-slate-900">{personal.location}</p>
              </div>
            </div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#0A66C2]">
                <FaLinkedin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">LinkedIn</p>
                <p className="font-semibold text-slate-900">Connect with me</p>
              </div>
              <HiOutlineArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-blue-600" />
            </a>

            <a
              href={`mailto:${personal.email}?subject=Work%20Inquiry`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send Message
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
