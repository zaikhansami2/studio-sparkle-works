const FAQS = [
  { q: "Where is Samia Studios based?", a: "Hyderabad, Pakistan — serving 10+ countries." },
  { q: "What services do you offer?", a: "Websites, Social Media, SEO (own builds), Landing Pages, SaaS, E-commerce." },
  { q: "Do you SEO other sites?", a: "No — only sites we build ourselves." },
  { q: "Project timelines?", a: "Landing 1–2w · Website 3–6w · SaaS 8–16w." },
  { q: "How to get a quote?", a: "Tap 'Get Free Consultation' or ping Samia in the chat." },
  { q: "Office hours?", a: "Mon–Fri · 10 AM – 6 PM PKT. Chai on the house." },
];

function FaqCard({ q, a }: { q: string; a: string }) {
  return (
    <div className="mx-3 flex h-40 w-80 shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-5">
      <p className="font-display text-base font-bold text-primary">{q}</p>
      <p className="text-sm text-muted-foreground">{a}</p>
    </div>
  );
}

export function Faq() {
  const loop = [...FAQS, ...FAQS];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Answers
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
          FA<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Q</span>
        </h2>
      </div>
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max">
          {loop.map((f, i) => (
            <FaqCard key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
