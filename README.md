# Jovian Security — marketing site

The joviansec.com homepage, built from the design handoff in [`design/`](design/README.md).

Static [Astro](https://astro.build) site: one page, no framework runtime, two small
client scripts (theme toggle, email capture). Output is plain HTML/CSS to `dist/`.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
npm run check    # Astro + TypeScript diagnostics
```

## Layout

```
src/
  data/site.ts          all homepage copy and the service-line / advisory / stat data
  layouts/Layout.astro  document shell, meta, and the pre-paint theme boot script
  pages/index.astro     the 1280px page shell; composes the sections in order
  components/
    SiteNav ThemeToggle Hero ServiceStrip ServiceLines
    Method StatBand Research Credentials ClosingCta SiteFooter
    LogoMark.astro      30x30 banded-disc mark
    JupiterPlanet.astro 760x760 hero planet
    OrbitGlyph.astro    reduced planet bled behind the closing CTA
  styles/
    tokens.css          type/space/radius from Nocturne + the Jupiter-bands palette
    components.css      shared .btn / .kicker layer
    global.css          reset, heading base, theme cross-fade, SVG paint classes
```

Copy lives in `src/data/site.ts`, not in the components — the handoff treats it as
final, so edit it in one place.

## Theming

Every colour on the page, including inside the SVG planet, resolves through a custom
property on `:root`. The light theme is a single `[data-theme='light']` override
block in `tokens.css`.

The toggle is a real `<button>` with `aria-pressed`; it sets `data-theme` on `<html>`
and persists to `localStorage` under `jv-theme`. With nothing stored the page follows
`prefers-color-scheme`, resolved by an inline script in `<head>` so the ground never
flashes. A universal `.45s` transition on `background-color, color, border-color,
fill, stroke, stop-color` makes the two themes cross-fade as one piece; it's armed
only after the first frame (`.jv-ready`) and disabled under `prefers-reduced-motion`.

SVG presentation attributes can't take `var()`, so the planet and the mark paint
through the `.f-*` / `.s-*` / `.stop-*` classes in `global.css` rather than
`fill=""` / `stroke=""`. Keep that pattern or the graphic will stop theming.

## The Jupiter graphic

`JupiterPlanet.astro` is hand-built SVG and is painted strictly back-to-front. Two
rules from the handoff must survive any edit:

- every orbit passes **both in front of and behind** the planet — the far half is
  occluded by the opaque disc, the near half is drawn over it;
- every orbital body sits **exactly on an orbit path**, at true scale against the
  planet (Ganymede 2.9, Callisto 2.7, Io 2.0, Europa 1.7 against radius 78).

Don't substitute a raster image.

## Email capture

The closing-CTA form is the only interactive piece. It validates for a well-formed
address, then POSTs `{ email, source }` to `PUBLIC_JV_LEAD_ENDPOINT` and replaces the
row with a confirmation line at the same height, so nothing shifts.

```sh
# .env
PUBLIC_JV_LEAD_ENDPOINT=https://crm.example.com/leads
```

**With the variable unset the form validates and confirms but sends nothing** — it
logs a warning to the console instead. Wire the endpoint before launch.

## Open items

- **Responsive behaviour is not designed.** The mock is a fixed 1280px canvas and
  that rendering is exact. Below 1280px the site falls back to the moves the handoff
  suggested (4-up grids to 2-up then 1-up at 1023px/639px, the fixed column splits
  stacked, the hero planet scaled back and dimmed, the nav wrapping to a second row
  instead of a mobile menu, which was never specced). Every one of those rules is in
  a `@media (max-width: …)` block marked "un-designed fallback" and needs the
  designer's sign-off.
- Footer links (`Disclosure policy`, `PGP key`, `security.txt`) and
  "Browse the advisories" are `#` placeholders — the handoff doesn't specify targets.
- Advisories are hard-coded in `site.ts`. The shape (`id`, `title`, `severity` or
  `tag`, `href`) matches what a CMS feed would need.
- Inter is self-hosted via `@fontsource-variable/inter`, not loaded from Google Fonts.

## Design source

`design/` holds the original handoff: `Jovian Home.dc.html` (the prototype this was
built from), `Jovian Marks.dc.html` (brand exploration, reference only), the Nocturne
token sheet, and reference screenshots. It is not shipped.
