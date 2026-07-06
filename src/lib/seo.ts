import type { Crumb } from "./site";
import { SITE } from "./site";

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

function abs(path: string) {
  return `${SITE.url}${path}`;
}

export function buildMetaTags(seo: SeoMeta) {
  const url = abs(seo.path);
  const image = seo.image ? abs(seo.image) : abs("/assets/trek.jpg");
  const imageAlt = seo.imageAlt ?? SITE.name;
  const type = seo.type ?? "website";
  const fullTitle =
    seo.title === SITE.name ? seo.title : `${seo.title} | ${SITE.shortName}`;

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: seo.description },
    { name: "robots", content: seo.noindex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: SITE.name },
    // Open Graph
    { property: "og:site_name", content: SITE.name },
    { property: "og:type", content: type },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:locale", content: "en_IN" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
  ];

  if (type === "article" && seo.publishedTime) {
    meta.push({ property: "article:published_time", content: seo.publishedTime });
    meta.push({ property: "article:author", content: SITE.name });
  }

  return meta;
}

export function buildLinkTags(path: string) {
  return [{ rel: "canonical", href: abs(path) }];
}

/* ----------------------------- Structured data (JSON-LD) ----------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: abs("/favicon.png"),
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.foundingYear,
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.youtube],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: abs("/assets/trek.jpg"),
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapsLink,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Yulla Kanda Trek Base Camp", value: true },
      { "@type": "LocationFeatureSpecification", name: "Scenic Forest Walk Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Home Cooked Meals", value: true },
      { "@type": "LocationFeatureSpecification", name: "Trekking Guide Support", value: true },
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.youtube],
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.to),
    })),
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  publishedTime: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url: abs(args.path),
    image: args.image ? abs(args.image) : abs("/assets/trek.jpg"),
    datePublished: args.publishedTime,
    author: { "@type": "Organization", name: args.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: abs("/favicon.png") },
    },
  };
}

export function imageObjectSchema(url: string, caption: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: abs(url),
    url: abs(url),
    caption,
    creator: { "@type": "Organization", name: SITE.name },
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function jsonLdScripts(...objects: object[]) {
  return objects.map((obj) => ({
    type: "application/ld+json",
    children: JSON.stringify(obj),
  }));
}
