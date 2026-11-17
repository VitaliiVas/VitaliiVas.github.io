import { Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading sector="02" label="Race entries" title="Things I've built" />

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <article className="card p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="pos-chip">P{i + 1}</span>
                  <div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <span
                      className={`compound mt-2 ${project.status ? "compound--soft" : "compound--hard"}`}
                    >
                      <span className="compound-dot" />
                      {project.status ? `Soft · ${project.status}` : "Hard · Finished"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !px-3.5 !py-1.5 !text-sm"
                  >
                    <Github size={15} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary !px-3.5 !py-1.5 !text-sm"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 max-w-3xl" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0"
                      style={{ background: "var(--fastest)" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
