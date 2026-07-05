import { createFileRoute } from "@tanstack/react-router";
import { Info, Trees, Mountain, Wifi, Zap, Phone, CreditCard, TriangleAlert as AlertTriangle, Thermometer, Shield, Backpack, MessageCircle, Sun } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/know-before-you-visit")({
  head: () => ({
    meta: [
      {
        title: "Know Before You Visit — Ayansh Snow-View, Yulla Khas",
      },
      {
        name: "description",
        content:
          "Essential information before visiting Ayansh Snow-View & Trekker's Nest in Yulla Khas, Kinnaur. Learn about the scenic walk from Bustan, weather, connectivity, and what to expect.",
      },
      {
        property: "og:title",
        content: "Know Before You Visit — Yulla Khas Homestay Guide",
      },
      {
        property: "og:description",
        content:
          "Important travel information about our remote Himalayan homestay including the scenic walk, weather conditions, and practical tips.",
      },
      {
        property: "og:url",
        content: "/know-before-you-visit",
      },
    ],
    links: [{ rel: "canonical", href: "/know-before-you-visit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How far is Ayansh Snow-View from Bustan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ayansh Snow-View is approximately 1-2 km from Bustan village. Guests enjoy a scenic walk through pine forests and traditional Kinnauri landscape to reach the homestay. This final walk is part of the authentic mountain experience.",
              },
            },
            {
              "@type": "Question",
              name: "Is the walk to the homestay difficult?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The walk is moderate and takes approximately 30-45 minutes at a comfortable pace. The trail is well-marked and used daily by locals. Most guests find it enjoyable and rewarding with stunning views at every turn.",
              },
            },
            {
              "@type": "Question",
              name: "What should I carry for the walk to the homestay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend comfortable walking shoes, a small backpack with essentials, and weather-appropriate clothing. Heavier luggage can be arranged to be carried separately if needed.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: KnowBeforeYouVisitPage,
});

function KnowBeforeYouVisitPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <WalkSection />
        <EssentialInfo />
        <WhatToBring />
        <WeatherInfo />
        <SafetyInfo />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Info className="h-3.5 w-3.5" /> Essential Information
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Know Before You Visit
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Important details to help you prepare for an authentic Himalayan
          homestay experience. What to expect, what to bring, and what we offer.
        </p>
      </div>
    </section>
  );
}

function WalkSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal overflow-hidden rounded-3xl border-2 border-forest/30 bg-gradient-to-br from-forest/5 to-cream p-8 shadow-lift md:p-12">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-snow">
              <Trees className="h-6 w-6" />
            </span>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                Important
              </span>
              <h2 className="text-2xl font-semibold text-pine md:text-3xl">
                A Scenic Walk Awaits You
              </h2>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">
            <strong className="text-pine">
              Ayansh Snow-View & Trekker's Nest is located approximately 1-2 km
              on a beautiful walking trail from Bustan village.
            </strong>{" "}
            This is intentional — our location ensures complete peace,
            authentic village atmosphere, and stunning uninterrupted mountain
            views that you simply cannot find along motorable roads.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-snow p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-snow">
                <Sun className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">
                  Part of the Experience
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  This short walk is not a disadvantage — it's the beginning of
                  your retreat. Leave the traffic behind, breathe fresh Himalayan
                  air, and transition into mountain life as you walk through pine
                  forests and traditional Kinnauri paths.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-snow p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-snow">
                <Mountain className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">
                  Breathtaking Views at Every Turn
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The trail offers stunning glimpses of snow peaks, apple
                  orchards, and traditional Kinnauri architecture. Most guests
                  tell us this walk became one of their favorite memories.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-snow p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-snow">
                <Backpack className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">Easy & Worth It</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The well-marked trail takes approximately 30-45 minutes at a
                  comfortable pace. We can arrange assistance for heavier luggage
                  if needed. Wear comfortable shoes and carry a light jacket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ESSENTIAL_INFO = [
  {
    icon: Phone,
    title: "Limited Mobile Network",
    desc: "Mobile connectivity is limited in this remote region. Jio sometimes works, but don't expect reliable signal. This is part of the retreat experience — disconnect to reconnect.",
  },
  {
    icon: Wifi,
    title: "No WiFi",
    desc: "We intentionally do not have WiFi. This is your chance to truly unplug. The mountains, stars, and conversations with fellow travelers offer better entertainment.",
  },
  {
    icon: Zap,
    title: "Electricity Availability",
    desc: "Electricity is available but can be intermittent in this remote region. We have backup arrangements. Carrying a power bank is recommended for your devices.",
  },
  {
    icon: CreditCard,
    title: "Cash Only",
    desc: "We operate in a remote village with no card payment facilities. Please carry sufficient cash for your stay. The nearest ATM is in Tapri or Reckong Peo.",
  },
];

function EssentialInfo() {
  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            What to Expect
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Essential information about your stay
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            We're a remote, authentic Himalayan homestay. Here's what that means
            in practical terms.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ESSENTIAL_INFO.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHAT_TO_BRING = [
  {
    category: "Essential Clothing",
    items: [
      "Warm jacket (temperatures drop in evenings)",
      "Comfortable trekking shoes with good grip",
      "Rain jacket (especially during monsoon)",
      "Layered clothing options",
    ],
  },
  {
    category: "Personal Items",
    items: [
      "Power bank for devices",
      "Headlamp or torch",
      "Sunscreen and sunglasses",
      "Personal medications",
    ],
  },
  {
    category: "For the Walk",
    items: [
      "Small comfortable backpack",
      "Water bottle",
      "Light snacks for the journey",
      "Camera for the views",
    ],
  },
  {
    category: "Other Suggestions",
    items: [
      "Board games or cards for evenings",
      "Books for peaceful reading",
      "Notebook for journaling",
      "Cash for payments (₹800 per person)",
    ],
  },
];

function WhatToBring() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Preparation
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            What to bring with you
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Pack smart for your mountain retreat. Here's what we recommend.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_TO_BRING.map((group) => (
            <div
              key={group.category}
              className="reveal rounded-2xl border border-border/60 bg-cream/40 p-6"
            >
              <h3 className="font-semibold text-pine">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WEATHER_DATA = [
  {
    season: "Spring (March - May)",
    temp: "10-18°C",
    desc: "Pleasant days, cool nights. Perfect for trekking. Light woolens needed.",
  },
  {
    season: "Summer (June - August)",
    temp: "15-25°C",
    desc: "Warm days, occasional rain. Ideal trekking weather. Light rain gear recommended.",
  },
  {
    season: "Autumn (September - November)",
    temp: "8-20°C",
    desc: "Clear skies, crisp air. Best mountain views. Layers recommended.",
  },
  {
    season: "Winter (December - February)",
    temp: "-5 to 10°C",
    desc: "Cold with snow. Advanced trekking conditions only. Heavy woolens essential.",
  },
];

function WeatherInfo() {
  return (
    <section className="bg-cream/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Weather & Seasons
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Weather throughout the year
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Kinnaur's weather is generally pleasant with distinct seasons.
            Here's what to expect.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WEATHER_DATA.map((item) => (
            <div
              key={item.season}
              className="reveal flex items-start gap-6 rounded-2xl border border-border/60 bg-snow p-6 shadow-soft"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <Thermometer className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">{item.season}</h3>
                <p className="mt-1 text-sm font-medium text-forest">
                  {item.temp}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SAFETY_ITEMS = [
  {
    icon: Shield,
    title: "Safe Location",
    desc: "Yulla Khas is extremely safe with a close-knit community. Crime is virtually non-existent. Families and solo travelers feel completely secure here.",
  },
  {
    icon: MessageCircle,
    title: "Local Support",
    desc: "We're always available for guidance and assistance. Ask us about trail conditions, local customs, or any concerns you might have.",
  },
  {
    icon: AlertTriangle,
    title: "Trek Safety",
    desc: "For the Yulla Kanda trek, we provide experienced local guides who know the terrain intimately. Never trek alone without informing us.",
  },
];

function SafetyInfo() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Safety & Support
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Your safety is our priority
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-cream/40 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest text-snow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
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
          Have more questions before you visit?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          We're happy to answer any questions about your stay. Reach out on
          WhatsApp and we'll help you prepare.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
        >
          <MessageCircle className="h-5 w-5" />
          Ask Us on WhatsApp
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
