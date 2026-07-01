const STEPS = [
  { title: "Collection", desc: "We gather detailed insights about your brand, market, and audience." },
  { title: "Orientation", desc: "We align our strategies with your specific business goals." },
  { title: "Realization", desc: "We bring our strategies to life across every channel." },
  { title: "Execution", desc: "Where strategy meets reality — and results start rolling in." },
];

export function WorkProcess() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Our Work Process</p>
        <h2 className="mt-3 font-display text-6xl font-black uppercase text-primary text-glow sm:text-8xl">
          CORE
        </h2>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="mx-auto hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_oklch(0.72_0.19_240)] md:mb-6 md:block" />
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
