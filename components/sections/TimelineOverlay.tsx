"use client";

import { OverlaySection } from "./OverlaySection";

const MILESTONES = [
  { year: "1886", text: "Benz Patent-Motorwagen — a kezdet." },
  { year: "1936", text: "260 D — az első dízel személyautó." },
  { year: "1954", text: "300 SL Gullwing — a legenda megszületik." },
  { year: "2003", text: "MBCM megalapítása Magyarországon." },
];

export function TimelineOverlay() {
  return (
    <OverlaySection id="tortenet" align="left">
      <p className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        <span className="h-px w-10 bg-foreground-mute/60" />
        Történet · 02
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        140 év
        <br />
        <span className="font-extralight text-foreground-soft">
          automobil-örökség.
        </span>
      </h2>

      <ul className="mt-12 space-y-7">
        {MILESTONES.map((m) => (
          <li key={m.year} className="flex items-baseline gap-6">
            <span className="text-2xl font-extralight text-foreground tabular-nums">
              {m.year}
            </span>
            <span className="text-sm font-light text-foreground-soft">
              {m.text}
            </span>
          </li>
        ))}
      </ul>
    </OverlaySection>
  );
}
