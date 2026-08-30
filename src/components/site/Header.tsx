import { useEffect, useState } from "react";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./data";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Before & After", href: "#before-after" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-charcoal-deep text-on-dark-muted md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-metal" />
            Perth, WA — servicing Perth &amp; surrounding areas
          </span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 font-display uppercase tracking-[0.2em] text-on-dark transition-colors hover:text-metal-bright"
          >
            <Phone className="h-3.5 w-3.5 text-metal" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div
        className={`steel-plate border-b border-white/10 transition-shadow ${
          scrolled ? "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-2 border-metal font-display text-lg text-metal">
              T
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base uppercase tracking-[0.12em] text-on-dark sm:text-lg">
                Truss Metal Roofing
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-on-dark-muted">
                PTY LTD · Perth WA
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-[0.78rem] uppercase tracking-[0.16em] text-on-dark-muted transition-colors hover:text-metal-bright"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden bg-metal px-5 py-3 font-display text-[0.78rem] uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-metal-bright lg:inline-block"
            >
              Get a Free Quote
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="border border-white/20 p-2.5 text-on-dark xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-white/10 bg-charcoal-deep xl:hidden">
            <div className="mx-auto max-w-7xl px-6 py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 font-display text-sm uppercase tracking-[0.16em] text-on-dark-muted"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 mb-4 block bg-metal px-5 py-3 text-center font-display text-sm uppercase tracking-[0.18em] text-accent-foreground"
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
