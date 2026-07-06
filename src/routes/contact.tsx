import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  localBusinessSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMetaTags({
      title: "Contact & Book Your Stay | Ayansh Snow-View & Trekker's Nest, Kinnaur",
      description:
        "Book your stay at Ayansh Snow-View homestay in Yulla Khas, Kinnaur. WhatsApp +91 98059 14020 for availability, trek planning, and pickup arrangements. Located in Village Yulla Khas, Himachal Pradesh.",
      path: "/contact",
      image: "/assets/cta.jpg",
      imageAlt: "Snow peaks at twilight near Yulla Kanda in Kinnaur",
    }),
    links: buildLinkTags("/contact"),
    scripts: jsonLdScripts(
      localBusinessSchema(),
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Contact", to: "/contact" },
      ]),
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Get in Touch"
        title="Book your stay"
        subtitle="The quickest way to reach us is WhatsApp. Tell us your dates and we will help you plan everything — the stay, the trek, and the journey."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Contact", to: "/contact" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Contact methods */}
          <div className="reveal space-y-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-3xl border border-border/60 bg-snow p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-pine">WhatsApp (recommended)</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fastest response. Tap to start a chat with us directly.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                  {SITE.phone}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group flex items-start gap-5 rounded-3xl border border-border/60 bg-snow p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <Phone className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-pine">Call us</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Available during daytime hours. We may be helping guests — please try WhatsApp if
                  unanswered.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                  {SITE.phone}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-start gap-5 rounded-3xl border border-border/60 bg-snow p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-snow">
                <Mail className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-pine">Email</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  For longer enquiries or itinerary planning.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                  {SITE.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            <div className="rounded-3xl border border-border/60 bg-cream/40 p-6">
              <div className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-pine">Our location</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Village & P.O. Yulla Khas, Tehsil Nichar,
                    <br />
                    District Kinnaur, Himachal Pradesh — 172104
                    <br />
                    <span className="text-warm-brown">
                      1-2 km forest walk from Bustan road-head
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking info + map */}
          <div className="reveal space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-forest to-pine p-7 text-snow">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-sky-soft" />
                <h2 className="text-lg font-semibold">Booking details</h2>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-snow/15 pb-3">
                  <dt className="text-snow/70">Price</dt>
                  <dd className="font-semibold">Rs.800 per person/night</dd>
                </div>
                <div className="flex justify-between border-b border-snow/15 pb-3">
                  <dt className="text-snow/70">Includes</dt>
                  <dd className="font-semibold">Stay + dinner + breakfast</dd>
                </div>
                <div className="flex justify-between border-b border-snow/15 pb-3">
                  <dt className="text-snow/70">Check-in</dt>
                  <dd className="font-semibold">12:00 PM onwards</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-snow/70">Check-out</dt>
                  <dd className="font-semibold">11:00 AM</dd>
                </div>
              </dl>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-snow px-6 py-3.5 text-sm font-semibold text-pine transition-all hover:bg-cream"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-soft">
              <iframe
                title="Map showing the location of Ayansh Snow-View & Trekker's Nest in Yulla Khas, Kinnaur"
                src={SITE.mapsEmbed}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
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
            View rooms & pricing <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/how-to-reach"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            How to reach us <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            FAQ <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
