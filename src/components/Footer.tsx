import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-[--color-muted]">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
