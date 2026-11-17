const TRACK =
  "M 90 330 L 300 330 C 340 330 360 318 368 290 L 380 240 C 385 220 400 210 420 212 L 500 225 C 530 230 548 215 545 190 L 538 130 C 535 105 515 95 492 100 L 420 115 C 400 119 385 112 380 95 L 372 60 C 368 40 350 30 330 32 L 150 48 C 120 51 105 65 102 90 L 95 140 C 93 160 80 168 65 165 C 45 160 38 172 40 190 L 48 290 C 50 315 65 330 90 330 Z";

const label = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  fill: "var(--muted)",
} as const;

/** The scenic centerpiece: a race circuit with sectors, corners, an S/F
 *  line, a DRS zone, and a car dot lapping it forever. */
export default function CircuitMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 420" className={className} aria-hidden>
      {/* tarmac */}
      <path
        d={TRACK}
        fill="none"
        stroke="var(--fold)"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* dashed centerline */}
      <path
        d={TRACK}
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        strokeOpacity="0.55"
      />

      {/* start/finish checkered line */}
      <g transform="translate(196 322)">
        {[0, 1, 2, 3].map((r) =>
          [0, 1].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={c * 4}
              y={r * 4}
              width="4"
              height="4"
              fill={(r + c) % 2 === 0 ? "var(--ink)" : "var(--tarmac)"}
            />
          )),
        )}
      </g>
      <text x="192" y="368" {...label}>
        S/F
      </text>

      {/* sector markers */}
      <g>
        <line x1="376" y1="258" x2="392" y2="262" stroke="var(--fastest)" strokeWidth="3" />
        <text x="400" y="268" {...label} fill="var(--fastest)">
          S1
        </text>
        <line x1="488" y1="92" x2="492" y2="108" stroke="var(--pb)" strokeWidth="3" />
        <text x="500" y="92" {...label} fill="var(--pb)">
          S2
        </text>
        <line x1="88" y1="146" x2="104" y2="142" stroke="var(--kerb-red)" strokeWidth="3" />
        <text x="62" y="140" {...label} fill="var(--kerb-red)">
          S3
        </text>
      </g>

      {/* corner numbers */}
      <text x="352" y="310" {...label}>
        T1
      </text>
      <text x="556" y="180" {...label}>
        T4
      </text>
      <text x="352" y="80" {...label}>
        T7
      </text>
      <text x="22" y="196" {...label}>
        T11
      </text>

      {/* DRS zone along the main straight */}
      <text x="226" y="352" {...label} letterSpacing="2">
        DRS ZONE ›
      </text>

      {/* the car */}
      <circle r="5" fill="var(--fastest)">
        <animateMotion dur="16s" repeatCount="indefinite" path={TRACK} />
      </circle>
    </svg>
  );
}
