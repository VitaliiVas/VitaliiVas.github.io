import { Github, ExternalLink, CircleDot } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading label="Projects" title="Things I've built" />

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <article className="card p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[--color-accent-2]">
                      <CircleDot size={12} /> {project.status}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !px-3.5 !py-2 text-sm"
                  >
                    <Github size={15} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary !px-3.5 !py-2 text-sm"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-[--color-muted]">{project.description}</p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[--color-muted]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--color-accent]" />
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
