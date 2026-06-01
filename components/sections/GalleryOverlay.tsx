"use client";

import { OverlaySection } from "./OverlaySection";

export function GalleryOverlay() {
  return (
    <OverlaySection id="galeria" align="center">
      <p className="mx-auto mb-8 flex items-center justify-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        <span className="h-px w-10 bg-foreground-mute/60" />
        Galéria · 05
        <span className="h-px w-10 bg-foreground-mute/60" />
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Két évtized
        <br />
        <span className="font-extralight text-foreground-soft">
          emlékei.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        2003 óta minden találkozóról, túráról, eseményről fotók készülnek.
        Klubunk vizuális archívuma — saját képek, vendég fotósoktól és
        klubtagoktól.
      </p>

      <dl className="mx-auto mt-12 grid grid-cols-3 gap-8 text-center">
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Év
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">23</dd>
        </div>
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Esemény
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">450+</dd>
        </div>
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Fotó
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">12k+</dd>
        </div>
      </dl>
    </OverlaySection>
  );
}
