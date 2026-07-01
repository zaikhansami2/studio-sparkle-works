import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Where is Samia Studios based?",
    a: "We're headquartered in Hyderabad, Pakistan and work with clients across 10+ countries.",
  },
  {
    q: "What services do you offer?",
    a: "Website Development, Social Media Management, Website SEO (only for sites we build), Landing Pages, SaaS Software, and E-commerce Stores.",
  },
  {
    q: "Do you offer SEO for websites you didn't build?",
    a: "No. We only optimize sites we built ourselves so we can guarantee results end-to-end.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page ships in 1–2 weeks, a full website in 3–6 weeks, and SaaS builds run 8–16 weeks depending on scope.",
  },
  {
    q: "How do I get a quote?",
    a: "Tap 'Get Free Consultation' or ping Samia (the chat button bottom-left) with your requirements and we'll come back within a working day.",
  },
  {
    q: "What are your office hours?",
    a: "Monday to Friday, 10 AM – 6 PM PKT. Visitors are welcome for a chai and strategy chat.",
  },
];

export function Faq() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Answers
        </p>
        <h2 className="mt-4 text-center font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
          FA<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Q</span>
        </h2>
        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
