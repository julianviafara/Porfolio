import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile, type SectionId } from "@/data/portfolio";
import { Monogram } from "./Ornaments";
import { cn } from "@/lib/utils";

function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: SectionId = "home";
      for (const n of navItems) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) current = n.id;
      }
      // At the very bottom, the last section is active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = "contact";
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-gold/20 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.fullName} — home`}>
          <Monogram initials={profile.initials} className="transition-transform duration-500 group-hover:rotate-[22.5deg]" />
          <span className="hidden font-deco text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-ivory sm:block">
            Julian <span className="text-gold">Viafara</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative block px-4 py-3 font-deco text-[0.7rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300",
                    isActive ? "text-gold-bright" : "text-silver hover:text-ivory",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-4 bottom-1.5 flex items-center justify-center transition-[opacity,transform] duration-500",
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-60",
                    )}
                  >
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
                    <span className="mx-1 h-1.5 w-1.5 rotate-45 bg-gold-bright" />
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold-bright md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-gold/15 bg-background/95 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navItems.map((item, i) => (
              <li key={item.id} className="border-b border-gold/10 last:border-b-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 font-deco text-sm font-semibold uppercase tracking-[0.3em]",
                    active === item.id ? "text-gold-bright" : "text-ivory",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[0.65rem] text-gold-muted">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
