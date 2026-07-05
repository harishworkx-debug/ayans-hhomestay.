import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ayansh Snow-View & Trekker's Nest, Kinnaur" },
      {
        name: "description",
        content:
          "Contact Ayansh Snow-View homestay in Yulla Khas, Kinnaur. Book via WhatsApp or phone. Address: Village & PO Yulla Khas, Tehsil Nichar, Kinnaur, Himachal Pradesh — 172104.",
      },
      { property: "og:title", content: "Contact Ayansh Snow-View, Kinnaur" },
      {
        property: "og:description",
        content:
          "Reach us on WhatsApp or phone for bookings. Located in Yulla Khas, Kinnaur — the perfect base for Yulla Kanda Trek.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "Ayansh Snow-View & Trekker's Nest",
      "Village & Post Office Yulla Khas",
      "Tehsil Nichar, District Kinnaur",
      "Himachal Pradesh — 172104",
    ],
  },
  {
    icon: Phone,
    title: "Primary Contact",
    lines: ["+91 89201 14710"],
    href: "tel:+918920114710",
  },
  {
    icon: Phone,
    title: "Alternative Contact",
    lines: ["+91 98059 14020"],
    href: "tel:+919805914020",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Chat with us for instant booking"],
    href: WHATSAPP_URL,
    external: true,
  },
];

const FAQS = [
  {
    q: "How do I reach the homestay?",
    a: "The homestay is 1-2 km trek from Bustan village. From Shimla, take a bus or taxi to Reckong Peo, then local transport to Bustan. We'll send detailed directions when you book.",
  },
  {
    q: "What is the room rate?",
    a: "₹800 per person per night, including dinner and breakfast. Home-cooked vegetarian meals are served fresh daily.",
  },
  {
    q: "Can you arrange the Yulla Kanda Trek?",
    a: "Yes! We provide local guides, camping equipment (tents, sleeping bags), and can arrange everything for your 12,000 ft summit trek.",
  },
  {
    q: "What's the best time to visit?",
    a: "April to June for pleasant weather, and September to November for clear mountain views. The Yulla Kanda trek is best from May to October.",
  },
];

function ContactPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/60 to-snow" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
                <MessageCircle className="h-3.5 w-3.5" /> Contact
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-6xl">
                Come and stay with us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Reach out on WhatsApp or give us a call — we'll help you plan travel, meals, and
                the trek.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="reveal grid gap-4 md:grid-cols-2">
              {CONTACT_INFO.map((info) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-cream/40 p-6 transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                        {info.title}
                      </div>
                      {info.lines.map((l) => (
                        <div key={l} className="mt-1 text-[15px] leading-snug text-pine">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.external ? "_blank" : undefined}
                    rel={info.external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Big WhatsApp CTA */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal rounded-3xl bg-gradient-to-r from-forest to-pine p-8 text-center text-snow shadow-lift md:p-10">
              <MessageCircle className="mx-auto h-12 w-12 opacity-80" />
              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Instant Booking on WhatsApp
              </h2>
              <p className="mt-3 text-sm opacity-80">
                Send us a message and we'll confirm your booking within minutes
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-3.5 text-sm font-semibold text-pine shadow-soft transition-all hover:scale-[1.03] hover:bg-cream"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="reveal">
              <h3 className="mb-4 text-xl font-semibold text-pine">Find Us on Map</h3>
              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-lift">
                <iframe
                  title="Ayansh Snow-View location on Google Maps"
                  src="https://www.google.com/maps?q=Yulla+Khas,+Kinnaur,+Himachal+Pradesh+172104&output=embed"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[350px] w-full border-0 md:h-[420px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal text-center">
              <h2 className="text-3xl font-semibold text-pine md:text-4xl">Frequently Asked</h2>
            </div>
            <div className="reveal mt-10 space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border/60 bg-snow p-5 transition-all open:bg-cream"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-pine [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-forest transition-transform group-open:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Clock className="mx-auto h-8 w-8 text-moss" />
            <h3 className="mt-3 text-lg font-semibold text-pine">Response Time</h3>
            <p className="mt-2 text-muted-foreground">
              We typically respond within <strong className="text-pine">2-4 hours</strong> on
              WhatsApp. For urgent calls, reach us anytime on our phone numbers.
            </p>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
