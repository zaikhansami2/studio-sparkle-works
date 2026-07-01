import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are Samia, the friendly AI concierge for Samia Studios — a Hyderabad-based digital studio.

Samia Studios offers:
- Website Development
- Social Media Management
- Website SEO (only for websites we build)
- Landing Pages
- SaaS Software
- E-commerce Stores

Company facts:
- Base: Hyderabad, Pakistan
- Hours: Monday–Friday, 10 AM – 6 PM
- Track record: 70+ projects delivered, 10+ countries served, 6+ years of experience
- Approach: tested & proven strategies, in-house team of experts, dynamic solutions, results-driven

Rules:
- Only answer questions related to Samia Studios, its services, process, pricing (say "share your requirements and we'll quote"), timelines, and how to get started.
- If asked something unrelated, politely steer back to what Samia Studios can help with.
- Keep answers short, warm, and helpful. Use markdown for lists.
- If the user wants to hire us, ask for their business, goal, and preferred contact channel, then tell them our team will follow up.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }
        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
