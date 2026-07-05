import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowUpRight, Bed, UtensilsCrossed, Coffee, Wifi, Mountain, Heart } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import room1 from "../assets/room1.jpg";
import g2 from "../assets/g2.jpg";
import g4 from "../assets/g4.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Pricing — Ayansh Snow-View, Kinnaur | ₹800 per person" },
      {
        name: "description",
        content:
          "Cozy wooden rooms at ₹800 per person with dinner and breakfast included. Traditional Kinnauri accommodation with mountain views. Pine Deluxe, Cedar Twin, and Snow-View Family Suite available.",
      },
      { property: "og:title", content: "Rooms & Pricing — Ayansh Snow-View, Kinnaur" },
      {
        property: "og:description",
        content:
          "Experience authentic Kinnauri hospitality at ₹800/person with meals included. Wooden rooms with stunning Himalayan views.",
      },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const ROOMS = [
  {
    img: room1,
    name: "Pine Deluxe Room",
    desc: "A snug wooden room with a queen bed and a window framing snow peaks. Warm pine interiors with hand-woven blankets create the perfect mountain retreat.",
    features: ["Wooden Interior", "Mountain View", "Cozy Bedding", "Attached Bath"],
  },
  {
    img: g2,
    name: "Cedar Twin Room",
    desc: "Twin beds in a log-lined cabin — warm lamps, wool blankets and pine air. Ideal for friends or solo travelers seeking authentic Kinnauri charm.",
    features: ["Traditional Log Walls", "Twin Beds", "Reading Lamp", "Heated Room"],
  },
  {
    img: g4,
    name: "Snow-View Family Suite",
    desc: "A spacious suite with panoramic windows and a private sitting nook. Perfect for families wanting to wake up to breathtaking Himalayan vistas.",
    features: ["Panoramic Windows", "Family Bedding", "Sitting Area", "Valley Views"],
  },
];

const AMENITIES = [
  { icon: UtensilsCrossed, title: "Home-Cooked Meals", desc: "Traditional Himachali cuisine" },
  { icon: Coffee, title: "Breakfast Included", desc: "Start your day right" },
  { icon: Wifi, title: "Limited WiFi", desc: "Stay connected" },
  { icon: Mountain, title: "Mountain Views", desc: "Wake up to peaks" },
  { icon: Bed, title: "Warm Bedding", desc: "Cozy wool blankets" },
  { icon: Heart, title: "Local Hospitality", desc: "Family-run homestay" },
];

function RoomsPage() {
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
                <Bed className="h-3.5 w-3.5" /> Accommodation
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-6xl">
                Simple wooden rooms. Extraordinary views.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Each room is finished in local Kinnauri pine and opens onto the valley — quiet,
                warm, and honest.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Banner */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal rounded-3xl bg-gradient-to-r from-forest to-pine p-8 text-center text-snow shadow-lift md:p-10">
              <div className="text-sm font-medium uppercase tracking-widest opacity-80">
                All-Inclusive Pricing
              </div>
              <div className="mt-3">
                <span className="text-5xl font-bold md:text-6xl">₹800</span>
                <span className="text-2xl font-medium opacity-80">/person/night</span>
              </div>
              <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm opacity-90 sm:flex-row">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
                  <UtensilsCrossed className="h-4 w-4" /> Dinner Included
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
                  <Coffee className="h-4 w-4" /> Breakfast Included
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
                  <Bed className="h-4 w-4" /> Cozy Stay
                </span>
              </div>
              <p className="mt-4 text-xs opacity-70">
                * Vegetarian home-cooked meals prepared fresh daily with local ingredients
              </p>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              {ROOMS.map((room) => (
                <article
                  key={room.name}
                  className="reveal group overflow-hidden rounded-3xl border border-border/60 bg-snow shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.img}
                      alt={room.name}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full bg-snow/90 px-3 py-1 text-sm font-semibold text-pine backdrop-blur-md">
                      ₹800/person
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-pine">{room.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{room.desc}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {room.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-warm-brown"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-snow transition-all hover:bg-pine"
                    >
                      <MessageCircle className="h-4 w-4" /> Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-pine md:text-4xl">What's Included</h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need for a comfortable mountain stay
              </p>
            </div>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AMENITIES.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-snow p-5 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium text-pine">{a.title}</div>
                    <div className="text-sm text-muted-foreground">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">
              Ready to Book Your Stay?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us on WhatsApp for instant booking confirmation
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:scale-[1.03] hover:bg-pine"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+918920114710"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-snow px-8 py-4 text-sm font-semibold text-pine transition-all hover:bg-cream"
              >
                <Phone className="h-4 w-4" /> +91 89201 14710
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
