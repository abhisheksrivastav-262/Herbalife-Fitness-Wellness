import { useEffect, useState } from "react";
import { Leaf, Menu, X, MessageCircle, Youtube } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fitness & Wellness", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export const WHATSAPP = "https://wa.me/919478680365";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_6px_24px_-20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight">
              Herbalife
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Fitness &amp; Wellness
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary-dark after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@JasbirKaur-b4g"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground/80 hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/5 transition-colors"
            aria-label="YouTube Channel"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-base btn-primary">
            <MessageCircle className="h-4 w-4" /> Get Started
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page pb-4">
            <div className="card-soft flex flex-col gap-1 p-3 hover:translate-y-0">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-primary-soft hover:text-primary-dark"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a
                  href="https://www.youtube.com/@JasbirKaur-b4g"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-base flex-1 justify-center border border-border bg-card text-[#FF0000] hover:bg-[#FF0000]/5"
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-base flex-[2] justify-center btn-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
