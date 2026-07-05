import { createFileRoute } from "@tanstack/react-router";
import {
  Mountain,
  Church,
  Trees,
  Flower2,
  Sunrise,
  Flame,
  Route as RouteIcon,
  Gauge,
  Ruler,
  MapPin,
  Compass,
  Calendar,
  MessageCircle,
  Tent,
  Snowflake,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/trek")({
  head: () => ({
    meta: [
      {
        title: "Yulla Kanda Trek — Sacred Yulla Lake & Highest Krishna Temple | 12,000+ Feet",
      },
      {
        name: "description",
        content:
          "Complete guide to the Yulla Kanda Trek in Kinnaur. Reach the sacred Yulla Lake and world's highest Krishna temple at 12,000+ feet. 12 km moderate trek through oak forests and alpine meadows.",
      },
      {
        property: "og:title",
        content: "Yulla Kanda Trek — Sacred Lake & Highest Krishna Temple",
      },
      {
        property: "og:description",
        content:
          "Trek to the world's highest Krishna temple and sacred Yulla Lake. 12 km trail through stunning Himalayan landscapes. Perfect base camp at Ayansh Snow-View.",
      },
      {
        property: "og:url",
        content: "/trek",
      },
    ],
    links: [{ rel: "canonical", href: "/trek" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: "Yulla Kanda Trek",
          description:
            "A 12 km trek to the world's highest Krishna temple and sacred Yulla Lake at approximately 12,000+ feet in Kinnaur, Himachal Pradesh.",
          touristType: ["Adventure Travelers", "Pilgrims", "Nature Lovers"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Yulla Khas",
            addressRegion: "Kinnaur, Himachal Pradesh",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How high is Yulla Kanda?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yulla Kanda reaches approximately 12,000+ feet (approximately 3,900 metres) above sea level.",
              },
            },
            {
              "@type": "Question",
              name: "How long is the Yulla Kanda Trek?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The trek is approximately 12 km one way from Yulla village to the summit.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: TrekPage,
});

function TrekPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <TrekHero />
        <TrekOverview />
        <TrekHighlights />
        <TrekJourney />
        <BestTimeSection />
        <WhatWeProvide />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function TrekHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="/src/assets/trek.jpg"
          alt="Yulla Kanda Trek trail with snow peaks"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/85 via-pine/50 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Mountain className="h-3.5 w-3.5" /> Signature Experience
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          The Yulla Kanda Trek
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          A pilgrimage through oak forests, alpine meadows, and prayer flags to
          the world's highest Krishna temple and the sacred Yulla Lake.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">
              Altitude
            </span>
            <div className="font-semibold">12,000+ Feet</div>
          </div>
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">
              Distance
            </span>
            <div className="font-semibold">12 KM Trek</div>
          </div>
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">
              Difficulty
            </span>
            <div className="font-semibold">Moderate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TREK_STATS = [
  { icon: MapPin, label: "Starting Point", value: "Yulla Village" },
  { icon: Ruler, label: "Total Distance", value: "12 KM One Way" },
  { icon: Gauge, label: "Difficulty Level", value: "Moderate" },
  { icon: Mountain, label: "Maximum Altitude", value: "Approximately 12,000+ Feet" },
];

function TrekOverview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Trek Overview
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            A sacred journey to the roof of Kinnaur
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            The Yulla Kanda Trek is one of Himachal's most spiritually
            significant and visually stunning trails. Starting from Yulla
            village, this trek takes you through dense forests, open meadows,
            and ancient pilgrimage routes to reach the world's highest Krishna
            temple and the sacred Yulla Lake.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TREK_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                {stat.label}
              </div>
              <div className="mt-2 text-xl font-semibold text-pine">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TREK_HIGHLIGHTS = [
  {
    icon: Church,
    title: "World's Highest Krishna Temple",
    desc: "Standing at approximately 12,000+ feet, the Yulla Kanda temple is believed to be the highest Lord Krishna temple in the world. A sacred pilgrimage site visited during Janmashtami.",
  },
  {
    icon: Flame,
    title: "Sacred Yulla Lake",
    desc: "A pristine glacial lake at the summit, considered holy by locals. The crystal-clear waters reflect the surrounding snow peaks.",
  },
  {
    icon: Trees,
    title: "Dense Oak & Pine Forests",
    desc: "The trail winds through ancient oak and pine forests, home to diverse Himalayan bird species and wildlife.",
  },
  {
    icon: Flower2,
    title: "Alpine Meadows in Bloom",
    desc: "During summer months, the meadows burst with wildflowers — a carpet of colors against snow-capped backdrops.",
  },
  {
    icon: Sunrise,
    title: "Sunrise Above the Clouds",
    desc: "Witness breathtaking sunrises where golden light floods the valley below while you stand above the cloud line.",
  },
  {
    icon: Flame,
    title: "Janmashtami Festival",
    desc: "Every August, pilgrims trek to the temple for Janmashtami celebrations. A once-in-a-lifetime cultural experience.",
  },
];

function TrekHighlights() {
  return (
    <section className="relative bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Trail Highlights
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            What makes this trek unforgettable
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREK_HIGHLIGHTS.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
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

const TREK_JOURNEY = [
  {
    title: "Start at Ayansh Snow-View",
    desc: "Begin your journey from our homestay with a warm breakfast and local guide briefing. We're perfectly positioned as your base camp.",
    time: "Early Morning",
  },
  {
    title: "Trek Through Oak Forests",
    desc: "The trail starts with a gradual climb through dense oak and pine forests. Listen for bird calls and enjoy the fresh mountain air.",
    time: "First 3-4 Hours",
  },
  {
    title: "Alpine Meadows",
    desc: "Break through the treeline into open meadows with panoramic views. Perfect spot for a short rest and photos.",
    time: "Mid-Morning",
  },
  {
    title: "Sacred Yulla Lake",
    desc: "Arrive at the pristine glacial lake. Take time to absorb the spiritual energy and breathtaking scenery.",
    time: "Midway Point",
  },
  {
    title: "World's Highest Krishna Temple",
    desc: "The final ascent leads to the sacred temple at approximately 12,000+ feet. A moment of profound peace and accomplishment.",
    time: "Summit",
  },
  {
    title: "Return Journey",
    desc: "Descend comfortably with your guide, stopping for休息 and refreshments. Most trekkers complete the round trip in one day.",
    time: "Afternoon",
  },
];

function TrekJourney() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            The Journey
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Your trek day, moment by moment
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-forest/20 md:left-1/2" />

          {TREK_JOURNEY.map((step, i) => (
            <div
              key={step.title}
              className={`reveal relative mb-12 flex items-start gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:gap-12`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border-4 border-forest bg-snow font-bold text-forest md:h-20 md:w-20">
                {i + 1}
              </div>

              {/* Content */}
              <div
                className={`flex-1 rounded-2xl border border-border/60 bg-cream/40 p-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                  {step.time}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-pine">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BEST_TIME = [
  {
    month: "April - June",
    condition: "Spring & Early Summer",
    desc: "Perfect trekking weather with blooming rhododendrons and clear skies. Temperatures range from 10-20°C.",
  },
  {
    month: "July - August",
    condition: "Monsoon & Festival",
    desc: "Lush green landscapes and the Janmashtami pilgrimage. Expect some rain but unique cultural experiences.",
  },
  {
    month: "September - November",
    condition: "Autumn",
    desc: "Post-monsoon clarity offers the best mountain views. Crisp air, stable weather, and harvest season.",
  },
  {
    month: "December - March",
    condition: "Winter",
    desc: "Snow-covered trails create a winter wonderland. Advanced level trekking only with proper gear.",
  },
];

function BestTimeSection() {
  return (
    <section className="bg-cream/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Best Time to Visit
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            When to plan your Yulla Kanda adventure
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Each season offers a unique experience. Choose what suits your
            preferences and trekking experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BEST_TIME.map((item, i) => (
            <div
              key={item.month}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                {item.month}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-pine">
                {item.condition}
              </h3>
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

const WE_PROVIDE = [
  { icon: Compass, title: "Experienced Local Guides", desc: "Born and raised in Yulla, our guides know every trail, weather pattern, and hidden spot." },
  { icon: Tent, title: "Camping Equipment", desc: "Tents, sleeping bags, and all necessary camping gear for overnight stays on the mountain." },
  { icon: Mountain, title: "Trail Support", desc: "We handle logistics so you can focus on the experience. Packed meals, safety gear, and more." },
  { icon: Snowflake, title: "Weather Guidance", desc: "We monitor conditions and advise on the best days to trek. Safety first, always." },
];

function WhatWeProvide() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            What We Provide
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Your trek support, sorted
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            We're not just a homestay — we're your complete trek base camp with
            everything you need for a successful Yulla Kanda experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WE_PROVIDE.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-cream/40 p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-forest text-snow">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
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

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Ready to trek to the world's highest Krishna temple?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          We'll help you plan every step — from arrival to summit and back.
          Book your base camp stay today.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
        >
          <MessageCircle className="h-5 w-5" />
          Book Your Trek Base Camp
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
