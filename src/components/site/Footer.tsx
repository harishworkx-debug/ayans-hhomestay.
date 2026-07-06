import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { SITE, SECONDARY_NAV, FOOTER_LEGAL, PRIMARY_NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-pine text-snow/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-snow">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-snow text-pine text-sm font-bold">
              A
            </span>
            <span className="text-[15px] font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-snow/70">
            A traditional Kinnauri wooden homestay in Village Yulla Khas — the starting
            point of the sacred Yulla Kanda Trek to the world's highest Krishna temple.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
              { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
              { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-snow/20 text-snow transition-colors hover:bg-snow hover:text-pine"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Explore
          </h2>
          <ul className="mt-5 space-y-2 text-sm">
            {PRIMARY_NAV.filter((n) => n.label !== "More").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-snow">
                  {n.label}
                </Link>
              </li>
            ))}
            {SECONDARY_NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-snow">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-snow">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-snow/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Village Yulla Khas, Tehsil Nichar,
                <br />
                District Kinnaur, HP — 172104
              </span>
            </li>
            <li>
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-snow">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-snow"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-snow/60 md:flex-row">
          <div>&copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {FOOTER_LEGAL.map((n) => (
              <Link key={n.to} to={n.to} className="transition-colors hover:text-snow">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
