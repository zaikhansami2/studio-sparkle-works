import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 40, stiffness: 60 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return (
    <div ref={ref} className="relative text-center">
      <div className="relative inline-flex items-baseline">
        <motion.span className="font-display text-[8rem] font-black leading-none text-primary text-glow sm:text-[10rem]">
          {rounded}
        </motion.span>
        <span className="ml-1 font-display text-6xl font-black text-primary text-glow sm:text-8xl">+</span>
      </div>
      <p className="mt-2 font-display text-xl font-bold uppercase tracking-widest text-foreground">
        {label}
      </p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-3">
        <Counter to={70} label="Projects" />
        <Counter to={10} label="Countries" />
        <Counter to={6} label="Years" />
      </div>
    </section>
  );
}
