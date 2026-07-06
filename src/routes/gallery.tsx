import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  imageObjectSchema,
  jsonLdScripts,
} from "@/lib/seo";
import { GALLERY } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "Gallery — Photos of Yulla Kanda Trek, Kinnaur Mountains & Homestay | Ayansh Snow-View",
      description:
        "Photo gallery of the Yulla Kanda trek, Himalayan sunrises, alpine meadows, traditional Kinnauri village life, bonfire nights and the Ayansh Snow-View homestay in Kinnaur, Himachal Pradesh.",
      path: "/gallery",
      image: "/assets/g3.jpg",
      imageAlt: "Sunrise over the Himalayan peaks of the Kinnaur Kailash range",
    }),
    links: buildLinkTags("/gallery"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Gallery", to: "/gallery" },
      ]),
      imageObjectSchema("/assets/g3.jpg", "Sunrise over the Kinnaur Kailash range"),
      imageObjectSchema("/assets/g6.jpg", "Krishna temple with prayer flags at Yulla Kanda"),
      imageObjectSchema("/assets/trek.jpg", "Yulla Kanda trekking trail with snow peaks"),
    ),
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Gallery"
        title="Life at 12,000 feet, in pictures."
        subtitle="Sunrises over the Kinnaur Kailash, the trail to Yulla Kanda, bonfire evenings and the quiet of a Kinnauri village."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Gallery", to: "/gallery" },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <figure
                key={i}
                className={`reveal group relative overflow-hidden rounded-2xl shadow-soft ${g.span ?? ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={600}
                  loading={i < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-snow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-xs font-medium leading-snug">
                    <Camera className="h-3 w-3 shrink-0" /> {g.alt}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
          <Link
            to="/yulla-kanda-trek"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            Read the trek guide <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
          >
            View rooms <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
