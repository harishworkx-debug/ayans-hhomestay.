import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us — Ayansh Snow-View & Trekker's Nest, Yulla Khas",
      },
      {
        name: "description",
        content:
          "Contact Ayansh Snow-View & Trekker's Nest for bookings and enquiries. WhatsApp +91 89201 14710. Located in Village Yulla Khas, Tehsil Nichar, District Kinnaur, Himachal Pradesh 172104.",
      },
      {
        property: "og:title",
        content: "Contact — Book Yulla Khas Homestay",
      },
      {
        property: "og:description",
        content:
          "Book your stay via WhatsApp. We're in Yulla Khas, Kinnaur — the perfect base for Yulla Kanda Trek.",
      },
      {
        property: "og:url",
        content: "/contact",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <MessageCircle className="h-3.5 w-3.5" /> Get in Touch
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          The fastest way to book is WhatsApp. We'll respond quickly with
          availability and help plan your mountain retreat.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Methods */}
          <div className="reveal space-y-6">
            <h2 className="text-2xl font-semibold text-pine md:text-3xl">
              Get in Touch
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We prefer direct communication. Reach out on WhatsApp or call us
              for instant booking assistance.
            </p>

            {/* WhatsApp Card */}
            <div className="overflow-hidden rounded-2xl border border-forest/30 bg-gradient-to-br from-forest/5 to-cream p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-snow">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    Preferred
                  </div>
                  <div className="text-lg font-semibold text-pine">WhatsApp</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Fastest response. Send us your dates and we'll confirm
                availability immediately.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-snow transition-all hover:bg-pine"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-cream/40 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    Primary Contact
                  </div>
                  <a
                    href="tel:+918920114710"
                    className="mt-1 block text-lg font-semibold text-pine hover:text-forest"
                  >
                    +91 89201 14710
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-cream/40 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    Alternative Contact
                  </div>
                  <a
                    href="tel:+919805914020"
                    className="mt-1 block text-lg font-semibold text-pine hover:text-forest"
                  >
                    +91 98059 14020
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-cream/40 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                  Response Time
                </div>
                <div className="mt-1 font-medium text-pine">
                  Usually within a few hours
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  We respond to all messages. Please be patient during trekking
                  season.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="reveal">
            <div className="rounded-3xl border border-border/60 bg-cream/30 p-8">
              <h3 className="text-xl font-semibold text-pine">
                Quick Booking Info
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-pine">Pricing:</span>{" "}
                    ₹800 per person per night (includes stay, dinner, breakfast)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-pine">Payment:</span> Cash
                    only (no card or UPI available)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-pine">Trek Support:</span>{" "}
                    We arrange guides and equipment for Yulla Kanda Trek
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-pine">Best Seasons:</span>{" "}
                    April-November (clearer views, pleasant weather)
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-forest/10 p-5">
                <h4 className="font-semibold text-pine">
                  Pre-filled WhatsApp Message
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  When you click "Chat on WhatsApp", we send a pre-filled
                  message to help you enquire quickly about availability and
                  pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Location
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Find Us
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="reveal">
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-snow p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                  Address
                </div>
                <div className="mt-2 space-y-1 text-[15px] font-medium text-pine">
                  <p>Ayansh Snow-View & Trekker's Nest</p>
                  <p>Village & Post Office Yulla Khas</p>
                  <p>Tehsil Nichar, District Kinnaur</p>
                  <p>Himachal Pradesh — 172104</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-2xl border border-border/60 shadow-lift">
            <iframe
              title="Ayansh Snow-View location on Google Maps"
              src="https://www.google.com/maps?q=Yulla+Khas,+Kinnaur,+Himachal+Pradesh+172104&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[250px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-pine text-snow/85">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="text-sm">
          © 2026 Ayansh Snow-View & Trekker's Nest. All Rights Reserved.
        </div>
        <div className="text-xs text-snow/60">
          Village Yulla Khas, Kinnaur, Himachal Pradesh — 172104
        </div>
      </div>
    </footer>
  );
}
