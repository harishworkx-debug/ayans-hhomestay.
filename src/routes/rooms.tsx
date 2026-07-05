import { createFileRoute } from "@tanstack/react-router";
import {
  Bed,
  UtensilsCrossed,
  Coffee,
  MessageCircle,
  Check,
  Home,
  Users,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      {
        title: "Rooms & Pricing — Ayansh Snow-View, Yulla Khas | ₹800 Per Person",
      },
      {
        name: "description",
        content:
          "Comfortable wooden rooms in Kinnaur at ₹800 per person including dinner and breakfast. Simple, affordable, and perfect for trekkers, families, and nature lovers exploring Yulla Kanda.",
      },
      {
        property: "og:title",
        content: "Rooms & Pricing — ₹800 Per Person | Yulla Khas Homestay",
      },
      {
        property: "og:description",
        content:
          "Traditional wooden rooms with mountain views. ₹800 per person includes stay, dinner, and breakfast. Perfect base for Yulla Kanda Trek.",
      },
      {
        property: "og:url",
        content: "/rooms",
      },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Ayansh Snow-View & Trekker's Nest",
          description:
            "Traditional Kinnauri wooden homestay in Yulla Khas, Kinnaur offering comfortable rooms with meals included.",
          priceRange: "₹800",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Village & P.O. Yulla Khas, Tehsil Nichar",
            addressLocality: "Kinnaur",
            addressRegion: "Himachal Pradesh",
            postalCode: "172104",
            addressCountry: "IN",
          },
          telephone: "+91 8920114710",
          amenityFeature: [
            { name: "Meals Included", value: true },
            { name: "Mountain Views", value: true },
            { name: "Trek Guide Support", value: true },
          ],
        }),
      },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <RoomsHero />
        <PricingSection />
        <WhatsIncluded />
        <RoomsGrid />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Home className="h-3.5 w-3.5" /> Accommodation
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Rooms & Pricing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Simple wooden rooms with honest pricing. Stay, dinner, and breakfast
          — all included for one transparent price.
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mx-auto max-w-xl">
          {/* Main Pricing Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-forest/20 bg-gradient-to-br from-cream to-snow p-10 shadow-lift text-center md:p-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
              <Star className="h-3.5 w-3.5" /> All-Inclusive Pricing
            </span>

            <div className="mt-4">
              <span className="text-6xl font-bold text-pine md:text-7xl">₹800</span>
              <span className="ml-2 text-xl text-muted-foreground md:text-2xl">
                Per Person
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Per night, inclusive of all meals
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-left">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-medium text-pine">
                  Comfortable Stay in Wooden Rooms
                </span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-medium text-pine">
                  Hot Dinner (Home-Cooked)
                </span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-medium text-pine">
                  Breakfast Included
                </span>
              </div>
            </div>

            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Simple, affordable, and perfect for trekkers, backpackers,
              families, and nature lovers exploring the Yulla Kanda region.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:bg-pine"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsIncluded() {
  const INCLUDES = [
    {
      icon: Bed,
      title: "Comfortable Wooden Rooms",
      desc: "Traditional Kinnauri architecture with warm pine interiors, cozy bedding, and authentic village charm.",
    },
    {
      icon: UtensilsCrossed,
      title: "Home-Cooked Dinner",
      desc: "Freshly prepared Himachali meals using local ingredients. Rajma, rice, seasonal vegetables, and more.",
    },
    {
      icon: Coffee,
      title: "Morning Breakfast",
      desc: "Start your trek day with a hearty breakfast — parathas, tea, and local specialties.",
    },
  ];

  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            What's Included
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Everything you need for a mountain retreat.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            No hidden costs. No surprises. Just honest hospitality with
            everything included.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {INCLUDES.map((item) => (
            <div
              key={item.title}
              className="reveal group rounded-3xl border border-border/60 bg-snow p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-forest text-snow">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-pine">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ROOMS = [
  {
    img: "/src/assets/room1.jpg",
    name: "Pine Deluxe Room",
    desc: "A snug wooden room with a queen bed and a window framing snow peaks.",
    features: ["Wooden Interior", "Mountain View", "Cozy Bedding", "Warm Lighting"],
  },
  {
    img: "/src/assets/room2.jpg",
    name: "Cedar Twin Room",
    desc: "Twin beds in a log-lined cabin — warm lamps, wool blankets and pine air.",
    features: ["Traditional Log Walls", "Twin Beds", "Reading Lamp", "Village View"],
  },
  {
    img: "/src/assets/room3.jpg",
    name: "Snow-View Family Suite",
    desc: "A spacious suite with panoramic windows and a private sitting nook.",
    features: ["Panoramic Windows", "Family Bedding", "Sitting Area", "Valley View"],
  },
];

function RoomsGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Rooms
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Traditional wooden rooms. Extraordinary views.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Each room is finished in local Kinnauri pine and set to open onto
            the valley — quiet, warm, and honest.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-pine">{room.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {room.desc}
                </p>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "What is included in ₹800 per person?",
    a: "The ₹800 per person per night includes your stay in a comfortable wooden room, dinner, and breakfast. No hidden charges.",
  },
  {
    q: "Is the pricing per person or per room?",
    a: "Our pricing is per person, making it simple and transparent. This includes accommodation and all meals.",
  },
  {
    q: "Can I book just the room without meals?",
    a: "We believe meals are an essential part of the homestay experience. Our pricing includes food to ensure you have authentic, home-cooked meals during your stay.",
  },
  {
    q: "What food is served for dinner and breakfast?",
    a: "We serve traditional Himachali and North Indian cuisine — rajma-chawal, seasonal vegetables, dal, rice, rotis, and for breakfast: parathas, tea, and local specialties.",
  },
];

function FAQSection() {
  return (
    <section className="bg-cream/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Pricing FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Common questions about our pricing
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              className="reveal group overflow-hidden rounded-2xl border border-border/60 bg-snow"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-pine transition-colors hover:bg-cream/50">
                {item.q}
                <span className="ml-4 shrink-0 text-forest">+</span>
              </summary>
              <div className="border-t border-border/40 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Ready to book your mountain retreat?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          Book now on WhatsApp and we'll confirm availability for your dates.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
        >
          <MessageCircle className="h-5 w-5" />
          Book on WhatsApp — ₹800 Per Person
        </a>
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
