import { Download, GraduationCap, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, timeline } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          sector="03"
          label="Stint history"
          title="Education & experience"
          time="26.901"
        />
        <Reveal className="mb-12">
          <a href={profile.resumeFile} download className="btn-ghost !text-sm">
            <Download size={15} /> Download resume
          </a>
        </Reveal>
      </div>

      <div className="stint-rail relative ml-2 pl-10">
        {timeline.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              <span className="stint-node" aria-hidden>
                {entry.kind === "education" ? (
                  <GraduationCap size={12} style={{ color: "var(--fastest)" }} />
                ) : (
                  <Briefcase size={12} style={{ color: "var(--pb)" }} />
                )}
              </span>

              <p
                className="mono text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--fastest)", fontFamily: "var(--font-mono)" }}
              >
                {entry.period}
              </p>
              <h3 className="mt-1.5 text-2xl font-bold">{entry.title}</h3>
              <p className="mt-0.5 text-sm" style={{ color: "var(--muted)" }}>
                {entry.org}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {entry.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0"
                      style={{ background: "var(--fastest)" }}
                    />
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
