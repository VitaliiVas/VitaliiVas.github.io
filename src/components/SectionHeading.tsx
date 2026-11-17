import Reveal from "./Reveal";

interface SectionHeadingProps {
  sector: string;
  label: string;
  title: string;
}

export default function SectionHeading({ sector, label, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <span className="eyebrow">
        Sector {sector} // {label}
      </span>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
      <span className="kerb" aria-hidden />
    </Reveal>
  );
}
