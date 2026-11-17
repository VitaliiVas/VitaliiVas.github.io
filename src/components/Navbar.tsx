import { useEffect, useState } from "react";
import { Github, Sun, Moon } from "lucide-react";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About", sector: "S1" },
  { href: "#projects", label: "Projects", sector: "S2" },
  { href: "#resume", label: "Resume", sector: "S3" },
  { href: "#testimonials", label: "Radio", sector: "S4" },
  { href: "#contact", label: "Contact", sector: "S5" },
];

function getTheme(): "dark" | "light" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => getTheme());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode etc. */
    }
  };

  return (
    <header
      className={`topbar fixed inset-x-0 top-0 z-50 ${scrolled ? "topbar--scrolled" : ""}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="grid h-8 w-8 place-items-center text-lg font-extrabold"
            style={{
              background: "var(--fastest)",
              color: "var(--on-fastest)",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            28
          </span>
          <span className="text-xl font-bold uppercase tracking-wide">VAS</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              <span className="nav-sector">{l.sector}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !px-3.5 !py-1.5 !text-sm"
            aria-label="GitHub profile"
          >
            <Github size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
