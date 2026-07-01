import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { VideoLoop } from "@/components/site/VideoLoop";
import { StatsCounter } from "@/components/site/StatsCounter";
import { TypingHeadline } from "@/components/site/TypingHeadline";
import { ServicesMarquee } from "@/components/site/ServicesMarquee";
import { BestGrid } from "@/components/site/BestGrid";
import { MeetInPerson } from "@/components/site/MeetInPerson";
import { ClientsGrid } from "@/components/site/ClientsGrid";
import { WorkProcess } from "@/components/site/WorkProcess";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoLoop />
      <StatsCounter />
      <TypingHeadline />
      <ServicesMarquee />
      <BestGrid />
      <MeetInPerson />
      <ClientsGrid />
      <WorkProcess />
      <Faq />
      <Footer />
    </div>
  );
}
