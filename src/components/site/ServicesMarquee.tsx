import { Globe, Megaphone, Search, LayoutTemplate, Boxes, ShoppingBag } from "lucide-react";

const SERVICES = [
  { icon: Globe, title: "Website Development", tag: "Custom · Fast · Scalable" },
  { icon: Megaphone, title: "Social Media Management", tag: "Content · Ads · Growth" },
  { icon: Search, title: "Website SEO", tag: "On the sites we build" },
  { icon: LayoutTemplate, title: "Landing Pages", tag: "High-converting funnels" },
  { icon: Boxes, title: "SaaS Software", tag: "MVP to production" },
  { icon: ShoppingBag, title: "E-commerce Stores", tag: "Shopify · Custom · Headless" },
];

function Card({ icon: Icon, title, tag }: (typeof SERVICES)[number]) {
  return (
    <div
      className="marquee-pause group relative mx-3 flex h-64 w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_50px_oklch(0.72_0.19_240/0.35)]"
      onMouseEnter={(e) => {
        // pause the parent track
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
      <div className="text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Learn more →
      </div>
    </div>
  );
}

export function ServicesMarquee() {
  const items = [...SERVICES, ...SERVICES];
  return (
    <section className="relative overflow-hidden py-12">
      <div className="marquee-track flex w-max">
        {items.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
