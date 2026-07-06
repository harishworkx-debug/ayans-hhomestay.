import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Snowflake,
  Sun,
  CloudRain,
  Backpack,
  HeartPulse,
  Wifi,
  Banknote,
  Phone,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";

export const Route = createFileRoute("/know-before-you-visit")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "Know Before You Visit — Seasons, Packing & Tips for Kinnaur | Ayansh Snow-View",
      description:
        "Plan your visit to Ayansh Snow-View and the Yulla Kanda trek with confidence. Season-by-season weather, what to pack, altitude safety, connectivity, currency, and essential travel tips for Kinnaur, Himachal Pradesh.",
      path: "/know-before-you-visit",
      image: "/assets/g4.jpg",
      imageAlt: "Alpine camping tent under snow peaks on the Yulla Kanda route",
    }),
    links: buildLinkTags("/know-before-you-visit"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Know Before You Visit", to: "/know-before-you-visit" },
      ]),
    ),
  }),
  component: KnowBeforePage,
});

const SEASONS = [
  {
    icon: Sun,
    m: "May - June",
    title: "Peak Trekking Season",
    weather: "15-25°C day, 5-10°C night",
    desc: "The best time for the Yulla Kanda trek. Trail is clear, meadows are green, wildflowers bloom. Pleasant days and cool nights.",
    color: "text-forest",
  },
  {
    icon: CloudRain,
    m: "July - August",
    title: "Monsoon & Festival",
    weather: "12-22°C with rain",
    desc: "Lush green landscape but afternoon rain is frequent. August brings the Janmashtami pilgrimage — a unique cultural experience.",
    color: "text-moss",
  },
  {
    icon: Sun,
    m: "Sept - October",
    title: "Clear & Crisp",
    weather: "10-20°C day, 2-8°C night",
    desc: "Skies clear again after monsoon. Sharpest mountain views of the year. Apple harvest season. Excellent for photography.",
    color: "text-forest",
  },
  {
    icon: Snowflake,
    m: "Nov - April",
    title: "Winter (Trek Closed)",
    weather: "Below 0°C, heavy snow",
    desc: "Heavy snow closes the high trail to Yulla Kanda. The village is quiet and beautiful under snow, but access is difficult.",
    color: "text-moss",
  },
];

const ESSENTIALS = [
  {
    icon: Backpack,
    title: "What to pack",
    items: [
      "Sturdy trekking shoes with good grip",
      "Warm layers — thermals, fleece, wind shell",
      "Rain jacket for afternoon weather changes",
      "Sunscreen (SPF 50), sunglasses, lip balm",
      "Reusable water bottle (min 2 litres)",
      "Basic personal first-aid kit",
    ],
  },
  {
    icon: HeartPulse,
    title: "Altitude & health",
    items: [
      "Spend a night at the homestay before trekking to acclimatise",
      "Drink far more water than usual — dehydration worsens symptoms",
      "Climb slowly — the trek is not a race",
      "Avoid alcohol and smoking before the climb",
      "Descend immediately if you feel dizzy or nauseous",
      "Carry any personal medication you need",
    ],
  },
  {
    icon: Banknote,
    title: "Money & payments",
    items: [
      "Rs.800 per person per night (all-inclusive with meals)",
      "Cash and UPI accepted on arrival",
      "Carry some cash for guides and local transport",
      "ATMs are limited in the Kinnaur valley — withdraw in Shimla",
      "No hidden charges at the homestay",
    ],
  },
  {
    icon: Wifi,
    title: "Connectivity",
    items: [
      "Mobile signal is patchy in the valleys",
      "Jio and BSNL work best in the Kinnaur region",
      "Download offline maps before leaving Shimla",
      "Wi-Fi is not available — embrace the digital detox",
      "Inform family about limited connectivity before you arrive",
    ],
  },
];

function KnowBeforePage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Plan Your Visit"
        title="Know before you visit"
        subtitle="Everything you need to plan a safe and enjoyable trip to Kinnaur and the Yulla Kanda trek — seasons, packing, health, and practical tips."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Know Before You Visit", to: "/know-before-you-visit" },
        ]}
      />

      {/* Season guide */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Season guide</h2>
            <p className="mt-3 text-muted-foreground">
              Kinnaur changes dramatically with the seasons. Choose the right time for your visit.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEASONS.map((s) => (
              <div
                key={s.m}
                className="reveal rounded-2xl border border-border/60 bg-snow p-6 shadow-soft"
              >
                <div className={`mb-4 ${s.color}`}>
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-moss" />
                  <span className="text-sm font-semibold text-pine">{s.m}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-pine">{s.title}</h3>
                <div className="mt-1 text-xs font-medium text-warm-brown">{s.weather}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials grid */}
      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Essential information</h2>
            <p className="mt-3 text-muted-foreground">
              Practical details to help you prepare for a smooth trip.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ESSENTIALS.map((e) => (
              <div
                key={e.title}
                className="reveal rounded-3xl border border-border/60 bg-snow p-7 shadow-soft"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/10 text-forest">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-pine">{e.title}</h3>
                </div>
                <ul className="space-y-3">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal rounded-3xl bg-gradient-to-br from-forest to-pine p-8 text-snow md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Quick reference</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Price", value: "Rs.800/person" },
                { label: "Check-in", value: "12:00 PM" },
                { label: "Trek altitude", value: "12,000 ft" },
                { label: "Best season", value: "May - October" },
                { label: "Forest walk", value: "1-2 km from Bustan" },
                { label: "Nearest hub", value: "Shimla (7-8 hrs)" },
                { label: "Trek difficulty", value: "Moderate" },
                { label: "Mobile network", value: "Jio / BSNL" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-sky-soft">
                    {f.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
          <Link
            to="/yulla-kanda-trek"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            Trek guide <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/how-to-reach"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            How to reach <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            FAQ <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-snow transition-all hover:bg-pine"
          >
            <Phone className="h-4 w-4" /> Contact us
          </Link>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
