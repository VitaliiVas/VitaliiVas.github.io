import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, skills } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading sector="01" label="Driver profile" title="A bit about me" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="h-28 w-28 object-cover"
              style={{
                border: "1px solid var(--seam)",
                clipPath:
                  "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
              }}
              loading="lazy"
            />
            {profile.about.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-lg leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="card p-5">
                <h3
                  className="mono mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--fastest)", fontFamily: "var(--font-mono)" }}
                >
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
