import { Boxes, Building2, Database, GraduationCap, Languages, Layers } from "lucide-react";
import { about, education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CornerOrnament } from "./Ornaments";

const pillarIcons = { boxes: Boxes, layers: Layers, database: Database, building: Building2 } as const;

export function About() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-gradient" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="about-title" eyebrow="Chapter I · Introduction" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-deco text-2xl font-light leading-snug text-ivory sm:text-[1.7rem]">{lead}</p>
            </Reveal>
            <div className="mt-8 space-y-5 border-l border-gold/30 pl-6">
              {rest.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="text-base leading-relaxed text-silver sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.pillars.map((pl) => {
                const Icon = pillarIcons[pl.icon];
                return (
                  <div
                    key={pl.title}
                    className="group flex flex-col items-center gap-3 border border-gold/20 bg-background/40 px-3 py-5 text-center transition-[border-color,box-shadow] duration-500 hover:border-gold/60 hover:shadow-gold"
                  >
                    <Icon className="h-5 w-5 text-gold transition-colors group-hover:text-gold-bright" aria-hidden="true" />
                    <span className="font-deco text-[0.65rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-ivory">
                      {pl.title}
                    </span>
                  </div>
                );
              })}
            </Reveal>
          </div>

          {/* Side column: languages + education */}
          <div className="space-y-8 lg:col-span-5">
            <Reveal className="relative deco-frame bg-background/50 p-7 sm:p-8">
              <CornerOrnament position="tl" className="h-6 w-6" />
              <CornerOrnament position="br" className="h-6 w-6" />
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="deco-eyebrow">Languages</h3>
              </div>
              <dl className="mt-6 divide-y divide-gold/15">
                {about.languages.map((l) => (
                  <div key={l.name} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="font-display text-xl uppercase tracking-[0.12em] text-ivory">{l.name}</dt>
                    <dd className="text-right text-sm text-silver">{l.level}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120} className="relative deco-frame bg-background/50 p-7 sm:p-8">
              <CornerOrnament position="tr" className="h-6 w-6" />
              <CornerOrnament position="bl" className="h-6 w-6" />
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="deco-eyebrow">Education</h3>
              </div>
              <ol className="relative mt-7 space-y-8 border-l border-gold/30 pl-7">
                {education.map((ed) => (
                  <li key={ed.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rotate-45 border border-gold bg-background"
                    />
                    {ed.period && (
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-gold">{ed.period}</p>
                    )}
                    <h4 className="mt-1 font-deco text-base font-semibold uppercase tracking-[0.1em] text-ivory">
                      {ed.title}
                    </h4>
                    <p className="mt-1 text-sm text-silver">{ed.institution}</p>
                    <p className="mt-1 text-sm italic text-gold-muted">{ed.detail}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
