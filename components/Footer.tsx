export function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-on-dark/15 bg-surface-dark-elev text-on-dark-soft">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-2">
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-on-dark-mute">
              Hivatalos név
            </p>
            <p className="mt-3 text-lg font-light leading-tight text-on-dark">
              Mercedes-Benz Classic
              <br />
              Magyarország Club
            </p>
            <p className="mt-3 text-[11px] font-normal uppercase tracking-[0.28em] text-on-dark-mute">
              MBCM · 2003 óta
            </p>
          </div>

          <div>
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-on-dark-mute">
              Cím
            </p>
            <address className="mt-3 not-italic text-sm font-light leading-relaxed text-on-dark-soft">
              1113 Budapest
              <br />
              Váci út 96-98
            </address>

            <p className="mt-8 text-[10px] font-normal uppercase tracking-[0.32em] text-on-dark-mute">
              Kapcsolat
            </p>
            <ul className="mt-3 space-y-2 text-sm font-light text-on-dark-soft">
              <li>
                <a
                  href="mailto:president@mbcm.hu"
                  className="transition-colors hover:text-on-dark"
                >
                  president@mbcm.hu
                </a>
              </li>
              <li>
                <a
                  href="mailto:secretary@mbcm.hu"
                  className="transition-colors hover:text-on-dark"
                >
                  secretary@mbcm.hu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-on-dark-mute">
              Jogi
            </p>
            <dl className="mt-3 space-y-3 text-sm font-light text-on-dark-soft">
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
              <a href="#" className="transition-colors hover:text-on-dark">
                Adatvédelem
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-on-dark">
                Impresszum
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-on-dark">
                Cookie
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
