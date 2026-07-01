const CLIENTS = [
  "Nova Labs", "Orbit Group", "Zenith Studios", "Kairos Health", "Vertex Bank",
  "Meridian Foods", "Halcyon Realty", "Aurora Motors", "Skyline Media", "Loom Textiles",
  "Ember Coffee", "Pulse Fitness", "Fable Books", "Delta Logistics", "Prism Fashion",
  "Kinetic Sports", "Harbor Tea", "Sequoia Legal",
];

function Card({ name, i }: { name: string; i: number }) {
  const initials = name.split(" ").map((s) => s[0]).join("").slice(0, 2);
  return (
    <div className="mx-2 flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-2xl bg-white p-3 text-center shadow-md">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-lg font-black text-white"
        style={{
          background: `linear-gradient(135deg, hsl(${(i * 41) % 360}, 65%, 55%), hsl(${(i * 41 + 60) % 360}, 65%, 42%))`,
        }}
      >
        {initials}
      </div>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-gray-700">
        {name}
      </p>
    </div>
  );
}

export function ClientsGrid() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Some Of Our
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            CLIENTS
          </span>
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-clients-marquee">
          {loop.map((n, i) => (
            <Card key={`${n}-${i}`} name={n} i={i % CLIENTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
