import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsappButton } from "@/components/site/WhatsappButton";

export const Route = createFileRoute("/logo-design")({
  head: () => ({
    meta: [
      { title: "walid.graphics | Logo Design" },
      {
        name: "description",
        content:
          "Unique, memorable visuals. A distinctive mark with strong visual impact, custom tailored to your brand.",
      },
      { property: "og:title", content: "walid.graphics | Logo Design" },
      {
        property: "og:description",
        content: "Assert your identity with a unique design that strengthens brand recognition.",
      },
    ],
  }),
  component: LogoDesign,
});

const steps = [
  {
    title: "Understanding your needs",
    text: "I study your business, goals and vision in detail so the logo is perfectly aligned with your expectations and brand identity.",
  },
  {
    title: "Creative development",
    text: "I explore innovative concepts that respect your identity and speak to your target audience, aiming for an original and striking mark.",
  },
  {
    title: "Refinement and adjustments",
    text: "After the first presentation, we refine the design together until it matches your expectations precisely.",
  },
  {
    title: "Final delivery and follow-up",
    text: "You receive the files in every required format, plus post-delivery support for any future use.",
  },
];

function LogoDesign() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow">Service</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Logo design that makes your brand <span className="italic text-primary">stick</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Assert your identity with a unique logo that catches the eye and strengthens the
            recognition of your brand.
          </p>
          <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Unique, memorable logo", "Strong visual impact", "Custom tailored design"].map(
              (point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ),
            )}
          </ul>
          <div className="mt-10">
            <WhatsappButton label="Bring your ideas to life" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-4 text-4xl md:text-5xl">From brief to final files</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display text-4xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </div>
  );
}
