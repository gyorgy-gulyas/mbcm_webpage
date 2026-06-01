"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function BPCGPHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("error", onError);
    };
  }, []);

  const showFallback = !videoReady || videoFailed;

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-surface-dark">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-[1500ms] ${
            !showFallback ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "saturate(0.85) brightness(0.75)" }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/bpcgp-hero.mp4" type="video/mp4" />
        </video>

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

        <div aria-hidden className="absolute inset-0 bg-black/30" />

        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
        />
      </div>

      <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl rounded-3xl border border-foreground/15 bg-background/55 px-7 py-9 backdrop-blur-md md:px-10 md:py-12">
          <p className="flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
            <span className="h-px w-10 bg-foreground-mute/60" />
            Éves rendezvény
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            Budapest
            <br />
            <span className="font-extralight text-foreground-soft">
              Classic Grand Prix
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
            Klubunk kiemelt éves rendezvénye, ahol a klasszikus járművek
            életre kelnek Budapest utcáin. Egy guruló múzeum, amely a
            technikatörténetet és az autózás hagyományait hozza közel a
            közönséghez.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-24 right-6 z-20 opacity-80 mix-blend-screen md:bottom-28 md:right-10">
        <Image
          src="/images/bpcgp-logo2.jpg"
          alt="BPCGP — Budapest Classic Grand Prix"
          width={140}
          height={140}
          priority
          className="h-[88px] w-[88px] rounded-xl md:h-[120px] md:w-[120px]"
        />
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
