import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Rooms, Footer } from "./index";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      {
        title: "Rooms | Best Homestay in Yullu Kanda | Ayansh Snow-View",
      },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased pt-20">
      <Navbar />
      <main>
        <Rooms />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
