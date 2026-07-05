import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Mountain, MapPin, Phone, ArrowUpRight, Trees } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import aboutImg from "../assets/about.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ayansh Snow-View & Trekker's Nest, Kinnaur" },
      {
        name: "description",
        content:
          "Traditional Kinnauri wooden homestay in Village Yulla Khas. We offer authentic hospitality, home-cooked meals, and serve as base camp for Yulla Kanda Trek. Located 1-2 km trek from Bustan amidst pine forests.",
      },
      { property: "og:title", content: "About Ayansh Snow-View — Kinnauri Homestay" },
      {
        property: "og:description",
        content:
          "Experience authentic Kinnauri hospitality in our traditional wooden homestay. Peaceful location, mountain views, and warm local hospitality.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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
              <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-moss">
                <Trees className="h-3.5 w-3.5" /> Our Story
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-6xl">
                A quiet corner of Kinnaur, built in wood and warmth
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Authentic wooden homestay in Village Yulla Khas — where tradition meets tranquility
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-cream md:h-48 md:w-48" />
              <img
                src={aboutImg}
                alt="Traditional wooden Kinnauri architecture at Ayansh Snow-View"
                width={1200}
                height={1400}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-6 py-5 text-snow shadow-lift md:block">
                <div className="text-3xl font-semibold">12,000 ft</div>
                <div className="text-xs uppercase tracking-widest opacity-80">
                  Yulla Kanda Summit
                </div>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-pine md:text-4xl">
                Traditional Kinnauri Hospitality
              </h2>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.85] text-foreground/75">
                <p>
                  <span className="font-semibold text-pine">
                    Ayansh Snow-View & Trekker's Nest
                  </span>{" "}
                  is an offbeat homestay situated in Village Yulla Khas, deep in the mountains of
                  Kinnaur. Built entirely in the traditional wooden Kinnauri style, our home has
                  stood quietly amidst pine forests and snow peaks for generations.
                </p>
                <p>
                  We offer peaceful accommodation, delicious home-cooked meals and breathtaking
                  Himalayan views — and we serve as the starting point for the famous{" "}
                  <Link to="/trek" className="text-forest underline underline-offset-4">
                    Yulla Kanda Trek
                  </Link>
                  , home to the highest Krishna temple in the world at 12,000 feet.
                </p>
                <p>
                  Our homestay is the <strong>nearest and best base camp</strong> for the sacred
                  Yulla Kanda Trek. When you plan your pilgrimage to this divine summit, start your
                  journey with us — where the mountains welcome you with open arms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info - Bustan Trek */}
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-3xl text-center">
              <MapPin className="mx-auto h-10 w-10 text-moss" />
              <h2 className="mt-4 text-3xl font-semibold text-pine md:text-4xl">
                How to Reach Us
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A beautiful 1-2 km trek from Bustan awaits you
              </p>
            </div>

            <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
              {/* Trek Info Card */}
              <div className="rounded-3xl border border-border/60 bg-snow p-8 shadow-soft">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                    <Mountain className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-pine">1-2 km Trek from Bustan</h3>
                    <p className="text-sm text-muted-foreground">A scenic walk through nature</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/75">
                  <p>
                    Our homestay is located approximately <strong className="text-pine">1-2
                    kilometers from Bustan</strong>, accessible via a beautiful trek through pine
                    forests and apple orchards. This short walk through the serene Kinnauri
                    landscape adds to the sense of adventure and tranquility that defines our
                    location.
                  </p>
                  <p>
                    The trek from Bustan takes about <strong className="text-pine">30-45 minutes</strong>{" "}
                    and offers stunning views of the surrounding mountains. It's the perfect way to
                    transition from the busy world to the peaceful sanctuary of our homestay.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-moss/10 p-4">
                  <p className="text-sm font-medium text-pine">
                    <strong>Important:</strong> Please come prepared with comfortable walking shoes
                    and a spirit of adventure. The trek is moderate in difficulty and suitable for
                    most guests.
                  </p>
                </div>
              </div>

              {/* Travel Tips Card */}
              <div className="rounded-3xl border border-border/60 bg-snow p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-pine">Travel Tips</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    { title: "From Shimla", desc: "Approximately 8-9 hours by road via NH5" },
                    { title: "Nearest Airport", desc: "Shimla Airport (approx. 200 km)" },
                    { title: "Local Transport", desc: "Taxis available from Reckong Peo to Bustan" },
                    { title: "Best Season", desc: "April to June, September to November" },
                  ].map((tip) => (
                    <li key={tip.title} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
                      <div>
                        <strong className="text-pine">{tip.title}:</strong>{" "}
                        <span className="text-muted-foreground">{tip.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-snow shadow-soft transition-all hover:bg-pine"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact for Travel Help
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "12+", l: "Years hosting guests" },
                { n: "12,000 ft", l: "Yulla Kanda summit" },
                { n: "1-2 km", l: "Trek from Bustan" },
                { n: "4.9★", l: "Guest rating" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border/70 bg-cream/40 p-6 text-center"
                >
                  <div className="text-3xl font-semibold text-forest">{s.n}</div>
                  <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-pine md:text-4xl">
              Ready to Experience Authentic Kinnauri Hospitality?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book your stay today and immerse yourself in the peaceful beauty of the Himalayas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-snow shadow-lift transition-all hover:scale-[1.03] hover:bg-pine"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
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
