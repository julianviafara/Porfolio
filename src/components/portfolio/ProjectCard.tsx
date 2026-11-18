import { useRef, useState } from "react";
import { ArrowUpRight, Github, Info, RotateCcw, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";
import { CornerOrnament } from "./Ornaments";
import { cn } from "@/lib/utils";

function PendingLink({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-10 items-center gap-2 border border-dashed border-gold-muted/70 px-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold-muted"
      title="Placeholder — add this URL in src/data/portfolio.ts"
    >
      {label} · link pending
    </span>
  );
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const [flipped, setFlipped] = useState(false);
  const frontBtn = useRef<HTMLButtonElement>(null);
  const backBtn = useRef<HTMLButtonElement>(null);
  const titleId = `project-${project.id}-title`;

  const flip = (next: boolean) => {
    setFlipped(next);
    // Move focus to the visible side after the flip starts.
    requestAnimationFrame(() => (next ? backBtn.current : frontBtn.current)?.focus({ preventScroll: true }));
  };

  const hasLinks = project.repoUrl || project.liveUrl;
  const showPending = !project.hideMissingLinks;

  return (
    <article
      aria-labelledby={titleId}
      className={cn("flip-card flip-scene group/card", className)}
      data-flipped={flipped}
      onMouseLeave={() => {
        if (flipped && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setFlipped(false);
      }}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div
          className="flip-front relative flex flex-col overflow-hidden border border-gold/30 bg-card shadow-deep"
          inert={flipped}
        >
          <CornerOrnament position="tl" className="z-10 h-7 w-7" />
          <CornerOrnament position="tr" className="z-10 h-7 w-7" />
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={960}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <span className="absolute bottom-3 left-5 font-display text-5xl text-gold-metal">{project.number}</span>
          </div>

          <div className="flex flex-1 flex-col p-6 pt-4">
            <p className="font-deco text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">{project.category}</p>
            <h3 id={titleId} className="mt-3 font-deco text-xl font-semibold uppercase tracking-[0.1em] text-ivory">
              {project.title}
            </h3>
            {project.summary ? (
              <p className="mt-3 text-sm leading-relaxed text-silver">{project.summary}</p>
            ) : (
              <p className="mt-3 text-sm italic text-gold-muted">Description coming soon.</p>
            )}

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Main technologies">
              {project.technologies.slice(0, 4).map((t) => (
                <li key={t} className="border border-gold/25 px-2 py-1 font-mono text-[0.65rem] text-ivory">
                  {t}
                </li>
              ))}
              {project.technologies.length > 4 && (
                <li className="px-1 py-1 font-mono text-[0.65rem] text-gold-muted">+{project.technologies.length - 4}</li>
              )}
              {project.technologies.length === 0 && (
                <li className="border border-dashed border-gold-muted/60 px-2 py-1 font-mono text-[0.65rem] text-gold-muted">
                  Technologies to be added
                </li>
              )}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-3 pt-6">
              {project.note ? (
                <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-silver">
                  <Lock className="h-3 w-3 text-gold-muted" aria-hidden="true" /> {project.note}
                </span>
              ) : (
                <span className="hidden font-deco text-[0.6rem] uppercase tracking-[0.3em] text-gold-muted [@media(hover:hover)]:inline">
                  Hover to reveal
                </span>
              )}
              <Button
                ref={frontBtn}
                variant="decoGhost"
                size="decoSm"
                onClick={() => flip(true)}
                aria-label={`Show details for ${project.title}`}
                className="ml-auto"
              >
                Details <Info />
              </Button>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="flip-back relative flex flex-col overflow-hidden border border-gold/60 bg-surface-gradient p-6 shadow-gold-strong sm:p-7"
        >
          <CornerOrnament position="tl" className="h-7 w-7" />
          <CornerOrnament position="tr" className="h-7 w-7" />
          <CornerOrnament position="bl" className="h-7 w-7" />
          <CornerOrnament position="br" className="h-7 w-7" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-spotlight opacity-70" />

          <div className="relative flex items-center justify-between">
            <span className="font-display text-3xl text-gold-metal">{project.number}</span>
            <Button
              ref={backBtn}
              variant="decoGhost"
              size="decoSm"
              onClick={() => flip(false)}
              aria-label={`Return to ${project.title} overview`}
            >
              <RotateCcw /> Back
            </Button>
          </div>

          <h4 className="relative mt-3 font-deco text-lg font-semibold uppercase tracking-[0.1em] text-ivory">
            {project.title}
          </h4>
          {project.details ? (
            <p className="relative mt-3 text-sm leading-relaxed text-silver">{project.details}</p>
          ) : (
            <p className="relative mt-3 text-sm italic text-gold-muted">
              Project details will be added soon.
            </p>
          )}

          {project.features.length > 0 && (
            <ul className="relative mt-4 grid grid-cols-1 gap-1.5 text-[0.8rem] text-ivory sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <p className="relative mt-5 deco-eyebrow text-[0.6rem]">Technologies</p>
          <ul className="relative mt-2 flex flex-wrap gap-1.5">
            {project.technologies.length > 0 ? (
              project.technologies.map((t) => (
                <li key={t} className="border border-gold/40 bg-gold/5 px-2 py-1 font-mono text-[0.65rem] text-gold-bright">
                  {t}
                </li>
              ))
            ) : (
              <li className="border border-dashed border-gold-muted/60 px-2 py-1 font-mono text-[0.65rem] text-gold-muted">
                To be added
              </li>
            )}
          </ul>

          <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
            {project.repoUrl ? (
              <Button asChild variant="decoOutline" size="decoSm">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github /> Repository
                </a>
              </Button>
            ) : (
              showPending && <PendingLink label="Repository" />
            )}
            {project.liveUrl ? (
              <Button asChild variant="deco" size="decoSm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live site <ArrowUpRight />
                </a>
              </Button>
            ) : (
              showPending && <PendingLink label="Live site" />
            )}
            {!hasLinks && !showPending && (
              <span className="inline-flex items-center gap-2 text-xs text-silver">
                <Lock className="h-3.5 w-3.5 text-gold-muted" aria-hidden="true" />
                Private client work — links available on request.
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
