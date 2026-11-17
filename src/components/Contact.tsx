import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="eyebrow justify-center">Sector 05 // Pit wall</span>
          <h2 className="mt-5 text-5xl font-bold sm:text-6xl">
            Box box —{" "}
            <span style={{ color: "var(--fastest)" }}>let's talk</span>
          </h2>
          <span className="kerb mx-auto" aria-hidden />
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
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
