import { createFileRoute } from "@tanstack/react-router";
import { Camera, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Photo Gallery — Ayansh Snow-View & Yulla Kanda Trek",
      },
      {
        name: "description",
        content:
          "Browse photos of Ayansh Snow-View homestay, Yulla Kanda Trek, sacred Yulla Lake, Krishna temple, traditional Kinnauri village life, and Himalayan mountain views in Kinnaur.",
      },
      {
        property: "og:title",
        content: "Photo Gallery — Yulla Khas & Yulla Kanda Trek",
      },
      {
        property: "og:description",
        content:
          "Visual journey through our homestay, village life, trekking trails, and sacred temples in Kinnaur, Himachal Pradesh.",
      },
      {
        property: "og:url",
        content: "/gallery",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <GalleryHero />
        <HomestayGallery />
        <VillageGallery />
        <TrekGallery />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function GalleryHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <Camera className="h-3.5 w-3.5" /> Photo Gallery
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Moments from the Mountain
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          A visual journey through our homestay, village life, trekking trails,
          and the sacred peaks of Kinnaur.
        </p>
      </div>
    </section>
  );
}

const HOMESTAY_PHOTOS = [
  { src: "/src/assets/room1.jpg", alt: "Pine Deluxe Room with mountain view through wooden windows" },
  { src: "/src/assets/room2.jpg", alt: "Cedar Twin Room with traditional log walls and warm lighting" },
  { src: "/src/assets/room3.jpg", alt: "Snow-View Family Suite with panoramic valley windows" },
  { src: "/src/assets/about.jpg", alt: "Traditional Kinnauri wooden architecture of Ayansh Snow-View homestay" },
];

function HomestayGallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Our Homestay
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Wooden rooms and mountain views
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Experience authentic Kinnauri architecture with modern comfort.
          </p>
        </div>

        <div className="reveal mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-4">
          {HOMESTAY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VILLAGE_PHOTOS = [
  { src: "/src/assets/g1.jpg", alt: "Traditional Village Life in Yulla Khas Kinnaur" },
  { src: "/src/assets/g2.jpg", alt: "Bonfire night under starlit sky in Kinnaur" },
  { src: "/src/assets/g7.jpg", alt: "Sunlit pine forest trail near Yulla village" },
  { src: "/src/assets/g6.jpg", alt: "Sacred temple with prayer flags fluttering in wind" },
];

function VillageGallery() {
  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Village Life
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Slow days, starlit nights
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Experience the rhythm of authentic Himalayan village life.
          </p>
        </div>

        <div className="reveal mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-4">
          {VILLAGE_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${i === 1 ? "row-span-2" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TREK_PHOTOS = [
  { src: "/src/assets/trek.jpg", alt: "Yulla Kanda Trek trail with snow-capped Himalayan peaks" },
  { src: "/src/assets/g3.jpg", alt: "Mountain sunrise over Kinnaur Kailash range" },
  { src: "/src/assets/g4.jpg", alt: "Alpine camping meadow with wildflowers and snow peaks" },
  { src: "/src/assets/g5.jpg", alt: "Traditional Himachali home-cooked rajma chawal meal" },
  { src: "/src/assets/hero.jpg", alt: "Snow peaks and pine forest landscape in Kinnaur" },
  { src: "/src/assets/cta.jpg", alt: "Twilight snow peaks at Yulla Kanda summit" },
];

function TrekGallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Yulla Kanda Trek
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Sacred trails and summit views
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            From forest trails to the world's highest Krishna temple at 12,000+ feet.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TREK_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Want to experience this in person?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          Book your stay and create your own mountain memories.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
        >
          <MessageCircle className="h-5 w-5" />
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-pine text-snow/85">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="text-sm">
          © 2026 Ayansh Snow-View & Trekker's Nest. All Rights Reserved.
        </div>
        <div className="text-xs text-snow/60">
          Village Yulla Khas, Kinnaur, Himachal Pradesh — 172104
        </div>
      </div>
    </footer>
  );
}
