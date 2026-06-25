"use client";

import Image from "next/image";
import { useState } from "react";

export function HalozatHero() {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const showFallback = !ready || failed;

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-surface-dark">
      <div className="absolute inset-0 z-0">
        {!failed && (
          <Image
            src="/images/mb_museum.avif"
            alt="Mercedes-Benz Museum, Stuttgart"
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1500ms] ${
              !showFallback ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "saturate(0.9) brightness(0.72)" }}
            onLoad={() => setReady(true)}
            onError={() => setFailed(true)}
          />
        )}

        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            showFallback ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #2a2a28 0%, #1a1a18 50%, #0e0e0c 100%)",
          }}
        />

        <div aria-hidden className="absolute inset-0 bg-black/35" />

        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
        />
      </div>

      <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl rounded-3xl border border-foreground/15 bg-background/55 px-7 py-9 backdrop-blur-md md:px-10 md:py-12">
          <p className="flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
            <span className="h-px w-10 bg-foreground-mute/60" />
            Nemzetközi kapcsolatok
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            Egy globális
            <br />
            <span className="font-extralight text-foreground-soft">
              közösség része.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
            A Mercedes-Benz Classic Magyarország Club nem önmagában áll: egy
            világszerte több tízezer tagot számláló, a stuttgarti gyár által
            gondozott klasszikus közösség magyar tagja.
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(220,220,216,0.55) 60%, #dcdcd8 100%)",
        }}
      />
    </section>
  );
}
