import Image from "next/image";
import { EmailLink } from "./EmailLink";

export function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-on-dark/15 bg-surface-dark-elev text-on-dark-soft">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-2">
            <p className="text-lg font-light leading-tight text-on-dark">
              Mercedes-Benz Classic
              <br />
              Magyarország Club
            </p>
            <p className="mt-3 text-[11px] font-normal uppercase tracking-[0.28em] text-on-dark-mute">
              MBCM · 2003 óta
            </p>
            <div className="mt-6 h-[72px] w-[72px] overflow-hidden rounded-full bg-white">
              <Image
                src="/images/mbcm-logo.jpg"
                alt="MBCM"
                width={144}
                height={144}
                priority={false}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <address className="not-italic text-sm font-light leading-relaxed text-on-dark-soft">
              1239 Budapest
              <br />
              Haraszti út 48
            </address>

            <ul className="mt-6 space-y-3 text-sm font-light text-on-dark-soft">
              <li>
                <EmailLink email="president@mbcm.hu" dark />
              </li>
              <li>
                <EmailLink email="vice-president@mbcm.hu" dark />
              </li>
              <li>
                <EmailLink email="secretary@mbcm.hu" dark />
              </li>
            </ul>
          </div>

          <div>
            <dl className="space-y-3 text-sm font-light text-on-dark-soft">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-on-dark-mute">
                  Adószám
                </dt>
                <dd className="mt-1 tabular-nums">18114380-1-41</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-on-dark-mute">
                  Nyilvántartási szám
                </dt>
                <dd className="mt-1 tabular-nums">01-02-0010417</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-normal uppercase tracking-[0.28em] text-on-dark-mute">
            © 2026 Mercedes-Benz Classic Magyarország Club
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-normal uppercase tracking-[0.28em] text-on-dark-mute">
            <li>
              <a
                href="/legal/adatvedelem.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-on-dark"
              >
                Adatvédelem
              </a>
            </li>
            <li>
              <a
                href="/legal/impresszum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-on-dark"
              >
                Impresszum
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-[9px] font-normal uppercase tracking-[0.28em] text-on-dark-mute/60">
          300 SL — modell: vecarz.com via Sketchfab (CC BY)
        </p>
      </div>
    </footer>
  );
}
