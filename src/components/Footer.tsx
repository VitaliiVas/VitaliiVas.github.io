import { profile } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="checker-strip" aria-hidden />
      <div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-sm"
        style={{ color: "var(--muted)" }}
      >
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mono" style={{ fontFamily: "var(--font-mono)" }}>
          VAS · 28 — built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}
