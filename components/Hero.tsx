"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const CarScene = dynamic(
  () => import("./CarScene").then((m) => m.CarScene),
  { ssr: false }
);

export function Hero() {
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
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-background">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-[1500ms] ${
            !showFallback ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.svg"
        >
          <source src="/hero-placeholder.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-[640px] w-[700px] -translate-y-1/2 md:block lg:right-[2%] lg:h-[760px] lg:w-[820px]">
        <CarScene />
      </div>
      <div className="pointer-events-none absolute left-0 top-[8%] z-10 h-[300px] w-full md:hidden">
        <CarScene />
      </div>

      <div className="relative z-20 flex h-full w-full items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-10 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
            <span className="h-px w-10 bg-foreground-mute/60" />
            Mercedes-Benz Classic · Magyarország · 2003 óta
          </p>

          <h1 className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            A márka történetét<br />
            <span className="font-extralight text-foreground-soft">
              közösen őrizzük.
            </span>
          </h1>

          <p className="mt-10 max-w-lg text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
            A Mercedes-Benz Classic Magyarország hivatalosan elismert
            márkaklub. Klasszikus járművek, közös utak, közös műhelyek —
            1886 öröksége a magyar utakon.
          </p>

          <p className="mt-12 text-[11px] font-normal uppercase tracking-[0.32em] text-foreground-mute">
            A klub zárt szervezet · a tagsággal kapcsolatos információk a Tagság menüpont alatt
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center">
        <div className="scroll-hint flex flex-col items-center gap-2 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
          <span>Görgess</span>
          <span aria-hidden className="text-base">↓</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 hidden text-[9px] font-normal uppercase tracking-[0.28em] text-foreground-mute/70 md:block">
        300 SL — modell: vecarz.com via Sketchfab (CC BY)
      </div>
    </section>
  );
}
