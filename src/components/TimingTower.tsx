import { useEffect, useState } from "react";

const rows = [
  { id: "about", label: "About", gap: "LEADER" },
  { id: "projects", label: "Projects", gap: "+0.428" },
  { id: "resume", label: "Resume", gap: "+1.277" },
  { id: "testimonials", label: "Radio", gap: "+2.901" },
  { id: "contact", label: "Contact", gap: "+4.163" },
];

/** F1 timing-tower scrollspy, pinned to the left edge on wide screens. */
export default function TimingTower() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = rows
      .map((r) => document.getElementById(r.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="timing-tower hidden 2xl:flex" aria-label="Section navigation">
      {rows.map((r, i) => (
        <a
          key={r.id}
          href={`#${r.id}`}
          className={`tower-row ${active === r.id ? "tower-row--active" : ""}`}
        >
          <span className="tower-pos">{i + 1}</span>
          <span className="tower-name">{r.label}</span>
          <span className="tower-gap">{r.gap}</span>
        </a>
      ))}
    </aside>
  );
}
