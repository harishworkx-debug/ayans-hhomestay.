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

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: buildMetaTags({
      title: "Sitemap — All Pages of Ayansh Snow-View & Trekker's Nest",
      description:
        "A complete index of every page on the Ayansh Snow-View website — home, rooms, trek guide, gallery, blog, contact, legal pages and more.",
      path: "/sitemap",
      noindex: true,
    }),
    links: buildLinkTags("/sitemap"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Sitemap", to: "/sitemap" },
      ]),
    ),
  }),
  component: SitemapPage,
});

type SitemapGroup = { heading: string; links: { label: string; to: string; desc?: string }[] };

const GROUPS: SitemapGroup[] = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", to: "/", desc: "Yulla Kanda Trek Homestay in Kinnaur" },
      { label: "About", to: "/about", desc: "Our story and traditional Kinnauri homestay" },
      { label: "Rooms & Pricing", to: "/rooms", desc: "Wooden rooms at Rs.800/person with meals" },
      { label: "Yulla Kanda Trek Guide", to: "/yulla-kanda-trek", desc: "Complete 12,000 ft trek guide" },
      { label: "Gallery", to: "/gallery", desc: "Photos of the homestay and mountains" },
      { label: "Contact", to: "/contact", desc: "Book your stay via WhatsApp or phone" },
    ],
  },
  {
    heading: "Travel Information",
    links: [
      { label: "How to Reach", to: "/how-to-reach", desc: "Routes, transport and the forest walk" },
      { label: "Know Before You Visit", to: "/know-before-you-visit", desc: "Seasons, packing and travel tips" },
      { label: "FAQ", to: "/faq", desc: "Frequently asked questions answered" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { label: "Blog Home", to: "/blog", desc: "Trekking guides, Kinnaur travel and homestay stories" },
      { label: "Trekking Guides", to: "/blog/category/trekking-guides", desc: "Practical trek guides for Yulla Kanda and Kinnaur" },
      { label: "Kinnaur Travel", to: "/blog/category/kinnaur-travel", desc: "Routes, seasons, permits and local culture" },
      { label: "Homestay Stories", to: "/blog/category/homestay-stories", desc: "Real experiences from guests and village life" },
    ],
  },
  {
    heading: "Legal & Utility",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "XML Sitemap", to: "/sitemap.xml" },
    ],
  },
];

function SitemapPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Site Index"
        title="Sitemap"
        subtitle="A complete index of every page on the Ayansh Snow-View website. Use this to find any page quickly."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Sitemap", to: "/sitemap" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {GROUPS.map((g) => (
              <div key={g.heading} className="rounded-2xl border border-border/60 bg-cream/30 p-7">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-moss">
                  {g.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="group block rounded-xl px-3 py-2 transition-colors hover:bg-snow"
                      >
                        <span className="flex items-center gap-1 text-[15px] font-medium text-pine transition-colors group-hover:text-forest">
                          {l.label}
                        </span>
                        {l.desc && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {l.desc}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border/60 bg-snow p-7 text-center">
            <p className="text-sm text-muted-foreground">
              For search engines, an XML sitemap is also available at{" "}
              <Link to="/sitemap.xml" className="font-medium text-forest hover:text-pine">
                /sitemap.xml
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
