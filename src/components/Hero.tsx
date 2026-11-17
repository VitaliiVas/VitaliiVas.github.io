import { motion } from "framer-motion";
import { ArrowDown, MapPin, Github } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background: dot grid + glow orbs */}
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-1/5 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--color-accent-2)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 text-sm text-[--color-muted]"
          >
            <MapPin size={14} className="text-[--color-accent-2]" />
            {profile.location} · Open to SWE internships
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
            <br />
            {profile.role}.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[--color-muted]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work <ArrowDown size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github size={16} /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[--color-muted]"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
