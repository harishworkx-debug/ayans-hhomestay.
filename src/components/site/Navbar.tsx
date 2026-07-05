import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms & Pricing", to: "/rooms" },
  { label: "Yulla Trek", to: "/trek" },
  { label: "Gallery", to: "/gallery" },
  { label: "How to Reach", to: "/how-to-reach" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== "/"
          ? "bg-snow/90 backdrop-blur-lg shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link
          to="/"
          className={`flex items-center gap-2 font-semibold tracking-tight transition-colors ${
            scrolled || location.pathname !== "/" ? "text-pine" : "text-snow"
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

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => {
            const isActive = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-forest font-semibold"
                    : scrolled || location.pathname !== "/"
                    ? "text-pine hover:text-forest"
                    : "text-snow/90 hover:text-snow"
                }`}
              >
                {n.label}</Link>
            );
          })}
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
            scrolled || location.pathname !== "/"
              ? "bg-cream text-pine"
              : "bg-snow/15 text-snow backdrop-blur-md"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-snow/98 backdrop-blur-lg transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {NAV.map((n) => {
            const isActive = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "bg-cream text-forest font-semibold"
                    : "text-pine hover:bg-cream"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
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
