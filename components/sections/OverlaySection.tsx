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
        className={`pointer-events-auto flex h-full w-full max-w-7xl mx-auto flex-col justify-center ${alignClass}`}
      >
        <div
          className={`max-w-xl transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          } ${toneOnDark ? "text-on-dark" : "text-foreground"}`}
          style={{
            textShadow: toneOnDark
              ? "0 1px 24px rgba(0,0,0,0.4)"
              : "0 1px 18px rgba(220,220,216,0.7)",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
