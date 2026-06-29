# MND — Design System

> **Maison MND** · Cotonou, Bénin · Édition Souveraine 2026 Signature culturelle : *mi nyɔ́ ɖɛkpɛ* — « Nous sommes beaux, et nous le savons. » Contact : contact@mnd.bj · Instagram : @maison.mnd

This is the source-of-truth design system for **MND**, a premium textured-hair / locks care house. It translates the *Brand Guidelines · Édition Souveraine* charter into an executable system: tokens, components, foundation cards, and full-screen UI kits.

**Naming rule (non-negotiable):** the brand is always written **MND** (standard Latin D). The fon glyph *ɖ* (hooked d) belongs **only** to the cultural signature *mi nyɔ́ ɖɛkpɛ* and the monogram — never to the initialism.

---

## 1 · Brand context

MND is a maison, not a salon chain. It frames the care of locks as an act of **cultural sovereignty**, rooted in fon knowledge (Bénin) and held to an international luxury standard. The mission is captured in three gestures: *Former, soigner, transmettre* — train, care, transmit.

- **Archetype — Le Souverain.** Quiet authority, mastery, a sense of heritage. MND does not shout its luxury; it reigns.
- **Five values.** Souveraineté · Transmission · Excellence · Enracinement · Soin.
- **Territory.** Ritual · royal · rooted · sculptural · timeless. *Never* trendy, loud, folkloric, disposable, or clinical.
- **Touchpoints.** Flagship salon (temple du soin), product range (verre teinté + capsule cuivre), and a sovereign social system (@maison.mnd).

### Sources

This system was built from a single provided source: **`uploads/MND_Design_System.md`** — the full transcription of the *Brand Guidelines · Édition Souveraine* charter (ADN, couleur, identité, typo, système graphique, photographie, digital, espace physique, packaging, design tokens).

Visual assets provided and copied into `assets/`:

- **Logos** (`logo-*.png`): vertical lockup — crown monogram over the MND serif initialism — in indigo, ivoire, copper, obsidian, and gold (`or`).
- **Monograms** (`mono-*.png`): the isolated crown seal, same five colorways.
- **Patterns** (`pattern-rosette.png` = Le Médaillon, `pattern-arcade.png` = L'Arcade, `pattern-tresse.png` = Le Tressage).
- **Photography** (`photos/portrait-1..3.jpg`): editorial royal portraits, locks in focus, sculpted natural light (credited Abibèko Studios in source).

No codebase, Figma, or live product was provided — MND is pre-product. The UI kits here are therefore **brand surfaces** (marketing site + social templates) inferred from the charter's Digital section, not recreations of shipped software.

---

## 2 · Content fundamentals — how MND writes

**Language.** Primary voice is **French** (Béninois market, international luxury register). The fon signature *mi nyɔ́ ɖɛkpɛ* appears as a sacred refrain, never translated inline in body copy.

**Tone.** Editorial, sovereign, unhurried. Copy behaves like a maison de couture: short declarative sentences, ceremony over salesmanship. It states; it does not persuade. No exclamation marks, no urgency, no discounts-language.

**Person.** Mostly impersonal / collective. The brand speaks as a *we that reigns* — `nous` (the maison) and an honorific *vous*. The signature is plural and proud: *nous sommes beaux*. Avoid chummy second-person marketing ("you'll love…").

**Casing.** Titles favour **lower-case serif** for long lines (« la beauté noire n'a rien à prouver »); the initialism **MND** and eyebrows are **UPPERCASE**, widely letter-spaced. Sentence case for body.

**Rhythm device.** Triads everywhere — *Former, soigner, transmettre* · *Purifier, Nourrir, Sceller, Couronner* · *Visuel · Parole · Preuve*. Lean on the comma-separated triad and the mid-sentence em-dash.

**Vocabulary.** couronne, lignée, rituel, sceller, souveraineté, héritage, mèche, lock, transmettre. Avoid: deal, promo, hack, tendance, "boostez".

**Emoji.** Never. Not in product, not in social captions. Unicode ornaments (·, —, ✕) are used as quiet typographic punctuation only.

**Examples (verbatim from charter):**

- Manifesto: « Avant d'être une coiffure, le lock est une lignée. Avant d'être une marque, MND est une couronne. »
- Value translation: « Souveraineté — Porter sa tête haute. Une beauté qui n'a rien à prouver. »
- Témoignage attribution format: *nom · ville · ancienneté*.

---

## 3 · Visual foundations

**Colour.** A strict closed system: **neutres minéraux dominate (60%)**, **indigo structures (28%)**, **obsidienne contrasts (8%)**, **cuivre punctuates (4%)**. Indigo Royal `#1E2150` is the signature; Cuivre Noble `#B97A4A` is prestige; Obsidienne `#14141B` is contrast; Ivoire `#F6F1E7` / Sable `#E3DACB` / Argile `#CDBBA9` are the paper neutrals. **Copper is never body-text colour on light** — titles, filets, and details only. Full 50→900 ramps live in `tokens/colors.css`.

**Type.** Two families, no exceptions. **Cormorant Garamond** (Light 300) is *la voix* — display, H1–H3, quotes, numerals, manifesto. **Jost** (Light/Regular/Medium/Semibold) is *la clarté* — body, labels, UI, signage. Display line-height is tight (\~0.92); eyebrows are UPPERCASE Jost at `letter-spacing: .26em`; the MND sigle is set even wider (`.34em`). Body runs at 14px Light. Avoid: heavy serif weights, tight caps, underlines, more than two families.

**Spacing & grid.** 8px base (the monogram's 8×8 module). Generous whitespace is a luxury signal — sections breathe at 96–128px. Containers cap \~720px (prose) to \~1320px (max).

**Backgrounds.** Predominantly flat mineral fields (ivoire/sable) or deep indigo aplats. **Patterns (rosette/arcade/tresse) appear as quiet allover textures at low opacity — never under running text.** Full-bleed photography is used for hero moments. The indigo→indigo-deep gradient (`--grad-indigo`) is the only "gradient", reserved for deep aplats — no decorative rainbow gradients, ever.

**Imagery.** Warm, sculpted, editorial. Natural directional light, rich un-lightened skin, sovereign posture (level gaze, high head), generous negative space, locks/copper/linen textures in frame. Fine natural grain — never saturated HDR or cold studio. Portraits may be framed by **l'arche** (the crown arch as a portrait mask).

**Borders & filets.** Two rules only: a **2px copper filet** (accent / separation of panels, e.g. avant/après) and a **1px indigo filet** (hierarchy). Hairlines on light use `rgba(20,20,27,.14)`.

**Corners.** Near-square. The maison does not round itself: `--radius-sm: 2px`, `--radius-md: 4px`. The pill radius is reserved for the cerclé seal/badge only. Cards are flat ivoire panels with a soft diffuse shadow and a hairline or copper top-filet — not rounded bubbles.

**Elevation.** Shadows are deep but **soft and diffuse**, tinted toward obsidian/indigo (`--shadow-sm → --shadow-xl`). Never hard or neon. On deep indigo, shadow shifts to `--shadow-indigo`.

**Protection gradients.** On photography, text sits over a `--veil-bottom` / `--veil-top` obsidian scrim (not a flat box) so type stays legible without a hard capsule. Capsules (sceau, badge) are reserved for marks, not paragraphs.

**Animation.** Restrained and dignified — fades and gentle rises, `--ease-soft` (no bounce, no spring). Durations 140–420ms. Decorative infinite loops are avoided. Reduced-motion shows final state.

**Hover / press.** Hover = a faint darkening veil (`--hover-veil`) or copper-underline reveal — never colour-flips or scale-ups. Press = slightly deeper veil (`--press-veil`); the seal may dim. Focus = a translucent copper ring (`--focus-ring`).

**Transparency & blur.** Used sparingly — sticky headers may use a light ivoire blur; story safe-zones darken with the veil. No frosted-glass everywhere.

---

## 4 · Iconography

The charter specifies a **line iconography**: constant stroke, airy forms, rounded terminations; indigo on light, ivoire on dark. The named brand set is: *huile/soin · lock/mèche · peigne · naturel/végétal · couronne · coupe/soin · pot/rituel · excellence (étoile)*.

No icon binaries were provided in the source. **The brand crown monogram is the one true brand glyph** (`assets/monograms/mono-*.png`) and is used as seal, bullet, and section mark throughout. For the supporting UI line-icon set, this system substitutes **[Lucide](https://lucide.dev)** (loaded from CDN) — a constant-stroke, rounded-terminal open-source set that matches the charter's described style. **This is a documented substitution; replace with the maison's bespoke line set when available.** Map: `droplet`→huile, `git-commit`/`align-justify`→mèche, `crown`→couronne, `leaf`→végétal, `scissors`→coupe, `star`→excellence.

Emoji are never used. Unicode ornaments (·, —, ✕, ★) act as quiet typographic marks only.

---

## 5 · Index / manifest

**Root**

- `styles.css` — global entry (import this one file). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**`tokens/`** — `fonts.css` (Cormorant + Jost via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`assets/`** — `logos/`, `monograms/`, `patterns/`, `photos/`.

**`guidelines/`** — foundation specimen cards (Design System tab): colour, type, spacing, brand/logo/pattern.

**`components/core/`** — reusable primitives: Button, Eyebrow, Badge, Tag, Input, Card, Seal, Filet (divider), Stars, Stat. See each `*.prompt.md`.

**`ui_kits/`**

- `web/` — *Maison MND* site. `index.html` (Hero, Manifeste, Rituel, Gamme — real natural products, Témoignage, booking), `product.html` (Huile Couronne detail), `boutique.html` (**full e-commerce**: catalogue, cart drawer, 3-step checkout — livraison/paiement/confirmation). Shared data in `data.js` (`window.MND`: products, services, founders).
- `social/` — sovereign social templates (Instagram post, Story 9:16, Témoignage, Avant/Après) + `platforms.html` (**présence sociale**: TikTok, Instagram, LinkedIn, Google Business & Maps profiles).
- `deck/` — *Pitch — Maison MND*: 12-slide brand & investor deck incl. **Les fondateurs** (Brice & Yéman Ahouansou, couple photo). Présentable + export PDF/PPTX.
- `menu/` — *Menu de soins*: price list (création de locks par taille — microlocks→moyennes, entretien, style & conseil), FCFA.
- `packaging/` — étiquettes for the gamme (Huile Couronne, Shampoing Naturel, Beurre Locks, Sérum Racines).
- `atelier/` — *Espace & matière*: façade/enseigne, signalétique 01/02/03, tablier/uniforme, **tenue traditionnelle wax (ancrage culturel)**, cape, serviette, foulard.
- `collateral/` — cartes de visite fondateurs, carte client personnalisée, carte cadeau, coffret, sceau de cire, sac, fidélité, vitrophanie.
- `quiz/` — **Quiz Personas** «Quel type de tête couronnée êtes-vous ?» · 5 personas (Souveraine Locale, Diaspora Souveraine, Initié·e, Maman Transmettrice, Le Souverain) · scoring pondéré · résultat avec guide pour l'équipe MND.
- `documents/` — **Documents officiels** : `facture.html` (A4), `devis.html` (A4 + bon pour accord), `lettre.html` (lettre d'affaires à en-tête indigo), `cachets.html` (tampon rond svg, Acquitté, Bon pour accord, badge enseigne).
- `academie/` — **MND Académie**: formation premium — cursus 3 niveaux (Initiation / Praticien / Maître), academy en ligne (classes & vidéos), diplôme & certification scellés.
- `podcast/` — **RACINES — le podcast MND**: hero + cover, épisodes (YouTube), communauté (Skool), boutique (Shopify).
- `event/` — **Le Couronnement**: signature red-carpet gala, éditions mondiales (Cotonou édition mère → Lagos, Abidjan, Dakar, Paris, Atlanta), dress code couronne/wax/broderie, invitation.
- `erp/` — **MND ERP « Le Trône »**: brand-native business OS (tableau de bord, carnet/rendez-vous, têtes couronnées, gamme & stock, Académie, finances). Interactive sidebar; FCFA + Mobile Money + WhatsApp — pensé pour Cotonou, pas calqué sur l'étranger.
- `app/` — **Ma Couronne** (espace client mobile): le client est le héros, MND le guide. Accueil (statut couronne, prochain RDV), parcours (avant/après + timeline), rituel sur mesure, cercle (RACINES/Skool/Le Couronnement). Tabs interactifs.
- `crm/` — **MND CRM « Le Suivi »**: client-360 — journal mèche-après-mèche, valeur cliente, rituel recommandé, relances. Suivi total ; tag diaspora.

**`templates/`** — `maison-hero/` — reusable MND brand-hero starting point (`.dc.html`, consumes the bundle).

**Founders:** Brice Ahouansou (+229 01 96 75 60 62) & Yéman Ahouansou (+229 01 62 09 22 22 / +229 01 95 11 66 22). Photos in `assets/photos/` (founders-couple, brice-portrait, yeman-portrait, yeman-smile).

**Real product formulas** (natural, maison): moringa, romarin, basilic, tea tree, niaouli, bissap, cristaux de menthe, aloe vera, huile d'avocat, huile de carotte, beurre de karité (toute l'Afrique), beurre de cacao. Sans silicone ni paraben.

**Brand photography** (`assets/photos/`): founders (couple + Brice + Yéman), hero-poster (key visual w/ logo), uniform-beige & uniform-black (real salon tunics), broderie-event (white ceremony embroidery), model-microlocks, plus the editorial portraits.

> Bundle access in cards/kits: `const { Button, … } = window.MNDDesignSystem_a962de` after loading `_ds_bundle.js`.
