import svcWeb1 from "@/assets/svc-web-1.jpg";
import svcWeb2 from "@/assets/svc-web-2.jpg";
import svcSocial1 from "@/assets/svc-social-1.jpg";
import svcSocial2 from "@/assets/svc-social-2.jpg";
import svcSeo1 from "@/assets/svc-seo-1.jpg";
import svcSeo2 from "@/assets/svc-seo-2.jpg";
import svcLanding1 from "@/assets/svc-landing-1.jpg";
import svcLanding2 from "@/assets/svc-landing-2.jpg";
import svcSaas1 from "@/assets/svc-saas-1.jpg";
import svcSaas2 from "@/assets/svc-saas-2.jpg";
import svcEcom1 from "@/assets/svc-ecom-1.jpg";
import svcEcom2 from "@/assets/svc-ecom-2.jpg";

export type Service = {
  slug: string;
  title: string;
  tag: string;
  hero: string;
  intro: string;
  sections: { heading: string; body: string; image?: string }[];
  cta: string;
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tag: "Custom · Fast · Scalable",
    hero: svcWeb1,
    intro:
      "Your website is the digital front door of your business. At Samia Studios, we craft custom websites that don't just look beautiful — they perform. From lightning-fast load times to pixel-perfect design across every device, we build sites engineered to convert visitors into customers.",
    sections: [
      {
        heading: "Built From Scratch, Just For You",
        body: "No cookie-cutter templates. Every website we deliver is designed around your brand identity, your audience, and your business goals. We use modern frameworks like React, Next.js, and TanStack Start to deliver web experiences that feel fast, native, and premium — the kind of sites people actually enjoy using.",
      },
      {
        heading: "Performance, SEO & Responsiveness",
        body: "A slow website loses customers. That's why we optimize every image, script, and interaction for blazing performance. Combined with clean semantic HTML, structured metadata, and mobile-first design, your site is ready to rank on Google and impress users on every screen — from a 27-inch monitor to a 5-inch phone.",
        image: svcWeb2,
      },
      {
        heading: "Ready to Launch, Easy to Scale",
        body: "We hand over a codebase you can grow with. Add pages, integrate payments, connect a CRM, or plug in AI features later — the architecture we build is modular and future-proof. Whether you need a 5-page portfolio or a 500-page platform, we've got the stack to make it happen.",
      },
    ],
    cta: "Ready for a website that actually works? Let's build yours.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tag: "Content · Ads · Growth",
    hero: svcSocial1,
    intro:
      "Social media isn't a side hustle — it's where your brand lives. We handle everything from strategy and content creation to community management and paid ads, so you can focus on running your business while we grow your audience.",
    sections: [
      {
        heading: "Content That Stops the Scroll",
        body: "Our creative team designs posts, reels, and stories that feel native to each platform. Whether it's Instagram, Facebook, TikTok, or LinkedIn — we craft content tuned to the algorithm and your brand voice. Every asset is on-brand, on-trend, and built to spark engagement.",
        image: svcSocial2,
      },
      {
        heading: "Paid Ads That Actually Convert",
        body: "Posting isn't enough. We run targeted ad campaigns on Meta, TikTok, and Google that drive real results — leads, sales, followers, and reach. Every campaign is tested, optimized, and reported transparently so you know exactly where your budget is going.",
      },
      {
        heading: "Full-Service Management",
        body: "Strategy, calendar, captions, hashtags, replies, DMs, analytics — we handle it all. You get monthly reports, a dedicated point of contact, and a team that treats your account like their own. No fluff, just growth.",
      },
    ],
    cta: "Let's turn your socials into your biggest revenue channel.",
  },
  {
    slug: "website-seo",
    title: "Website SEO",
    tag: "On the sites we build",
    hero: svcSeo1,
    intro:
      "SEO is the difference between a beautiful website nobody sees and a website that quietly brings you customers every single day. We offer SEO exclusively for the websites we build, because we know the code, the structure, and how to make Google love it.",
    sections: [
      {
        heading: "Technical SEO From Day One",
        body: "When we build your site, SEO isn't an afterthought — it's baked in. Clean semantic HTML, optimized meta tags, schema markup, sitemap generation, canonical URLs, and Core Web Vitals tuned to perfection. Google crawlers get exactly what they need to understand and rank your pages.",
      },
      {
        heading: "Keyword Strategy & On-Page Optimization",
        body: "We research the exact keywords your customers are searching, then optimize every page around them — titles, headings, image alt text, internal links, and content structure. The goal isn't to trick Google; it's to genuinely be the best result for what your audience is looking for.",
        image: svcSeo2,
      },
      {
        heading: "Ongoing Growth & Reporting",
        body: "SEO isn't a one-time job. We track your rankings, fix issues as Google updates its algorithms, and continuously improve your content strategy. You get monthly reports showing where you rank, how much traffic you're getting, and what's coming next.",
      },
    ],
    cta: "Want to rank on Google? Let's start with a website built to win.",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    tag: "High-converting funnels",
    hero: svcLanding1,
    intro:
      "A landing page has one job: convert. Whether you're running an ad campaign, launching a product, or capturing leads — we design and develop high-converting landing pages that turn traffic into results.",
    sections: [
      {
        heading: "Designed to Convert",
        body: "Every element on the page — from the headline to the CTA color — is chosen with conversion in mind. We use proven copywriting formulas, persuasive visuals, and clear value propositions to guide visitors toward one specific action. No distractions, just results.",
      },
      {
        heading: "Fast, Mobile-First, A/B Ready",
        body: "Most ad traffic comes from mobile, so we build mobile-first. Pages load in under 2 seconds, look flawless on every screen, and are structured for easy A/B testing so you can iterate and improve your conversion rate over time.",
        image: svcLanding2,
      },
      {
        heading: "Integrated With Your Funnel",
        body: "We connect your landing page to whatever you need — email marketing, CRM, WhatsApp, payment gateways, analytics, Facebook Pixel, Google Ads conversion tracking. Everything you need to run and measure a serious campaign, ready on day one.",
      },
    ],
    cta: "Running ads? Let us build the landing page that closes the deal.",
  },
  {
    slug: "saas-software",
    title: "SaaS Software",
    tag: "MVP to production",
    hero: svcSaas1,
    intro:
      "Got a SaaS idea? We turn it into a real, working product. From MVP validation to production-grade platforms with thousands of users, our team designs, builds, and ships SaaS software that founders and investors take seriously.",
    sections: [
      {
        heading: "MVP in Weeks, Not Months",
        body: "We believe in shipping fast and learning faster. Using modern stacks like React, TanStack Start, Supabase, and edge functions, we can take your idea from Figma to live product in as little as 4-6 weeks. Get real user feedback before you spend a fortune on the wrong features.",
      },
      {
        heading: "Auth, Payments, Dashboards — Handled",
        body: "Every SaaS needs the boring stuff: user authentication, subscription billing, role-based access, admin dashboards, analytics. We've built these dozens of times, so you don't have to reinvent the wheel. We use battle-tested tools like Stripe, Supabase Auth, and Row-Level Security to keep your product safe and scalable.",
        image: svcSaas2,
      },
      {
        heading: "Built to Scale With You",
        body: "Whether you're at 10 users or 10,000, our architecture scales cleanly. We deploy on edge networks for global speed, use serverless functions to keep costs predictable, and design database schemas that don't break at scale. Your future self will thank you.",
      },
    ],
    cta: "Have a SaaS idea? Let's make it real.",
  },
  {
    slug: "ecommerce-stores",
    title: "E-commerce Stores",
    tag: "Shopify · Custom · Headless",
    hero: svcEcom1,
    intro:
      "Selling online isn't just about having a store — it's about having a store that sells. We build e-commerce experiences that load fast, look premium, and turn browsers into buyers. Shopify, WooCommerce, or fully custom headless — we do it all.",
    sections: [
      {
        heading: "Shopify Stores That Feel Custom",
        body: "Most Shopify stores look the same. Yours won't. We customize themes deeply — or build them from scratch — so your store reflects your brand, not a template. Combined with speed optimization and clean UX, your visitors get an experience worth buying from.",
      },
      {
        heading: "Headless & Custom Builds",
        body: "For brands that need more — international pricing, complex product variants, custom checkouts, subscription models — we build headless e-commerce on modern stacks. You get all the flexibility of a custom app with the reliability of proven commerce backends like Shopify, Medusa, or Stripe.",
        image: svcEcom2,
      },
      {
        heading: "Payments, Shipping, Marketing — All Connected",
        body: "We integrate everything your store needs to run: payment gateways (local and international), shipping providers, inventory management, email marketing, abandoned cart recovery, product reviews, and analytics. You launch with a store that's ready to actually do business.",
      },
    ],
    cta: "Ready to sell online? Let's build your store the right way.",
  },
];

export const SERVICE_MAP: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
