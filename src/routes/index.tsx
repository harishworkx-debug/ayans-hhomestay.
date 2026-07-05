import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Mountain,
  Bed,
  Church,
  Phone,
  ArrowUpRight,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Trees,
  HeartHandshake,
  Compass,
  UtensilsCrossed,
  Snowflake,
  MapPin,
  Home,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

import heroo from "../assets/heroo.png";
import about from "../assets/about.jpg";
import trek from "../assets/trek.jpg";
import g3 from "../assets/g3.jpg";
import g7 from "../assets/g7.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ayansh Snow-View & Trekker's Nest — Yulla Kanda Trek Base Camp | ₹800/Person",
      },
      {
        name: "description",
        content:
          "Authentic Kinnauri homestay in Yulla Khas — base camp for the sacred Yulla Kanda Trek (12,000+ feet). ₹800/person includes stay, dinner, breakfast. Traditional wooden rooms, mountain views, local hospitality.",
      },
      {
        property: "og:title",
        content: "Ayansh Snow-View — Yulla Kanda Trek Base Camp | Kinnaur Homestay",
      },
      {
        property: "og:description",
        content:
          "Stay in traditional Kinnauri wooden homestay. ₹800 per person with meals. Gateway to world's highest Krishna temple at approximately 12,000+ feet.",
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
          name: "Ayansh Snow-View & Trekker's Nest",
          description:
            "Traditional Kinnauri wooden homestay and Yulla Kanda Trek base camp in Kinnaur, Himachal Pradesh. ₹800 per person including accommodation, dinner, and breakfast.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Village & P.O. Yulla Khas, Tehsil Nichar",
            addressLocality: "Kinnaur",
            addressRegion: "Himachal Pradesh",
            postalCode: "172104",
            addressCountry: "IN",
          },
          telephone: "+91 8920114710",
          priceRange: "₹800",
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
              name: "What is included in ₹800 per person?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The ₹800 per person per night includes comfortable wooden room, home-cooked dinner, and breakfast. No hidden charges.",
              },
            },
            {
              "@type": "Question",
              name: "How high is Yulla Kanda?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yulla Kanda reaches approximately 12,000+ feet (approximately 3,900 metres) above sea level, home to the sacred Yulla Lake and the world's highest Krishna temple.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <PricingHighlight />
        <QuickInfo />
        <WhyStayWithUs />
        <TrekPreview />
        <KnowBeforeSection />
        <GuestReviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* -------------------------------------------------------------- HERO */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroo}
          alt="Snow-capped Himalayan peaks and pine forest in Kinnaur"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
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
          <Mountain className="h-3.5 w-3.5" /> Yulla Khas · Kinnaur · Himachal Pradesh
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
          Escape Into <em className="not-italic font-light italic text-sky-soft">The Himalayas</em>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Authentic Kinnauri homestay — the base camp for the sacred{" "}
          <strong>Yulla Kanda Trek</strong> to the world's highest Krishna
          temple at <strong>approximately 12,000+ feet</strong>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">Price</span>
            <div className="font-semibold">₹800 Per Person</div>
          </div>
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">Altitude</span>
            <div className="font-semibold">12,000+ Feet</div>
          </div>
          <div className="rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest opacity-70">Trek</span>
            <div className="font-semibold">12 KM</div>
          </div>
        </div>
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
          <Link
            to="/trek"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            Explore the Trek
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- PRICING HIGHLIGHT */

function PricingHighlight() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal overflow-hidden rounded-3xl border-2 border-forest/20 bg-gradient-to-br from-cream to-snow p-8 shadow-lift md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
                <Star className="h-3.5 w-3.5" /> All-Inclusive
              </span>
              <h2 className="text-4xl font-semibold text-pine md:text-5xl">
                ₹800 <span className="text-2xl font-normal text-muted-foreground">Per Night</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Per person — includes comfortable wooden room, home-cooked dinner, and breakfast.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
                <div className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-snow text-xs">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-pine">Comfortable Stay</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-snow text-xs">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-pine">Dinner Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-snow text-xs">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-pine">Breakfast Included</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:bg-pine"
              >
                <MessageCircle className="h-5 w-5" />
                Book Now on WhatsApp
              </a>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-snow px-8 py-4 text-sm font-semibold text-pine transition-all hover:bg-cream"
              >
                View Rooms & Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- QUICK INFO */

function QuickInfo() {
  return (
    <section className="bg-cream/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-pine md:text-4xl">
            Everything you need for your mountain adventure
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            From traditional Kinnauri homestay to sacred temple trek — all in one place.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Home, title: "Traditional Homestay", desc: "Authentic Kinnauri wooden rooms with mountain views", link: "/about" },
            { icon: Mountain, title: "Yulla Kanda Trek", desc: "12 km to world's highest Krishna temple", link: "/trek" },
            { icon: Compass, title: "Trek Guide Support", desc: "Experienced local guides and equipment", link: "/trek" },
            { icon: HeartHandshake, title: "Family Hospitality", desc: "Home-cooked meals and warm hosts", link: "/about" },
          ].map((item, i) => (
            <Link
              key={item.title}
              to={item.link}
              className="reveal group rounded-2xl border border-border/60 bg-snow p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- WHY STAY */

const WHY = [
  { icon: Bed, t: "Authentic Kinnauri Rooms", d: "Traditional wooden architecture, not a commercial hotel" },
  { icon: UtensilsCrossed, t: "Home-Cooked Meals", d: "Fresh Himachali food prepared with local ingredients" },
  { icon: Snowflake, t: "Snow Peak Views", d: "Panoramic views of the Kinnaur Kailash range" },
  { icon: HeartHandshake, t: "Family Hospitality", d: "We treat every guest as part of our family" },
  { icon: Compass, t: "Trek Base Camp", d: "Direct access to Yulla Kanda trail starting point" },
  { icon: Mountain, t: "Local Trek Guides", d: "Experienced guides who know every trail" },
];

function WhyStayWithUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Why Stay With Us
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Not just a place to sleep. A place to belong.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            We offer something hotels cannot — authentic connection, local
            knowledge, and the warmth of a real Kinnauri home.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <div
              key={w.t}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {w.d}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-snow shadow-lift transition-all hover:bg-pine"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- TREK PREVIEW */

function TrekPreview() {
  return (
    <section className="relative overflow-hidden bg-cream/30 py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Signature Experience
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
              The Yulla Kanda Trek
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              A sacred pilgrimage through oak forests, alpine meadows, and
              prayer flags to the <strong>world's highest Krishna temple</strong>{" "}
              and the sacred Yulla Lake at <strong>approximately 12,000+ feet</strong>.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/60 bg-snow p-4">
                <div className="text-xs uppercase tracking-widest text-moss">Distance</div>
                <div className="mt-1 text-xl font-semibold text-pine">12 KM Trek</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-snow p-4">
                <div className="text-xs uppercase tracking-widest text-moss">Altitude</div>
                <div className="mt-1 text-xl font-semibold text-pine">12,000+ Feet</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-snow p-4">
                <div className="text-xs uppercase tracking-widest text-moss">Difficulty</div>
                <div className="mt-1 text-xl font-semibold text-pine">Moderate</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-snow p-4">
                <div className="text-xs uppercase tracking-widest text-moss">Highlight</div>
                <div className="mt-1 text-xl font-semibold text-pine">Krishna Temple</div>
              </div>
            </div>

            <Link
              to="/trek"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-snow shadow-lift transition-all hover:bg-pine"
            >
              Full Trek Details
            </Link>
          </div>

          <div className="relative">
            <img
              src={trek}
              alt="Yulla Kanda Trek trail with snow-capped peaks"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl shadow-lift"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-snow/90 backdrop-blur-md px-6 py-5 shadow-soft">
              <div className="flex items-center gap-2 text-forest">
                <Church className="h-5 w-5" />
                <span className="text-sm font-semibold">World's Highest Krishna Temple</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">At approximately 12,000+ feet above sea level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- KNOW BEFORE */

function KnowBeforeSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal overflow-hidden rounded-3xl border-2 border-forest/30 bg-gradient-to-br from-forest/5 to-cream p-8 shadow-soft md:p-10">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-snow">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                Before You Arrive
              </span>
              <h2 className="text-xl font-semibold text-pine md:text-2xl">
                A Scenic Walk Awaits You
              </h2>
            </div>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-foreground/75">
            <strong className="text-pine">
              Ayansh Snow-View is located approximately 1-2 km from Bustan village.
            </strong>{" "}
            This means you'll enjoy a beautiful walk through pine forests and traditional paths to reach your retreat.
          </p>

          <div className="mt-6 rounded-xl bg-snow p-5">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-pine">Why we love this location:</span>{" "}
              Complete peace, no traffic noise, authentic village atmosphere, and
              stunning mountain views that you simply cannot find along motorable roads.
              The walk is part of the experience — leave the world behind and
              transition into mountain life.
            </p>
          </div>

          <Link
            to="/know-before-you-visit"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-pine"
          >
            Learn More About Getting Here
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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

function GuestReviews() {
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
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
          Guest Stories
        </span>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
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

/* ------------------------------------------------------------ FINAL CTA */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={g7}
          alt="Pine forest trail in Kinnaur"
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
            Your Mountain Retreat Awaits
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Ready for your Himalayan adventure?
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-snow/85">
            <strong>₹800 per person</strong> including stay, dinner, and breakfast.
            Book on WhatsApp for instant confirmation.
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
              href="tel:+918920114710"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> +91 89201 14710
            </a>
          </div>
        </div>
      </div>
    </section>
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
            base camp for the sacred Yulla Kanda Trek to the world's
            highest Krishna temple at approximately 12,000+ feet.
          </p>
          <div className="mt-6">
            <div className="text-sm font-semibold">₹800 Per Person</div>
            <div className="text-xs text-snow/60">Includes stay, dinner, and breakfast</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/" className="transition-colors hover:text-snow">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-snow">About</Link></li>
            <li><Link to="/rooms" className="transition-colors hover:text-snow">Rooms & Pricing</Link></li>
            <li><Link to="/trek" className="transition-colors hover:text-snow">Yulla Kanda Trek</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-snow">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Helpful
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/how-to-reach" className="transition-colors hover:text-snow">How to Reach</Link></li>
            <li><Link to="/know-before-you-visit" className="transition-colors hover:text-snow">Know Before You Visit</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-snow">FAQ</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-snow">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row">
          <div className="text-sm">
            © 2026 Ayansh Snow-View & Trekker's Nest. All Rights Reserved.
          </div>
          <div className="text-center text-xs text-snow/60">
            Village Yulla Khas, Tehsil Nichar, District Kinnaur, Himachal Pradesh — 172104
          </div>
        </div>
      </div>
    </footer>
  );
}
