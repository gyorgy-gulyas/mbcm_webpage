"use client";

import { OverlaySection } from "./OverlaySection";

const STEPS = [
  {
    no: "01",
    title: "Ajánlás",
    text: "Új tag jelentkezését két meglévő tag ajánlása indítja el.",
  },
  {
    no: "02",
    title: "Próbaidő",
    text: "Egy szezon közös események — kölcsönös megismerés.",
  },
  {
    no: "03",
    title: "Felvétel",
    text: "Klubtagsági szavazás után teljes jogú tag.",
  },
];

export function MembershipOverlay() {
  return (
    <OverlaySection id="tagsag" align="left">
      <p className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        <span className="h-px w-10 bg-foreground-mute/60" />
        Tagság · 07
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Belépés
        <br />
        <span className="font-extralight text-foreground-soft">
          meghívás alapján.
        </span>
      </h2>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        A klub zárt közösség. A felvétel három lépcsőben történik — a klub
        aktív részvételt kíván minden tagjától.
      </p>

      <ol className="mt-12 space-y-7">
        {STEPS.map((s) => (
          <li key={s.no} className="flex items-baseline gap-6">
            <span className="text-2xl font-extralight text-foreground tabular-nums">
              {s.no}
            </span>
            <div>
              <p className="text-base font-light text-foreground">
                {s.title}
              </p>
              <p className="mt-1 text-sm font-light text-foreground-soft">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </OverlaySection>
  );
}
