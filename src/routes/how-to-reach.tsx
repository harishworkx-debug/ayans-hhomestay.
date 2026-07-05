import { createFileRoute } from "@tanstack/react-router";
import { Car, MapPin, Route as RouteIcon, Trees, Mountain, MessageCircle, Phone, Clock, Fuel, TriangleAlert as AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/how-to-reach")({
  head: () => ({
    meta: [
      {
        title: "How to Reach Ayansh Snow-View — Yulla Khas, Kinnaur",
      },
      {
        name: "description",
        content:
          "Detailed directions to reach Ayansh Snow-View & Trekker's Nest in Yulla Khas, Kinnaur. Drive from Shimla via NH-5, cross Satluj River, reach Bustan, and enjoy a scenic 1-2 km walk to the homestay.",
      },
      {
        property: "og:title",
        content: "How to Reach — Yulla Khas Homestay Directions",
      },
      {
        property: "og:description",
        content:
          "Complete route guide from Shimla to Yulla Khas via Reckong Peo. Includes road conditions, parking, and the final scenic walk from Bustan.",
      },
      {
        property: "og:url",
        content: "/how-to-reach",
      },
    ],
    links: [{ rel: "canonical", href: "/how-to-reach" }],
  }),
  component: HowToReachPage,
});

function HowToReachPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <RouteOverview />
        <StepByStep />
        <FinalWalk />
        <TravelTips />
        <MapSection />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <RouteIcon className="h-3.5 w-3.5" /> Directions
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          How to Reach Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          A scenic journey through the Himalayas ends with a beautiful walk to
          our peaceful village homestay.
        </p>
      </div>
    </section>
  );
}

function RouteOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Route Overview
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            The journey is part of the adventure
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            Reaching Ayansh Snow-View & Trekker's Nest involves a scenic drive
            from Shimla through the beautiful Kinnaur valley, followed by a
            short, rewarding walk that sets the tone for your mountain retreat.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Car, label: "From Shimla", value: "Approximately 250 km" },
            { icon: Clock, label: "Drive Time", value: "8-10 hours" },
            { icon: Mountain, label: "Final Walk", value: "1-2 km from Bustan" },
            { icon: Trees, label: "Environment", value: "Eco-Friendly Access" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                {stat.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-pine">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: MapPin,
    title: "Start from Shimla",
    desc: "Begin your journey from Shimla, the capital of Himachal Pradesh. Shimla is well-connected by road, rail, and the nearest airport (Jubbarhatti, though flights are limited).",
    time: "Starting Point",
  },
  {
    icon: RouteIcon,
    title: "Drive towards Tapri on NH-5",
    desc: "Follow National Highway 5 (NH-5) from Shimla towards Tapri. The route passes through Narkanda, Rampur, and offers stunning views of the Satluj River valley.",
    time: "180 km / 5-6 hours",
  },
  {
    icon: Fuel,
    title: "Cross the Satluj River",
    desc: "Near Urni/Tapri, you'll cross the Satluj River over a bridge. This marks your transition into the Kinnaur region with its distinct landscape and culture.",
    time: "Midway Point",
  },
  {
    icon: Mountain,
    title: "Drive towards Yulla Khas",
    desc: "Continue driving from Tapri towards Yulla Khas. The road winds through beautiful Kinnauri villages, apple orchards, and offers glimpses of snow peaks.",
    time: "30 km / 1-1.5 hours",
  },
  {
    icon: Trees,
    title: "Reach Bustan",
    desc: "Arrive at Bustan, a small village near Yulla Khas. This is where the road ends and your scenic walk begins. Vehicles can be parked here.",
    time: "Gateway Point",
  },
];

function StepByStep() {
  return (
    <section className="relative bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Step by Step
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Your route to Ayansh Snow-View
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-forest/20 md:left-1/2" />

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`reveal relative mb-10 flex items-start gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:gap-12`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 border-forest bg-snow font-bold text-forest md:h-14 md:w-14">
                {i + 1}
              </div>

              {/* Content */}
              <div
                className={`flex-1 rounded-2xl border border-border/60 bg-snow p-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-2">
                  <step.icon className="h-4 w-4 text-forest" />
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                    {step.time}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-pine">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalWalk() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal overflow-hidden rounded-3xl border-2 border-forest/20 bg-gradient-to-br from-cream to-snow p-8 shadow-lift md:p-12">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-snow">
              <Trees className="h-6 w-6" />
            </span>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                The Final Stretch
              </span>
              <h2 className="text-2xl font-semibold text-pine md:text-3xl">
                From Bustan to Ayansh Snow-View
              </h2>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">
            After parking at Bustan, enjoy a beautiful approximately 1-2 km scenic
            walk through pine forests and traditional village paths to reach
            Ayansh Snow-View & Trekker's Nest.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-pine">Easy walk:</span> The
                trail is well-marked and used daily by locals. Most guests
                complete it in 30-45 minutes at a comfortable pace.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-pine">Stunning scenery:</span> Walk
                through pine forests, apple orchards, and traditional Kinnauri
                houses with mountain views at every turn.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-pine">Luggage assistance:</span>{" "}
                We can arrange help for carrying heavier luggage if needed — just
                let us know in advance.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-pine">Part of the experience:</span>{" "}
                This walk sets the tone for your retreat — no traffic, no noise,
                just the sounds of the mountains and fresh Himalayan air.
              </p>
            </div>
          </div>

          <p className="mt-8 rounded-xl bg-forest/10 p-4 text-sm leading-relaxed text-pine">
            <strong>Important:</strong> Please carry a small backpack with essentials
            for the walk. Wear comfortable shoes with good grip. The path is safe
            but can be narrow in places.
          </p>
        </div>
      </div>
    </section>
  );
}

const TIPS = [
  {
    icon: AlertTriangle,
    title: "Road Conditions",
    desc: "Kinnaur roads can be challenging. Check road status before traveling, especially during monsoon (July-August) and winter (December-February).",
  },
  {
    icon: Car,
    title: "Vehicle Advice",
    desc: "A sturdy vehicle (SUV recommended) with good ground clearance handles mountain roads better. Local taxis also operate on this route.",
  },
  {
    icon: Clock,
    title: "Best Departure Time",
    desc: "Start early from Shimla (by 6-7 AM) to reach before dark. Mountain roads are safer during daylight hours.",
  },
  {
    icon: Fuel,
    title: "Fuel Stations",
    desc: "Last reliable fuel pumps are in Rampur and Tapri. Fill up before the final leg to Yulla Khas.",
  },
];

function TravelTips() {
  return (
    <section className="bg-cream/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Travel Tips
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Essential information for your journey
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {TIPS.map((tip, i) => (
            <div
              key={tip.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-snow p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <tip.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-pine">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Location
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-pine md:text-4xl">
            Find us on the map
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed text-muted-foreground">
            We're located in Village Yulla Khas, Tehsil Nichar, District Kinnaur,
            Himachal Pradesh — Pin Code 172104.
          </p>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-3xl border border-border/60 shadow-lift">
          <iframe
            title="Ayansh Snow-View location on Google Maps"
            src="https://www.google.com/maps?q=Yulla+Khas,+Kinnaur,+Himachal+Pradesh+172104&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[350px] w-full border-0 md:h-[450px]"
          />
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
          Need help planning your journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          Contact us on WhatsApp for detailed directions, road updates, and
          travel assistance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp for Directions
          </a>
          <a
            href="tel:+918920114710"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4" /> +91 89201 14710
          </a>
        </div>
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
