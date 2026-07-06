import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, MessageCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  faqSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { FAQS } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "FAQ — Frequently Asked Questions | Ayansh Snow-View & Trekker's Nest, Kinnaur",
      description:
        "Answers to common questions about staying at Ayansh Snow-View homestay in Yulla Khas, Kinnaur: location, pricing (Rs.800/person), Yulla Kanda trek difficulty, best season, food, booking, and family-friendly stays.",
      path: "/faq",
      image: "/assets/g2.jpg",
      imageAlt: "Bonfire evening under a starlit sky at Ayansh Snow-View homestay",
    }),
    links: buildLinkTags("/faq"),
    scripts: jsonLdScripts(
      faqSchema(FAQS),
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "FAQ", to: "/faq" },
      ]),
    ),
  }),
  component: FaqPage,
});

function FaqPage() {
  useReveal();
  const [open, setOpen] = useState<number>(0);
  return (
    <Layout>
      <PageHeader
        eyebrow="Questions & Answers"
        title="Frequently asked questions"
        subtitle="Everything you need to know about staying with us and trekking to Yulla Kanda. Still have questions? Message us on WhatsApp."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "FAQ", to: "/faq" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="reveal overflow-hidden rounded-2xl border border-border/60 bg-snow shadow-soft"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-pine">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-forest transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-10 rounded-2xl border-2 border-forest/20 bg-gradient-to-r from-forest/5 to-moss/5 p-7 text-center">
            <h2 className="text-lg font-semibold text-pine">Still have questions?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We are happy to help. Message us directly and we will get back to you quickly.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-snow transition-all hover:bg-pine"
              >
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-snow"
              >
                Contact page <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
