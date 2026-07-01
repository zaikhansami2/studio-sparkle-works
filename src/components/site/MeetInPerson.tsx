import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";

export function MeetInPerson() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative h-[420px]">
          <img
            src={office1}
            alt="Samia Studios office"
            loading="lazy"
            width={1024}
            height={768}
            className="absolute left-0 top-0 h-64 w-4/5 rounded-2xl border border-border object-cover shadow-elegant"
          />
          <img
            src={office2}
            alt="Samia Studios team"
            loading="lazy"
            width={1024}
            height={768}
            className="absolute bottom-0 right-0 h-64 w-4/5 rounded-2xl border border-border object-cover shadow-[0_0_50px_oklch(0.72_0.19_240/0.35)]"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Meet Us In Person!
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Learn What We <br />
            <span className="text-muted-foreground">Can Do For You</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            You're always welcome for some chai and a chat at our Hyderabad studio.
            Let us hand you a strategy that will rocket your business forward.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-foreground">
            Mon-Fri · 10 AM – 6 PM · Hyderabad
          </p>
          <button className="mt-6 rounded-full bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-105">
            Visit Us In Person
          </button>
        </div>
      </div>
    </section>
  );
}
