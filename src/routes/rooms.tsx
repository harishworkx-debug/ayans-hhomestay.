import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Bed, UtensilsCrossed, ArrowUpRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { ROOMS } from "@/lib/content";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: buildMetaTags({
      title: "Rooms & Pricing — Kinnauri Wooden Rooms at Rs.800/Person | Ayansh Snow-View",
      description:
        "Comfortable wooden rooms at Ayansh Snow-View homestay in Kinnaur. Pine Deluxe, Cedar Twin, and Snow-View Family Suite. All-inclusive Rs.800 per person per night with dinner and breakfast. No hidden charges.",
      path: "/rooms",
      image: "/assets/room1.jpg",
      imageAlt: "Pine Deluxe Room with queen bed and mountain view at Ayansh Snow-View",
    }),
    links: buildLinkTags("/rooms"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Rooms & Pricing", to: "/rooms" },
      ]),
    ),
  }),
  component: RoomsPage,
});

const INCLUDED = [
  "Comfortable accommodation in a traditional wooden room",
  "Traditional Kinnauri dinner (rajma-chawal, seasonal vegetables, and more)",
  "Hot breakfast before you start your day or trek",
  "Mountain views from every room",
  "Access to bonfire evenings and common areas",
  "Local guidance for the Yulla Kanda trek and nearby trails",
];

const POLICIES = [
  { label: "Check-in", value: "12:00 PM onwards" },
  { label: "Check-out", value: "11:00 AM" },
  { label: "Pricing", value: "Rs.800 per person per night (all-inclusive)" },
  { label: "Children", value: "Welcome — family suite available" },
  { label: "Pets", value: "Please enquire in advance" },
  { label: "Payment", value: "Cash or UPI on arrival" },
];

function RoomsPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Rooms & Pricing"
        title="Simple wooden rooms. Extraordinary views."
        subtitle="Each room is finished in local Kinnauri pine and set to open onto the valley — quiet, warm, and honest. All stays include dinner and breakfast."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Rooms & Pricing", to: "/rooms" },
        ]}
      />

      {/* Pricing banner */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-col gap-6 rounded-2xl border-2 border-forest/20 bg-gradient-to-r from-forest/5 to-moss/5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-pine">All-Inclusive Pricing</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  <strong className="text-forest">Rs.800 per person per night</strong> includes
                  comfortable stay, traditional dinner, and hot breakfast. No hidden charges.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest">Rs.800</div>
              <div className="text-xs text-muted-foreground">Per Person / Night</div>
            </div>
          </div>
        </div>
      </section>

      {/* Room cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="text-xl font-semibold text-pine">{r.name}</h2>
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
                    <MessageCircle className="h-4 w-4" /> Book This Room
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              What's included
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
              Everything in one simple price
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe in transparent pricing. The price you see is the price you pay.
            </p>
            <ul className="mt-8 space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
              Stay policies
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">Good to know</h2>
            <div className="mt-8 divide-y divide-border/60 rounded-2xl border border-border/60 bg-snow">
              {POLICIES.map((p) => (
                <div key={p.label} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-medium text-pine">{p.label}</span>
                  <span className="text-sm text-muted-foreground">{p.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-snow transition-all hover:bg-pine"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <Link
                to="/faq"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-3.5 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-snow"
              >
                Read FAQ <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
