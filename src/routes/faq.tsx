import { createFileRoute } from "@tanstack/react-router";
import { Circle as HelpCircle, MessageCircle, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title: "FAQ — Frequently Asked Questions | Ayansh Snow-View, Yulla Khas",
      },
      {
        name: "description",
        content:
          "Answers to common questions about Ayansh Snow-View & Trekker's Nest. Learn about pricing, rooms, Yulla Kanda Trek, how to reach, booking, food, and more.",
      },
      {
        property: "og:title",
        content: "FAQ — Yulla Khas Homestay Common Questions",
      },
      {
        property: "og:description",
        content:
          "Frequently asked questions about staying at our Kinnaur homestay, Yulla Kanda Trek, pricing, and travel information.",
      },
      {
        property: "og:url",
        content: "/faq",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is included in ₹800 per person?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The ₹800 per person per night includes comfortable stay in wooden rooms, home-cooked dinner, and breakfast. No hidden charges.",
              },
            },
            {
              "@type": "Question",
              name: "How far is the homestay from Bustan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ayansh Snow-View is approximately 1-2 km walking distance from Bustan village. The scenic walk takes 30-45 minutes through pine forests and traditional Kinnauri paths.",
              },
            },
            {
              "@type": "Question",
              name: "What is the Yulla Kanda Trek altitude?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Yulla Kanda Trek reaches approximately 12,000+ feet (approximately 3,900 metres) above sea level. It leads to the sacred Yulla Lake and the world's highest Krishna temple.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book a stay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Book directly on WhatsApp at +91 89201 14710. We'll confirm availability and answer any questions you have.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-snow text-foreground antialiased">
      <Navbar />
      <main>
        <FAQHero />
        <FAQSection />
        <StillHaveQuestions />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function FAQHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-forest)" }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-snow">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
          <HelpCircle className="h-3.5 w-3.5" /> FAQ
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-snow/85 md:text-lg">
          Everything you need to know about staying with us and experiencing the
          Yulla Kanda Trek.
        </p>
      </div>
    </section>
  );
}

const FAQ_CATEGORIES = [
  {
    title: "Booking & Pricing",
    questions: [
      {
        question: "What is included in ₹800 per person?",
        answer:
          "The ₹800 per person per night includes your comfortable stay in traditional wooden rooms, home-cooked dinner, and breakfast. No hidden charges — simple, transparent pricing.",
      },
      {
        question: "Is the pricing per person or per room?",
        answer:
          "Our pricing is per person. This includes accommodation and all meals. If you're two guests, it's ₹800 × 2 = ₹1,600 per night total.",
      },
      {
        question: "How do I book a stay?",
        answer:
          "Book directly on WhatsApp at +91 89201 14710. Send us your dates and we'll confirm availability. We prefer simple, direct communication over complex booking systems.",
      },
      {
        question: "Can I book just the room without meals?",
        answer:
          "Our pricing includes meals because we believe good food is essential to the homestay experience. Home-cooked Himachali cuisine is part of what makes staying with us special.",
      },
      {
        question: "Do you accept card payments?",
        answer:
          "No, we're in a remote village without card facilities. Please bring sufficient cash. The nearest ATM is in Tapri or Reckong Peo.",
      },
    ],
  },
  {
    title: "About the Homestay",
    questions: [
      {
        question: "How far is the homestay from Bustan?",
        answer:
          "Ayansh Snow-View is approximately 1-2 km walking distance from Bustan village. The walk takes about 30-45 minutes through pine forests and traditional Kinnauri paths. This scenic walk is part of the authentic mountain experience.",
      },
      {
        question: "Is the walk to the homestay difficult?",
        answer:
          "The walk is moderate — well-marked and used daily by locals. Most guests find it comfortable and enjoy the scenery. Wear good walking shoes. We can arrange luggage assistance if needed.",
      },
      {
        question: "Is there mobile network and WiFi?",
        answer:
          "Mobile connectivity is limited (Jio sometimes works). We intentionally do not have WiFi. This is your chance to truly disconnect and enjoy the mountains.",
      },
      {
        question: "What are the rooms like?",
        answer:
          "Our rooms are traditional wooden Kinnauri style with warm pine interiors, cozy bedding, and stunning mountain views. We have Pine Deluxe, Cedar Twin, and Snow-View Family Suite options.",
      },
      {
        question: "What type of food is served?",
        answer:
          "We serve authentic Himachali home-cooked meals — rajma-chawal, dal, seasonal vegetables, rice, rotis, and local specialties. Breakfast includes parathas and tea. All meals are fresh and home-cooked.",
      },
    ],
  },
  {
    title: "Yulla Kanda Trek",
    questions: [
      {
        question: "How high is Yulla Kanda?",
        answer:
          "Yulla Kanda reaches approximately 12,000+ feet (approximately 3,900 metres) above sea level. It's home to the sacred Yulla Lake and what is believed to be the world's highest Krishna temple.",
      },
      {
        question: "How long is the Yulla Kanda Trek?",
        answer:
          "The trek is approximately 12 km one way from Yulla village to the summit. Most trekkers complete the round trip in one day, starting early morning and returning by evening.",
      },
      {
        question: "How difficult is the trek?",
        answer:
          "The Yulla Kanda trek is rated moderate. It requires reasonable fitness but is achievable for anyone who can walk steadily for 6-8 hours with breaks. The trail goes through forests and meadows with gradual elevation gain.",
      },
      {
        question: "Do you provide trek guides?",
        answer:
          "Yes, we arrange experienced local guides who know every trail, weather pattern, and hidden spot. Guides are from Yulla village and have led hundreds of successful treks.",
      },
      {
        question: "What trek equipment do you provide?",
        answer:
          "We can provide tents, sleeping bags, and basic camping gear for overnight stays on the mountain. Packed meals, safety guidance, and weather updates are included.",
      },
    ],
  },
  {
    title: "Getting Here",
    questions: [
      {
        question: "How do I reach Ayansh Snow-View?",
        answer:
          "From Shimla, drive approximately 250 km on NH-5 towards Tapri, cross the Satluj River, continue to Yulla Khas, reach Bustan, then enjoy a 1-2 km walk to the homestay. Total drive time is 8-10 hours.",
      },
      {
        question: "Can I drive directly to the homestay?",
        answer:
          "No, vehicles cannot reach directly. Park at Bustan and walk the final 1-2 km. This keeps our village peaceful and preserves the authentic mountain atmosphere.",
      },
      {
        question: "Is parking available?",
        answer:
          "Yes, safe parking is available at Bustan village. Locals can watch your vehicle during your stay.",
      },
      {
        question: "What's the best time to visit?",
        answer:
          "April-June for spring flowers, July-August for the Janmashtami festival, September-November for clearest mountain views. Winter (December-February) is for experienced travelers who enjoy snow.",
      },
    ],
  },
  {
    title: "Practical Information",
    questions: [
      {
        question: "Is the homestay suitable for families with children?",
        answer:
          "Absolutely! Children love the village atmosphere, open spaces, and simple life. Many families have stayed with us. Just note there are no modern entertainment facilities — kids enjoy nature.",
      },
      {
        question: "Can solo travelers stay here?",
        answer:
          "Solo travelers are very welcome. Our homestay is safe, and you'll find yourself part of the family atmosphere. Many solo trekkers and photographers have stayed with us.",
      },
      {
        question: "Is the homestay safe?",
        answer:
          "Yulla Khas is extremely safe — a close-knit community where crime is virtually non-existent. Families, solo travelers, and women travelers have always felt completely secure here.",
      },
      {
        question: "Do I need to bring anything specific?",
        answer:
          "Bring warm clothes (evenings are cool), comfortable walking shoes, a torch, power bank, and cash. For the trek, bring layered clothing, sun protection, and a small backpack.",
      },
    ],
  },
];

function FAQSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {FAQ_CATEGORIES.map((category, catIndex) => (
          <div key={category.title} className={catIndex > 0 ? "mt-16" : ""}>
            <h2 className="reveal mb-8 text-2xl font-semibold text-pine">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => (
                <details
                  key={item.question}
                  className="reveal group overflow-hidden rounded-2xl border border-border/60 bg-snow transition-all hover:border-border"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-pine transition-colors hover:bg-cream/50">
                    <span className="pr-4">{item.question}</span>
                    <span className="shrink-0 text-xl font-light text-forest transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-border/40 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StillHaveQuestions() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center text-snow">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Still have questions?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-snow/85">
          We're happy to answer any questions personally. Reach out on WhatsApp
          or give us a call.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-snow px-8 py-4 text-sm font-semibold text-pine shadow-lift transition-all hover:scale-[1.03] hover:bg-cream"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:+918920114710"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-snow backdrop-blur-md transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4" /> +91 89201 14710
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-snow/70">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">
            Village Yulla Khas, Kinnaur, Himachal Pradesh — 172104
          </span>
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
