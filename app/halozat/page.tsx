import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HalozatHero } from "@/components/HalozatHero";

const SUBPAGE_BG =
  "linear-gradient(180deg, #dcdcd8 0%, #dcdcd8 35%, #c0c0bc 70%, #8c8c88 100%)";

const MB_CLASSIC_URL =
  "https://www.mercedes-benz.com/en/vehicles/mercedes-benz-classic/";

export const metadata: Metadata = {
  title: "MB Classic — MBCM",
  description:
    "A Mercedes-Benz Classic Magyarország Club egy nemzetközi, a gyár által támogatott klasszikus közösség része.",
};

export default function HalozatPage() {
  return (
    <>
      <NavBar />
      <main>
        <HalozatHero />

        <section
          className="px-6 py-24 md:px-10 md:py-32"
          style={{ background: SUBPAGE_BG }}
        >
          <div className="mx-auto max-w-5xl">
            <section className="mb-20 max-w-2xl md:mb-28">
              <h2 className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                Mit jelent ez?
              </h2>
              <div className="space-y-6 text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
                <p>
                  A Mercedes-Benz a világ egyik leggazdagabb autótörténeti
                  örökségét ápolja. A márka klasszikus programja — a
                  Mercedes-Benz Classic — köré egy nemzetközi hálózat épül:
                  országos klubok, márkakereskedői és gyári partnerek,
                  restaurátorok és gyűjtők, akik közösen őrzik a csillag
                  örökségét.
                </p>
                <p>
                  Klubunk ennek a hálózatnak a magyarországi tagja. Ez
                  hozzáférést ad a gyári tudásbázishoz, alkatrész- és
                  dokumentációs forrásokhoz, nemzetközi rendezvényekhez és
                  találkozókhoz, valamint egy olyan közösséghez, amely a
                  határokon átívelően ugyanazt a szenvedélyt képviseli.
                </p>
              </div>
            </section>

            <section className="mb-20 md:mb-28">
              <h2 className="mb-8 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                A központ
              </h2>

              <a
                href={MB_CLASSIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-surface-dark px-8 py-9 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] transition-all duration-300 hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)] md:px-12 md:py-12"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass-bright/10 blur-3xl transition-opacity duration-500 group-hover:bg-brass-bright/20"
                />
                <span className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <span className="block">
                    <span className="block text-[10px] uppercase tracking-[0.32em] text-on-dark-soft">
                      Hivatalos oldal
                    </span>
                    <span className="mt-3 block text-[clamp(1.6rem,3.4vw,2.4rem)] font-extralight leading-tight text-on-dark">
                      Mercedes-Benz Classic
                    </span>
                    <span className="mt-2 block text-sm font-light text-on-dark-soft">
                      mercedes-benz.com/en/vehicles/mercedes-benz-classic
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-on-dark/25 px-6 py-3 text-[11px] font-normal uppercase tracking-[0.3em] text-on-dark transition-colors duration-300 group-hover:border-brass-bright group-hover:text-brass-bright md:self-auto">
                    Megnyitás
                    <span
                      aria-hidden
                      className="text-base transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                </span>
              </a>

              <p className="mt-4 text-[11px] font-normal uppercase tracking-[0.28em] text-foreground-mute">
                A Mercedes-Benz klasszikus programjának központi oldala — új lapon nyílik meg.
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
