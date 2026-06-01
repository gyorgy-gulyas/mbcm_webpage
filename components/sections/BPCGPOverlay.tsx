"use client";

import Image from "next/image";
import { OverlaySection } from "./OverlaySection";

export function BPCGPOverlay() {
  return (
    <OverlaySection id="bpcgp" align="right">
      <p className="mb-6 flex items-center justify-end gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        Éves rendezvény · 03
        <span className="h-px w-10 bg-foreground-mute/60" />
      </p>

      <div className="mb-6 flex justify-end">
        <Image
          src="/images/bpcgp-logo.png"
          alt="Budapest Classic Grand Prix"
          width={260}
          height={120}
          priority={false}
          className="h-auto w-[200px] md:w-[240px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
        />
      </div>

      <h2 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Budapest
        <br />
        <span className="font-extralight text-foreground-soft">
          Classic Grand Prix
        </span>
      </h2>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        A klub legjelentősebb éves rendezvénye. Klasszikus járművek a város
        szívében — verseny, kiállítás, hagyomány.
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-6 text-left">
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Helyszín
          </dt>
          <dd className="mt-2 text-base font-light text-foreground">Budapest</dd>
        </div>
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Gyakoriság
          </dt>
          <dd className="mt-2 text-base font-light text-foreground">
            Évente
          </dd>
        </div>
      </dl>
    </OverlaySection>
  );
}
