import { Link } from "@tanstack/react-router";
import { Home, Menu, PenTool, Send, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/logo-design", label: "Logo Design", icon: PenTool },
  { to: "/contact", label: "Contact", icon: Send },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          walid<span className="text-gradient">.graphics</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/212784092681"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring md:inline-flex"
          >
            WhatsApp
          </a>
          <button
            aria-label="Toggle menu"
            className="rounded-xl border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted-foreground [&.active]:bg-secondary [&.active]:text-foreground"
                activeOptions={{ exact: item.to === "/" }}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/‪212784092681‬‬"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-primary px-4 py-2.5 text-center font-medium text-primary-foreground"
            >
              Contact me on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
