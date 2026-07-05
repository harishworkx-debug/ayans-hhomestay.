import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-snow shadow-lift transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-70 animate-ping" />
      <MessageCircle className="relative h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
}
