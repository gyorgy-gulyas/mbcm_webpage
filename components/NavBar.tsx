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
  const pathname = usePathname();
  const forceDark = ALWAYS_DARK_PATHS.has(pathname);
  const isDark = forceDark || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[2400ms] ease-out ${
        isDark
          ? "bg-surface-dark/95 backdrop-blur-lg border-b border-line-dark shadow-[0_8px_28px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white transition-opacity ${
              scrolled ? "opacity-100" : "opacity-95"
            }`}
          >
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
            className={`text-sm font-medium tracking-[0.32em] transition-colors duration-[2000ms] group-hover:text-brass-bright ${
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
                className={`text-[11px] font-normal uppercase tracking-[0.28em] transition-colors duration-[2000ms] ${
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

        <div
          className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] ${
            isDark ? "text-on-dark-soft" : "text-foreground-soft"
          }`}
        >
          <button
            className={`hidden md:inline ${
              isDark
                ? "text-on-dark hover:text-on-dark-soft"
                : "text-foreground hover:text-foreground-soft"
            }`}
          >
            HU
          </button>
          <span className="hidden opacity-50 md:inline">·</span>
          <button
            className={`hidden md:inline ${
              isDark
                ? "text-on-dark-mute hover:text-on-dark"
                : "text-foreground-mute hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
