import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/content";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.cta}
          alt="Snow peaks at twilight near Yulla Kanda in Kinnaur"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/85 via-pine/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="reveal max-w-2xl text-snow">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Ready for your Himalayan adventure?
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-snow/85">
            Book your stay today and experience the quiet beauty of Kinnaur — wooden rooms, warm
            meals, snow peaks and the trail to Yulla Kanda.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SITE };
