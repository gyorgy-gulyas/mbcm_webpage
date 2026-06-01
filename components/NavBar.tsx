"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Klub", href: "#klub" },
  { label: "Események", href: "#esemenyek" },
  { label: "Galéria", href: "#galeria" },
  { label: "Magazin", href: "#magazin" },
  { label: "Tagság", href: "#tagsag" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[2400ms] ease-out ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur-lg border-b border-line-dark shadow-[0_8px_28px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="group">
          <span
            className={`text-sm font-medium tracking-[0.32em] transition-colors duration-[2000ms] ${
              scrolled
                ? "text-on-dark group-hover:text-on-dark-soft"
                : "text-foreground group-hover:text-foreground-soft"
            }`}
          >
            MBCM
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[11px] font-normal uppercase tracking-[0.28em] transition-colors duration-[2000ms] ${
                  scrolled
                    ? "text-on-dark-soft hover:text-on-dark"
                    : "text-foreground-soft hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] ${
            scrolled ? "text-on-dark-soft" : "text-foreground-soft"
          }`}
        >
          <button
            className={`hidden md:inline ${
              scrolled ? "text-on-dark hover:text-on-dark-soft" : "text-foreground hover:text-foreground-soft"
            }`}
          >
            HU
          </button>
          <span className="hidden opacity-50 md:inline">·</span>
          <button
            className={`hidden md:inline ${
              scrolled ? "text-on-dark-mute hover:text-on-dark" : "text-foreground-mute hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
