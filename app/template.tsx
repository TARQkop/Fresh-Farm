"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DUR_PAGE, EASE_LUX } from "@/lib/motion";

// Enter-only page transition: a template re-mounts on every navigation, so the new page fades in and rises 10px.
// There is no exit animation, so navigation is never blocked. The very first load (server HTML + hydration) is
// not animated, so content is never hidden waiting for JS. Reduced motion: no animation at all.
// Scroll position: Next already resets to the top on navigation (and honours data-scroll-behavior="smooth" by
// jumping instantly), and it happens while the new page is still at opacity 0, so there is no visible jump.
let booted = false;
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const navigated = useRef(booted).current; // false on the server and on the first client render
  useEffect(() => { booted = true; }, []);
  const skip = !navigated || reduce;
  return (
    <motion.div initial={skip ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR_PAGE, ease: EASE_LUX }}>
      {children}
    </motion.div>
  );
}
