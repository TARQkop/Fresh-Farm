import { cn } from "@/lib/utils";
export function SectionHeading({ eyebrow, title, text, light, className }: { eyebrow?: string; title: string; text?: string; light?: boolean; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-orange">{eyebrow}</p>}
      <h2 className={cn("h-display text-3xl sm:text-4xl lg:text-5xl", light ? "text-white" : "text-ink")}>{title}</h2>
      {text && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-muted")}>{text}</p>}
    </div>
  );
}
