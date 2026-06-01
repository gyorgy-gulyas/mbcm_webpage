"use client";

import dynamic from "next/dynamic";

const HeritageStarScene = dynamic(
  () => import("./HeritageStarScene").then((m) => m.HeritageStarScene),
  { ssr: false }
);

export function HeritageSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-dark">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center md:py-44">
        <div className="pointer-events-none h-[200px] w-[200px] md:h-[250px] md:w-[250px]">
          <HeritageStarScene />
        </div>

        <div className="mt-12 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
          <span className="h-px w-12 bg-on-dark-mute/60" />
          <span>hivatalos márkaklub</span>
          <span className="h-px w-12 bg-on-dark-mute/60" />
        </div>

        <h2 className="mt-8 text-[clamp(1.8rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-on-dark">
          Mercedes-Benz Classic
          <br />
          <span className="font-extralight text-on-dark-soft">Magyarország</span>
        </h2>

        <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-on-dark-soft">
          A Stuttgart-i Mercedes-Benz Classic Club Management által elismert
          magyarországi márkaklub. 2003 óta gyűjtjük a közös történetet.
        </p>

        <p className="mt-14 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
          2003 · 2026
        </p>
      </div>
    </section>
  );
}
