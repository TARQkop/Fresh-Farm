
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MarqueeDrag } from "./MarqueeDrag";

export type MarqueeItem = ReactNode | ((duplicate: boolean) => ReactNode);

type Props = {
  items: MarqueeItem[];
  /** Seconds for one pass over the content (default: --dur-marquee). */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** How many times the content is repeated per half of the track. */
  repeat?: number;
  label?: string;
  className?: string;
  itemClassName?: string;
};

export function Marquee({
  items,
  speed,
  reverse,
  pauseOnHover = true,
  repeat = 1,
  label,
  className,
  itemClassName,
}: Props) {
  const style = {
    "--marquee-repeat": repeat,
    ...(speed ? { "--marquee-speed": `${speed}s` } : {}),
  } as CSSProperties;

  return (
    <div
      dir="ltr"
      role={label ? "group" : undefined}
      aria-label={label}
      className={cn(
        "marquee [&::-webkit-scrollbar]:hidden",
        reverse && "marquee-reverse",
        pauseOnHover && "marquee-pause",
        className
      )}
      style={style}
    >
      <div className="marquee-track">
        {Array.from({ length: repeat * 2 }, (_, copy) => {
          const duplicate = copy > 0;

          return (
            <ul
              key={copy}
              role="list"
              aria-hidden={duplicate || undefined}
              inert={duplicate || undefined}
              className={cn(
                "marquee-list",
                duplicate && "marquee-dup"
              )}
            >
              {items.map((item, i) => (
                <li key={i} className={itemClassName}>
                  {typeof item === "function"
                    ? item(duplicate)
                    : item}
                </li>
              ))}
            </ul>
          );
        })}
      </div>

      <MarqueeDrag
        repeat={repeat}
        reverse={!!reverse}
        pauseOnHover={pauseOnHover}
        speed={speed}
      />
    </div>
  );
}
