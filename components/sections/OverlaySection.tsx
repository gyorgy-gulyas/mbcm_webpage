"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  toneOnDark?: boolean;
};

export function OverlaySection({
  id,
  children,
  align = "left",
  toneOnDark = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setVisible(entry.intersectionRatio > 0.35);
        }
      },
      { threshold: [0, 0.35, 0.6, 1] }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const alignClass =
    align === "right"
      ? "items-end text-right"
      : align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section
      id={id}
      ref={ref}
      className="pointer-events-none relative flex h-screen w-full px-6 md:px-14 lg:px-20"
    >
      <div
        className={`pointer-events-auto flex h-full w-full max-w-7xl mx-auto flex-col justify-center pt-20 md:pt-24 ${alignClass}`}
      >
        <div
          className={`max-w-xl rounded-3xl px-7 py-9 md:px-10 md:py-12 transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          } ${
            toneOnDark
              ? "bg-surface-dark/60 backdrop-blur-md border border-on-dark/15 text-on-dark"
              : "bg-background/55 backdrop-blur-md border border-foreground/15 text-foreground"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
