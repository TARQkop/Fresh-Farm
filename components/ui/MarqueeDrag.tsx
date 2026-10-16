"use client";
import { useEffect, useRef } from "react";

const RESUME_DELAY = 250; // ms of stillness after the last touch/scroll/drag before auto-motion eases back in
const SLOW = 1.4;         // >1 = slower than the CSS speed
const EASE = 2.5;         // higher = faster ramp up / down

/** Renders nothing. Finds its parent `.marquee`, swaps the CSS animation for a scrollLeft-driven loop,
 *  and lets the user swipe (touch) or drag (mouse). Auto-motion eases in and out smoothly. */
export function MarqueeDrag({ repeat, reverse, pauseOnHover, speed }: { repeat: number; reverse: boolean; pauseOnHover: boolean; speed?: number }) {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = anchor.current?.parentElement;
    const track = host?.querySelector<HTMLElement>(".marquee-track");
    if (!host || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cssDur = parseFloat(getComputedStyle(track).animationDuration);
    const dur = (speed || (cssDur > 0 ? cssDur : 60)) * SLOW;
    const dir = reverse ? -1 : 1;

    track.style.animation = "none";
    track.style.transform = "none";
    host.style.overflowX = "auto";
    host.style.overflowY = "hidden";
    host.style.scrollbarWidth = "none";
    host.style.overscrollBehaviorX = "contain";
    host.style.cursor = "grab";

    let half = 0;
    let a = 0;
    let pos = 0;
    let lastSet = -1;
    let v = 0;            // current speed factor 0..1 (eased)
    let paused = false;
    let visible = true;
    let hovering = false;
    let touching = false;
    let focused = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let raf = 0;
    let last = performance.now();
    const d = { active: false, moved: false, startX: 0, startScroll: 0, id: -1 };

    const measure = () => {
      const lists = host.querySelectorAll<HTMLElement>(".marquee-list");
      if (lists.length <= repeat) return;
      const w = lists[repeat].offsetLeft - lists[0].offsetLeft;
      if (w <= 0) return;
      const rel = half ? (host.scrollLeft - a) / half : 0;
      half = w;
      a = Math.max(0, (w - host.clientWidth) / 2);
      pos = a + (((rel % 1) + 1) % 1) * half;
      host.scrollLeft = pos;
      lastSet = host.scrollLeft;
    };

    const wrap = () => {
      if (!half) return;
      const s = host.scrollLeft;
      if (s < a) host.scrollLeft = s + half;
      else if (s >= a + half) host.scrollLeft = s - half;
      pos = host.scrollLeft;
      lastSet = pos;
    };

    const blocked = () => touching || focused || d.active || (pauseOnHover && hovering);
    // hard = the user is controlling it (stop instantly); soft = ease to a stop (hover)
    const pause = (hard: boolean) => { paused = true; if (hard) v = 0; clearTimeout(timer); };
    const resumeLater = (delay = RESUME_DELAY) => {
      clearTimeout(timer);
      timer = setTimeout(() => { if (!blocked()) { pos = host.scrollLeft; paused = false; } }, delay);
    };

    const onScroll = () => {
      if (Math.abs(host.scrollLeft - lastSet) < 1) return;
      pause(true); wrap(); resumeLater(); // each scroll event (incl. momentum) restarts the idle timer
    };
    const onEnter = (e: PointerEvent) => { if (pauseOnHover && e.pointerType === "mouse") { hovering = true; pause(false); } };
    const onLeave = (e: PointerEvent) => { if (e.pointerType === "mouse") { hovering = false; resumeLater(100); } };
    const onTouchStart = () => { touching = true; pause(true); };
    const onTouchEnd = () => { touching = false; resumeLater(); };
    const onFocusIn = () => { focused = true; pause(false); };
    const onFocusOut = () => { focused = false; resumeLater(); };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      Object.assign(d, { active: true, moved: false, startX: e.clientX, startScroll: host.scrollLeft, id: e.pointerId });
      pause(true);
    };
    const onMove = (e: PointerEvent) => {
      if (!d.active) return;
      const dx = e.clientX - d.startX;
      if (!d.moved && Math.abs(dx) > 5) {
        d.moved = true;
        host.setPointerCapture(d.id);
        host.style.cursor = "grabbing";
        host.style.userSelect = "none";
      }
      if (d.moved) host.scrollLeft = d.startScroll - dx;
    };
    const onUp = () => {
      if (!d.active) return;
      d.active = false;
      host.style.cursor = "grab";
      host.style.userSelect = "";
      if (host.hasPointerCapture(d.id)) host.releasePointerCapture(d.id);
      if (d.moved) hovering = false; // after a drag, go back to moving even if the mouse stays on the belt
      resumeLater();
    };
    const onClickCapture = (e: MouseEvent) => {
      if (d.moved) { e.preventDefault(); e.stopPropagation(); d.moved = false; }
    };
    const onDragStart = (e: Event) => e.preventDefault();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      v += ((paused ? 0 : 1) - v) * Math.min(1, dt * EASE);
      if (v < 0.002) v = 0;
      if (visible && half && v > 0) {
        pos += dir * (half / dur) * v * dt;
        if (pos >= a + half) pos -= half;
        else if (pos < a) pos += half;
        host.scrollLeft = pos;
        lastSet = host.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(host);

    host.addEventListener("scroll", onScroll, { passive: true });
    host.addEventListener("pointerenter", onEnter);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("touchstart", onTouchStart, { passive: true });
    host.addEventListener("touchend", onTouchEnd);
    host.addEventListener("touchcancel", onTouchEnd);
    host.addEventListener("focusin", onFocusIn);
    host.addEventListener("focusout", onFocusOut);
    host.addEventListener("pointerdown", onDown);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerup", onUp);
    host.addEventListener("pointercancel", onUp);
    host.addEventListener("click", onClickCapture, true);
    host.addEventListener("dragstart", onDragStart);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("scroll", onScroll);
      host.removeEventListener("pointerenter", onEnter);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("touchstart", onTouchStart);
      host.removeEventListener("touchend", onTouchEnd);
      host.removeEventListener("touchcancel", onTouchEnd);
      host.removeEventListener("focusin", onFocusIn);
      host.removeEventListener("focusout", onFocusOut);
      host.removeEventListener("pointerdown", onDown);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerup", onUp);
      host.removeEventListener("pointercancel", onUp);
      host.removeEventListener("click", onClickCapture, true);
      host.removeEventListener("dragstart", onDragStart);
      track.style.animation = "";
      track.style.transform = "";
      host.style.overflowX = host.style.overflowY = host.style.scrollbarWidth = "";
      host.style.overscrollBehaviorX = host.style.cursor = host.style.userSelect = "";
      host.scrollLeft = 0;
    };
  }, [repeat, reverse, pauseOnHover, speed]);

  return <span ref={anchor} hidden />;
}