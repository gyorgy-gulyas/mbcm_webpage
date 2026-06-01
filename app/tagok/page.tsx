import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CornerStar } from "@/components/CornerStar";
import { EmailLink } from "@/components/EmailLink";

const SUBPAGE_BG =
  "linear-gradient(180deg, #dcdcd8 0%, #dcdcd8 35%, #c0c0bc 70%, #8c8c88 100%)";

export const metadata: Metadata = {
  title: "Tagok — MBCM",
  description: "A Mercedes-Benz Classic Magyarország Club aktív tagjai.",
};

const MEMBERS: string[] = [
  "Árpás László",
  "Bánáti Gábor",
  "Barkó Iliász",
  "Barkó Imre",
  "Berényi Marcell",
  "Bökfi János",
  "Cselikovics János",
  "Czellér Balázs",
  "Erdélyi Zoltán",
  "Faragó Ádám",
  "Ferentzy Zoltán",
  "Gaál Ádám",
  "Gaál József",
  "Gábeli Tibor",
  "Gáspár Miklós",
  "Grigalek Gábor",
  "Gulyás György Tamás",
  "Hesz Tamás",
  "Janó Péter",
  "Klemm Balázs",
  "Kovács Attila",
  "Kovács Miklós",
  "Kövesdi Dénes",
  "Laczházy Sebastian",
  "Laczi Attila",
  "Lastofka Péter",
  "Leitner László",
  "Liptay Gábor",
  "Marosi György",
  "Negyeliczky Sándor",
  "Pásztor Tamás",
  "Peltzer Márk",
  "Poós László",
  "Rhédey László",
  "Szabó Endre",
  "Török László",
];

const OFFICERS = [
  { name: "Marosi György", role: "Elnök", email: "president@mbcm.hu" },
  { name: "Barkó Imre", role: "Alelnök", email: "vice-president@mbcm.hu" },
  { name: "Lastofka Péter", role: "Titkár", email: "secretary@mbcm.hu" },
] as const;

const ROLE_BY_NAME = new Map<string, string>(
  OFFICERS.map((o) => [o.name, o.role])
);

const collator = new Intl.Collator("hu", { sensitivity: "base" });
const sortedMembers = [...MEMBERS].sort(collator.compare);

export default function TagokPage() {
  return (
    <>
      <NavBar />
      <main
        className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ background: SUBPAGE_BG }}
      >
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <header className="relative mb-16 md:mb-24">
            <div className="pointer-events-none absolute -top-4 right-0 h-32 w-32 md:h-44 md:w-44 lg:h-52 lg:w-52">
              <CornerStar />
            </div>

            <p className="flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
              <span className="h-px w-10 bg-foreground-mute/60" />
              A klub közössége
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
              Tagok
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground-soft md:text-[17px]">
              {MEMBERS.length} aktív klubtag · 2003 óta közösen őrizzük
              a Mercedes-Benz örökségét Magyarországon.
            </p>
          </header>

          <section className="mb-20 md:mb-28">
            <h2 className="mb-10 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
              <span className="h-px w-10 bg-foreground-mute/60" />
              Vezetőség
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
              {OFFICERS.map((o) => (
                <div key={o.email}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-foreground-mute">
                    {o.role}
                  </p>
                  <p className="mt-3 text-[clamp(1.25rem,2.4vw,1.6rem)] font-extralight leading-tight text-foreground">
                    {o.name}
                  </p>
                  <div className="mt-4 text-sm">
                    <EmailLink email={o.email} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-10 flex items-center gap-4 text-[10px] font-normal uppercase tracking-[0.4em] text-foreground-mute">
              <span className="h-px w-10 bg-foreground-mute/60" />
              Klubtagok
            </h2>

            <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {sortedMembers.map((name) => {
                const role = ROLE_BY_NAME.get(name);
                return (
                  <li
                    key={name}
                    className="flex items-baseline justify-between border-b border-foreground/10 py-3"
                  >
                    <span className="text-base font-light text-foreground">
                      {name}
                    </span>
                    {role && (
                      <span className="text-[9px] font-normal uppercase tracking-[0.32em] text-foreground-mute">
                        {role}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          <div className="mt-20 border-t border-foreground/10 pt-10">
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
