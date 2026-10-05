"use client";
import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
// Scroll reveal, driven by CSS (see .reveal in globals.css): short on phones, 24px/.5s on desktop,
// plays once, disabled for prefers-reduced-motion. `eager` is for above-the-fold content: it is never
// hidden waiting for JavaScript (CSS-only entrance on desktop, none on phones).
export function Reveal({ children, delay = 0, className, eager }: { children: ReactNode; delay?: number; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  if (eager) return <div className={cn("reveal-eager", className)} style={delay ? { animationDelay: `${delay}s` } : undefined}>{children}</div>;
  return <div ref={ref} className={cn("reveal", inView && "reveal-in", className)} style={delay ? { transitionDelay: `${delay}s` } : undefined}>{children}</div>;
}
