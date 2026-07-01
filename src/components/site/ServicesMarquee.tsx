import { Link } from "@tanstack/react-router";
import { Globe, Megaphone, Search, LayoutTemplate, Boxes, ShoppingBag, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES as SERVICE_DATA } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  "website-development": Globe,
  "social-media-management": Megaphone,
  "website-seo": Search,
  "landing-pages": LayoutTemplate,
  "saas-software": Boxes,
  "ecommerce-stores": ShoppingBag,
};

function Card({ slug, title, tag }: { slug: string; title: string; tag: string }) {
  const Icon = ICONS[slug] ?? Globe;
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className="marquee-pause group relative mx-3 flex h-64 w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_50px_oklch(0.72_0.19_240/0.35)]"
      onMouseEnter={(e) => {
        const track = e.currentTarget.parentElement;
        if (track) (track.style as CSSStyleDeclaration).animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        const track = e.currentTarget.parentElement;
        if (track) (track.style as CSSStyleDeclaration).animationPlayState = "running";
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tag}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

export function ServicesMarquee() {
  const items = [...SERVICE_DATA, ...SERVICE_DATA];
  return (
    <section className="relative overflow-hidden py-12">
      <div className="marquee-track flex w-max">
        {items.map((s, i) => (
          <Card key={i} slug={s.slug} title={s.title} tag={s.tag} />
        ))}
      </div>
    </section>
  );
}
