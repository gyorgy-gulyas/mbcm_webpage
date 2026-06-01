"use client";

import { OverlaySection } from "./OverlaySection";

const ARTICLES = [
  {
    no: "01",
    title: "300 SL Gullwing — szárnyak feltámadása",
    author: "Kovács J.",
  },
  {
    no: "02",
    title: "W123 a magyar utakon: 40 év együtt",
    author: "Nagy P.",
  },
  {
    no: "03",
    title: "Restaurálás műhelyből: az R107 története",
    author: "Tóth A.",
  },
];

export function MagazineOverlay() {
  return (
    <OverlaySection id="magazin" align="right">
      <p className="mb-8 flex items-center justify-end gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
        Magazin · 06
        <span className="h-px w-10 bg-foreground-mute/60" />
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
        Történetek
        <br />
        <span className="font-extralight text-foreground-soft">
          és technika.
        </span>
      </h2>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground-soft">
        Klubtagjaink írásai modell-történetekről, restaurálásról, klasszikus
        utazásokról. Hivatalos kapcsolat a Mercedes-Benz Classic
        Magazinnal.
      </p>

      <ul className="mt-10 space-y-5">
        {ARTICLES.map((a) => (
          <li
            key={a.no}
            className="flex items-baseline gap-5 border-t border-foreground/8 pt-4"
          >
            <span className="text-[10px] font-normal uppercase tracking-[0.3em] text-foreground-mute tabular-nums">
              {a.no}
            </span>
            <div className="flex-1 text-right">
              <p className="text-sm font-light leading-snug text-foreground">
                {a.title}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground-mute">
                {a.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OverlaySection>
  );
}
