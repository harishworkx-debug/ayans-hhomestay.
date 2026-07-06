import { createFileRoute, Link } from "@tanstack/react-router";
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
  ArrowUpRight,
  Phone,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Route as RouteIcon,
  MapPin,
  Clock,
  BookOpen,
} from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import {
  buildMetaTags,
  buildLinkTags,
  localBusinessSchema,
  reviewSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { IMAGES, ROOMS, REVIEWS, EXPERIENCES, TREK_STATS, TREK_HIGHLIGHTS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "Yulla Kanda Trek Homestay | Ayansh Snow-View — Best Stay Near Yulla Kanda (12,000 ft) Kinnaur",
      description: SITE.description,
      path: "/",
      image: "/assets/trek.jpg",
      imageAlt:
        "Snow-capped Himalayan peaks and pine forest at Ayansh Snow-View homestay in Kinnaur",
    }),
    links: buildLinkTags("/"),
    scripts: jsonLdScripts(
      localBusinessSchema(),
      reviewSchema(),
      breadcrumbSchema([{ name: "Home", to: "/" }]),
    ),
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <Layout>
      <Hero />
      <QuickLinks />
      <About />
      <WhyChooseUs />
      <Rooms />
      <YullaTrek />
      <Experiences />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroo}
          alt="Snow-capped Himalayan peaks and pine forest in Kinnaur near Yulla Kanda"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-[18%] h-40 w-[40%] rounded-full bg-white/15 blur-3xl animate-drift-slower" />
        <div className="absolute left-0 top-[42%] h-24 w-[30%] rounded-full bg-white/10 blur-3xl animate-drift-slow" />
      </div>

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
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
          Your Gateway to <em className="not-italic font-light italic text-sky-soft">Yulla Kanda</em>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Best homestay for the Yulla Kanda Trek — world's highest Krishna temple at 12,000 ft.
          Traditional Kinnauri warmth, forest trail access, and home-cooked meals at Rs.800/person.
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
            to="/yulla-kanda-trek"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            Explore the Trek
          </Link>
        </div>
      </div>

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

function QuickLinks() {
  const links = [
    { icon: Mountain, label: "Trek Guide", desc: "Trail, difficulty & packing", to: "/yulla-kanda-trek" },
    { icon: Bed, label: "Rooms & Pricing", desc: "Rs.800/person with meals", to: "/rooms" },
    { icon: MapPin, label: "How to Reach", desc: "Routes & the forest walk", to: "/how-to-reach" },
    { icon: BookOpen, label: "Know Before You Go", desc: "Seasons, permits & tips", to: "/know-before-you-visit" },
  ];
  return (
    <section className="border-b border-border/40 bg-cream/30 py-6 md:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 md:grid-cols-4 md:gap-5">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group flex items-center gap-3 rounded-2xl border border-border/50 bg-snow p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
              <l.icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-pine">{l.label}</span>
              <span className="block truncate text-xs text-muted-foreground">{l.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-cream md:h-40 md:w-40" />
          <img
            src={IMAGES.about}
            alt="Traditional wooden Kinnauri architecture at Ayansh Snow-View homestay"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-6 py-5 text-snow shadow-lift md:block">
            <div className="text-3xl font-semibold">12,000 ft</div>
            <div className="text-xs uppercase tracking-widest opacity-80">Yulla Kanda Summit</div>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Story
          </span>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-pine md:text-5xl">
            A quiet corner of Kinnaur, built in wood and warmth.
          </h2>
          <p className="mt-8 text-[15.5px] leading-[1.85] text-foreground/75">
            <span className="font-semibold text-pine">{SITE.name}</span> is an offbeat homestay
            situated in Village Yulla Khas, deep in the mountains of Kinnaur. Built entirely in the
            traditional wooden Kinnauri style, our home has stood quietly amidst pine forests and
            snow peaks for generations.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.85] text-foreground/75">
            We serve as the starting point for the famous Yulla Kanda Trek, home to the highest
            Krishna temple in the world.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "12+", l: "Years hosting" },
              { n: "12,000 ft", l: "Yulla Kanda" },
              { n: "Rs.800", l: "Per person/night" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border/70 bg-cream/40 p-4 text-center"
              >
                <div className="text-2xl font-semibold text-forest">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-pine"
          >
            Read our full story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

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
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
              Each room is finished in local Kinnauri pine and set to open onto the valley.
            </p>
            <div className="flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-sm font-semibold text-forest">
              <Bed className="h-4 w-4" />
              Rs.800 per person/night (with dinner & breakfast)
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
                  alt={r.alt}
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
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

        <div className="reveal mt-10 text-center">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-snow"
          >
            View all rooms & pricing details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

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
            A sacred pilgrimage through oak forests, alpine meadows and prayer flags to the world's
            highest Krishna temple at 12,000 feet.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative">
            <img
              src={IMAGES.trek}
              alt="Hikers on the Yulla Kanda trekking trail with snow-capped peaks behind them"
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
            <div className="grid grid-cols-2 gap-4">
              {TREK_STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border/60 bg-snow p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    {s.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-pine">{s.value}</div>
                </div>
              ))}
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TREK_HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium text-pine">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Mountain className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Link
              to="/yulla-kanda-trek"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-snow transition-all hover:bg-pine"
            >
              Read the complete trek guide
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          {EXPERIENCES.map((e) => (
            <article
              key={e.t}
              className="reveal group relative overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={e.img}
                alt={e.alt}
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

        <div className="reveal mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-snow"
          >
            View the full gallery
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

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
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Loved by mountain lovers.</h2>

        <div className="reveal mx-auto mt-12 max-w-2xl rounded-3xl glass-dark p-8 md:p-12">
          <Quote className="mx-auto h-8 w-8 text-sky-soft/80" />
          <p className="mt-5 text-balance text-lg font-light leading-relaxed text-snow/95 md:text-xl">
            &ldquo;{r.q}&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-1 text-sky-soft">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="mt-4">
            <div className="font-semibold">{r.n}</div>
            <div className="text-xs uppercase tracking-widest opacity-70">{r.r}</div>
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

function CallToAction() {
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
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="reveal max-w-2xl text-snow">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-soft">
            Your Himalayan chapter starts here
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
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
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
