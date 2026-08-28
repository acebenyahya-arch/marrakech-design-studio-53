# Modern dark redesign, inspired by vcodes.xyz

I fetched vcodes.xyz and captured its interface. It is a near-black dark UI with electric blue accents, a floating pill navigation bar with icon labels, a big gradient headline, soft glowing shapes in the background, and glassy rounded cards. Since it is a Discord bot directory, its page structure does not map one-to-one onto a designer portfolio — so I will clone its visual language as closely as possible and keep your existing content and sections.

## Visual direction (cloned from the reference)

- Near-black background (#0a0b0e) with subtle blue radial glows behind the hero
- Electric blue primary (#3b6df6) for buttons, links, active nav and highlights
- Headline in a heavy geometric sans, with the second half in a blue-to-cyan gradient (same treatment as "for your server!")
- Floating rounded nav bar with a soft border, subtle blur and a pill "active" indicator under the current page
- Fully rounded (pill) buttons with a blue glow on hover
- Glassy cards: dark surface, 1px light border, generous radius, lift + border-glow on hover
- Section headings as a small bold title plus a muted one-line subtitle, matching the reference's "Most Voted / Explore Most Voted bots" pattern
- Soft entrance and hover motion; no bright light-mode surfaces anywhere

## What changes on each page

**Home**
- Hero: dark, split layout — gradient headline, short intro paragraph, pill WhatsApp button, with a floating glassy visual panel on the right (replacing the current bright image block with a dark, glow-lit treatment)
- About section on a dark surface band
- Projects: grid of glass cards with hover glow instead of the current bordered list
- What I bring you: three glass cards with blue icon chips
- Services: six glass cards, blue check bullets
- Process: numbered steps with large blue gradient numerals on a connected column
- Stats: three large gradient numbers
- Testimonials: dark quote cards with blue accent marks
- Final CTA: centered glow panel with phone number and WhatsApp button

**Logo Design** and **Contact**: same dark system — hero with gradient headline, glass cards for the steps and contact details

**Footer**: dark, three columns, blue hover links, matching the reference footer layout

## Technical notes

- Rewrite the token layer in `src/styles.css`: dark `:root` palette in oklch, plus new tokens for glow, glass surface, gradient text and card shadows; add `@utility` helpers for the glass card, gradient headline and glow button
- Swap the type pairing to a heavy geometric sans for headings (loaded via `<link>` in `src/routes/__root.tsx`) and a clean sans for body; the current serif is dropped
- Update `SiteHeader` to the floating pill nav (icons + active indicator, dark mobile sheet), `SiteFooter` and `WhatsappButton` to the new styles
- Rework the three route files to the new section layouts; text content stays exactly as it is now
- Replace the current warm hero image with a dark, blue-lit generated visual so it fits the theme
- No backend or content changes
