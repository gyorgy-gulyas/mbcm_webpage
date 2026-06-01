import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BPCGPHero } from "@/components/BPCGPHero";

export const metadata: Metadata = {
  title: "Budapest Classic Grand Prix — MBCM",
  description:
    "Klubunk kiemelt éves rendezvénye. Klasszikus járművek életre kelnek Budapest utcáin.",
};

const SUBPAGE_BG =
  "linear-gradient(180deg, #dcdcd8 0%, #dcdcd8 35%, #c0c0bc 70%, #8c8c88 100%)";

export default function BPCGPPage() {
  return (
    <>
      <NavBar />
      <main>
        <BPCGPHero />

        <section
          className="px-6 py-24 md:px-10 md:py-32"
          style={{ background: SUBPAGE_BG }}
        >
          <div className="mx-auto max-w-5xl">
            <section className="mb-20 md:mb-28">
              <div>
                <p className="text-[10px] font-normal uppercase tracking-[0.42em] text-foreground-mute">
                  Helyszín
                </p>
                <p className="mt-3 text-xl font-light text-foreground">
                  Budapest
                </p>
              </div>
            </section>

            <section className="mb-20 max-w-2xl md:mb-28">
              <h2 className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                A rendezvényről
              </h2>
              <div className="space-y-5 text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
                <p>
                  A Budapest Classic Grand Prix a Mercedes-Benz Classic
                  Magyarország Egyesület hagyományos, márkafüggetlen oldtimer
                  túraversenye, amely az évek során hazánk egyik legkedveltebb
                  klasszikus autós eseményévé vált.
                </p>
                <p>
                  Az egynapos rendezvény során a résztvevők Budapest ikonikus
                  helyszíneit és rejtett értékeit fedezik fel, miközben
                  ügyességi és precizitási feladatokat teljesítenek. A verseny
                  lényege nem a sebesség, hanem a pontosság, a figyelem és a
                  közös élmény.
                </p>
                <p>
                  A 2005 óta kétévente megrendezett esemény különleges
                  hangulatát az adja, hogy a komoly szakmai felkészültség és
                  a baráti, kötetlen légkör egyszerre van jelen. A rajtnál, az
                  útvonal mentén és a célállomáson a látogatók testközelből
                  csodálhatják meg a klasszikus autókat, miközben részesei
                  lehetnek egy egész napos autós ünnepnek.
                </p>
                <p>
                  A Budapest Classic Grand Prix nemcsak a veterán járművek
                  találkozója, hanem a közös szenvedély, a hagyományok és az
                  autótörténet ünnepe is. Olyan rendezvény, ahol a résztvevők
                  és a nézők egyaránt felejthetetlen élményekkel gazdagodhatnak.
                </p>
              </div>
            </section>

            <section className="mb-20 md:mb-28">
              <h2 className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                Hivatalos honlap
              </h2>
              <a
                href="https://bpcgp.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-lg font-light text-foreground transition-colors hover:text-foreground-soft"
              >
                <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-foreground-soft">
                  bpcgp.hu
                </span>
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <p className="mt-4 text-[11px] font-normal uppercase tracking-[0.28em] text-foreground-mute">
                A részletes program, regisztráció és galéria az eseményoldalon.
              </p>
            </section>

            <div className="border-t border-foreground/10 pt-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.3em] text-foreground-soft transition-colors hover:text-foreground"
              >
                <span
                  aria-hidden
                  className="transition-transform group-hover:-translate-x-1"
                >
                  ←
                </span>
                Vissza a kezdőlapra
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
