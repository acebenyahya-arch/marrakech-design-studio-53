import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            graphiste<span className="text-gradient">.marrakech</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Freelance graphic designer crafting distinctive brand identities for clients across
            Morocco.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Links</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/logo-design" className="transition-colors hover:text-primary">
                Logo Design
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <a href="tel:+212633540422" className="transition-colors hover:text-primary">
                +212 6 33 54 04 22
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/212633540422"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
            <li>Marrakech, Morocco</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Graphiste Marrakech Freelance. All rights reserved.
      </div>
    </footer>
  );
}
