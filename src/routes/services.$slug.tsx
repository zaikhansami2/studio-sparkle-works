import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SamiaChatWidget } from "@/components/site/SamiaChatWidget";
import { SERVICE_MAP, SERVICES } from "@/lib/services";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_MAP[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Samia Studios" }] };
    return {
      meta: [
        { title: `${s.title} — Samia Studios` },
        { name: "description", content: s.intro.slice(0, 155) },
        { property: "og:title", content: `${s.title} — Samia Studios` },
        { property: "og:description", content: s.intro.slice(0, 155) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-black">Service not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="relative">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0">
            <img
              src={service.hero}
              alt={service.title}
              className="h-full w-full object-cover opacity-25"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              We Offer
            </p>
            <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
              {service.title}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {service.tag}
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/90">
              {service.intro}
            </p>
          </div>
        </div>

        {/* Hero image full */}
        <div className="mx-auto max-w-5xl px-6 pt-12">
          <img
            src={service.hero}
            alt={service.title}
            className="w-full rounded-2xl border border-border shadow-[0_0_60px_oklch(0.72_0.19_240/0.25)]"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </div>

        {/* Sections */}
        <div className="mx-auto max-w-3xl px-6 py-16">
          {service.sections.map((sec: (typeof service.sections)[number], i: number) => (
            <section key={i} className="mb-16">
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
                <span className="text-primary">0{i + 1}.</span> {sec.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
                {sec.body}
              </p>
              {sec.image && (
                <img
                  src={sec.image}
                  alt={sec.heading}
                  className="mt-8 w-full rounded-2xl border border-border"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
              )}
            </section>
          ))}

          {/* CTA */}
          <div className="mt-8 rounded-3xl border border-primary/40 bg-primary/5 p-8 text-center shadow-[0_0_60px_oklch(0.72_0.19_240/0.15)]">
            <p className="font-display text-2xl font-bold sm:text-3xl">{service.cta}</p>
            <a
              href="#contact"
              className="btn-primary-glow mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Other services */}
          <div className="mt-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Explore More
            </p>
            <h3 className="mt-2 font-display text-2xl font-black uppercase">Other Services</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card/50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-card"
                >
                  <div>
                    <p className="font-display text-base font-bold group-hover:text-primary">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.tag}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <SamiaChatWidget />
    </div>
  );
}
