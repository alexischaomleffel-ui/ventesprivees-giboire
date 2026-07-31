# Giboire Design System

Design system for **Groupe Giboire** — a century-old, family-owned French real-estate group of Breton origin, active nationally (Bretagne, Pays de la Loire, Île-de-France, Nouvelle-Aquitaine, Auvergne-Rhône-Alpes, Arc méditerranéen). The group covers the whole real-estate value chain: promotion & land planning, transaction (achat/vente), gestion locative, immobilier d'entreprise, conseil en investissement, syndic (MAESTRO SYNDIC), coworking (LE POD) and hôtellerie.

**Brand signature:** « Vos rêves prennent vie ici. »

This system provides the brand foundations (colour, type, spacing, effects), reusable React UI primitives, and a full real-estate **website UI kit** (accueil → recherche → détail d'un bien), so agents can generate on-brand Giboire interfaces and marketing assets.

---

## Sources used

- **Brand book synthesis (2026 Livre de marque)** — provided as the project brief: essence, mission, raison d'être, signature, primary colour **#17315d (Bleu profond)**, secondary **#fc716b (corail)**.
- **Logo:** `uploads/GIBOIRE_Logo_AvecLiseret_RVB.jpg` → copied to `assets/logo-full.jpg` (deep-blue square with keyline, white "GROUPE / GIBOIRE" wordmark).
- **UX reference screenshots** (`uploads/Capture d'écran …`, copied to `uploads/shot1–7.png`): these are frames from a third-party real-estate template ("Finder"). They were used **only** as structural / UX references for the kinds of screens Giboire needs (hero search, listing grid, property detail, agent card, search-by-city). Their teal/coral palette and "Finder" branding were **not** carried over — everything here uses the Giboire identity.
- Public brand context: giboire.com, groupe.giboire.com (company description, tone, service lines).

> ⚠️ **Font substitution — needs the user.** No brand font files were provided. The GIBOIRE wordmark is a wide geometric sans; the closest freely-available match is **Montserrat**, used here for the display/heading family. **Mulish** is used for UI/body copy. Both load from Google Fonts (`tokens/fonts.css`). **Please supply the licensed Giboire brand typefaces** so we can swap them in — it's a one-file change.

---

## Content fundamentals (voice & tone)

Giboire speaks in **French**, in a register that is **warm, human, reassuring and rooted (ancré)** — a centenary family group, not a cold corporate portal. Copy leans on *proximité, écoute, confiance, durée*.

- **Person:** address the client as **« vous »**; the group speaks as **« nous »** ("Nous concevons…", "Nous vous accompagnons"). Never tutoiement.
- **Casing:** sentence case for body and most UI. The wordmark is the only all-caps lockup ("GROUPE" tracked out, "GIBOIRE" solid). Section titles are sentence case ("Nos coups de cœur", "Rechercher par ville").
- **Tone:** confident but never boastful; concrete and territorial ("au cœur des territoires", named cities: Rennes, Saint-Malo, Dinard). Emphasise durability and care ("beaux et durables", "prestations soignées", "accompagner dans la durée").
- **The signature** « Vos rêves prennent vie ici. » is used *sparingly*, as a standalone flourish reinforcing the logo — never buried inside a paragraph. Set it in the display font, often italic, and often in corail on dark surfaces.
- **The identity line** — "Nous sommes un Groupe familial centenaire, acteur immobilier national d'origine bretonne." — is used **verbatim**, especially for audiences unfamiliar with the brand.
- **Fixed engagements (raison d'être):** comprendre les besoins · construire une relation unique · accompagner dans la durée · faire de la voix du client un levier.
- **Numbers:** French formatting — thin space as thousands separator and `€` after the amount (`395 000 €`, `1 190 €/mois`); surfaces in `m²`.
- **Emoji:** **none.** The brand is understated and premium; iconography is line-based, never emoji.
- **Vibe words:** centenaire, familial, breton, durable, soigné, proximité, confiance, excellence, fiabilité.

---

## Visual foundations

**Colour.** Anchored by **Bleu profond `#17315d`** (`--blue-700`, `--color-primary`) — the signature, used for the wordmark square, primary buttons, deep sections and footers. **Corail `#fc716b`** (`--coral-500`, `--color-accent`) is the energetic accent for conversion CTAs ("Réserver une visite", "Rechercher"), "Nouveau" flags and small highlights — used *in small doses* against the calm blue/neutral base. Neutrals are cool-warm greys (`--neutral-*`) on an off-white page (`--surface-page #f7f8fa`) with white cards. Semantic: success green, warning amber, danger/verified reuse the coral/blue. At most 1–2 background colours per view (off-white page + occasional deep-blue section).

**Typography.** Display/headings: **Montserrat** (geometric, matches the wordmark), extrabold for heroes with tight tracking (`--ls-tight`). Body/UI: **Mulish**, regular/semibold. Overline caps use wide tracking (`--ls-overline 0.18em`) echoing the "GROUPE" lockup. Scale runs 12→64px (`--fs-*`).

**Spacing & layout.** 4px base scale (`--space-*`). Centered container `--container-max 1240px` with 24px gutters, ~96px section rhythm. Grids: 4-up listing/city cards on desktop, 3-up on results, 2-col hero and detail (content + sticky sidebar).

**Corners.** Soft and generous — cards `--radius-card 16px`, inputs/buttons 10px, big feature panels 24–32px, pills 999px. Nothing sharp.

**Elevation.** Low-contrast, cool-tinted shadows on a blue-ish base (`rgba(15,33,63,…)`), from `--shadow-xs` (resting cards) to `--shadow-lg` (hero search, floating panels). Cards rest on `--shadow-xs` with a 1px `--border-subtle`; they lift (`--shadow-md`, `translateY(-3px)`) on hover.

**Backgrounds.** Mostly flat off-white and white. Deep-blue full-bleed feature sections (CTA banners, footer). Soft top-to-bottom tints behind the hero (`--surface-primary-tint → --surface-page`). No busy gradients, no textures, no hand-drawn patterns. Imagery does the emotional work: warm, bright, lived-in interiors and architectural exteriors, natural light (referencing the Finder framing) — placed full-bleed inside rounded frames. Use `<image-slot>` so the user drops real photography.

**Motion.** Restrained and functional. `--dur-fast 120ms` for hovers/presses, `--dur-base 200ms` for card lifts, `--dur-slow 320ms` for image zoom-on-hover. Standard easing `cubic-bezier(.4,0,.2,1)`; no bounces.

**Hover / press.** Hover = darker fill (primary→`--blue-800`, accent→`--coral-600`) or a subtle surface tint + stronger border on outlines; cards lift and their photo scales to 1.05. Press = `translateY(1px)` on buttons. Focus = 3px soft blue ring (`--ring-focus`).

**Borders & dividers.** 1px `--border-subtle` on cards, 1.5px `--border-default` on inputs (→`--border-focus` blue on focus), hairline `--divider` inside cards.

**Transparency & blur.** Sparingly: sticky navbar is white at 92% with `blur(10px)`; photo overlays use `rgba(23,49,93,0.82)` glass chips for stats/counters. Badges over photos sit on solid or 90%-white pills for legibility.

---

## Iconography

- **Style:** single-weight **line icons, ~1.8px stroke, rounded caps/joins** — the Lucide visual language (matches the thin outline icons in the UX reference). No filled icon sets except the "favourite" heart when active (fills corail).
- **Delivery:** icons ship as a shared inline-SVG set in `ui_kits/website/Icons.jsx` (search, map-pin, chevrons, heart, user, phone, mail, bed, bath, ruler, car, wifi, wind, shield-check, key, home, building, trees, sliders, share, camera, walk, social). Components (`Select`, `Checkbox`, `PropertyCard`, `AgentCard`) embed the few glyphs they need directly, so no icon dependency is required to use a primitive.
- **Recommendation for new work:** use **Lucide** (`https://unpkg.com/lucide@latest`) for any glyph not already in the set — same stroke weight and rounding. Substitution flag: Lucide is a stand-in for a bespoke Giboire icon set (none was provided).
- **Emoji / unicode as icons:** never.
- **Logo:** `assets/logo-full.jpg` — the deep-blue square wordmark. Use it on light surfaces. On deep-blue/photographic surfaces, place it on a white chip **or** render the wordmark in type (white "GROUPE / GIBOIRE" in Montserrat) as the footer does — do **not** recolour or redraw the mark. No standalone monogram was provided.

---

## Components

Reusable React primitives (bundled as `window.GiboireDesignSystem_152501.*`). Each lives with a `.d.ts`, `.prompt.md` and a Design-System card.

**Forms** (`components/forms/`)
- **Button** — primary / accent / secondary / ghost / dark; sm·md·lg; icons; fullWidth.
- **IconButton** — circular icon-only (arrows, favourite, share).
- **Input** — text field with label, leading icon, hint, error.
- **Select** — styled native select with custom chevron.
- **Checkbox** — labelled checkbox for filters.

**Feedback** (`components/feedback/`)
- **Badge** — listing status pill (Vérifié, Nouveau, Coup de cœur, Exclusivité, states).
- **Tag** — pill filter/category chip with selected state.

**Property** (`components/property/`)
- **PropertyCard** — listing card: photo + status badges + favourite, price, address, specs.
- **CityCard** — "Rechercher par ville" tile with counts.
- **AgentCard** — conseiller contact card for detail pages.
- **SearchBar** — hero search composing Selects + keyword + accent button.

## UI kits

- **`ui_kits/website/`** — full interactive real-estate site. `index.html` boots an app that click-throughs **Accueil → Nos biens (recherche + filtres) → Détail d'un bien**. Screens: `Navbar`, `HomeScreen`, `ListingsScreen`, `PropertyScreen`, `Footer` (+ `Icons`). Composes the primitives above; imagery via `<image-slot>` for the user to drop real photos.

## Intentional additions

- **SearchBar**, **PropertyCard**, **CityCard**, **AgentCard** are domain composites not present as generic primitives — added because the real-estate product (and the UX reference) is built around them.

---

## File index / manifest

- `styles.css` — global entry (only `@import`s). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `effects.css`.
- `components/forms|feedback|property/` — primitives (`.jsx` + `.d.ts` + `.prompt.md` + card).
- `ui_kits/website/` — website kit (`index.html`, screen `.jsx`, `README.md`).
- `assets/` — `logo-full.jpg`, `image-slot.js`.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skill entry. `readme.md` — this file.
- Generated (do not edit): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

### Caveats
- Fonts (Montserrat/Mulish) are substitutions — awaiting the licensed brand faces.
- Property/city imagery uses `<image-slot>` placeholders; drop in real Giboire photography.
