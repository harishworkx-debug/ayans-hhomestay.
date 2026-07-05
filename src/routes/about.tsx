import { createFileRoute } from "@tanstack/react-router";
import { Mountain, HeartHandshake, Trees, Hop as Home, Users, Calendar } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Ayansh Snow-View & Trekker's Nest — Authentic Kinnauri Homestay",
      },
      {
        name: "description",
        content:
          "Discover our traditional wooden Kinnauri homestay in Yulla Khas, Kinnaur. A family-run retreat with authentic hospitality, home-cooked meals, and stunning Himalayan views since 2012.",
      },
      {
        property: "og:title",
        content: "About Ayansh Snow-View — Kinnauri Homestay Story",
      },
      {
        property: "og:description",
        content:
          "A traditional wooden homestay in Yulla Khas, Kinnaur offering authentic hospitality, home-cooked meals, and direct access to the Yulla Kanda Trek.",
      },
      {
        property: "og:url",
        content: "/about",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <WhyStayHere />
        <OurValues />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Home className="h-3.5 w-3.5" /> Our Story
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          A quiet corner of Kinnaur, built in wood and warmth.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          For over a decade, we've welcomed travellers into our traditional
          Kinnauri home — offering simple comfort, hearty meals, and direct
          access to the sacred Yulla Kanda Trek.
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-cream md:h-40 md:w-40" />
          <img
            src="/src/assets/about.jpg"
            alt="Traditional wooden Kinnauri architecture at Ayansh Snow-View"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-6 py-5 text-snow shadow-lift md:block">
            <div className="text-3xl font-semibold">12+</div>
            <div className="text-xs uppercase tracking-widest opacity-80">
              Years of Hospitality
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-pine md:text-4xl">
            Where the mountains feel like home.
          </h2>
          <div className="mt-8 space-y-5 text-[15.5px] leading-[1.85] text-foreground/75">
            <p>
              <span className="font-semibold text-pine">
                Ayansh Snow-View & Trekker's Nest
              </span>{" "}
              is a family-run homestay located in Village Yulla Khas, deep in
              the mountains of Kinnaur, Himachal Pradesh. Built entirely in the
              traditional wooden Kinnauri style, our home has stood quietly
              amidst pine forests and snow peaks for generations.
            </p>
            <p>
              We are not a hotel or a commercial resort. We are a home — a
              place where guests become part of our family, sharing meals around
              the same table, breathing the same crisp mountain air, and waking
              up to the same magnificent views of the Kinnaur Kailash range.
            </p>
            <p>
              Our homestay serves as the gateway to the famous{" "}
              <strong>Yulla Kanda Trek</strong>, which leads to the sacred Yulla
              Lake and the world's highest Krishna temple at approximately
              12,000+ feet above sea level. We've been guiding trekkers and
              travellers through these sacred trails since 2012.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "12+", l: "Years hosting" },
              { n: "4.9★", l: "Guest rating" },
              { n: "500+", l: "Happy guests" },
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
        </div>
      </div>
    </section>
  );
}

const WHY_STAY = [
  {
    icon: Home,
    title: "Authentic Kinnauri Homestay",
    desc: "Stay in a genuine wooden Kinnauri home, not a commercial hotel. Experience real village life.",
  },
  {
    icon: Mountain,
    title: "Perfect Trek Base Camp",
    desc: "Direct access to the Yulla Kanda Trek starting point. We arrange guides, camping gear, and meals.",
  },
  {
    icon: HeartHandshake,
    title: "Family Hospitality",
    desc: "We treat every guest as family. Home-cooked meals, warm rooms, and local knowledge shared freely.",
  },
  {
    icon: Trees,
    title: "Peaceful Village Setting",
    desc: "No crowds, no traffic. Just pine forests, apple orchards, and infinite mountain silence.",
  },
  {
    icon: Users,
    title: "Local Trek Guides",
    desc: "Experienced local guides who know every trail, temple, and hidden spot in the region.",
  },
  {
    icon: Calendar,
    title: "Year-Round Destination",
    desc: "Spring flowers, summer treks, autumn harvest, winter snow — every season offers something unique.",
  },
];

function WhyStayHere() {
  return (
    <section className="relative bg-cream/40 py-24 md:py-32">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_STAY.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-snow">
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

function OurValues() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Values
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Simple. Honest. Authentic.
          </h2>
          <div className="mt-10 space-y-6 text-[15.5px] leading-[1.85] text-foreground/75">
            <p>
              We believe travel should be about genuine connection — not luxury
              rooms or fancy amenities. Our homestay offers what matters: a warm
              bed, delicious home-cooked food, and hosts who genuinely care
              about your experience.
            </p>
            <p>
              We don't have room service or 24-hour electricity. What we have
              instead is something far more valuable: silence under starlit
              skies, the taste of fresh rajma-chawal cooked on a wood fire, and
              mornings that begin with temple bells echoing through the valley.
            </p>
            <p>
              When you stay with us, you support a local family and the entire
              village ecosystem. Your presence helps our community thrive while
              preserving our traditional way of life.
            </p>
          </div>
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
          Ready to experience authentic Kinnauri hospitality?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          We're just a WhatsApp message away. Let us answer your questions and
          help you plan your mountain retreat.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
        >
          Book on WhatsApp
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
