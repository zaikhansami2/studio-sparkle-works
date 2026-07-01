import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samia Studios" },
      {
        name: "description",
        content:
          "About Samia Studios, a Hyderabad-based digital studio. Page 1 of 2.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About · Page 1 of 2</p>
          <h1 className="mt-4 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl text-glow">
            We're <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Samia Studios</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Hyderabad-based digital studio building websites, SaaS platforms,
            e-commerce stores, and full-funnel campaigns for clients across 10+
            countries. Six years in, 70+ projects deep, still obsessed with the
            details.
          </p>
          <p className="mt-4 text-muted-foreground">
            This is page one of our story. Page two — team, culture, and a peek
            inside the studio — is coming next.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
