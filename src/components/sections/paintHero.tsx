"use client";

import { useEffect, useId, useRef } from "react";

const RADIUS = 20;
const STEP = RADIUS * 0.2;
const HOLD = 800;
const FADE = 1600;
const MAX_CIRCLES = 1500;
const SVG_NS = "http://www.w3.org/2000/svg";

type Dot = { el: SVGCircleElement; t: number };

export function HeroPaint({ children }: { children: React.ReactNode }) {
  const id = useId().replace(/:/g, "");
  const sectionRef = useRef<HTMLElement>(null);
  const clipRef = useRef<SVGClipPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const clip = clipRef.current;
    if (!section || !clip) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dots: Dot[] = [];
    let last: { x: number; y: number } | null = null;
    let raf = 0;

    const tick = (now: number) => {
      raf = 0;

      while (dots.length && now - dots[0].t >= HOLD + FADE) {
        dots.shift()!.el.remove();
      }

      for (const d of dots) {
        const age = now - d.t;
        if (age < HOLD) break;
        const p = Math.min((age - HOLD) / FADE, 1);
        d.el.setAttribute("r", (RADIUS * (1 - p * p)).toFixed(1));
      }

      if (dots.length) raf = requestAnimationFrame(tick);
    };

    const dot = (x: number, y: number) => {
      const el = document.createElementNS(SVG_NS, "circle");
      el.setAttribute("cx", x.toFixed(1));
      el.setAttribute("cy", y.toFixed(1));
      el.setAttribute("r", String(RADIUS));
      clip.appendChild(el);
      dots.push({ el, t: performance.now() });

      if (dots.length > MAX_CIRCLES) dots.shift()!.el.remove();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!last) {
        dot(x, y);
        last = { x, y };
        return;
      }

      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);
      if (dist < STEP) return;

      const n = Math.floor(dist / STEP);
      for (let i = 1; i <= n; i++) {
        dot(last.x + (dx * i) / n, last.y + (dy * i) / n);
      }
      last = { x, y };
    };

    const onLeave = () => {
      last = null;
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative grid min-h-svh cursor-crosshair place-items-center overflow-hidden bg-background px-6 text-foreground"
    >
      <div>{children}</div>

      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <clipPath id={id} ref={clipRef} />
        </defs>
      </svg>

      <div
        aria-hidden
        inert
        style={{ clipPath: `url(#${id})` }}
        className="pointer-events-none absolute inset-0 grid place-items-center bg-highlight px-6 text-highlight-foreground"
      >
        <div>{children}</div>
      </div>
    </section>
  );
}
