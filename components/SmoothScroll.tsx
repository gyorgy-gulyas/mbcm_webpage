"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setScrollProgress } from "@/lib/scrollProgress";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const onScroll = () => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(window.scrollY / Math.max(max, 1));
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      lerp: 0.085,
    });

    lenis.on("scroll", ({ scroll, limit }: { scroll: number; limit: number }) => {
      setScrollProgress(scroll / Math.max(limit, 1));
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
