"use client";

import { OverlaySection } from "./OverlaySection";

const RECURRING = [
  { season: "Tavasz", text: "Évadnyitó találkozó, közös garázs-vizit" },
  { season: "Nyár", text: "Hétvégi túrák, balatoni körút, falunap" },
  { season: "Ősz", text: "Műhelylátogatások, szakmai előadások" },
  { season: "Tél", text: "Klubgyűlés, évzáró vacsora" },
];

export function EventsOverlay() {
  return (
    <OverlaySection id="esemenyek" align="left">
      <p className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        <span className="h-px w-10 bg-foreground-mute/60" />
        Események · 04
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Az évszakok
        <br />
        <span className="font-extralight text-foreground-soft">
          ritmusa.
        </span>
      </h2>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        Havi klubgyűlések, hétvégi túrák, szakmai előadások, családi
        kirándulások. Minden évszak a maga rendezvényeivel.
      </p>

      <ul className="mt-10 space-y-4">
        {RECURRING.map((r) => (
          <li
            key={r.season}
            className="flex items-baseline gap-5 border-t border-foreground/8 pt-4"
          >
            <span className="w-16 text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
              {r.season}
            </span>
            <span className="text-sm font-light text-foreground">
              {r.text}
            </span>
          </li>
        ))}
      </ul>
    </OverlaySection>
  );
}
