import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import samiaLogo from "@/assets/samia-logo.png.asset.json";
import { SERVICES } from "@/lib/services";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={samiaLogo.url} alt="Samia Studios" className="h-10 w-10 rounded-md" />
          <span className="font-display text-lg font-bold tracking-tight">
            SAMIA <span className="text-primary">STUDIOS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          {/* We Offer dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              We Offer
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-primary/30 bg-background/95 shadow-[0_0_50px_oklch(0.72_0.19_240/0.35)] backdrop-blur-xl">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/40 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-primary/10 hover:text-primary"
                  >
                    <p className="text-sm font-bold">{s.title}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.tag}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            About Us
          </Link>
          <a
            href="#contact"
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            Contact Us
          </a>
        </nav>
        <a
          href="#contact"
          className="btn-primary-glow hidden rounded-full px-5 py-2 text-sm font-semibold md:inline-block"
        >
          Get Free Consultation
        </a>
      </div>
    </header>
  );
}
