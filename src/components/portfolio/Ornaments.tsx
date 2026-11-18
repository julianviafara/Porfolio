import { cn } from "@/lib/utils";

/** Large Art Deco sunburst: radiating rays, concentric arcs and stepped crown. */
export function Sunburst({ className }: { className?: string }) {
  const rays = Array.from({ length: 48 }, (_, i) => i);
  return (
    <svg viewBox="-300 -300 600 600" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="sb-gold" x1="0" y1="-300" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--gold-bright)" />
          <stop offset="0.5" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--gold-muted)" />
        </linearGradient>
        <radialGradient id="sb-fade" cx="0" cy="0" r="300" gradientUnits="userSpaceOnUse">
          <stop offset="0.15" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="sb-mask">
          <rect x="-300" y="-300" width="600" height="600" fill="url(#sb-fade)" />
        </mask>
      </defs>
      <g mask="url(#sb-mask)" stroke="url(#sb-gold)">
        {rays.map((i) => {
          const a = (i / rays.length) * Math.PI * 2;
          const long = i % 2 === 0;
          const r1 = long ? 70 : 95;
          const r2 = long ? 300 : 230;
          return (
            <line
              key={i}
              x1={Math.cos(a) * r1}
              y1={Math.sin(a) * r1}
              x2={Math.cos(a) * r2}
              y2={Math.sin(a) * r2}
              strokeWidth={long ? 0.9 : 0.5}
              strokeOpacity={long ? 0.7 : 0.45}
            />
          );
        })}
        <circle r="62" strokeWidth="0.8" strokeOpacity="0.8" />
        <circle r="56" strokeWidth="0.4" strokeOpacity="0.5" />
        <circle r="140" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 6" />
        <circle r="210" strokeWidth="0.5" strokeOpacity="0.25" />
      </g>
    </svg>
  );
}

/** Symmetric stepped divider with a central diamond. */
export function DecoDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <svg width="54" height="14" viewBox="0 0 54 14" fill="none" className="text-gold">
        <path d="M0 7h14M40 7h14" stroke="currentColor" strokeWidth="1" />
        <path d="M17 7l4-4 4 4-4 4zM29 7l4-4 4 4-4 4z" stroke="currentColor" strokeWidth="1" />
        <path d="M27 1l6 6-6 6-6-6z" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  );
}

/** Stepped corner ornament. Rotate via `position`. */
export function CornerOrnament({
  position,
  className,
}: {
  position: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  const rotate = { tl: "", tr: "rotate-90", br: "rotate-180", bl: "-rotate-90" }[position];
  const place = {
    tl: "left-0 top-0",
    tr: "right-0 top-0",
    br: "right-0 bottom-0",
    bl: "left-0 bottom-0",
  }[position];
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("pointer-events-none absolute h-10 w-10 text-gold", place, rotate, className)}
      aria-hidden="true"
      fill="none"
    >
      <path d="M2 46V2h44" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 46V14h6V8h32" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6" />
      <path d="M14 20h6v-6" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6" />
      <path d="M2 2l9 9" stroke="currentColor" strokeWidth="0.8" />
      <rect x="10" y="10" width="3" height="3" transform="rotate(45 11.5 11.5)" fill="currentColor" />
    </svg>
  );
}

/** Small fan motif used above section titles. */
export function FanMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={cn("h-6 w-12 text-gold", className)} fill="none" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => {
        const a = Math.PI + (i / 8) * Math.PI;
        return (
          <line
            key={i}
            x1="40"
            y1="38"
            x2={40 + Math.cos(a) * 34}
            y2={38 + Math.sin(a) * 34}
            stroke="currentColor"
            strokeWidth="0.9"
            strokeOpacity={i % 2 === 0 ? 1 : 0.5}
          />
        );
      })}
      <path d="M8 38a32 32 0 0 1 64 0" stroke="currentColor" strokeWidth="1" />
      <path d="M26 38a14 14 0 0 1 28 0" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Monogram brand mark: initials inside a stepped octagon. */
export function Monogram({ initials, className }: { initials: string; className?: string }) {
  return (
    <span className={cn("relative inline-flex h-11 w-11 items-center justify-center", className)}>
      <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full text-gold" fill="none" aria-hidden="true">
        <path d="M13 1h18l12 12v18L31 43H13L1 31V13z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M15 5h14l10 10v14L29 39H15L5 29V15z" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.55" />
      </svg>
      <span className="relative font-display text-[0.95rem] tracking-[0.08em] text-gold-bright">{initials}</span>
    </span>
  );
}
