import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { CornerOrnament, DecoDivider, Sunburst, FanMotif } from "./Ornaments";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: "GitHub", value: "github.com/julianviafara", href: contact.github, icon: Github, external: true },
  {
    label: "LinkedIn",
    value: "in/julian-andres-viafara-mosquera",
    href: contact.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-pinstripe" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[-28rem] -z-10 flex justify-center">
        <Sunburst className="h-[56rem] w-[56rem] max-w-none opacity-50" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-transparent" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="relative deco-frame bg-background/70 px-6 py-14 text-center backdrop-blur-sm sm:px-14 sm:py-20">
          <CornerOrnament position="tl" className="h-12 w-12" />
          <CornerOrnament position="tr" className="h-12 w-12" />
          <CornerOrnament position="bl" className="h-12 w-12" />
          <CornerOrnament position="br" className="h-12 w-12" />

          <FanMotif className="mx-auto mb-4" />
          <p className="deco-eyebrow">Chapter IV · Correspondence</p>
          <h2 id="contact-title" className="deco-heading mx-auto mt-5 max-w-3xl text-4xl text-gold-metal sm:text-5xl lg:text-6xl">
            Let's build something remarkable.
          </h2>
          <DecoDivider className="mt-7" />
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
            Interested in collaborating, discussing a project, or exploring professional opportunities? I'd be glad to
            hear from you.
          </p>

          <ul className="mt-12 grid gap-4 text-left md:grid-cols-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-4 border border-gold/25 bg-card/70 p-5 transition-[border-color,box-shadow,background-color] duration-500 hover:border-gold-bright hover:bg-gold/5 hover:shadow-gold-strong"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-gold transition-colors group-hover:text-gold-bright">
                    <l.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-deco text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
                      {l.label}
                    </span>
                    <span className="mt-1 block truncate text-sm text-ivory">{l.value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-gold-muted transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-bright"
                    aria-hidden="true"
                  />
                  {l.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="mx-auto mt-20 flex max-w-7xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <DecoDivider />
        <p className="font-deco text-[0.65rem] uppercase tracking-[0.35em] text-silver">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="text-xs text-gold-muted">Designed & engineered in Colombia</p>
      </footer>
    </section>
  );
}
