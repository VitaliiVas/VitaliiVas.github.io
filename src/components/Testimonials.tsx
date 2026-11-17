import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading sector="04" label="Team radio" title="What people say" />

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="radio-card flex h-full flex-col p-6 sm:p-7">
              <div className="radio-head">
                <Radio size={13} aria-hidden />
                Team radio
                <span className="wave" aria-hidden>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <blockquote
                className="mt-4 flex-1 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                “{t.quote}”
              </blockquote>
              <figcaption
                className="mt-5 pt-4"
                style={{ borderTop: "1px dashed var(--seam)" }}
              >
                <p
                  className="text-lg font-bold uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.name}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
