# Groupe Giboire — Design System

A brand-faithful design system for **Groupe Giboire**, a centenary family-owned real-estate group of Breton origin, active nationally in France across development, sales, management and long-term stewardship of places to live.

> **Brand signature:** « Vos rêves prennent vie ici. » (Your dreams come to life here.)

This system translates the **Livre de marque 2026** (Brand Book, 108 pages, edited by the Direction de la Communication du Groupe Giboire, June 2026 — *Confidentiel, usage interne*) into design tokens, reusable components, foundation specimens, a product UI kit, and sample slides — everything an agent needs to produce on-brand interfaces and assets.

## Sources
- **Groupe Giboire — Livre de marque 2026** (brand book), provided as structured text. All voice, color, type and construction rules derive from it.
- **Uploaded assets:** the official square logotype (`GIBOIRE_Logo_AvecLiseret_RVB.png`), the full **Trenda** OTF family, and the **Fraunces** TTF family. All copied into `assets/`.
- No codebase or Figma file was provided — this is a **brand-guidelines-only** build, so the component inventory is a standard SaaS/product set derived from the brand's digital-interface recommendations (Section 12 of the brand book), not an inventory read from source code.

---

## Brand context

Giboire is family-owned, independent, and rooted in Brittany (born in Rennes), operating for **100+ years across 4 generations**. Its mission is to *"conceive and animate beautiful, sustainable places to live"*; its raison d'être is to *"go all the way to the end of the dreams of those who entrust us with their places to live."* Four points of force: century-long expertise, affirmed independence, local anchoring, and the ambition to regenerate the city. Three values: **Audace collective**, **Sens du client**, **Exigence totale**.

The brand always writes as **« Groupe Giboire »** (capital on each word; « GROUPE GIBOIRE » in caps). **« Giboire » alone is proscribed** except for technical uses (URLs, identifiers, e.g. `livgiboire.com`).

---

## CONTENT FUNDAMENTALS — how Giboire writes

**Language:** French. All product copy, labels and microcopy are in French.

**Three-part personality drives the voice** — Élégante, Rassurante, Ambitieuse:
- **Élégante (elegant):** sober, precise, refined — *distingué, sobre, rigoureux*; never pretentious, distant or rigid. Choose precise, accessible words; simple, concrete; active, direct sentences. No jargon, no pompous phrasing. Structure ideas with rigour (logical connectors, key message + example); avoid dense blocks.
- **Rassurante (reassuring):** reliable, transparent, benevolent; never conservative, bland or patronising. Explain every decision, step and impact transparently — no grey areas. Systematically underline the support offered, using accompaniment verbs: *accompagner, guider, soutenir*.
- **Ambitieuse (ambitious):** audacious, innovative, committed; never self-centred, arrogant or out-of-touch. Lead with inspiring goals and punchy verbs — *oser, transformer, innover, dépasser* — always tied to a **tangible proof or concrete result** (real cases, figures, before/after). No hollow claims.

**Person:** addresses the client as **vous**; the group speaks as **nous** ("Nous faisons de leurs rêves les nôtres").

**Tone examples (interface microcopy):**
- Button: `Enregistrer`, `Confirmer l'envoi`, `Découvrir la résidence` — short, action verbs.
- Reassurance: *"Votre conseiller vous accompagne à chaque étape."* / *"Nous ne partageons jamais votre adresse."*
- Empty/hint: *"Aucun document pour le moment. Votre conseiller les déposera ici."*
- Avoid: passive voice, abstract discourse, un-evidenced over-promises, administrative tone.

**Casing:** Sentence case for body and most UI labels. UPPERCASE reserved for the logotype, small overline labels (letter-spaced), and section eyebrows. Titles use no terminal period.

**Emoji:** **Not used.** The brand is sober and editorial. Iconography is line-based (see Iconography).

**Vibe:** warm minimalism — heritage that feels contemporary. Editorial serif accents over a calm, geometric sans; generous white (warm off-white) space; the recurring square as a quiet structural signature.

---

## VISUAL FOUNDATIONS

**Colour.** Built around the historic **deep blue `#17315d`** (Bleu profond, the signature) with a **secondary blue `#3d517c`** for accents/links. A family of **warm neutrals** carries the calm, elegant base: Taupe `#ada696`, Sable clair `#d4cebd`, Ivoire `#e8e7df`, Blanc cassé `#f2f2ec` (the primary surface), white. A **secondary expressive palette** (olive, plum, mauve, rose, terracotta `#bb6a4a`, apricot, peach, browns) is used **sparingly** to hierarchise and warm — never to break the sobriety. **Terracotta is the accent**, dosed with care (a single CTA, a highlight — not a field of it). Page backgrounds are the warm off-white `#f2f2ec` or ivory `#e8e7df`; surfaces are white or warm sand. Semantic states (success = olive, warning, danger, info = secondary blue) are tuned for AA contrast on the light backgrounds. Deep blue on off-white/white is the workhorse text/brand pairing.

**Type.** Two families:
- **Trenda** (primary, geometric sans) — clarity, rigour, mastery. Used for all UI, body, labels, and H1–H3 headings (Semibold/Bold; Black for strong emphasis). Fallback: **Arial**.
- **Fraunces** (secondary, editorial serif) — warmth, character, editorial echo of the heritage. Used **sparingly and large** for hero/display, key figures, and pull-quotes, in **Light**, with a few words in *Italic*. Fallback: **Times New Roman**.
Display is set tight (letter-spacing ≈ −0.02em, line-height ≈ 1.05); body at 1.5 line-height. Overlines are uppercase Trenda Semibold with wide letter-spacing.

**Spacing & grid.** A **modular system echoing the square logotype**: base module 24px, with a **quarter-module (6px) minimum margin** ("marge tournante") preserving breathing room. Spacing scale runs 6 / 12 / 18 / 24 / 36 / 48 / 72 / 96px. Print grids use 5, 7 or 9 squares (e.g. programme brochures at 210×210mm, 9×9). Density is **airy** — lots of white space, consistent with the elegant, sober personality.

**Shape & corners.** **Squared, or very lightly rounded** (radius 4–6px) — a direct echo of the square logo. Pills only for toggles/switches. No heavily-rounded "bubbly" UI.

**Borders.** The **fine "filet"** is a signature: a 1–1.5px hairline (sable/taupe for neutral, deep blue for brand emphasis) framing cards and controls — echoing the logo's liseré and the graphic markers.

**Shadows.** Restrained and cool-toned (all built on the deep-blue rgba), elegance over depth: `xs`/`sm` for resting surfaces, `md` on hover, `lg` for modals. Many surfaces use a filet border *instead* of a shadow.

**Backgrounds & imagery.** No gradients, no textures, no hand-drawn illustration. Backgrounds are flat warm neutrals. Photography is the primary imagery: authentic, sincere, well-framed — five families (the detail/craft, the life of places, the people of Giboire, architecture in perspective, projects-to-come in 3D). Colour vibe of imagery: **warm, natural light**, never over-produced or "advertising-glossy," no forced smiles. (No stock photos are shipped in this system — use real Giboire photography or placeholders.)

**Graphic markers.** Derived from the **square**: solid square, filet square, and a **"Polaroïd" frame** (white square with a heavier bottom edge). These structure layouts — see the `SquareMarker` component.

**Motion.** Understated. Short ease transitions (~0.16s) on colour/border for hover; a subtle 1px press translate on buttons; a gentle 2px lift on interactive cards. No bounces, no flashy animation — motion serves elegance and reassurance.

**Hover / press states.** Hover: primary buttons darken to the secondary blue; secondary/ghost fill with a subtle ivory wash; links move deep-blue→ deep-blue with underline; cards lift + gain the `md` shadow. Press: buttons translate down 1px. Focus: a 2px secondary-blue outline / soft blue focus ring (`--shadow-focus`).

**Transparency & blur.** Used minimally — only the modal scrim (deep-blue at ~42% alpha). No glassmorphism.

---

## ICONOGRAPHY

The brand book defines **no proprietary icon set or icon font**, and **no icons were provided**. Giboire's visual language is photographic and typographic, with the square as its one geometric motif; **emoji are never used**.

For interface work this system uses **[Lucide](https://lucide.dev)** (loaded from CDN in the component cards and UI kit) as the icon set — a thin, geometric, evenly-weighted line style that matches Trenda's clean geometry and the brand's sober elegance. **This is a substitution flagged for review** — if Giboire adopts an official icon set, replace the Lucide references. Guidance when using it: line (not filled) icons, ~1.5–2px stroke, deep-blue or muted-taupe colour, sized 16–24px in UI. Avoid decorative or novelty icons.

The **logotype** (`assets/logo/giboire-logo-liseret.png`) is the one fixed brand mark. It is a **square** in deep blue; minimum digital width **80px**; a protection zone equal to the height of "GROUPE GIBOIRE" must stay clear around it; never recolour, distort, add effects to, or remove the liseré from it. The `Logo` component renders either the official PNG (via `src`) or a CSS wordmark fallback for quick prototypes.

---

## Components

Reusable React primitives (`components/<group>/`). All are self-contained, style via CSS custom properties, and are bundled under the `window.GroupeGiboireDesignSystem_*` namespace.

**core/** — `Button`, `IconButton`, `Badge`, `Tag`
**forms/** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Field`
**layout/** — `Card`, `Divider`, `SquareMarker`
**feedback/** — `Alert`, `Dialog`, `Tooltip`
**navigation/** — `Tabs`, `Breadcrumb`
**brand/** — `Logo`

Each directory has a `@dsCard` HTML specimen, `.d.ts` prop contracts, and a `.prompt.md` usage note.

### Intentional additions
Since no source defined a component inventory, the set above is a standard product/SaaS kit derived from the brand book's digital-interface recommendations. Two brand-specific additions: **`SquareMarker`** (the square graphic marker from the construction principles) and **`Logo`** (the logotype wrapper).

---

## Index / manifest

- `styles.css` — global CSS entry point (import list only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `logo/` (official PNG), `fonts/` (Trenda OTF, Fraunces TTF).
- `components/` — `core/`, `forms/`, `layout/`, `feedback/`, `navigation/`, `brand/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/client-portal/` — the Espace Client SaaS micro-app kit.
- `slides/` — sample 16:9 slides.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skill manifest.

---

## Caveats
- **Fonts are the licensed originals** provided by the user (Trenda, Fraunces). If distributing this system, confirm licensing.
- **Icons (Lucide) are a flagged substitution** — no official Giboire icon set exists.
- **No photography is shipped** — imagery uses placeholders; supply real Giboire photography for production.
