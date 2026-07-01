const CLIENTS = [
  "Nova Labs", "Orbit Group", "Zenith Studios", "Kairos Health", "Vertex Bank",
  "Meridian Foods", "Halcyon Realty", "Aurora Motors", "Skyline Media", "Loom Textiles",
  "Ember Coffee", "Pulse Fitness", "Fable Books", "Delta Logistics", "Prism Fashion",
  "Kinetic Sports", "Harbor Tea", "Sequoia Legal",
];

export function ClientsGrid() {
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

        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {CLIENTS.map((name, i) => {
            const initials = name
              .split(" ")
              .map((s) => s[0])
              .join("")
              .slice(0, 2);
            return (
              <div
                key={name}
                className="group flex aspect-square flex-col items-center justify-center rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_oklch(0.72_0.19_240/0.6)]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-xl font-black text-white"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(i * 41) % 360}, 60%, 55%), hsl(${(i * 41 + 60) % 360}, 60%, 40%))`,
                  }}
                >
                  {initials}
                </div>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-gray-700">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
