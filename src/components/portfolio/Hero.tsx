import { useEffect, useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { Sunburst, CornerOrnament, DecoDivider } from "./Ornaments";

export function Hero() {
  const burstRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the sunburst; disabled for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (burstRef.current) burstRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      {/* Lighting layers */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-pinstripe" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-spotlight" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[8%] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-ambient blur-2xl animate-glow-pulse"
      />

      {/* Sunburst */}
      <div ref={burstRef} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[6%] -z-10 flex justify-center will-change-transform">
        <Sunburst className="h-[44rem] w-[44rem] max-w-none opacity-70 animate-sunburst-spin sm:h-[56rem] sm:w-[56rem]" />
      </div>

      {/* Architectural side columns */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-12 sm:py-20">
          <CornerOrnament position="tl" className="h-12 w-12 sm:h-16 sm:w-16" />
          <CornerOrnament position="tr" className="h-12 w-12 sm:h-16 sm:w-16" />
          <CornerOrnament position="bl" className="h-12 w-12 sm:h-16 sm:w-16" />
          <CornerOrnament position="br" className="h-12 w-12 sm:h-16 sm:w-16" />

          <p className="deco-eyebrow animate-in fade-in slide-in-from-bottom-2 duration-1000">Software · Engineering · Design</p>

          <h1 id="hero-title" className="deco-heading mt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="block text-[2.6rem] leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              {profile.firstNames}
            </span>
            <span className="mt-2 block text-[2.15rem] leading-[1.02] text-gold-metal animate-shimmer sm:text-6xl lg:text-7xl">
              {profile.lastNames}
            </span>
          </h1>

          <DecoDivider className="mt-8" />

          <ul className="mt-6 flex flex-col items-center justify-center gap-2 font-deco text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:flex-row sm:gap-5 sm:text-sm">
            <li>{profile.roles[0]}</li>
            <li aria-hidden="true" className="hidden h-1.5 w-1.5 rotate-45 bg-gold-muted sm:block" />
            <li>{profile.roles[1]}</li>
          </ul>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-silver sm:text-lg">{profile.intro}</p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="deco" size="deco">
              <a href="#projects">
                Explore My Work <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="decoOutline" size="deco">
              <a href="#contact">
                Get In Touch <Mail />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold-muted transition-colors hover:text-gold-bright sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="font-deco text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
