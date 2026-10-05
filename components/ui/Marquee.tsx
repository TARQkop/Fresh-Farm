import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Item = any node, or a function that receives `duplicate` (true for the aria-hidden copies) so links
// inside the copies can be taken out of the tab order.
export type MarqueeItem = ReactNode | ((duplicate: boolean) => ReactNode);

type Props = {
  items: MarqueeItem[];
  /** Seconds for one pass over the content (default: --dur-marquee). */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** How many times the content is repeated per half of the track. Raise it so one half is wider than the screen. */
  repeat?: number;
  label?: string;
  className?: string;
  itemClassName?: string;
};

// Pure CSS belt (server component, no JS). The track holds two identical halves and moves translateX(0 → -50%),
// so the loop is seamless. Everything after the first copy is aria-hidden. See .marquee in globals.css
// for the edge mask, hover/touch pause and the static, scrollable reduced-motion fallback.
export function Marquee({ items, speed, reverse, pauseOnHover = true, repeat = 1, label, className, itemClassName }: Props) {
  const style = { "--marquee-repeat": repeat, ...(speed ? { "--marquee-speed": `${speed}s` } : null) } as CSSProperties;
  return (
    <div role={label ? "group" : undefined} aria-label={label} className={cn("marquee", reverse && "marquee-reverse", pauseOnHover && "marquee-pause", className)} style={style}>
      <div className="marquee-track">
        {Array.from({ length: repeat * 2 }, (_, copy) => {
          const duplicate = copy > 0;
          return (
            <ul key={copy} role="list" aria-hidden={duplicate || undefined} className={cn("marquee-list", duplicate && "marquee-dup")}>
              {items.map((item, i) => <li key={i} className={itemClassName}>{typeof item === "function" ? item(duplicate) : item}</li>)}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
