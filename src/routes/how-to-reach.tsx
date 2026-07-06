import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Plane, Brain as Train, Trees, MapPin, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { IMAGES } from "@/lib/content";

export const Route = createFileRoute("/how-to-reach")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "How to Reach Yulla Khas, Kinnaur — Routes from Shimla & Chandigarh | Ayansh Snow-View",
      description:
        "Complete route guide to reach Ayansh Snow-View homestay in Yulla Khas, Kinnaur. Directions from Shimla (7-8 hrs) and Chandigarh (9-10 hrs), the 1-2 km forest walk from Bustan, and transport tips for Himachal Pradesh.",
      path: "/how-to-reach",
      image: "/assets/g7.jpg",
      imageAlt: "Sunlit pine forest trail near Yulla Khas village in Kinnaur",
    }),
    links: buildLinkTags("/how-to-reach"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "How to Reach", to: "/how-to-reach" },
      ]),
    ),
  }),
  component: HowToReachPage,
});

const ROUTES = [
  {
    icon: Train,
    title: "From Shimla",
    time: "7-8 hours by road",
    points: [
      "Shimla is the nearest major rail and air hub to Kinnaur.",
      "From Shimla, the drive follows the Satluj river valley towards the Nichar area.",
      "State-run buses and shared taxis run from Shimla towards Rampur and onward.",
      "Private taxi hire is the most comfortable option for the final stretch.",
    ],
  },
  {
    icon: Plane,
    title: "From Chandigarh",
    time: "9-10 hours by road",
    points: [
      "Chandigarh is the closest major airport if you are flying in.",
      "The drive from Chandigarh to the Kinnaur valley takes about 9 to 10 hours.",
      "Many travellers break the journey with an overnight stop in Shimla or Rampur.",
      "Hire an experienced local driver — the mountain roads are narrow in places.",
    ],
  },
  {
    icon: Car,
    title: "By Bus or Taxi",
    time: "Regular services",
    points: [
      "HRTC buses run from Shimla to Kinnaur via the NH-5 highway.",
      "Shared taxis are available from Shimla and Rampur to nearby towns.",
      "For the final approach to Bustan, a private taxi is usually needed.",
      "We can help arrange a pickup from Shimla or nearby towns on request.",
    ],
  },
];

function HowToReachPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Getting Here"
        title="How to reach Yulla Khas in Kinnaur"
        subtitle="Reaching our homestay is part of the adventure. The village sits off the main tourist circuit — and that is exactly what makes it special."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "How to Reach", to: "/how-to-reach" },
        ]}
      />

      {/* The forest walk highlight */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal overflow-hidden rounded-3xl border-2 border-forest/20 bg-gradient-to-r from-forest/5 to-moss/5 p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest text-snow">
                <Trees className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-pine md:text-2xl">
                  The final stretch: a 1-2 km forest walk from Bustan
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Most vehicles terminate at Bustan. From there, our homestay is a scenic 1 to 2
                  kilometre walk along a forested path through pine forest with occasional valley
                  views. This short walk is not a drawback — it is a gentle introduction to the
                  landscape. Porters and mule support for luggage can be arranged on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route options */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Route options</h2>
            <p className="mt-3 text-muted-foreground">
              Three common ways to reach the Kinnaur valley.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROUTES.map((r) => (
              <div
                key={r.title}
                className="reveal rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/10 text-forest">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs font-medium text-warm-brown">
                    <Clock className="h-3 w-3" /> {r.time}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-pine">{r.title}</h3>
                <ul className="mt-4 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel tips */}
      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative">
            <img
              src={IMAGES.g7}
              alt="Sunlit pine forest trail near Yulla Khas village in Kinnaur"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Travel tips
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
              Tips for the drive
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "The mountain roads are narrow in places — hire an experienced local driver if you are not confident.",
                "Travel during daylight — the forest walk from Bustan is much easier and safer in good light.",
                "Check road conditions during monsoon season (July-August) as landslides can occasionally delay travel.",
                "Carry warm clothing — even the drive through the mountains can get chilly, especially after sunset.",
                "Download offline maps before you leave Shimla — mobile signal is patchy in the valleys.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">Where to find us</h2>
            <p className="mt-3 text-muted-foreground">
              Village Yulla Khas, Tehsil Nichar, District Kinnaur, Himachal Pradesh — 172104.
            </p>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-3xl border border-border/60 shadow-soft">
            <iframe
              title="Map showing the location of Ayansh Snow-View & Trekker's Nest in Yulla Khas, Kinnaur"
              src={SITE.mapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="reveal mt-6 text-center">
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-snow"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            View rooms <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/know-before-you-visit"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            Know before you visit <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-snow transition-all hover:bg-pine"
          >
            <MessageCircle className="h-4 w-4" /> Arrange a pickup
          </a>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
