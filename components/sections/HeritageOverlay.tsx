"use client";

import Image from "next/image";
import { OverlaySection } from "./OverlaySection";

export function HeritageOverlay() {
  return (
    <OverlaySection id="heritage" align="center" toneOnDark>
      <div className="mx-auto mb-10 h-[140px] w-[140px] overflow-hidden rounded-full bg-white shadow-[0_10px_32px_-12px_rgba(0,0,0,0.6)]">
        <Image
          src="/images/mbcm-logo.jpg"
          alt="Mercedes-Benz Classic Magyarország"
          width={280}
          height={280}
          priority={false}
          className="h-full w-full object-cover"
        />
      </div>

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

      <p className="mt-12 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
        2003 · 2026
      </p>
    </OverlaySection>
  );
}
