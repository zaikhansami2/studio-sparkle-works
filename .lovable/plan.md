
# Samia Studios — Homepage v1 (Blue Theme)

Brand: **Samia Studios** (logo from image 1). Base: **Hyderabad**. Global theme: pitch black background + electric blue accents (like the logo gradient). **Every red element from the reference gets replaced with blue.**

## Stack decisions
- Enable **Lovable Cloud** (needed for Samia AI chatbot via Lovable AI Gateway, Gemini).
- Fonts: bold geometric display (Space Grotesk) + clean body (Inter).
- Framer Motion + Embla for auto-scrolling.

## Homepage sections (`/`)

1. **Sticky Nav** — Samia logo left; Home · We Offer ▾ · About Us · Contact Us right. Blue hover/active (image 2 style but blue).
2. **Hero** (image 4 style, blue glow) — "MEET SAMIA STUDIOS" headline, sub "A 360° Result-Oriented Digital Studio", CTA "Get Free Consultation", logo on right. Below the copy: **We Offer chips** — Website Development · Social Media Management · Website SEO (only on our builds) · Landing Pages · SaaS Software · E-commerce Stores.
3. **Loop car video** — full-width autoplay/loop/muted/playsInline, **no text overlay**. Wired to `/public/hero-loop.mp4`; user drops the file there.
4. **Smoke stream background** — user's exact snippet (canvas + `/smoke-streams.js`) mounted globally, hidden behind the loop video section only.
5. **Stats counter** (image 5 style) — animated count-up on scroll: **70+ Projects · 10+ Countries · 6+ Years**, big blue numerals with word overlays.
6. **Typing loop headline** — "our services" typed/erased smoothly on repeat.
7. **Services marquee** (image 6 style) — auto-scrolling horizontal strip of 6 service slides, **pauses on hover** per card. Blue accents.
8. **Our Best grid** (image 7 style) — 4 cards: Tested & Proven Strategies · In-house Team of Experts · Dynamic Solutions · Results-Driven Approach. Icons/borders neutral; **turn blue on hover only**.
9. **Meet Us In Person** (image 8 style) — two overlapping AI-generated office photos left; right side "Learn What We Can Do For You", Hyderabad hours (Mon-Fri 10 AM – 6 PM), "Visit Us In Person" button.
10. **Clients** (image 9 style) — heading "Some Of Our CLIENTS" (**static, not looped** — per your ask). Grid of **18 client logo cards** with names (AI-generated marks + names).
11. **Work Process** (image 10 style, own take) — 4-step timeline: Collection → Orientation → Realization → Execution. Blue nodes.
12. **FAQ** — 6-8 accordion questions, blue accents.
13. **Footer** — Samia Studios, Hyderabad address, social links.

## Samia AI Chatbot (every page)
- Floating pill button **bottom-left** with Samia avatar; click opens mini chat panel (AI Elements: Conversation, Message, PromptInput, Shimmer).
- Backend: TanStack server route `src/routes/api/chat.ts` → Lovable AI Gateway → `google/gemini-3-flash-preview`.
- System prompt scoped to Samia Studios' Hyderabad business & services.
- Single conversation, localStorage persistence per browser. Mounted in `__root.tsx` so it appears on every route.

## About page
- Route `/about` created as a stub for "page 1 of 2" — real content in the next round after homepage is approved.

## Global rules applied
- Every red in references → **electric blue** (text, buttons, glows, loop text, hover states).
- No text over the loop video.
- Hyderabad, not Islamabad.
- Marquee pauses on hover; "Our Best" cards turn blue only on hover.

## Files created / touched
- `src/routes/__root.tsx` — real metadata, mount `<SmokeBackground/>` + `<SamiaChatWidget/>`.
- `src/routes/index.tsx` — full homepage.
- `src/routes/about.tsx` — stub.
- `src/routes/api/chat.ts` — Lovable AI streaming endpoint.
- `src/components/site/*` — Navbar, Hero, WeOfferChips, VideoLoop, StatsCounter, TypingHeadline, ServicesMarquee, BestGrid, MeetInPerson, ClientsGrid, WorkProcess, Faq, Footer, SmokeBackground, SamiaChatWidget.
- `src/lib/ai-gateway.server.ts`.
- `src/styles.css` — blue theme tokens + glow shadow.
- `public/smoke-streams.js` — smoke canvas script.
- `public/hero-loop.mp4` — placeholder path (you drop video here).
- Uploaded logo → `lovable-assets` CDN pointer.
- AI-generated: 2 office photos, 18 client logo marks, hero glow background.
