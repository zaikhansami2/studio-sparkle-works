import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import samiaLogo from "@/assets/samia-logo.png.asset.json";

const STORAGE_KEY = "samia-chat-messages-v1";

function loadStored(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as UIMessage[];
  } catch {
    return [];
  }
}

export function SamiaChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [initial] = useState<UIMessage[]>(() => loadStored());
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    id: "samia-single",
    messages: initial,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore */
    }
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const isBusy = status === "submitted" || status === "streaming";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const t = input.trim();
    if (!t || isBusy) return;
    setInput("");
    await sendMessage({ text: t });
  }

  return (
    <>
      {/* Floating trigger — bottom RIGHT */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-3 py-2 shadow-[0_0_25px_oklch(0.72_0.19_240/0.5)] backdrop-blur transition-transform hover:scale-105"
        aria-label="Chat with Samia"
      >
        <div className="relative">
          <img src={samiaLogo.url} alt="Samia" className="h-6 w-6 rounded-full" />
          <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_oklch(0.72_0.19_240)]" />
        </div>
        <span className="pr-1 text-xs font-semibold">
          {open ? "Close" : "Chat with Samia"}
        </span>
        {open ? <X className="h-3.5 w-3.5" /> : <MessageCircle className="h-3.5 w-3.5 text-primary" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-5 z-50 flex h-[440px] w-[320px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_0_50px_oklch(0.72_0.19_240/0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-background/50 p-4">
              <img src={samiaLogo.url} alt="Samia" className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-display text-sm font-bold">Samia</p>
                <p className="text-xs text-muted-foreground">Samia Studios · Live</p>
              </div>
            </div>

            {/* Transcript */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.length === 0 && (
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <p className="text-sm text-foreground">
                    Hi! I'm Samia 👋 — ask me anything about Samia Studios: our services,
                    process, timelines, or how to start your project.
                  </p>
                </div>
              )}
              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                const mine = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex ${mine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        mine
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {mine ? (
                        text
                      ) : (
                        <div className="prose prose-invert prose-sm max-w-none">
                          <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {isBusy && (
                <div className="flex items-center gap-2 text-xs text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Samia is typing...
                </div>
              )}
            </div>

            {/* Composer */}
            <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-3">
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 rounded-full border border-border bg-background/50 px-4 py-2 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={isBusy || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
