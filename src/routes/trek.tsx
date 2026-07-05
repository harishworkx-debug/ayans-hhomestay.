import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowUpRight, MapPin, Ruler, Gauge, Mountain, Church, Trees, Flower2, Sunrise, Route as RouteIcon, Flame, Tent, Compass } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/trek")({
  head: () => ({
    meta: [
      { title: "Yulla Kanda Trek — 12,000 ft Sacred Summit | Ayansh Snow-View Homestay" },
      {
        name: "description",
        content:
          "Trek to Yulla Kanda at 12,000 feet — home to the world's highest Krishna temple. 12 km trail through oak forests and alpine meadows. Best base camp at Ayansh Snow-View homestay in Yulla Khas. Guide support and camping equipment available.",
      },
      { property: "og:title", content: "Yulla Kanda Trek — 12,000 ft Sacred Summit" },
      {
        property: "og:description",
        content:
          "Experience the sacred Yulla Kanda Trek to 12,000 feet. World's highest Krishna temple, stunning alpine views, and authentic Kinnauri adventure.",
      },
    ],
    links: [{ rel: "canonical", href: "/trek" }],
  }),
  component: TrekPage,
});

const TREK_STEPS = [
  { icon: MapPin, label: "Starting Point", value: "Yulla Village (Ayansh Homestay)" },
  { icon: Ruler, label: "Distance", value: "12 KM Trek (one way)" },
  { icon: Gauge, label: "Difficulty", value: "Moderate to Challenging" },
  { icon: Mountain, label: "Highest Point", value: "12,000 feet (3,900 m)" },
];

const TREK_HIGHLIGHTS = [
  { icon: Church, t: "World's Highest Krishna Temple", desc: "Sacred temple at 12,000 ft" },
  { icon: Trees, t: "Dense Oak & Pine Forest", desc: "Ancient trees and fresh mountain air" },
  { icon: Flower2, t: "Alpine Meadows in Bloom", desc: "Colorful wildflowers in season" },
  { icon: Sunrise, t: "Sunrise Above the Clouds", desc: "Magical golden hour moments" },
  { icon: RouteIcon, t: "Sacred Lake at Summit", desc: "Holy water with divine significance" },
  { icon: Flame, t: "Janmashtami Festival Camp", desc: "Annual pilgrimage celebration" },
];

const SERVICES = [
  { icon: Compass, t: "Local Trek Guides", desc: "Experienced guides from Yulla village" },
  { icon: Tent, t: "Camping Equipment", desc: "Tents, sleeping bags & gear" },
  { icon: Mountain, t: "Base Camp Stay", desc: "Comfortable pre-trek accommodation" },
];

function TrekPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-forest/10 to-snow" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-moss">
                <Mountain className="h-3.5 w-3.5" /> Signature Experience
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-6xl">
                The Yulla Kanda Trek
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A pilgrimage through oak forests, alpine meadows, and prayer flags to the world's
                highest Krishna temple at <strong className="text-pine">12,000 feet</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Trek Stats */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal rounded-3xl bg-gradient-to-r from-forest to-pine p-8 text-snow shadow-lift md:p-10">
              <div className="text-center">
                <div className="text-sm font-medium uppercase tracking-widest opacity-80">
                  Sacred Summit Altitude
                </div>
                <div className="mt-3">
                  <span className="text-6xl font-bold md:text-7xl">12,000</span>
                  <span className="text-2xl font-medium opacity-80"> ft</span>
                </div>
                <div className="mt-2 text-sm opacity-70">(3,900 meters above sea level)</div>
              </div>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                {TREK_STEPS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xs uppercase tracking-wider opacity-70">{s.label}</div>
                    <div className="mt-1 font-medium">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Best Base Camp */}
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
                <MapPin className="h-3.5 w-3.5" /> Best Base Camp for Yulla Kanda
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-pine md:text-4xl">
                The Nearest & Best Homestay for Your Yulla Kanda Pilgrimage
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                When you plan your sacred journey to Yulla Kanda, start from the closest and most
                trusted base camp. <strong className="text-pine">Ayansh Snow-View & Trekker's
                Nest</strong> is located right in Village Yulla Khas — the traditional starting
                point of the trek.
              </p>
            </div>

            <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border/60 bg-snow p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-pine">Why Choose Us as Your Base Camp?</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Located at the trek starting point — no extra travel needed",
                    "Experienced local guides from Yulla village available",
                    "All camping equipment: tents, sleeping bags, gear",
                    "Home-cooked meals for pre-dawn trek starts",
                    "Family-run with genuine local knowledge",
                    "12+ years of hosting Yulla Kanda pilgrims",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
                      <span className="text-[15px] text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-snow shadow-soft transition-all hover:bg-pine"
                >
                  <MessageCircle className="h-4 w-4" />
                  Plan Your Trek with Us
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-border/60 bg-snow p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-pine">Trek Services We Offer</h3>
                <div className="mt-6 space-y-5">
                  {SERVICES.map((s) => (
                    <div key={s.t} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-medium text-pine">{s.t}</div>
                        <div className="text-sm text-muted-foreground">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trail Highlights */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-pine md:text-4xl">Trail Highlights</h2>
              <p className="mt-4 text-muted-foreground">
                What makes the Yulla Kanda Trek unforgettable
              </p>
            </div>

            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TREK_HIGHLIGHTS.map((h) => (
                <div
                  key={h.t}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-cream/40 p-5 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium text-pine">{h.t}</div>
                    <div className="text-sm text-muted-foreground">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trek Journey */}
        <section className="bg-cream/30 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal text-center">
              <h2 className="text-3xl font-semibold text-pine md:text-4xl">The Journey</h2>
            </div>
            <div className="reveal mt-12">
              <ol className="relative border-l-2 border-dashed border-forest/30 pl-8">
                {TREK_STEPS.map((s, i) => (
                  <li key={s.label} className="mb-8 last:mb-0">
                    <span className="absolute -left-[13px] grid h-6 w-6 place-items-center rounded-full bg-forest text-snow shadow-soft">
                      <s.icon className="h-3 w-3" />
                    </span>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                      Step {String(i + 1).padStart(2, "0")} — {s.label}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-pine">{s.value}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">
              Start Your Yulla Kanda Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book your stay and plan your trek with experienced local guides
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:scale-[1.03] hover:bg-pine"
              >
                <MessageCircle className="h-5 w-5" />
                Book Trek on WhatsApp
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
