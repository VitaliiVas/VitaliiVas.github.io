import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading label="Testimonials" title="What people say" />

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="card flex h-full flex-col p-7">
              <Quote size={22} className="mb-4 text-[--color-accent]" aria-hidden />
              <blockquote className="flex-1 leading-relaxed text-[--color-muted]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-[--color-muted]">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
