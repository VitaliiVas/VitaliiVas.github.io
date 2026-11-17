import Reveal from "./Reveal";

interface SectionHeadingProps {
  sector: string;
  label: string;
  title: string;
  /** Timing-screen readout shown on the right, e.g. "31.077" */
  time?: string;
  /** Fastest sector gets the purple time */
  fastest?: boolean;
}

export default function SectionHeading({
  sector,
  label,
  title,
  time,
  fastest,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="eyebrow">
          Sector {sector} // {label}
        </span>
        {time && (
          <span className={`sector-time ${fastest ? "sector-time--fastest" : ""}`}>
            {fastest ? "⏱ " : ""}S{Number(sector)} {time}
          </span>
        )}
      </div>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
      <span className="kerb" aria-hidden />
    </Reveal>
  );
}
