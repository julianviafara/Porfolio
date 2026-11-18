import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-gradient" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-spotlight" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow="Chapter III · Selected Work"
          title="Projects"
          intro="Hover a card to turn it over — or tap Details on touch screens."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 110}
              className={cn("lg:col-span-2", i === 3 && projects.length === 5 && "lg:col-start-2")}
            >
              <ProjectCard project={p} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button asChild variant="decoOutline" size="deco">
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Github /> More on GitHub
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
