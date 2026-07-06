export const SITE = {
  name: "Ayansh Snow-View & Trekker's Nest",
  shortName: "Ayansh Snow-View",
  tagline: "Trekker's Nest · Kinnaur",
  description:
    "Best homestay for the Yulla Kanda Trek (12,000 ft). Traditional Kinnauri wooden homestay in Village Yulla Khas, Kinnaur. Rs.800/person with meals. Scenic 1-2 km forest walk from Bustan. Base camp for the sacred Krishna temple pilgrimage.",
  url: "https://ayanshsnowview.com",
  phone: "+91 98059 14020",
  phoneRaw: "+919805914020",
  email: "stay@ayanshsnowview.com",
  priceRange: "₹800 per person (with meals)",
  address: {
    street: "Village & P.O. Yulla Khas, 1-2 km trek from Bustan",
    locality: "Kinnaur",
    region: "Himachal Pradesh",
    postalCode: "172104",
    country: "IN",
    countryName: "India",
  },
  geo: { latitude: 31.544632, longitude: 78.134194 },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.2544064981726!2d78.13419429999999!3d31.544632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39066f0055c47e75%3A0x82deabc18c16b252!2s%22Ayansh%20Snow-View%20%26%20Trekker%27s%20Nest%20(Yulla%20Kanda)%22!5e0!3m2!1sen!2sin!4v1783249247301!5m2!1sen!2sin",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Ayansh+Snow-View+Trekker's+Nest+Yulla+Kanda+Kinnaur",
  social: {
    instagram: "https://instagram.com/ayanshsnowview",
    facebook: "https://facebook.com/ayanshsnowview",
    youtube: "https://youtube.com/@ayanshsnowview",
  },
  foundingYear: "2012",
} as const;

export type NavItem = { label: string; to: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Yulla Kanda Trek", to: "/yulla-kanda-trek" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "How to Reach", to: "/how-to-reach" },
  { label: "Know Before You Visit", to: "/know-before-you-visit" },
  { label: "FAQ", to: "/faq" },
  { label: "Sitemap", to: "/sitemap" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export type Crumb = { name: string; to: string };
