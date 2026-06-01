import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { EmailLink } from "@/components/EmailLink";
import { MapSketch } from "@/components/MapSketch";

export const metadata: Metadata = {
  title: "Kapcsolat — MBCM",
  description:
    "Mercedes-Benz Classic Magyarország Club — vezetőség, székhely, hivatalos elérhetőségek.",
};

const SUBPAGE_BG =
  "linear-gradient(180deg, #dcdcd8 0%, #dcdcd8 35%, #c0c0bc 70%, #8c8c88 100%)";

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
  {
    name: "Kovács Attila",
    role: "Jogi képviselő",
    email: "legal@mbcm.hu",
  },
] as const;

export default function KapcsolatPage() {
  return (
    <>
      <NavBar />
      <main
        className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ background: SUBPAGE_BG }}
      >
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="pointer-events-none absolute right-0 -top-8 hidden text-foreground/30 md:block md:h-[320px] md:w-[320px] lg:-right-4 lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px]">
            <MapSketch className="h-full w-full" />
          </div>

          <header className="relative mb-16 md:mb-24">
            <p className="flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
              <span className="h-px w-10 bg-foreground-mute/60" />
              Hivatalos elérhetőségek
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
              Kapcsolat
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
              Sajtó, hivatalos megkeresés, jogi ügy vagy tagsággal kapcsolatos
              kérdés esetén keresd a megfelelő képviselőt.
            </p>
          </header>

          <section className="mb-20 md:mb-28">
            <h2 className="mb-10 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
              <span className="h-px w-10 bg-foreground-mute/60" />
              Vezetőség
            </h2>

            <div className="mx-auto max-w-xl">
              {OFFICERS.map((o, i) => (
                <div
                  key={o.email}
                  className={
                    i > 0
                      ? "mt-10 border-t border-foreground/10 pt-10"
                      : ""
                  }
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-foreground-mute">
                    {o.role}
                  </p>
                  <p className="mt-3 text-[clamp(1.4rem,2.8vw,1.9rem)] font-extralight leading-tight text-foreground">
                    {o.name}
                  </p>
                  <div className="mt-4 text-base">
                    <EmailLink email={o.email} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 md:mb-28 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-6 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                Székhely
              </h2>
              <address className="not-italic text-lg font-light leading-relaxed text-foreground">
                1239 Budapest
                <br />
                Haraszti út 48
              </address>
            </div>

            <div>
              <h2 className="mb-6 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
                <span className="h-px w-10 bg-foreground-mute/60" />
                Jogi adatok
              </h2>
              <dl className="space-y-4 text-base font-light text-foreground">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-foreground-mute">
                    Hivatalos név
                  </dt>
                  <dd className="mt-1">
                    Mercedes-Benz Classic Magyarország Club
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-foreground-mute">
                    Adószám
                  </dt>
                  <dd className="mt-1 tabular-nums">18114380-1-41</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-foreground-mute">
                    Nyilvántartási szám
                  </dt>
                  <dd className="mt-1 tabular-nums">01-02-0010417</dd>
                </div>
              </dl>
            </div>
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
      </main>
      <Footer />
    </>
  );
}
