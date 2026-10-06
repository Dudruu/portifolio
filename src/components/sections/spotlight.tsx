"use client";

import { useEffect, useRef } from "react";

export function HeroSpotlight({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty("--x", `${x}px`);
      spotlight.style.setProperty("--y", `${y}px`);
      spotlight.style.setProperty("--opacity", "1");
    };

    const handlePointerLeave = () => {
      spotlight.style.setProperty("--opacity", "0");
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative grid min-h-svh place-items-center overflow-hidden bg-background px-6 text-foreground"
    >
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(
            600px circle at var(--x, 50%) var(--y, 50%),
            var(--spotlight-color, rgba(255, 255, 255, 0.12)),
            transparent 80%
          )`,
          opacity: "var(--opacity, 0)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
