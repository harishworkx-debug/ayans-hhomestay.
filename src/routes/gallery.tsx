import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Gallery, Footer } from "./index";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery | Best Homestay in Yullu Kanda",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased pt-20">
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
