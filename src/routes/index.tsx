import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Layers,
  PenTool,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/hero-design.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsappButton } from "@/components/site/WhatsappButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "walid.graphics | Branding & Logos" },
      {
        name: "description",
        content:
          "I am a Graphic Designer that strives to create unique, modern and striking visuals: logos, brand guidelines, visual identity, brandbooks, flyers, web design.",
      },
      {
        property: "og:title",
        content: "walid.graphics | Branding & Logos",
      },
      {
        property: "og:description",
        content:
          "Years of experience building bold visual identities for brands across the globe.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "Brand Guidelines", client: "Digisouk.ma" },
  { title: "Brand Guidelines & Website", client: "ParaShine" },
  { title: "Brand Guidelines", client: "Real Shilajit" },
  { title: "Brand Guidelines", client: "Link Maroc" },
  { title: "Logo Design", client: "HITECKLAND" },
  { title: "Brand Guidelines", client: "BSL Security" },
  { title: "Website Design", client: "ACE PRO" },
  { title: "Flyers & Brochures", client: "Rockspace Maroc" },
];

const values = [
  {
    icon: PenTool,
    title: "Custom Graphic Designs",
    text: "I design original visuals perfectly aligned with your brand identity, always prioritising clarity, relevance and visual impact.",
  },
  {
    icon: Layers,
    title: "Elevated Software Expertise",
    text: "Every project benefits from my expertise in building a solid, consistent visual identity through considered, high-impact graphic elements.",
  },
  {
    icon: BadgeCheck,
    title: "Superior Refinement",
    text: "With the use of professional tools and close attention to detail, I deliver high-quality graphic designs suited to all of your visual needs.",
  },
];

const services = [
  {
    title: "Logo Design",
    text: "Assert your identity with a unique logo that catches the eye and strengthens brand recognition.",
    points: ["What your clients can recognize", "Strong visual impact", "Custom tailored design"],
  },
  {
    title: "Brand Guidelines",
    text: "Structure your image with coherent brand guidelines that guarantee visual harmony across every medium.",
    points: [
      "Mastered color palette",
      "Structured, consistent typography",
      "Unified graphic language",
    ],
  },
  {
    title: "Visual Identity Definition",
    text: "Define your brand universe with a strong visual identity that reflects your values and speaks to your audience.",
    points: [
      "Reinforced brand image",
      "Overall visual consistency",
      "Immediate brand recognition",
    ],
  },
  {
    title: "Custom Brandbook",
    text: "Keep your brand image consistent with a structured brandbook: a true reference guide for using your visual identity harmoniously across all supports.",
    points: [
      "Visual identity guide",
      "Universal usage standards",
      "Lasting consistency everywhere",
    ],
  },
  {
    title: "Tailor-made Flyer Design",
    text: "Deliver your message with impact through striking flyers designed to capture attention and spark interest.",
    points: ["Eye-catching visuals", "Effortless readability", "Visual call to action"],
  },
  {
    title: "Web Design Conceptualization",
    text: "Give visitors a smooth, beautiful experience with web design that combines clarity, visual impact and efficiency.",
    points: [
      "Conversion-driven journey",
      "Clear, fluid navigation",
      "Credible, engaging design",
    ],
  },
];

const process = [
  {
    title: "Understanding your needs",
    text: "The first step is studying the client's needs in detail to fully grasp their goals and vision. As a graphic designer, I make sure every project is perfectly aligned with expectations and brand identity.",
  },
  {
    title: "Creative development",
    text: "I develop innovative, tailored visual concepts that respect the brand identity and the expectations of its target audience. The goal is an original, striking design that faithfully reflects the brand's values and image.",
  },
  {
    title: "Refinement and adjustments",
    text: "After the initial presentation, I work closely with the client to adjust and polish the design, making sure it matches their expectations and brand identity precisely.",
  },
  {
    title: "Final delivery and follow-up",
    text: "Once the design is approved, I supply the files in the required formats and offer post-delivery support for any future use, guaranteeing an optimal client experience at every stage.",
  },
];

const stats = [
  {
    value: "05+",
    label: "Years of experience",
    text: "Proven expertise in graphic design, serving local and national brands.",
  },
  {
    value: "150+",
    label: "Projects delivered",
    text: "Visual assets delivered with rigour, creativity and an eye for detail.",
  },
  {
    value: "99%",
    label: "Client satisfaction",
    text: "Smooth collaboration, deadlines respected and consistent quality.",
  },
];

const testimonials = [
  {
    quote:
      "I reached out while looking for a logo designer in Morocco. His commitment, creativity and the quality of his work are simply exceptional.",
    name: "Aya M.",
  },
  {
    quote:
      "A genuinely trustworthy partner. He understood my needs from the start and translated my vision exactly. I highly recommend him.",
    name: "Noureddine L.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Walid Khalladi · Graphic Designer</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
              Visuals that make your brand{" "}
              <span className="italic text-primary">impossible to ignore</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              With several years of experience, I create unique, modern and striking visuals
              that elevate brands and deliver their message effectively. Every project is 
              built on creativity, strategy and a deep understanding of how design generates
              real impact.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <WhatsappButton />
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              >
                Preview selected work <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-sm bg-sand" />
            <img
              src={heroImage}
              alt="Brand identity design materials: colour palette, typography specimen and logo cards"
              width={1408}
              height={1104}
              className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl md:text-5xl">My Personnal Work Ethics</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            As a graphic designer, I place great importance on transparent
            communication with my clients. This approach lets me understand their business, their
            objectives and their specific expectations in detail. It is a key step in creating
            visuals that are creative, striking and perfectly suited to their audience. Working
            closely together also makes me flexible and able to adapt to every sector, because
            each project and each client is unique. With several years of experience as a
            visual creative, I can also provide tailored, relevant advice
            at every stage of the creative process.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Key projects</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            My work as a graphic designer
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Throughout my journey of continuous visualisation, I have had the chance to work
            with a wide range of clients and support the growth of their brands — successes I also
            consider my own. Here is a glimpse of a few projects I have had the privilege to work
            on:
          </p>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.client}
                className="group flex items-center justify-between gap-4 bg-background px-6 py-7 transition-colors hover:bg-accent"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.title}
                  </p>
                  <p className="mt-1 font-display text-2xl">{p.client}</p>
                </div>
                <ArrowUpRight className="size-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <WhatsappButton />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">What I bring you</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            What Sets Me Apart
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-primary pt-6">
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-border bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">My services</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            Services I Provide
          </h2>
          <p className="mt-5 max-w-2xl opacity-70">
            I offer the following services to meet my
            clients' specific needs effectively:
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-sm border border-ink-foreground/15 p-7 transition-colors hover:border-primary"
              >
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{s.text}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="opacity-85">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">My approach</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
            My working process, step by step, as a graphic designer
          </h2>

          <ol className="mt-12 grid gap-10 md:grid-cols-2">
            {process.map((step, i) => (
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
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl text-primary">{s.value}</p>
              <p className="mt-2 text-lg font-medium">{s.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Testimonials</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I support clients with care all across
            the globe. Every project becomes a shared success, built on trust and the quality of the
            work delivered.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-sm bg-sand p-8">
                <Sparkles className="size-5 text-primary" />
                <p className="mt-4 font-display text-2xl leading-snug">“{t.quote}”</p>
                <footer className="mt-5 text-sm text-muted-foreground">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="eyebrow">Got a project in mind?</p>
        <h2 className="mt-4 text-4xl md:text-6xl">Let's get in touch today</h2>
        <a
          href="tel:+212784092681"
          className="mt-6 block font-display text-3xl text-primary md:text-4xl"
        >
          +212 7 84 09 26 81
        </a>
        <div className="mt-8 flex justify-center">
          <WhatsappButton />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
