"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Tagok", href: "/tagok" },
  { label: "BPCGP", href: "/bpcgp" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

const ALWAYS_DARK_PATHS = new Set(["/bpcgp"]);

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const forceDark = ALWAYS_DARK_PATHS.has(pathname);
  const isDark = forceDark || scrolled || mobileOpen;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transitionAll = forceDark
    ? ""
    : "transition-all duration-[2400ms] ease-out";
  const transitionColors = forceDark
    ? ""
    : "transition-colors duration-[2000ms]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${transitionAll} ${
          isDark
            ? "bg-surface-dark/95 backdrop-blur-lg border-b border-line-dark shadow-[0_8px_28px_-12px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image
                src="/images/mbcm-logo.jpg"
                alt="MBCM"
                width={64}
                height={64}
                priority
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`text-sm font-medium tracking-[0.32em] ${transitionColors} group-hover:text-brass-bright ${
                isDark ? "text-on-dark" : "text-foreground"
              }`}
            >
              MBCM
            </span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[11px] font-normal uppercase tracking-[0.28em] ${transitionColors} ${
                    isDark
                      ? "text-on-dark-soft hover:text-on-dark"
                      : "text-foreground-soft hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menü bezárása" : "Menü"}
            aria-expanded={mobileOpen}
            className={`flex h-10 w-10 items-center justify-center md:hidden ${
              isDark ? "text-on-dark" : "text-foreground"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-surface-dark/97 backdrop-blur-lg transition-opacity duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-start justify-center gap-8 px-10">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[clamp(2rem,8vw,3.5rem)] font-extralight uppercase tracking-[0.15em] text-on-dark transition-colors hover:text-brass-bright"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
