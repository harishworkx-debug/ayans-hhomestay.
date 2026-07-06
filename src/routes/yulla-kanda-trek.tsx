import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mountain,
  Clock,
  Route as RouteIcon,
  Calendar,
  Backpack,
  Tent,
  ArrowUpRight,
  MessageCircle,
  Check,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  localBusinessSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { IMAGES, TREK_STATS, TREK_HIGHLIGHTS } from "@/lib/content";

export const Route = createFileRoute("/yulla-kanda-trek")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "Yulla Kanda Trek Guide — 12,000 ft Krishna Temple Trail from Yulla Khas, Kinnaur",
      description:
        "Complete guide to the Yulla Kanda trek: 12 km round trip to 12,000 ft, moderate difficulty, best season May-October, packing list, route from Bustan, and base camp homestay. Trek to the world's highest Krishna temple in Kinnaur, Himachal Pradesh.",
      path: "/yulla-kanda-trek",
      image: "/assets/trek.jpg",
      imageAlt: "Hikers on the Yulla Kanda trekking trail with snow-capped Himalayan peaks",
    }),
    links: buildLinkTags("/yulla-kanda-trek"),
    scripts: jsonLdScripts(
      localBusinessSchema(),
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Yulla Kanda Trek Guide", to: "/yulla-kanda-trek" },
      ]),
    ),
  }),
  component: TrekPage,
});

const PACKING = [
  "Sturdy trekking shoes with good ankle support and grip",
  "Moisture-wicking thermal base layer (top and bottom)",
  "Fleece or light wool mid layer",
  "Waterproof rain jacket / wind shell",
  "Quick-dry trekking trousers (not cotton jeans)",
  "Two pairs of warm wool or merino socks",
  "Warm cap and gloves (mornings are cold even in summer)",
  "25-35 litre daypack",
  "At least 2 litres of water",
  "High-energy snacks: dry fruits, energy bars, chocolate",
  "Sunscreen (SPF 50) and sunglasses",
  "Headlamp for early start or late return",
  "Basic first-aid: bandages, pain reliever, altitude medication",
];

const SEASONS = [
  {
    m: "May - Jun",
    t: "Best for trekking",
    d: "Trail is clear of snow, meadows are green, wildflowers bloom. Pleasant days, cool nights.",
    best: true,
  },
  {
    m: "Jul - Aug",
    t: "Monsoon & festival",
    d: "Lush landscape but afternoon rain is frequent. August brings the Janmashtami pilgrimage.",
    best: false,
  },
  {
    m: "Sep - Oct",
    t: "Clear & sharp",
    d: "Skies clear again, sharpest mountain views. Apple harvest adds colour. Excellent for photography.",
    best: true,
  },
  {
    m: "Nov - Apr",
    t: "Winter (closed)",
    d: "Heavy snow buries the trail. The trek is not possible. Village is quiet and beautiful but hard to reach.",
    best: false,
  },
];

function TrekPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Trek Guide"
        title="The Yulla Kanda Trek — 12,000 ft"
        subtitle="A sacred pilgrimage through oak forests, alpine meadows and prayer flags to the world's highest Krishna temple. This guide covers everything you need to trek safely."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Yulla Kanda Trek Guide", to: "/yulla-kanda-trek" },
        ]}
      />

      {/* Hero image + stats */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal relative overflow-hidden rounded-3xl">
            <img
              src={IMAGES.trek}
              alt="Hikers on the Yulla Kanda trekking trail with snow-capped peaks behind them"
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {TREK_STATS.map((s) => (
                  <div key={s.label} className="rounded-xl bg-snow/95 p-4 backdrop-blur-md">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                      {s.label}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-pine">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Trek highlights</h2>
            <p className="mt-3 text-muted-foreground">
              What makes this trail one of the most rewarding in Kinnaur.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TREK_HIGHLIGHTS.map((h, i) => (
              <div
                key={h}
                className="reveal flex items-center gap-3 rounded-2xl border border-border/60 bg-cream/30 p-5"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Mountain className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-pine">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trail overview */}
      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
          <div className="reveal space-y-5 text-[15.5px] leading-[1.85] text-foreground/80">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              The trail
            </span>
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Where the trek begins</h2>
            <p>
              The trek starts from Yulla village in the Nichar tehsil of Kinnaur. Most travellers
              reach the road-head at Bustan, then walk 1 to 2 kilometres through pine forest to
              reach our homestay, which serves as a natural base camp.
            </p>
            <p>
              From the homestay, the main trail to Yulla Kanda climbs steadily through oak and pine
              before opening into alpine meadows. A small temple dedicated to Lord Krishna sits
              above the treeline at 12,000 feet, making it widely regarded as the highest Krishna
              temple in the world.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 rounded-full bg-snow px-4 py-2 text-sm font-medium text-pine">
                <RouteIcon className="h-4 w-4 text-forest" /> 12 km round trip
              </div>
              <div className="flex items-center gap-2 rounded-full bg-snow px-4 py-2 text-sm font-medium text-pine">
                <Clock className="h-4 w-4 text-forest" /> 7-9 hours
              </div>
              <div className="flex items-center gap-2 rounded-full bg-snow px-4 py-2 text-sm font-medium text-pine">
                <Mountain className="h-4 w-4 text-forest" /> Moderate difficulty
              </div>
            </div>
          </div>

          <div className="reveal space-y-5 text-[15.5px] leading-[1.85] text-foreground/80">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Difficulty & duration
            </span>
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">
              Is this trek for you?
            </h2>
            <p>
              The Yulla Kanda trek is considered <strong>moderate</strong>. It covers roughly 12
              kilometres round trip with significant elevation gain. Most reasonably fit walkers
              complete it in a single long day, though many trekkers prefer to camp overnight near
              the meadows to catch the sunrise above the clouds.
            </p>
            <ul className="space-y-3">
              {[
                "No technical climbing or ropes required",
                "Steady incline with some steeper sections near the meadows",
                "Suitable for anyone with basic fitness and walking experience",
                "Overnight camping option for sunrise above the cloud line",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px]">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-snow transition-all hover:bg-pine"
            >
              <MessageCircle className="h-4 w-4" /> Ask us about guiding
            </a>
          </div>
        </div>
      </section>

      {/* Best season */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              When to go
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">Best season</h2>
            <p className="mt-3 text-muted-foreground">
              The ideal window is mid-May through October. Here is a season-by-season breakdown.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEASONS.map((s) => (
              <div
                key={s.m}
                className="reveal rounded-2xl border border-border/60 bg-snow p-6 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-forest" />
                  <span className="text-sm font-semibold text-pine">{s.m}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-pine">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                {s.best && (
                  <span className="mt-4 inline-block rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold text-forest">
                    Recommended
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing list */}
      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Be prepared
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">Packing list</h2>
            <p className="mt-4 text-muted-foreground">
              Packing well is about safety and comfort. At 12,000 feet the weather changes quickly
              and the temperature drops fast. Here is what we recommend to every trekker.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border-2 border-forest/20 bg-forest/5 p-4">
              <Tent className="h-5 w-5 text-forest" />
              <p className="text-sm text-foreground/80">
                <strong className="text-pine">Camping gear provided:</strong> We supply tents,
                sleeping bags, and equipment from the homestay. You only carry personal items.
              </p>
            </div>
          </div>
          <div className="reveal">
            <ul className="grid gap-3 sm:grid-cols-2">
              {PACKING.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border/50 bg-snow p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Backpack className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-snug text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Base camp CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-pine p-8 text-snow md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Stay at the base camp</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-snow/85">
              Staying close to the trailhead makes an early start far easier. A warm bed and a hot
              meal the night before — and after — the trek makes a real difference. We arrange
              guides, camping equipment, and timing for your climb.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-snow px-6 py-3 text-sm font-semibold text-pine transition-all hover:bg-cream"
              >
                <Mountain className="h-4 w-4" /> View rooms & pricing
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
          <Link
            to="/how-to-reach"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            <RouteIcon className="h-4 w-4" /> How to Reach <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/know-before-you-visit"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            <Backpack className="h-4 w-4" /> Know Before You Visit{" "}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/blog/category/trekking-guides"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            <Mountain className="h-4 w-4" /> Trekking Blog <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
