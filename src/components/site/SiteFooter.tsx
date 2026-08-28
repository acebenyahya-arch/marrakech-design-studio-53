import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Graphiste Marrakech</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            Freelance graphic designer crafting distinctive brand identities for clients across
            Morocco.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Navigation</p>
          <ul className="mt-4 space-y-2 opacity-80">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/logo-design">Logo Design</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-2 opacity-80">
            <li>
              <a href="tel:+212633540422">+212 6 33 54 04 22</a>
            </li>
            <li>
              <a href="https://wa.me/212633540422" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>Marrakech, Morocco</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Graphiste Marrakech Freelance. All rights reserved.
      </div>
    </footer>
  );
}
