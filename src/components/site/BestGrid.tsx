import { Rocket, Users, PieChart, Presentation } from "lucide-react";

const CARDS = [
  { icon: Rocket, title: "Tested & Proven Strategies" },
  { icon: Users, title: "In-house Team of Experts" },
  { icon: PieChart, title: "Dynamic Solutions" },
  { icon: Presentation, title: "Results-Driven Approach" },
];

export function BestGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
          How we make the magic happen
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
          <span className="text-muted-foreground">Our </span>
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            BEST
          </span>
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group flex h-64 flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_50px_oklch(0.72_0.19_240/0.4)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border text-foreground transition-colors group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
