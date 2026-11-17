import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28">
      {/* Glow behind the CTA */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[110px]"
        style={{ background: "linear-gradient(100deg, var(--color-accent), var(--color-accent-2))" }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="chip">Contact</span>
          <h2
            className="mt-5 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's build something <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[--color-muted]">
            I'm currently looking for software engineering internships. If you think
            I'd be a good fit for your team — or just want to talk code — my inbox is open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> Say hello
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github size={16} /> GitHub
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                <Linkedin size={16} /> LinkedIn
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
