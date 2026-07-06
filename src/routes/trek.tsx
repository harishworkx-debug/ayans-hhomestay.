import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { YullaTrek, Experiences, Footer } from "./index";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/trek")({
  head: () => ({
    meta: [
      {
        title: "Yullu Kanda Trek | Best Homestay in Yullu Kanda",
      },
    ],
  }),
  component: TrekPage,
});

function TrekPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased pt-20">
      <Navbar />
      <main>
        <YullaTrek />
        <Experiences />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
