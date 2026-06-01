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
        Klubunk kiemelt éves rendezvénye, ahol a klasszikus járművek életre
        kelnek Budapest utcáin. Egy guruló múzeum, amely a technikatörténetet
        és az autózás hagyományait hozza közel a közönséghez.
      </p>

      <div className="mt-10 flex flex-wrap items-end justify-end gap-x-10 gap-y-6 text-left">
        <div>
          <dt className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute">
            Helyszín
          </dt>
          <dd className="mt-2 text-base font-light text-foreground">Budapest</dd>
        </div>

        <a
          href="https://bpcgp.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 pb-1 text-base font-light text-foreground-soft transition-colors hover:text-foreground"
        >
          <span className="border-b border-foreground-soft/40 pb-0.5 transition-colors group-hover:border-foreground">
            bpcgp.hu
          </span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </OverlaySection>
  );
}
