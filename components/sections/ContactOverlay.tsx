"use client";

import { OverlaySection } from "./OverlaySection";
import { EmailLink } from "../EmailLink";

const OFFICERS = [
  {
    name: "Marosi György",
    role: "Elnök",
    email: "president@mbcm.hu",
  },
  {
    name: "Barkó Imre",
    role: "Alelnök",
    email: "vice-president@mbcm.hu",
  },
  {
    name: "Lastofka Péter",
    role: "Titkár",
    email: "secretary@mbcm.hu",
  },
];

export function ContactOverlay() {
  return (
    <OverlaySection id="kapcsolat" align="center" toneOnDark>
      <p className="mx-auto mb-8 flex items-center justify-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-on-dark-mute">
        <span className="h-px w-10 bg-on-dark-mute/60" />
        Kapcsolat · 08
        <span className="h-px w-10 bg-on-dark-mute/60" />
      </p>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.015em] text-on-dark">
        Találkozzunk.
      </h2>

      <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-on-dark-soft">
        Sajtó, hivatalos megkeresés vagy tagsággal kapcsolatos kérdés
        esetén keresd a vezetőséget.
      </p>

      <div className="mx-auto mt-14 max-w-md text-left">
        {OFFICERS.map((o, i) => (
          <div
            key={o.email}
            className={
              i > 0
                ? "mt-10 border-t border-on-dark/15 pt-10"
                : ""
            }
          >
            <p className="text-[10px] font-normal uppercase tracking-[0.42em] text-on-dark-mute">
              {o.role}
            </p>
            <p className="mt-3 text-[clamp(1.15rem,2.4vw,1.6rem)] font-extralight leading-tight text-on-dark">
              {o.name}
            </p>
            <div className="mt-4 text-sm">
              <EmailLink email={o.email} dark />
            </div>
          </div>
        ))}
      </div>
    </OverlaySection>
  );
}
