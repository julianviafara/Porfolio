import { CheckCircle2, Code2, Database, LayoutTemplate, Palette, Server, Sparkles, Wrench } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CornerOrnament, Sunburst } from "./Ornaments";
import { cn } from "@/lib/utils";

const icons: Record<SkillCategory["icon"], typeof Code2> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
  palette: Palette,
  check: CheckCircle2,
};

function Tag({ label, strong }: { label: string; strong?: boolean }) {
  return (
    <li
      className={cn(
        "border px-3 py-1.5 font-mono text-[0.72rem] tracking-wide transition-colors duration-300",
        strong
          ? "border-gold/60 bg-gold/10 text-gold-bright hover:bg-gold/20"
          : "border-gold/20 text-ivory hover:border-gold/60 hover:text-gold-bright",
      )}
    >
      {label}
    </li>
  );
}

export function Skills() {
  const featured = skillCategories.find((c) => c.featured);
  const rest = skillCategories.filter((c) => !c.featured);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deco-pattern opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Chapter II · Craft"
          title="Technical Skills"
          intro="The languages, frameworks and practices I use to design, build and ship software."
        />

        {featured && (
          <Reveal className="relative mb-8 overflow-hidden border border-gold/50 bg-surface-gradient p-8 shadow-gold sm:p-12">
            <CornerOrnament position="tl" />
            <CornerOrnament position="tr" />
            <CornerOrnament position="bl" />
            <CornerOrnament position="br" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 opacity-40">
              <Sunburst className="h-[30rem] w-[30rem]" />
            </div>
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
              <div className="flex h-20 w-20 items-center justify-center border border-gold/60 bg-background/60 shadow-gold-strong">
                <Sparkles className="h-9 w-9 text-gold-bright" aria-hidden="true" />
              </div>
              <div>
                <p className="deco-eyebrow">Featured discipline</p>
                <h3 className="deco-heading mt-3 text-3xl text-gold-metal sm:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-silver sm:text-lg">{featured.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${featured.title} tools`}>
                  {featured.items.map((s) => (
                    <Tag key={s} label={s} strong />
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal
                key={cat.id}
                delay={(i % 3) * 90}
                className={cn(
                  "group relative flex flex-col border border-gold/20 bg-card/80 p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold",
                  cat.id === "backend" && "lg:row-span-2",
                )}
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-gold-bright" aria-hidden="true" />
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-gold-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-deco text-lg font-semibold uppercase tracking-[0.14em] text-ivory">{cat.title}</h3>
                <span aria-hidden="true" className="mt-3 block h-px w-10 bg-gold transition-[width] duration-500 group-hover:w-20" />
                {cat.description && <p className="mt-4 text-sm leading-relaxed text-silver">{cat.description}</p>}
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${cat.title} skills`}>
                  {cat.items.map((s) => (
                    <Tag key={s} label={s} />
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
