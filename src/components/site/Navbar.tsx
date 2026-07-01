import { Link } from "@tanstack/react-router";
import samiaLogo from "@/assets/samia-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/", label: "We Offer" },
  { to: "/about", label: "About Us" },
  { to: "/", label: "Contact Us" },
];

export function Navbar() {
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
          {NAV.map((n, i) => (
            <Link
              key={i}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
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
