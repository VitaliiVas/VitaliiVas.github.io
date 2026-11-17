import { motion, useScroll } from "framer-motion";

/** Scroll position rendered as lap distance: a thin bar across the very top. */
export default function LapProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0 0",
        background: "var(--fastest)",
      }}
      aria-hidden
    />
  );
}
