import samiaLogo from "@/assets/samia-logo.png.asset.json";
import { motion } from "framer-motion";

const OFFERS = [
  "Website Development",
  "Social Media Management",
  "Website SEO (only on sites we build)",
  "Landing Pages",
  "SaaS Software",
  "E-commerce Stores",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-glow text-center font-display text-6xl font-black tracking-tight sm:text-7xl md:text-8xl"
        >
          MEET <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">SAMIA STUDIOS</span>
        </motion.h1>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              A 360° Result-Oriented <br />
              <span className="text-muted-foreground">Digital Studio</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              At Samia Studios, we promise results. Our exceptional success rate comes
              from tested and proven strategies, having worked with a diverse portfolio
              of niches from Hyderabad to the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-primary-glow inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider"
              >
                Get Free Consultation
              </a>
              <a
                href="#offer"
                className="inline-block rounded-full border border-primary/50 px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
              >
                What We Offer
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.72 0.19 240 / 0.5), transparent 60%)" }}
            />
            <img
              src={samiaLogo.url}
              alt="Samia Studios logo"
              className="w-full max-w-md rounded-3xl"
            />
          </motion.div>
        </div>

        {/* WE OFFER chips */}
        <div id="offer" className="mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
            We Offer
          </p>
          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-3">
            {OFFERS.map((o) => (
              <span
                key={o}
                className="rounded-full border border-primary/40 bg-card/50 px-5 py-2 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_oklch(0.72_0.19_240/0.5)]"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
