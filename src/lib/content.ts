import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import trek from "../assets/trek.jpg";
import cta from "../assets/cta.jpg";
import about from "../assets/about.jpg";
import hero from "../assets/hero.jpg";
import heroo from "../assets/heroo.png";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import moment from "../assets/moments.jpg";
import moment1 from "../assets/moments1.jpg";
import moment2 from "../assets/moments2.jpg";
import moment3 from "../assets/moments3.jpg";
import moment4 from "../assets/moments4.jpg";
import moment5 from "../assets/moments5.jpg";
import moment6 from "../assets/moments6.jpg";
import moment7 from "../assets/moments7.jpg";
import moment8 from "../assets/moments8.jpg";
import moment9 from "../assets/moments9.jpg";
import moment10 from "../assets/moments10.jpg";
import moment11 from "../assets/moments11.jpg";
import moment12 from "../assets/moments12.jpg";

export const IMAGES = {
  hero,
  heroo,
  about,
  trek,
  cta,
  room1,
  room2,
  room3,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  moment,
  moment1,
  moment2,
  moment3,
  moment4,
  moment5,
  moment6,
  moment7,
  moment8,
  moment9,
  moment10,
  moment11,
  moment12,
};

export type Room = {
  img: string;
  name: string;
  desc: string;
  features: string[];
  alt: string;
};

export const ROOMS: Room[] = [
  {
    img: room1,
    name: "Pine Deluxe Room",
    desc: "A snug wooden room with a queen bed and a window framing snow peaks.",
    features: ["Wooden Interior", "Mountain View", "Cozy Bedding"],
    alt: "Pine Deluxe Room with queen bed and mountain view window at Ayansh Snow-View",
  },
  {
    img: room2,
    name: "Cedar Twin Room",
    desc: "Twin beds in a log-lined cabin — warm lamps, wool blankets and pine air.",
    features: ["Traditional Log Walls", "Twin Beds", "Reading Lamp"],
    alt: "Cedar Twin Room with traditional log walls and twin beds in Kinnaur homestay",
  },
  {
    img: room3,
    name: "Snow-View Family Suite",
    desc: "A spacious suite with panoramic windows and a private sitting nook.",
    features: ["Panoramic Windows", "Family Bedding", "Sitting Area"],
    alt: "Snow-View Family Suite with panoramic mountain windows at Ayansh Snow-View",
  },
];

export type GalleryItem = { src: string; alt: string; span?: string };

export const GALLERY: GalleryItem[] = [
  { src: g3, alt: "Sunrise over the Himalayan peaks of the Kinnaur Kailash range", span: "row-span-2" },
  { src: g1, alt: "Kinnauri village elder in traditional attire near Yulla Khas" },
  { src: g4, alt: "Alpine camping tent under snow peaks on the Yulla Kanda route" },
  { src: g6, alt: "Sacred Krishna temple with prayer flags at Yulla Kanda summit", span: "row-span-2" },
  { src: g2, alt: "Bonfire evening under a starlit sky at the homestay" },
  { src: g7, alt: "Sunlit pine forest trail near Yulla Khas village" },
  { src: g5, alt: "Traditional Himachali home-cooked meal served at the homestay" },
  { src: about, alt: "Traditional wooden Kinnauri homestay exterior in Yulla Khas", span: "row-span-2" },
  { src: moment, alt: "Ayansh Snow-View homestay exterior surrounded by pine forest", span: "row-span-2" },
  { src: moment1, alt: "Traditional Kinnauri village houses in Yulla Khas" },
  { src: moment2, alt: "Golden sunrise over the Himalayan peaks in Kinnaur" },
  { src: moment3, alt: "Mountain trekking trail leading towards Yulla Kanda", span: "row-span-2" },
  { src: moment4, alt: "Bonfire gathering under the stars at Ayansh Snow-View" },
  { src: moment5, alt: "Snow-covered mountain views from the homestay" },
  { src: moment6, alt: "Peaceful pine forest walk on the way to the homestay", span: "row-span-2" },
  { src: moment7, alt: "Traditional wooden homestay interior in Kinnaur" },
  { src: moment8, alt: "Camping in alpine meadows near Yulla Kanda" },
  { src: moment9, alt: "Buddhist prayer flags fluttering in the mountain wind", span: "row-span-2" },
  { src: moment10, alt: "Local Himachali cuisine prepared at the homestay kitchen" },
  { src: moment11, alt: "Scenic valley landscape near Yulla Khas in Kinnaur" },
  { src: moment12, alt: "Memorable moments and guests at Ayansh Snow-View homestay", span: "row-span-2" },
];

export type Experience = { img: string; t: string; d: string; alt: string };

export const EXPERIENCES: Experience[] = [
  { img: g1, t: "Traditional Village Life", d: "Woven caps, stone paths and centuries-old rhythms.", alt: "Traditional Kinnauri village life near Yulla Khas" },
  { img: g2, t: "Bonfire Nights", d: "Stories, songs and warmth under a starlit sky.", alt: "Bonfire night under the stars at Ayansh Snow-View" },
  { img: g3, t: "Mountain Sunrise", d: "Golden alpenglow on the Kinnaur Kailash range.", alt: "Mountain sunrise over the Kinnaur Kailash range" },
  { img: g4, t: "Alpine Camping", d: "Meadow campsites surrounded by wildflowers.", alt: "Alpine camping in wildflower meadows near Yulla Kanda" },
  { img: g7, t: "Nature Walks", d: "Forest trails through moss, pine and birdsong.", alt: "Nature walk through sunlit pine forest in Kinnaur" },
  { img: g6, t: "Snow Peaks & Prayer Flags", d: "Sacred summits and fluttering colours in the wind.", alt: "Snow peaks and prayer flags at Yulla Kanda summit" },
];

export type Review = { n: string; r: string; q: string };

export const REVIEWS: Review[] = [
  {
    n: "Aditi & Rohan",
    r: "Delhi · Trekkers",
    q: "The most peaceful days of our year. Woke up to snow peaks and slept to the smell of pine. The Yulla Kanda trek was unforgettable.",
  },
  {
    n: "The Menon Family",
    r: "Bengaluru · Family Travellers",
    q: "Warm rooms, warmer people. Our children still talk about the bonfire evenings and grandma's rajma-chawal.",
  },
  {
    n: "Kabir Sharma",
    r: "Mumbai · Solo Photographer",
    q: "An offbeat gem. Ayansh ji arranged the guide, the tents and even a Janmashtami invite at the temple. Ten stars.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Where is Ayansh Snow-View & Trekker's Nest located?",
    a: "We are in Village Yulla Khas, in the Nichar tehsil of Kinnaur district, Himachal Pradesh. The homestay is a scenic 1 to 2 kilometre forest walk from the road-head at Bustan.",
  },
  {
    q: "How much does a stay cost?",
    a: "Our all-inclusive rate is Rs.800 per person per night, which covers comfortable accommodation, a traditional dinner, and a hot breakfast. There are no hidden charges.",
  },
  {
    q: "How difficult is the Yulla Kanda trek?",
    a: "The Yulla Kanda trek is considered moderate. It covers roughly 12 kilometres round trip to an altitude of 12,000 feet. A reasonably fit walker can complete it in a single day, though an overnight camp is popular for the sunrise.",
  },
  {
    q: "What is the best time to visit and trek?",
    a: "The best window is mid-May through October when the trail is clear of snow. August is special for the Janmashtami festival at the Krishna temple. Winter months see heavy snow and the high trail is inaccessible.",
  },
  {
    q: "Do you provide trekking guides and camping equipment?",
    a: "Yes. We arrange experienced local guides, tents, sleeping bags, and camping gear for the Yulla Kanda trek. Please let us know in advance so we can prepare everything for your climb.",
  },
  {
    q: "How do I reach the homestay?",
    a: "The nearest major hub is Shimla, about 7 to 8 hours by road. From Bustan, the final road-head, it is a 1 to 2 km walk through pine forest to reach us. Porters and mule support for luggage can be arranged on request.",
  },
  {
    q: "Is the homestay suitable for families with children?",
    a: "Yes. Families are welcome and our family suite accommodates parents and children comfortably. The village environment is safe, though very young children may find the high-altitude trek challenging.",
  },
  {
    q: "Can I book a stay without trekking?",
    a: "Absolutely. Many guests come simply to enjoy the quiet village life, the mountain views, the home-cooked food, and the forest walks. The trek is optional.",
  },
  {
    q: "What kind of food is served?",
    a: "We serve traditional Kinnauri and Himachali meals prepared in our family kitchen using garden herbs and local ingredients. Expect dishes like rajma-chawal, siddu, and seasonal vegetables.",
  },
  {
    q: "How do I book a stay?",
    a: "The quickest way is to message us on WhatsApp using the Book Now button, or call us at +91 98059 14020. We will confirm availability and help you plan your visit.",
  },
];

export const TREK_STATS = [
  { label: "Starting Point", value: "Yulla Village" },
  { label: "Distance", value: "12 KM Trek" },
  { label: "Difficulty", value: "Moderate" },
  { label: "Highest Point", value: "12,000 ft (3,900 m)" },
];

export const TREK_HIGHLIGHTS = [
  "World's Highest Krishna Temple",
  "Dense Oak & Pine Forest",
  "Alpine Meadows in Bloom",
  "Sunrise Above the Clouds",
  "Sacred Lake at the Summit",
  "Janmashtami Festival Camp",
];
