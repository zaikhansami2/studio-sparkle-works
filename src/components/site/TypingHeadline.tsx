import { useEffect, useState } from "react";

const PHRASES = [
  "our services",
  "our craft",
  "our promise",
  "what we build",
];

export function TypingHeadline() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  return (
    <section className="px-6 py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Explore</p>
      <h2 className="mt-4 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
        <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent text-glow">
          {text}
        </span>
        <span className="ml-1 inline-block h-14 w-1 animate-pulse bg-primary align-middle sm:h-20" />
      </h2>
    </section>
  );
}
