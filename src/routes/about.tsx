import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { About, WhyChooseUs, Footer } from "./index";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About | Best Homestay in Yullu Kanda | Ayansh Snow-View",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased pt-20">
      <Navbar />
      <main>
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
