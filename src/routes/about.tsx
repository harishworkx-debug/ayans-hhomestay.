import { createFileRoute, Link } from "@tanstack/react-router";
import { Mountain, Trees, HeartHandshake, ArrowUpRight, Route as RouteIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import {
  buildMetaTags,
  buildLinkTags,
  localBusinessSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { IMAGES } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMetaTags({
      title: "About Ayansh Snow-View — A Traditional Kinnauri Homestay in Yulla Khas",
      description:
        "Learn about Ayansh Snow-View & Trekker's Nest, a traditional wooden Kinnauri homestay in Village Yulla Khas, Kinnaur. Over 12 years of hosting trekkers for the Yulla Kanda Trek with warm hospitality and home-cooked meals.",
      path: "/about",
      image: "/assets/about.jpg",
      imageAlt: "Traditional wooden Kinnauri architecture at Ayansh Snow-View homestay",
    }),
    links: buildLinkTags("/about"),
    scripts: jsonLdScripts(
      localBusinessSchema(),
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
      ]),
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Story"
        title="A quiet corner of Kinnaur, built in wood and warmth."
        subtitle="An offbeat homestay in Village Yulla Khas — the starting point of the sacred Yulla Kanda Trek to the world's highest Krishna temple."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "About", to: "/about" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
          <div className="reveal relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-cream md:h-40 md:w-40" />
            <img
              src={IMAGES.about}
              alt="Traditional wooden Kinnauri homestay exterior in Yulla Khas village"
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

          <div className="reveal space-y-5 text-[15.5px] leading-[1.85] text-foreground/75">
            <h2 className="text-2xl font-semibold text-pine md:text-3xl">Our home in the mountains</h2>
            <p>
              <span className="font-semibold text-pine">{SITE.name}</span> is an offbeat homestay
              situated in Village Yulla Khas, deep in the mountains of Kinnaur. Built entirely in
              the traditional wooden Kinnauri style, our home has stood quietly amidst pine forests
              and snow peaks for generations.
            </p>
            <p>
              We offer peaceful accommodation, delicious home-cooked meals and breathtaking
              Himalayan views — and we serve as the starting point for the famous Yulla Kanda Trek,
              home to the highest Krishna temple in the world.
            </p>
            <p>
              For over a decade, we have welcomed trekkers, pilgrims, photographers and families
              into our home. We are not a hotel. We are a family that opens its doors to people who
              want to experience the real Kinnaur — its silence, its scale, and its warmth.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
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
          </div>
        </div>
      </section>

      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">What we believe in</h2>
            <p className="mt-4 text-muted-foreground">
              The values that shape every stay at our homestay.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                t: "Genuine Hospitality",
                d: "We treat every guest as one of our own. The conversations around the evening bonfire are often what guests remember most.",
              },
              {
                icon: Trees,
                t: "Living With Nature",
                d: "Our home is built from local wood and surrounded by pine forest. We live gently with the land and invite you to do the same.",
              },
              {
                icon: Mountain,
                t: "The Trekking Life",
                d: "We know these trails personally. Our family has guided trekkers to Yulla Kanda for over a decade, in all seasons and weather.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="reveal rounded-3xl border border-border/60 bg-snow p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-pine">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal rounded-3xl border-2 border-moss/30 bg-moss/5 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <RouteIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-pine md:text-3xl">
                  Adventure begins with a forest walk
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                  Our homestay is located 1-2 km from Bustan via a scenic trek through pine forests.
                  This beautiful walk is part of the experience — arrive prepared for a short
                  adventure and immerse yourself in nature from the moment you step off the road.
                  Porters and mule support are available for luggage on request.
                </p>
                <Link
                  to="/how-to-reach"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-pine"
                >
                  How to reach us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
