"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function HeroAnimations({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          "[data-hero-photo]",
          { scale: 1.1 },
          { scale: 1, duration: 1.4 },
          0,
        )
          .fromTo(
            "[data-fade='title']",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.9 },
            0.1,
          )
          .fromTo(
            "[data-fade='subtitle']",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.35,
          )
          .fromTo(
            "[data-fade='text']",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.5,
          )
          .fromTo(
            "[data-fade='hint']",
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            0.9,
          );

        // Ao rolar, o conteúdo do hero sobe devagar e esmaece
        gsap.to("[data-hero-content]", {
          yPercent: -12,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
