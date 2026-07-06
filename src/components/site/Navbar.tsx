import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));
  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-snow/90 backdrop-blur-lg shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link
          to="/"
          className={`flex items-center gap-2 font-semibold tracking-tight transition-colors ${
            dark ? "text-pine" : "text-snow"
          }`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-snow text-sm font-bold">
            A
          </span>
          <span className="hidden text-[15px] leading-tight sm:block">
            <span className="block">Ayansh Snow-View</span>
            <span className="block text-[11px] font-normal opacity-70">
              Trekker's Nest · Kinnaur
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {PRIMARY_NAV.map((n) => {
            const hasSecondary = n.label === "More";
            if (n.label === "More") return null;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors hover:text-moss ${
                  dark ? (isActive(n.to) ? "text-forest" : "text-pine") : "text-snow/90"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-moss ${
                dark ? "text-pine" : "text-snow/90"
              }`}
            >
              More
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-border/60 bg-snow p-2 shadow-lift">
                {SECONDARY_NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-cream"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-snow shadow-soft transition-all hover:scale-[1.03] hover:bg-pine hover:shadow-lift"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
            dark ? "bg-cream text-pine" : "bg-snow/15 text-snow backdrop-blur-md"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-snow/98 backdrop-blur-lg transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {PRIMARY_NAV.filter((n) => n.label !== "More").map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-pine transition-colors hover:bg-cream"
            >
              {n.label}
            </Link>
          ))}
          {SECONDARY_NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-pine transition-colors hover:bg-cream"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-snow"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
