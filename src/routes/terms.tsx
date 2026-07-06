import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: buildMetaTags({
      title: "Terms & Conditions | Ayansh Snow-View & Trekker's Nest",
      description:
        "Terms and conditions for booking a stay at Ayansh Snow-View & Trekker's Nest in Kinnaur, including pricing, cancellation, trek safety, and guest responsibilities.",
      path: "/terms",
    }),
    links: buildLinkTags("/terms"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Terms & Conditions", to: "/terms" },
      ]),
    ),
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    h: "Booking and confirmation",
    p: "All bookings are confirmed via WhatsApp, phone, or email. A booking is considered confirmed only after you receive an explicit confirmation message from us. We recommend booking in advance, especially during the peak trekking season (May to October) and the Janmashtami festival in August.",
  },
  {
    h: "Pricing",
    p: "Our all-inclusive rate is Rs.800 per person per night, covering accommodation, dinner, and breakfast. There are no hidden charges. Rates for camping equipment, guiding services, and transport arrangements will be communicated clearly before you confirm.",
  },
  {
    h: "Payment",
    p: "Payments are made on arrival via cash or UPI. We do not require advance online payments. For group bookings during peak season, we may request a small advance to confirm — this will always be discussed and agreed with you first.",
  },
  {
    h: "Cancellation",
    p: "We understand that mountain travel plans can change. Please inform us as early as possible if you need to cancel or modify your booking. No cancellation fee is charged for cancellations made more than 48 hours before the scheduled check-in. For late cancellations, we appreciate a courtesy intimation so we can offer the room to other guests.",
  },
  {
    h: "Trek safety and responsibility",
    p: "The Yulla Kanda trek involves significant altitude (12,000 ft) and physical exertion. Guests participate in the trek at their own risk. We provide experienced local guides and quality equipment, but we are not liable for altitude sickness, weather-related incidents, or injuries sustained during the trek. We strongly recommend that all guests have adequate travel and health insurance.",
  },
  {
    h: "Guest conduct",
    p: "We request all guests to respect the local culture, the village environment, and the natural surroundings. Loud music, littering, and any disturbance to the village community are not permitted. We are a family homestay and wish to maintain a peaceful atmosphere for all guests.",
  },
  {
    h: "Force majeure",
    p: "We are not liable for cancellations or changes caused by circumstances beyond our control, including landslides, road closures, extreme weather, or government restrictions. In such cases, we will work with you to reschedule your stay or arrange the best possible alternative.",
  },
  {
    h: "Contact",
    p: `For any questions about these terms, please contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

function TermsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before booking your stay."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Terms & Conditions", to: "/terms" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div className="mt-8 space-y-8">
            {SECTIONS.map((s, i) => (
              <div key={s.h}>
                <h2 className="text-lg font-semibold text-pine">
                  {i + 1}. {s.h}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.8] text-foreground/75">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-border/40 pt-6">
            <Link
              to="/privacy-policy"
              className="text-sm font-semibold text-forest transition-colors hover:text-pine"
            >
              Read our Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
