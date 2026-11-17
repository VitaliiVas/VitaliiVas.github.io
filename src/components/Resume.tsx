import { Download, GraduationCap, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, timeline } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading label="Resume" title="Education & experience" />
        <Reveal className="mb-12">
          <a href={profile.resumeFile} download className="btn-ghost text-sm">
            <Download size={15} /> Download resume
          </a>
        </Reveal>
      </div>

      <div className="relative ml-2 border-l border-white/10 pl-8">
        {timeline.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              {/* Timeline node */}
              <span
                className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[--color-accent] bg-[#0a0a12]"
                aria-hidden
              >
                {entry.kind === "education" ? (
                  <GraduationCap size={12} className="text-[--color-accent]" />
                ) : (
                  <Briefcase size={12} className="text-[--color-accent-2]" />
                )}
              </span>

              <p className="text-xs font-semibold uppercase tracking-widest text-[--color-accent-2]">
                {entry.period}
              </p>
              <h3
                className="mt-1 text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {entry.title}
              </h3>
              <p className="mt-0.5 text-sm text-[--color-muted]">{entry.org}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {entry.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-[--color-muted]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--color-accent]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
