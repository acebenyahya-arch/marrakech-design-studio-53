import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsappButton } from "@/components/site/WhatsappButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Freelance Graphic Designer in Marrakech" },
      {
        name: "description",
        content:
          "Got a project in mind? Reach out to a freelance graphic designer in Marrakech by WhatsApp or phone: +212 6 33 54 04 22.",
      },
      { property: "og:title", content: "Contact | Freelance Graphic Designer in Marrakech" },
      {
        property: "og:description",
        content: "Let's talk about your logo, brand guidelines or web design project.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">Got a project in mind?</p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            Let's get in touch <span className="italic text-primary">today</span>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell me about your brand, your goals and your timeline. I reply quickly and will advise
            you on the right approach at every stage of the creative process.
          </p>
          <div className="mt-9">
            <WhatsappButton />
          </div>
        </div>

        <div className="rounded-sm bg-sand p-8">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="mt-1 size-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <a href="tel:+212633540422" className="font-display text-2xl">
                  +212 6 33 54 04 22
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
                <p className="font-display text-2xl">Marrakech, Morocco</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Working with clients all across Morocco and remotely.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
