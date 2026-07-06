import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Contact, Footer } from "./index";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | Best Homestay in Yullu Kanda",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased pt-20">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
