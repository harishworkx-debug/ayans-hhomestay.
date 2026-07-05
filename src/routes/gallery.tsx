import { createFileRoute } from "@tanstack/react-router";
import { Camera, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import aboutImg from "../assets/about.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Ayansh Snow-View & Trekker's Nest, Kinnaur" },
      {
        name: "description",
        content:
          "Explore moments from our Kinnauri homestay — traditional village life, bonfire nights, mountain sunrises, alpine camping, and the Yulla Kanda trek. See the beauty of Ayansh Snow-View.",
      },
      { property: "og:title", content: "Photo Gallery — Ayansh Snow-View, Kinnaur" },
      {
        property: "og:description",
        content:
          "Photos from the Himalayas — traditional Kinnauri homestay, mountain views, trek experiences, and authentic village life.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const GALLERY_IMAGES = [
  { src: g3, alt: "Sunrise over Himalayan peaks at Yulla Kanda", span: "row-span-2" },
  { src: g1, alt: "Kinnauri village life and traditional architecture" },
  { src: g4, alt: "Alpine camping under snow peaks" },
  { src: g6, alt: "Sacred temples with prayer flags at 12000 ft" },
  { src: g2, alt: "Bonfire under starlit Himalayan sky" },
  { src: g7, alt: "Sunlit pine forest trail near homestay" },
  { src: g5, alt: "Traditional Himachali home-cooked meal" },
  { src: aboutImg, alt: "Traditional wooden Kinnauri homestay", span: "row-span-2" },
];

const CATEGORIES = [
  { title: "Mountain Views", count: 12 },
  { title: "Village Life", count: 8 },
  { title: "Trek Moments", count: 15 },
  { title: "Homestay", count: 6 },
];

function GalleryPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/60 to-snow" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
                <Camera className="h-3.5 w-3.5" /> Gallery
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-6xl">
                Moments from the mountain
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Glimpses of life at Ayansh Snow-View — sunrises, treks, bonfires, and the warmth of
                Kinnauri hospitality.
              </p>
            </div>

            {/* Categories */}
            <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  className="rounded-full border border-border/60 bg-snow px-4 py-2 text-sm font-medium text-pine transition-all hover:border-forest/30 hover:bg-cream"
                >
                  {cat.title} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[280px] md:grid-cols-3 lg:grid-cols-4">
              {GALLERY_IMAGES.map((g, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl ${g.span || ""}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-snow opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-medium">{g.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience CTA */}
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">
              Experience It in Person
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Come create your own memories in the Himalayas
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:scale-[1.03] hover:bg-pine"
              >
                <MessageCircle className="h-5 w-5" />
                Book Your Stay
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+918920114710"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-snow px-8 py-4 text-sm font-semibold text-pine transition-all hover:bg-cream"
              >
                <Phone className="h-4 w-4" /> +91 89201 14710
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
