"use client";

import { OverlaySection } from "./OverlaySection";

export function HeroOverlay() {
  return (
    <OverlaySection id="hero" align="left">
      <p className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        <span className="h-px w-10 bg-foreground-mute/60" />
        Mercedes-Benz Classic · Magyarország · 2003 óta
      </p>

      <h1 className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
        A márka történetét
        <br />
        <span className="font-extralight text-foreground-soft">
          közösen őrizzük.
        </span>
      </h1>

      <p className="mt-10 max-w-lg text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
        A Mercedes-Benz Classic által hivatalosan elismert magyarországi
        márkaklub. Klasszikus járművek, közös programok és maradandó élmények.
      </p>

      <p className="mt-12 text-[11px] font-normal uppercase tracking-[0.32em] text-foreground-mute">
        Görgess
      </p>
    </OverlaySection>
  );
}
