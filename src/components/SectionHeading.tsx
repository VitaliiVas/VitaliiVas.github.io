import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <span className="chip">{label}</span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
    </Reveal>
  );
}
