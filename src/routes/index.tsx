import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Mountain,
  ChevronDown,
  Bed,
  UtensilsCrossed,
  Snowflake,
  HeartHandshake,
  Compass,
  Tent,
  Trees,
  MapPin,
  Phone,
  Flame,
  Sunrise,
  Camera,
  Church,
  Flower2,
  Route as RouteIcon,
  Gauge,
  Ruler,
  ArrowUpRight,
  Instagram,
  Facebook,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import heroo from "../assets/heroo.png";
import Aboutt from "../assets/about.png"

import hero from "../assets/hero.jpg";
import about from "../assets/about.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import trek from "../assets/trek.jpg";
import cta from "../assets/cta.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";

import moment from '@/assets/moments.jpg'
import moment1 from '@/assets/moments1.jpg'
import moment2 from '@/assets/moments2.jpg'
import moment3 from '@/assets/moments3.jpg'
import moment4 from '@/assets/moments4.jpg'
import moment5 from '@/assets/moments5.jpg'
import moment6 from '@/assets/moments6.jpg'
import moment7 from '@/assets/moments7.jpg'
import moment8 from '@/assets/moments8.jpg'
import moment9 from '@/assets/moments9.jpg'
import moment10 from '@/assets/moments10.jpg'
import moment11 from '@/assets/moments11.jpg'
import moment12 from '@/assets/moments12.jpg'





export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Best Homestay in Yullu Kanda | Ayansh Snow-View Trekker's Nest",
      },
      {
        name: "description",
        content:
          "Looking for the best homestay in Yullu Kanda? Ayansh Snow-View offers authentic wooden rooms, home-cooked meals, and serves as the perfect base camp for the Yullu Kanda Trek at 12,000 ft.",
      },
      {
        property: "og:title",
        content: "Best Homestay for Yulla Kanda Trek | Ayansh Snow-View — Kinnaur",
      },
      {
        property: "og:description",
        content:
          "Plan your Yulla Kanda Trek with us! Closest homestay to the sacred 12,000 ft Krishna temple. Traditional Kinnauri stay with home-cooked meals at Rs.800/person. Adventure begins with a scenic walk from Bustan.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Ayansh Snow-View - Best Homestay in Yullu Kanda",
          description:
            "Recognized as the best homestay in Yullu Kanda. Traditional Kinnauri wooden homestay near Bustan. Scenic 1-2 km forest walk to reach us. Rs.800/person with dinner and breakfast.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Village & P.O. Yulla Khas, 1-2 km trek from Bustan",
            addressLocality: "Kinnaur",
            addressRegion: "Himachal Pradesh",
            postalCode: "172104",
            addressCountry: "IN",
          },
          telephone: "+91 9805914020",
          priceRange: "₹800 per person (with meals)",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Best Homestay in Yullu Kanda", value: true },
            { "@type": "LocationFeatureSpecification", name: "Yullu Kanda Trek Base Camp", value: true },
            { "@type": "LocationFeatureSpecification", name: "Scenic Forest Walk Access", value: true },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

export function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Rooms />
        <YullaTrek />
        <Experiences />
        <Gallery />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* -------------------------------------------------------------- HERO */

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroo}
          alt="Snow-capped Himalayan peaks and pine forest in Kinnaur"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* drifting clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-[18%] h-40 w-[40%] rounded-full bg-white/15 blur-3xl animate-drift-slower" />
        <div className="absolute left-0 top-[42%] h-24 w-[30%] rounded-full bg-white/10 blur-3xl animate-drift-slow" />
      </div>

      {/* subtle particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-white/60 animate-float"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center text-snow md:pt-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Mountain className="h-3.5 w-3.5" /> Base Camp for Yulla Kanda (12,000 ft)
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[84px]">
          Best Homestay in <em className="not-italic font-light italic text-sky-soft">Yullu Kanda</em>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Welcome to Ayansh Snow-View Trekker's Nest — recognized as the best homestay in Yullu Kanda. Your perfect base camp for the 12,000 ft Yullu Kanda Trek, offering traditional Kinnauri warmth and home-cooked meals at just Rs.800/person.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-snow px-7 py-3.5 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#trek"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            Explore the Trek
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-snow/80"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/70 p-1">
          <span className="block h-2 w-1 rounded-full bg-white animate-mouse-scroll" />
        </div>
        <ChevronDown className="mx-auto mt-2 h-4 w-4 opacity-70" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------- ABOUT */

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-cream md:h-40 md:w-40" />
          <img
            src={Aboutt}
            alt="Traditional wooden Kinnauri architecture at Ayansh Snow-View"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-6 py-5 text-snow shadow-lift md:block">
            <div className="text-3xl font-semibold">12,000 ft</div>
            <div className="text-xs uppercase tracking-widest opacity-80">
              Yulla Kanda Summit
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Story
          </span>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-pine md:text-5xl">
            A quiet corner of Kinnaur, built in wood and warmth.
          </h2>
          <div className="mt-8 space-y-5 text-[15.5px] leading-[1.85] text-foreground/75">
            <p>
              <span className="font-semibold text-pine">
                Ayansh Snow-View & Trekker's Nest
              </span>{" "}
              is an offbeat homestay situated in Village Yulla Khas, deep in
              the mountains of Kinnaur. Built entirely in the traditional
              wooden Kinnauri style, our home has stood quietly amidst pine
              forests and snow peaks for generations.
            </p>
            <p>
              We offer peaceful accommodation, delicious home-cooked meals and
              breathtaking Himalayan views — and we serve as the starting
              point for the famous Yulla Kanda Trek, home to the highest
              Krishna temple in the world.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "12+", l: "Years hosting" },
              { n: "12,000 ft", l: "Yulla Kanda" },
              { n: "Rs.800", l: "Per person/night" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border/70 bg-cream/40 p-4 text-center">
                <div className="text-2xl font-semibold text-forest">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* Important Access Info */}
          <div className="mt-8 rounded-2xl border-2 border-moss/30 bg-moss/5 p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <RouteIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">Adventure Begins with a Forest Walk</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Our homestay is located <strong>1-2 km from Bustan</strong> via a scenic trek
                  through pine forests. This beautiful walk is part of the experience —
                  arrive prepared for a short adventure and immerse yourself in nature
                  from the moment you step off the road. Porters and mule support available
                  for luggage on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- WHY CHOOSE */

const WHY = [
  { icon: Bed, t: "Comfortable Wooden Rooms", d: "Cozy rooms clad in warm pine with hand-woven blankets." },
  { icon: UtensilsCrossed, t: "Home Cooked Food", d: "Traditional Himachali meals prepared with garden herbs." },
  { icon: Snowflake, t: "Snow Mountain Views", d: "Wake up to sweeping views of the Kinnaur Kailash range." },
  { icon: HeartHandshake, t: "Local Hospitality", d: "A family that treats every guest as one of their own." },
  { icon: Compass, t: "Trekking Guide Support", d: "Experienced local guides for Yulla Kanda and beyond." },
  { icon: Tent, t: "Camping Equipment", d: "Tents, sleeping bags and gear for high-altitude nights." },
  { icon: Trees, t: "Peaceful Village Life", d: "Slow mornings, apple orchards and starlit skies." },
];

function WhyChooseUs() {
  return (
    <section className="relative bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Why choose us
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
            Small things that make the mountains feel like home.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY.map((w, i) => (
            <div
              key={w.t}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {w.d}
              </p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-moss/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- ROOMS */

const ROOMS = [
  {
    img: room1,
    name: "Pine Deluxe Room",
    desc: "A snug wooden room with a queen bed and a window framing snow peaks.",
    features: ["Wooden Interior", "Mountain View", "Cozy Bedding"],
  },
  {
    img: room2,
    name: "Cedar Twin Room",
    desc: "Twin beds in a log-lined cabin — warm lamps, wool blankets and pine air.",
    features: ["Traditional Log Walls", "Twin Beds", "Reading Lamp"],
  },
  {
    img: room3,
    name: "Snow-View Family Suite",
    desc: "A spacious suite with panoramic windows and a private sitting nook.",
    features: ["Panoramic Windows", "Family Bedding", "Sitting Area"],
  },
];

function Rooms() {
  return (
    <section id="rooms" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Rooms
            </span>
            <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
              Simple wooden rooms. Extraordinary views.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Each room is finished in local Kinnauri pine and set to open onto
              the valley — quiet, warm and honest.
            </p>
            <div className="flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-sm font-semibold text-forest">
              <Bed className="h-4 w-4" />
              Rs.800 per person/night (with dinner & breakfast)
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="reveal mt-8 rounded-2xl border-2 border-forest/20 bg-gradient-to-r from-forest/5 to-moss/5 p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-pine">All-Inclusive Pricing</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <strong className="text-forest">Rs.800 per person per night</strong> includes
                  comfortable stay, traditional dinner, and hot breakfast. No hidden charges.
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-forest">Rs.800</div>
                <div className="text-xs text-muted-foreground">Per Person/Night</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((r) => (
            <article
              key={r.name}
              className="reveal group overflow-hidden rounded-3xl border border-border/60 bg-snow shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-snow/95 px-3 py-1.5 text-xs font-semibold text-forest shadow-soft">
                  Rs.800/person
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-pine">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {r.features.map((f) => (
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
                  <MessageCircle className="h-4 w-4" /> Book Now — Rs.800/person
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- YULLA TREK */

const TREK_STEPS = [
  { icon: MapPin, label: "Starting Point", value: "Yulla Village" },
  { icon: Ruler, label: "Distance", value: "12 KM Trek" },
  { icon: Gauge, label: "Difficulty", value: "Moderate" },
  { icon: Mountain, label: "Highest Point", value: "12,000 ft (3,900 m)" },
];

const TREK_HIGHLIGHTS = [
  { icon: Church, t: "World's Highest Krishna Temple" },
  { icon: Trees, t: "Dense Oak & Pine Forest" },
  { icon: Flower2, t: "Alpine Meadows in Bloom" },
  { icon: Sunrise, t: "Sunrise Above the Clouds" },
  { icon: RouteIcon, t: "Sacred Lake at the Summit" },
  { icon: Flame, t: "Janmashtami Festival Camp" },
];

function YullaTrek() {
  return (
    <section id="trek" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.98 0.008 155) 0%, oklch(0.94 0.02 160) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Signature experience
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
            The Yulla Kanda Trek — 12,000 ft
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A sacred pilgrimage through oak forests, alpine meadows and prayer flags
            to the world's highest Krishna temple at 12,000 feet — your spiritual
            adventure awaits.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative">
            <img
              src={trek}
              alt="Hikers on the Yulla Kanda trail with snow peaks behind"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl glass px-5 py-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-forest">
                <Mountain className="h-4 w-4" /> Sacred summit
              </div>
              <div className="mt-1 font-semibold text-pine">12,000 ft · 12 km trek</div>
            </div>
          </div>

          <div className="reveal">
            {/* Timeline */}
            <ol className="relative border-l-2 border-dashed border-forest/30 pl-8">
              {TREK_STEPS.map((s, i) => (
                <li key={s.label} className="mb-8 last:mb-0">
                  <span className="absolute -left-[13px] grid h-6 w-6 place-items-center rounded-full bg-forest text-snow shadow-soft">
                    <s.icon className="h-3 w-3" />
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    Step {String(i + 1).padStart(2, "0")} — {s.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-pine">
                    {s.value}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Highlights */}
        <div className="reveal mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-warm-brown">
            Trail highlights
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TREK_HIGHLIGHTS.map((h) => (
              <div
                key={h.t}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-snow p-5 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                  <h.icon className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-medium text-pine">{h.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- EXPERIENCES */

const EXP = [
  { img: g1, t: "Traditional Village Life", d: "Woven caps, stone paths and centuries-old rhythms." },
  { img: g2, t: "Bonfire Nights", d: "Stories, songs and warmth under a starlit sky." },
  { img: g3, t: "Mountain Sunrise", d: "Golden alpenglow on the Kinnaur Kailash range." },
  { img: g4, t: "Alpine Camping", d: "Meadow campsites surrounded by wildflowers." },
  { img: g7, t: "Nature Walks", d: "Forest trails through moss, pine and birdsong." },
  { img: g6, t: "Snow Peaks & Prayer Flags", d: "Sacred summits and fluttering colours in the wind." },
  
];

function Experiences() {
  return (
    <section className="bg-cream/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Experiences
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
            Slow days, cinematic evenings.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXP.map((e) => (
            <article
              key={e.t}
              className="reveal group relative overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={e.img}
                alt={e.t}
                width={1000}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-snow">
                <h3 className="text-xl font-semibold">{e.t}</h3>
                <p className="mt-1 text-sm text-snow/85">{e.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ GALLERY */

const GALLERY = [
  { src: g3, alt: "Sunrise over Himalayan peaks", h: "row-span-2" },
  { src: g1, alt: "Kinnauri village elder", h: "" },
  { src: g4, alt: "Alpine camping under snow peaks", h: "" },
  { src: g6, alt: "Sacred temples with prayer flags", h: "row-span-2" },
  { src: g2, alt: "Bonfire under starlit sky", h: "" },
  { src: g7, alt: "Sunlit pine forest trail", h: "" },
  { src: g5, alt: "Traditional Himachali home-cooked meal", h: "" },
  { src: about, alt: "Wooden Kinnauri homestay", h: "row-span-2" },
    { src: moment, alt: "Ayansh Snow-View exterior", h: "row-span-2" },
  { src: moment1, alt: "Traditional Kinnauri village", h: "" },
  { src: moment2, alt: "Sunrise over Himalayan peaks", h: "" },
  { src: moment3, alt: "Mountain trekking trail", h: "row-span-2" },
  { src: moment4, alt: "Bonfire under the stars", h: "" },
  { src: moment5, alt: "Snow-covered mountain views", h: "" },
  { src: moment6, alt: "Peaceful pine forest walk", h: "row-span-2" },
  { src: moment7, alt: "Traditional wooden homestay", h: "" },
  { src: moment8, alt: "Camping in alpine meadows", h: "" },
  { src: moment9, alt: "Prayer flags in the mountains", h: "row-span-2" },
  { src: moment10, alt: "Local Himachali cuisine", h: "" },
  { src: moment11, alt: "Scenic valley landscape", h: "" },
  { src: moment12, alt: "Memorable moments at Ayansh Snow-View", h: "row-span-2" },

];

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Gallery
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
            Moments from the mountain.
          </h2>
        </div>

        <div className="reveal mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${g.h}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ TESTIMONIALS */

const REVIEWS = [
  {
    n: "Aditi & Rohan",
    r: "Delhi · Trekkers",
    q: "The most peaceful days of our year. Woke up to snow peaks and slept to the smell of pine. The Yulla Kanda trek was unforgettable.",
  },
  {
    n: "The Menon Family",
    r: "Bengaluru · Family Travellers",
    q: "Warm rooms, warmer people. Our children still talk about the bonfire evenings and grandma's rajma-chawal.",
  },
  {
    n: "Kabir Sharma",
    r: "Mumbai · Solo Photographer",
    q: "An offbeat gem. Ayansh ji arranged the guide, the tents and even a Janmashtami invite at the temple. Ten stars.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--gradient-forest)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
          Guest stories
        </span>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
          Loved by mountain lovers.
        </h2>

        <div className="reveal mx-auto mt-12 max-w-2xl rounded-3xl glass-dark p-8 md:p-12">
          <Quote className="mx-auto h-8 w-8 text-sky-soft/80" />
          <p className="mt-5 text-balance text-lg font-light leading-relaxed text-snow/95 md:text-xl">
            "{r.q}"
          </p>
          <div className="mt-6 flex items-center justify-center gap-1 text-sky-soft">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-4">
            <div className="font-semibold">{r.n}</div>
            <div className="text-xs uppercase tracking-widest opacity-70">
              {r.r}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {REVIEWS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to review ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-snow" : "w-2 bg-snow/40"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setI((v) => (v + 1) % REVIEWS.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/15"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CTA */

function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cta}
          alt="Snow peaks at twilight"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/85 via-pine/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="reveal max-w-2xl text-snow">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
            Your Himalayan chapter starts here
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Ready for your Himalayan adventure?
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-snow/85">
            Book your stay today and experience the quiet beauty of Kinnaur —
            wooden rooms, warm meals, snow peaks and the trail to Yulla Kanda.
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
            <a
              href="tel:+919805914020"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> +91 98059 14020
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- CONTACT */

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-pine md:text-5xl">
            Come and stay with us.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Reach out on WhatsApp or give us a call — we'll help you plan
            travel, meals and the trek.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow
              icon={MapPin}
              title="Ayansh Snow-View & Trekker's Nest"
              lines={[
                "Village & Post Office Yulla Khas",
                "1-2 km trek from Bustan (road-head)",
                "Tehsil Nichar, District Kinnaur",
                "Himachal Pradesh — 172104",
              ]}
            />
            <ContactRow
              icon={Phone}
              title="Phone"
              lines={["+91 98059 14020"]}
              href="tel:+919805914020"
            />
    
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              lines={["Chat with us for instant booking"]}
              href={WHATSAPP_URL}
              external
            />
          </div>

          {/* Quick Info */}
          <div className="mt-8 rounded-2xl bg-forest/5 border border-forest/20 p-5">
            <div className="flex items-start gap-3">
              <RouteIcon className="h-5 w-5 shrink-0 text-forest mt-0.5" />
              <div className="text-sm text-foreground/80">
                <span className="font-semibold text-pine">Important:</span> We are accessible by a scenic
                1-2 km forest walk from Bustan. Part of the offbeat mountain experience!
              </div>
            </div>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-3xl border border-border/60 shadow-lift">
        <iframe
  title="Ayansh Snow-View location on Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.2544064981726!2d78.13419429999999!3d31.544632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39066f0055c47e75%3A0x82deabc18c16b252!2s%22Ayansh%20Snow-View%20%26%20Trekker%27s%20Nest%20(Yulla%20Kanda)%22!5e0!3m2!1sen!2sin!4v1783249247301!5m2!1sen!2sin"
  width="100%"
  height="560"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  className="block h-[420px] w-full border-0 md:h-[560px]"
/>
          
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
  external,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-cream/40 p-5 transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-soft">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest text-snow">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="mt-1 text-[15px] leading-snug text-pine">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
}

/* -------------------------------------------------------------- FOOTER */

function Footer() {
  return (
    <footer className="bg-pine text-snow/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-snow">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-snow text-pine text-sm font-bold">
              A
            </span>
            <span className="text-[15px] font-semibold">
              Ayansh Snow-View & Trekker's Nest
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-snow/70">
            A traditional Kinnauri wooden homestay in Village Yulla Khas — the
            starting point of the sacred Yulla Kanda Trek.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, k) => (
              <a
                key={k}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-snow/20 text-snow transition-colors hover:bg-snow hover:text-pine"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              ["Home", "/home"],
              ["About", "/about"],
              ["Rooms", "/rooms"],
              ["Yulla Trek", "/trek"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-snow">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Contact
          </h4>
          <ul className="mt-5 space-y-2 text-sm text-snow/75">
            <li>Village Yulla Khas, Tehsil Nichar</li>
            <li>District Kinnaur, HP — 172104</li>
            <li>
              <a href="tel:+919805914020" className="hover:text-snow">
                +91 98059 14020
              </a>
            </li>
            <li>
      
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-snow/60 md:flex-row">
          <div>
            © 2026 Ayansh Snow-View & Trekker's Nest. All Rights Reserved.
          </div>
          <div>Handcrafted in the Himalayas.</div>
        </div>
      </div>
    </footer>
  );
}

export {
  About,
  WhyChooseUs,
  Rooms,
  YullaTrek,
  Experiences,
  Gallery,
  Testimonials,
  CallToAction,
  Contact,
  Footer
};
