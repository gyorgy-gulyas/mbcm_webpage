"use client";

import { OverlaySection } from "./OverlaySection";

export function AboutOverlay() {
  return (
    <OverlaySection id="klub" align="right">
      <p className="mb-8 flex items-center justify-end gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        Rólunk · 01
        <span className="h-px w-10 bg-foreground-mute/60" />
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Tíz alapítóból
        <br />
        <span className="font-extralight text-foreground-soft">
          közel negyven tagig.
        </span>
      </h2>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        2003 tavaszán tíz alapító taggal indult, ma egy két évtizede aktív
        közösség.
      </p>

      <dl className="mt-12 grid grid-cols-3 gap-6 text-left">
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Alapítva
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">
            2003
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Tagok
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">36</dd>
        </div>
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Klasszikusok
          </dt>
          <dd className="mt-2 text-3xl font-extralight text-foreground">
            100+
          </dd>
        </div>
      </dl>
    </OverlaySection>
  );
}
