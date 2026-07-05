import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Mountain,
  ChevronDown,
  Bed,
  UtensilsCrossed,
  HeartHandshake,
  Compass,
  Tent,
  MapPin,
  Phone,
  ArrowUpRight,
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
import trekImg from "../assets/hero.jpg";
import room1 from "../assets/room1.jpg";
import g3 from "../assets/g3.jpg";
import g1 from "../assets/g1.jpg";
import g6 from "../assets/g6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Yulla Kanda Best Homestay — Ayansh Snow-View & Trekker's Nest, Kinnaur | ₹800/person",
      },
      {
        name: "description",
        content:
          "Best homestay for Yulla Kanda Trek at 12,000 ft. Traditional Kinnauri wooden rooms at ₹800/person with meals. Nearest base camp to the world's highest Krishna temple. 1-2 km trek from Bustan through pine forests.",
      },
      {
        property: "og:title",
        content: "Ayansh Snow-View — Best Yulla Kanda Homestay, Kinnaur",
      },
      {
        property: "og:description",
        content:
          "Nearest & best homestay for Yulla Kanda Trek. ₹800/person with meals. Traditional wooden rooms, local guides, camping equipment. Start your 12,000 ft pilgrimage journey here.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Yulla Kanda homestay, Yulla Kanda base camp, Kinnaur homestay, Yulla Khas, best homestay Yulla Kanda, Krishna temple 12000 ft, Kinnaur trek, Himachal homestay" },
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
            "Best homestay and base camp for Yulla Kanda Trek in Kinnaur, Himachal Pradesh.",
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
          geo: {
            "@type": "GeoCoordinates",
            latitude: "31.54",
            longitude: "78.27",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const WHY = [
  { icon: Bed, t: "Cozy Wooden Rooms", d: "Traditional Kinnauri architecture with warm interiors" },
  { icon: UtensilsCrossed, t: "Meals Included (₹800/person)", d: "Dinner & breakfast with every stay" },
  { icon: Mountain, t: "Yulla Kanda Base Camp", d: "Nearest homestay to the 12,000 ft sacred summit" },
  { icon: Compass, t: "Trek Guide Support", d: "Experienced local guides available" },
  { icon: Tent, t: "Camping Equipment", d: "Tents, sleeping bags & gear provided" },
  { icon: HeartHandshake, t: "Family Hospitality", d: "Warm Kinnauri welcome since generations" },
];

const REVIEWS = [
  {
    n: "Aditi & Rohan",
    r: "Delhi · Trekkers",
    q: "The best base camp for Yulla Kanda. Woke up to snow peaks, slept to pine air. The trek to 12,000 ft was unforgettable.",
  },
  {
    n: "The Menon Family",
    r: "Bengaluru · Family",
    q: "₹800 per person with meals — incredible value! Our kids still talk about the bonfire nights and mountain sunrises.",
  },
  {
    n: "Kabir Sharma",
    r: "Mumbai · Photographer",
    q: "The closest homestay to Yulla Kanda. Ayansh ji arranged everything — guide, tents, and temple visit. Ten stars!",
  },
];

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <PricingBanner />
        <WhyChooseUs />
        <YullaKandaHighlight />
        <BustanTrek />
        <QuickLinks />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
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
          alt="Snow-capped Himalayan peaks and pine forest in Kinnaur — Yulla Kanda"
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center text-snow md:pt-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Mountain className="h-3.5 w-3.5" /> Best Yulla Kanda Base Camp · Kinnaur
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
          Escape Into <em className="not-italic font-light italic text-sky-soft">The Himalayas</em>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Traditional Kinnauri homestay and the <strong>nearest base camp</strong> for the sacred
          Yulla Kanda Trek at <strong>12,000 feet</strong>.
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
          <Link
            to="/trek"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            Explore the Trek
          </Link>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#pricing"
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

/* ------------------------------------------------------ PRICING BANNER */

function PricingBanner() {
  return (
    <section id="pricing" className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal rounded-3xl bg-gradient-to-r from-forest to-pine p-6 text-center text-snow shadow-lift md:p-8">
          <div className="text-sm font-medium uppercase tracking-widest opacity-80">
            All-Inclusive Pricing
          </div>
          <div className="mt-2">
            <span className="text-5xl font-bold md:text-6xl">₹800</span>
            <span className="text-xl font-medium opacity-80">/person/night</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
              <UtensilsCrossed className="h-4 w-4" /> Dinner
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
              <UtensilsCrossed className="h-4 w-4" /> Breakfast
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-snow/20 px-3 py-1">
              <Bed className="h-4 w-4" /> Cozy Stay
            </span>
          </div>
          <Link
            to="/rooms"
            className="mt-5 inline-block text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            View Rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- WHY CHOOSE */

function WhyChooseUs() {
  return (
    <section className="relative bg-cream/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            The best base camp for Yulla Kanda Trek
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <div
              key={w.t}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/60 bg-snow p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 50}ms` }}
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-pine">{w.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- YULLA KANDA */

function YullaKandaHighlight() {
  return (
    <section id="trek" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={trekImg}
              alt="Yulla Kanda Trek — 12,000 ft sacred summit"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl glass px-5 py-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-forest">
                <Mountain className="h-4 w-4" /> Sacred summit
              </div>
              <div className="mt-1 font-semibold text-pine">12,000 ft · World's Highest Krishna Temple</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Signature Experience
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
              The Yulla Kanda Trek
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/75">
              A pilgrimage through oak forests and alpine meadows to the <strong className="text-pine">world's
              highest Krishna temple at 12,000 feet</strong>. When you plan your Yulla Kanda journey,
              start from the nearest and most trusted base camp.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { l: "Starting Point", v: "Yulla Village" },
                { l: "Distance", v: "12 KM Trek" },
                { l: "Altitude", v: "12,000 ft" },
                { l: "Highlight", v: "Krishna Temple" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border/60 bg-cream/40 p-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  <div className="mt-1 font-semibold text-pine">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                to="/trek"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-snow transition-all hover:bg-pine"
              >
                Trek Details
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-5 py-2.5 text-sm font-medium text-pine transition-all hover:bg-cream"
              >
                <MessageCircle className="h-4 w-4" /> Plan Your Trek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- BUSTAN TREK */

function BustanTrek() {
  return (
    <section className="bg-cream/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal rounded-3xl border border-border/60 bg-snow p-8 text-center shadow-soft md:p-10">
          <MapPin className="mx-auto h-10 w-10 text-moss" />
          <h2 className="mt-4 text-2xl font-semibold text-pine md:text-3xl">
            Location: 1-2 km Trek from Bustan
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/75 md:max-w-2xl md:mx-auto">
            Our homestay is located in the serene Village Yulla Khas, approximately <strong className="text-pine">1-2
            kilometers from Bustan</strong>. The short trek takes about 30-45 minutes and offers
            beautiful views through pine forests and apple orchards. This approach adds to the
            sense of adventure as you transition from the road to the peaceful mountains.
          </p>
          <div className="mt-6 rounded-xl bg-forest/10 p-4 text-left">
            <p className="text-sm font-medium text-pine">
              <strong>Important:</strong> Please come prepared with comfortable walking shoes.
              The trek is moderate and suitable for most guests. We'll send detailed directions
              when you book.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest hover:underline"
          >
            Learn More <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ QUICK LINKS */

function QuickLinks() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal grid gap-4 md:grid-cols-3">
          {[
            { to: "/rooms", img: room1, label: "Rooms", sub: "Wooden rooms with mountain views" },
            { to: "/gallery", img: g3, label: "Gallery", sub: "Moments from the mountain" },
            { to: "/contact", img: g1, label: "Contact", sub: "WhatsApp booking available" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative overflow-hidden rounded-2xl border border-border/60 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={link.img}
                alt={link.label}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-snow">
                <div className="text-lg font-semibold">{link.label}</div>
                <div className="text-sm opacity-80">{link.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ TESTIMONIALS */

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--gradient-forest)" }}
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
          Guest stories
        </span>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Loved by mountain lovers
        </h2>

        <div className="reveal mx-auto mt-10 max-w-xl rounded-3xl glass-dark p-6 md:p-8">
          <Quote className="mx-auto h-6 w-6 text-sky-soft/80" />
          <p className="mt-4 text-balance text-lg font-light leading-relaxed text-snow/95">
            "{r.q}"
          </p>
          <div className="mt-4 flex items-center justify-center gap-1 text-sky-soft">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-3">
            <div className="font-semibold">{r.n}</div>
            <div className="text-xs uppercase tracking-widest opacity-70">{r.r}</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/15"
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
                  k === i ? "w-6 bg-snow" : "w-2 bg-snow/40"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setI((v) => (v + 1) % REVIEWS.length)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/15"
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
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <img
          src={g6}
          alt="Snow peaks at twilight"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/90 via-pine/70 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="reveal max-w-xl text-snow">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
            Your Himalayan chapter starts here
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Ready for your Yulla Kanda adventure?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-snow/85">
            Book your stay today — the nearest homestay to Yulla Kanda at ₹800/person with
            meals included.
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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-snow">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-snow text-pine text-sm font-bold">
              A
            </span>
            <span className="text-[15px] font-semibold">
              Ayansh Snow-View & Trekker's Nest
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-snow/70">
            The nearest and best homestay for Yulla Kanda Trek. Traditional Kinnauri
            hospitality at ₹800/person with meals. Located 1-2 km from Bustan.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Rooms", "/rooms"],
              ["Yulla Trek", "/trek"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="transition-colors hover:text-snow">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-snow/75">
            <li>Village Yulla Khas, Tehsil Nichar</li>
            <li>District Kinnaur, HP — 172104</li>
            <li className="pt-2">
              <a href="tel:+918920114710" className="hover:text-snow">
                +91 89201 14710
              </a>
            </li>
            <li>
              <a href="tel:+919805914020" className="hover:text-snow">
                +91 98059 14020
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-snow/60 md:flex-row">
          <div>
            © 2026 Ayansh Snow-View & Trekker's Nest. All Rights Reserved.
          </div>
          <div>Handcrafted in the Himalayas.</div>
        </div>
      </div>
    </footer>
  );
}
