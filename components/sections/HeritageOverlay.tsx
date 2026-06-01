"use client";

import { OverlaySection } from "./OverlaySection";
import { MercedesStarSVG } from "../MercedesStarSVG";

export function HeritageOverlay() {
  return (
    <OverlaySection id="heritage" align="center" toneOnDark>
      <MercedesStarSVG
        className="mx-auto mb-10 text-on-dark"
        size={72}
      />

      <div className="flex items-center justify-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
        <span className="h-px w-12 bg-on-dark-mute/60" />
        <span>hivatalos márkaklub</span>
        <span className="h-px w-12 bg-on-dark-mute/60" />
      </div>

      <h2 className="mt-8 text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-on-dark">
        Mercedes-Benz Classic
        <br />
        <span className="font-extralight text-on-dark-soft">Magyarország</span>
      </h2>

      <p className="mx-auto mt-8 max-w-md text-sm font-light leading-relaxed text-on-dark-soft">
        A Stuttgart-i Mercedes-Benz Classic Club Management által elismert
        magyarországi márkaklub. 2003 óta gyűjtjük a közös történetet.
      </p>

      <p className="mt-14 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
        2003 · 2026
      </p>

      <p className="mt-20 text-[9px] font-normal uppercase tracking-[0.28em] text-on-dark-mute/70">
        300 SL — modell: vecarz.com via Sketchfab (CC BY)
      </p>
    </OverlaySection>
  );
}
