import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { profile } from "../data";

/** Faint telemetry traces that draw themselves in on load. */
function Telemetry() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[46%] w-full"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* speed trace — fastest-lap purple */}
      <motion.path
        d="M0 210 C 60 170 90 100 150 96 S 240 205 300 210 S 380 70 450 66 S 540 235 620 240 S 700 110 780 106 S 860 40 940 44 S 1040 215 1120 210 L 1200 140"
        fill="none"
        stroke="var(--fastest)"
        strokeWidth="2"
        strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
      />
      {/* throttle trace — personal-best green */}
      <motion.path
        d="M0 280 L 120 278 L 150 150 L 230 148 L 300 278 L 420 276 L 450 130 L 560 128 L 620 278 L 720 276 L 780 110 L 920 108 L 960 278 L 1080 276 L 1120 160 L 1200 158"
        fill="none"
        stroke="var(--pb)"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut", delay: 0.7 }}
      />
    </svg>
  );
}

/** Five start lights: on in sequence, then lights out. */
function StartLights() {
  return (
    <div className="mb-7 flex gap-2.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="start-light"
          animate={{
            backgroundColor: [
              "var(--light-off)",
              "#e5484d",
              "#e5484d",
              "var(--light-off)",
            ],
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.25, 0.78, 0.82],
            delay: i * 0.22,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="graph-bg absolute inset-0" aria-hidden />
      <Telemetry />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <StartLights />

            <motion.p variants={rise} transition={{ duration: 0.6 }} className="eyebrow">
              Driver № 28 — {profile.location}
            </motion.p>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.7 }}
              className="mt-4 text-6xl font-extrabold sm:text-8xl"
            >
              Vitalii
              <br />
              <span style={{ color: "var(--fastest)" }}>Vasylets</span>
            </motion.h1>

            <motion.p
              variants={rise}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-primary">
                View my work <ArrowDown size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github size={16} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Pit board */}
          <motion.div variants={rise} transition={{ duration: 0.7 }}>
            <div className="pitboard">
              <div className="pitboard-row">
                <span className="pitboard-key">Driver</span>
                <span className="pitboard-val">VAS · 28</span>
              </div>
              <div className="pitboard-row">
                <span className="pitboard-key">Role</span>
                <span className="pitboard-val">{profile.role}</span>
              </div>
              <div className="pitboard-row">
                <span className="pitboard-key">Team</span>
                <span className="pitboard-val">UW Bothell '28</span>
              </div>
              <div className="pitboard-row">
                <span className="pitboard-key">Status</span>
                <span className="pitboard-val" style={{ color: "var(--pb)" }}>
                  Open to internships
                </span>
              </div>
              <div className="pitboard-row">
                <span className="pitboard-key">Stack</span>
                <span className="pitboard-val">PY · TS · SQL</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        style={{ color: "var(--muted)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
