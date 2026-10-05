"use client";
import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
// Scroll reveal, driven by CSS (see .reveal in globals.css): 800ms, 16px rise on phones / 28px on desktop,
// plays once, disabled for prefers-reduced-motion. Only the bottom edge is inset, so items peeking in from the side of a
// horizontal scroller still count as visible. Stagger grids with `delay={stagger(i)}` (lib/motion.ts). `eager` is for above-the-fold content: it is never
// hidden waiting for JavaScript (CSS-only entrance on desktop, none on phones).
export function Reveal({ children, delay = 0, className, eager }: { children: ReactNode; delay?: number; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  if (eager) return <div className={cn("reveal-eager", className)} style={delay ? { animationDelay: `${delay}s` } : undefined}>{children}</div>;
  return <div ref={ref} className={cn("reveal", inView && "reveal-in", className)} style={delay ? { transitionDelay: `${delay}s` } : undefined}>{children}</div>;
}
