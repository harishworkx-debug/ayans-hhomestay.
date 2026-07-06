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

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: buildMetaTags({
      title: "Privacy Policy | Ayansh Snow-View & Trekker's Nest",
      description:
        "Privacy policy for Ayansh Snow-View & Trekker's Nest. How we collect, use, and protect your personal information when you book a stay or contact us about the Yulla Kanda trek.",
      path: "/privacy-policy",
    }),
    links: buildLinkTags("/privacy-policy"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Privacy Policy", to: "/privacy-policy" },
      ]),
    ),
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    h: "Information we collect",
    p: "When you contact us via WhatsApp, phone, or email to book a stay or enquire about the Yulla Kanda trek, we may collect your name, contact number, email address, travel dates, and the number of guests in your party. We do not collect payment card details — payments are made on arrival via cash or UPI.",
  },
  {
    h: "How we use your information",
    p: "We use the information you provide solely to respond to your booking enquiry, confirm availability, coordinate your stay and trek arrangements, and communicate essential travel information. We do not send promotional messages without your consent.",
  },
  {
    h: "Information sharing",
    p: "We do not sell, rent, or share your personal information with any third party. Booking details may be shared with our local trekking guides or transport partners only when necessary to fulfil your requested arrangements.",
  },
  {
    h: "Data storage",
    p: "Your booking enquiries are stored securely in our database. We retain communication records only for as long as needed to provide our services and respond to any follow-up questions.",
  },
  {
    h: "Cookies and analytics",
    p: "This website does not use tracking cookies. We may use privacy-respecting analytics to understand aggregate traffic patterns. No personally identifiable information is shared with advertising networks.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to your request within a reasonable timeframe.",
  },
  {
    h: "Contact",
    p: `If you have any questions about this privacy policy, please contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

function PrivacyPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how we handle your information."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Privacy Policy", to: "/privacy-policy" },
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
              to="/terms"
              className="text-sm font-semibold text-forest transition-colors hover:text-pine"
            >
              Read our Terms & Conditions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
