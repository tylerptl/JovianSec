# Handoff: Jovian Security marketing site (homepage + brand marks)

## Overview
Marketing homepage and logo/brand exploration for **Jovian Security** (joviansec.com), a security engineering and penetration testing firm. Visual language is drawn from the Jovian (Jupiter) system: a banded planet, orbit lines, and the four Galilean moons used as the names of the four service lines.

Two deliverables:
1. **Homepage** — full single-page marketing site, approved colorway ("Jupiter bands": near-black ground, amber + rust accents).
2. **Brand mark exploration** — six planet-and-orbit logo constructions, three colorways, and four hero treatments. Reference only; the homepage already embeds the chosen mark.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes that show intended look and behavior. They are not production code to copy directly. They use a lightweight streaming-component wrapper (`.dc.html`) with all styling written inline.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, Astro, etc.) using its established patterns, component library and styling approach. If no environment exists yet, choose an appropriate framework — this is a static marketing page, so a static-site generator (Astro, Next.js static export, Eleventy) is a good fit.

## Fidelity
**High-fidelity.** Colors, typography, spacing, SVG geometry and hover states are final. Recreate pixel-for-pixel at the 1280px design width. Copy is final and should be used verbatim.

## Screens / Views

### 1. Homepage — `Jovian Home.dc.html`
**Purpose:** convert a technical buyer (engineering leaders, compliance-driven buyers, government/defense, subcontracting security firms) into a scope call.

**Layout:** single column, page shell `width: 1280px; min-width: 1280px; margin: 0 auto` on a `#0f0c09` ground. Content is flush-left with a 56px horizontal gutter; whitespace is carried on the right. Sections stack in this order, separated by 1px `rgba(240,231,220,.14)` rules:

1. **Nav bar** — `display:flex; align-items:center; gap:28px; padding:20px 56px`. Left: 30×30 logo mark + wordmark ("Jovian" at full opacity, " Security" at 50%), `margin-right:auto`. Then four text links (Services, Research, Method, Company) at 14px, `opacity:.7`, → 1 on hover. Right: theme toggle (see "Theme toggle" below), then outlined amber CTA "Request a scope call" (13px, `padding:7px 13px`, `border:1px solid #d98a3d`, `border-radius: 8px`, hover `background: rgba(217,138,61,.12)`, active `.22`).
2. **Hero** — `position:relative; padding:104px 56px 86px; overflow:hidden`. Copy column `max-width:640px`:
   - Eyebrow: 26px×1px amber rule + "Offensive security & security engineering", 11px, `letter-spacing:.14em`, uppercase, `#d98a3d`, 30px below.
   - H1: 62px / `line-height:1.03` / `letter-spacing:-.03em` / weight 500 / `text-wrap:balance` — "Attack surface, mapped the way an adversary would map it."
   - Body: 17px / 1.6 / `opacity:.7` / `max-width:500px`.
   - Buttons: outlined amber primary + outlined bone secondary ("Read a sample report"), 14px, `padding:11px 19px`.
   - **Hero graphic** (see "Jupiter graphic" below): 760×760 SVG, absolutely positioned `right:-150px; top:-140px`, `pointer-events:none`.
3. **Service-line strip** — 4-up `grid-template-columns:repeat(4,1fr)`, 1px right rules between cells (none on the last). Each cell: 7px colored dot + moon name (17px heading) + one-line description (13px, `opacity:.65`). Order and copy:
   - **Io** (dot `#d98a3d`) — "Network, web and API penetration testing"
   - **Europa** (dot `#b4552a`) — "Red teaming and adversary simulation"
   - **Callisto** (dot `rgba(180,85,42,.6)`) — "Embedded and tactical edge security engineering"
   - **Ganymede** (dot `rgba(217,138,61,.6)`) — "AI & LLM system development & integration"
4. **"The four service lines"** — `grid-template-columns:300px 1fr; gap:56px`. Left: H2 32px + 14px intro. Right: four rows, each `grid-template-columns:170px 1fr 120px; gap:24px; align-items:baseline; padding:22px 0` with a 1px top rule (and a bottom rule on the last row only). Row = 8px dot + moon name (19px) | title (15px) + description (13px, `opacity:.6`) | duration, right-aligned (12px, `opacity:.5`). Same order as the strip: Io "Penetration testing" (2–3 weeks), Europa "Red teaming & adversary simulation" (4–8 weeks), Callisto "Embedded & tactical edge security engineering" (Scoped), Ganymede "AI & LLM system development & integration" (Retained).
5. **"How an engagement runs"** — H2 + 14px intro (`max-width:520px`), then a 4-up grid using `gap:1px` over a `rgba(240,231,220,.14)` background to draw hairline dividers (cells repaint `#0f0c09`). Each cell: monospace step number in amber (11px), title (17px), body (13px / 1.5 / `opacity:.62`). Steps: 01 Scope, 02 Operate, 03 Report, 04 Retest.
6. **Stat band** — 4-up grid with 1px top and bottom rules and right rules between cells. Value 30px heading, `letter-spacing:-.02em`; label 12px `opacity:.55`. Values: 240+ engagements delivered · 31 CVEs credited to the team · 11 yrs median operator experience · 0 tests subcontracted out.
7. **Research** — two equal columns, `gap:64px`, `align-items:center`. Left: amber uppercase kicker, H2 28px, 14px body, amber text link "Browse the advisories →". Right: three advisory rows, each `display:flex; gap:16px; align-items:baseline; padding:14px 0` with a 1px bottom rule: monospace id (11px, `opacity:.5`, fixed 104px) | title (14px, flex:1) | severity pill (10px, amber 1px border, 4px radius) or a bone-outlined "Tooling" pill.
8. **Credentials strip** — 1px rules top and bottom, `padding:26px 56px`. Uppercase 11px label "Team credentials" + three 13px items at `opacity:.7`: **OSCP**, **OSAI**, **CISSP**.
9. **Closing CTA** — `position:relative; padding:84px 56px 88px; overflow:hidden`, with a reduced 420px orbit graphic bled off the lower left (`left:-150px; bottom:-210px; opacity:.5`). Content is a flex row, `align-items:flex-end`: H2 40px (`letter-spacing:-.025em`, `max-width:520px`, `text-wrap:balance`) + 15px sub-line on the left; email input (240×42, `background:#1b1512`, 1px bone border at 20%, amber caret) + outlined amber "Book the call" on the right.
10. **Footer** — 1px top rule, `padding:22px 56px 34px`, 12px at `opacity:.5`: "© 2026 Jovian Security · joviansec.com" pushed left, then Disclosure policy / PGP key / security.txt (hover → amber).

### 2. Brand marks + hero variants — `Jovian Marks.dc.html`
A pan/zoom option board, newest turn at the top. Not a page to ship; use it to understand the mark system and the rejected alternatives.
- **Turn 2** — four full 1280px hero treatments: `2a` the approved Jupiter-bands colorway (this is what the homepage implements), `2b` a light beige counterpart, `2c` monochrome with a solid knocked-out disc, `2d` a blocky variant with stacked solid bands and a filled rust button.
- **Turn 1** — six logo constructions (`1a`–`1f`: single tilted orbit; two crossing orbits; solid banded disc; four concentric orbits; orbit with occlusion; square cropped field) plus three colorway lockups (`1g` monochrome, `1h` beige, `1i` Jupiter bands) each with a palette strip.

## The Jupiter graphic (most important asset to port precisely)
Both the logo mark and the hero image are hand-built SVG. Reproduce the geometry exactly; do not substitute an image.

**Logo mark (30×30, `viewBox="0 0 100 100"`)** — blocky banded disc with an orbit behind:
- Orbit: `<ellipse cx=50 cy=50 rx=46 ry=15 stroke="#f0e7dc" stroke-width="2.6" opacity=".5" transform="rotate(-18 50 50)">`
- Disc: four `<rect x=24 width=52>` bands clipped to `<circle cx=50 cy=50 r=23>` — y=27 h=11 `#f0e7dc`, y=40 h=8 `#d98a3d`, y=50 h=12 `#b4552a`, y=64 h=9 `#f0e7dc`.

**Hero planet (760×760, `viewBox="0 0 400 400"`)**, painted in this order:
1. Faint outer ring `rx=196 ry=192`, bone, `stroke-width:.6`, `opacity:.1`, with a body (Callisto, r=2.7) at (133, 19.6).
2. Outer orbit `rx=188 ry=68 rotate(-18)`, bone, `stroke-width:.8`, `opacity:.3`.
3. Inner orbit `rx=150 ry=42 rotate(-18)`, bone, `stroke-width:.8`, `opacity:.2`, with a body (Io, r=2.0) at (61.5, 229.9).
4. Atmospheric haze: radial gradient `#b4552a` .38 → 0, drawn as `<circle r=132>`.
5. Planet disc `<circle cx=200 cy=200 r=78 fill="#0f0c09">` — opaque, so the far half of each orbit is occluded naturally.
6. Clipped to the disc: a vertical dust gradient (`#d98a3d` .22 → `#b4552a` .10 → `#0f0c09` .55), then the belts — `M120 184h160` `#b4552a` width 13 `opacity:.45`; `M120 217h160` `#a04b23` width 15 `opacity:.45`; pale equatorial zone `M120 200h160` `#e8b478` width 7 `opacity:.16`; and the Great Red Spot as `<circle cx=234 cy=217 r=7 fill="#8f3a1d" opacity=".8">` (a circle, sized to sit inside the southern belt).
7. Disc edge `<circle r=78 stroke="#d98a3d" stroke-width=".9" opacity=".45">`.
8. Front half of the outer orbit drawn ON TOP of the disc: `<path d="M378.8 141.9A188 68 -18 1 1 21.2 258.1" stroke="#f0e7dc" stroke-width="1.1" opacity=".75">`, with bodies at its ends/midpoint: Ganymede r=2.9 `#d98a3d` at (378.8, 141.9) and Europa r=1.7 bone `opacity:.5` at (221, 264.7).

Rules that must survive the port: **every orbit line passes both in front of and behind the planet** (back half occluded by the opaque disc, front half drawn over it), and **every orbital body sits exactly on an orbit path**, sized to true scale against the planet (Ganymede 2.9, Callisto 2.7, Io 2.0, Europa 1.7 against a planet radius of 78).

## Theme toggle (dark ⇄ light)
The homepage ships both colorways with a switch in the nav. Every color in the page is a CSS custom property declared on the page root (`.jv`); the light theme is one override block, and a universal transition makes the change animate.

**Control:** a 42×22 pill to the left of the nav CTA — 11px radius, 1px `--jv-border`, `--jv-surface` fill, with a 14px accent knob that slides 20px right on activation over `.45s cubic-bezier(.4,0,.2,1)`. Label "Theme" beside it, 12px uppercase at `opacity:.5`. In the prototype it is a hidden checkbox plus `body:has(#jv-light:checked)` — in production use a real button with `aria-pressed`, a `data-theme` attribute on the root, and persistence in `localStorage`, defaulting to `prefers-color-scheme`.

**Transition:** `background-color, color, border-color, fill, stroke, stop-color` at `.45s ease`, applied to the root and all descendants so the SVG planet, orbit lines and hairline rules all cross-fade together. The `<body>` background transitions with it so no dark band shows past the page.

**Token pairs** (dark → light):

| Token | Dark | Light |
| --- | --- | --- |
| `--jv-bg` | `#0f0c09` | `#eae4d8` |
| `--jv-surface` | `#1b1512` | `#f4efe4` |
| `--jv-ink` | `#f0e7dc` | `#2b2723` |
| `--jv-accent` | `#d98a3d` | `#a9663c` |
| `--jv-zone` (pale equatorial band, hover link) | `#e8b478` | `#e0c9a8` |
| `--jv-rust` | `#b4552a` | `#7e4426` |
| `--jv-rust-dp` (southern belt) | `#a04b23` | `#6b3a20` |
| `--jv-storm` (Great Red Spot) | `#8f3a1d` | `#5e2a15` |
| `--jv-divider` | `rgba(240,231,220,.14)` | `rgba(43,39,35,.16)` |
| `--jv-border` | `rgba(240,231,220,.2)` | `rgba(43,39,35,.22)` |
| `--jv-ink-hover` | `rgba(240,231,220,.07)` | `rgba(43,39,35,.06)` |
| `--jv-hover` | `rgba(217,138,61,.12)` | `rgba(169,102,60,.12)` |
| `--jv-press` | `rgba(217,138,61,.22)` | `rgba(169,102,60,.22)` |
| `--jv-accent-dim` (Ganymede dot) | `rgba(217,138,61,.6)` | `rgba(169,102,60,.6)` |
| `--jv-rust-dim` (Callisto dot) | `rgba(180,85,42,.6)` | `rgba(126,68,38,.6)` |

Note for the port: SVG presentation attributes cannot take `var()`. In the prototype every themed `fill`/`stroke`/`stop-color` on the planet graphic was moved into an inline `style` declaration — keep that pattern (or set the values from CSS classes) so the graphic themes with the page.

## Interactions & Behavior
- Nav links: `opacity .7 → 1` on hover. Anchor-scroll to `#services`, `#research`, `#method`, `#company`, `#contact`.
- Outlined amber buttons: hover `background: rgba(217,138,61,.12)`, active `rgba(217,138,61,.22)`. Outlined bone button: hover `rgba(240,231,220,.07)`, active `.14`.
- Text links (footer, "Browse the advisories"): hover → `#d98a3d` / `#e8b478`.
- Keyboard focus must be themed, never the browser default: `:focus-visible { outline: 2px solid #d98a3d; outline-offset: 2px; }`.
- Email capture in the closing CTA is the only form: single email field + submit. Validate for a well-formed address; on submit, POST to the CRM/scheduling endpoint and replace the row with a confirmation line in the same type sizes.
- No animation in the design. If motion is added, keep it to a slow rotation of the orbit lines and respect `prefers-reduced-motion`.
- **Responsive behavior is not designed.** The mock is a fixed 1280px canvas. Before building, decide breakpoints with the designer; the obvious moves are the 4-up grids to 2-up then 1-up, the 300px/1fr and 170px/1fr/120px splits to stacked, and the hero graphic scaled down and pushed behind the copy at low opacity.

## State Management
Effectively static. Only local state needed: the email field value, its validation error, and submission status (idle / submitting / submitted / error). No data fetching, unless the advisory list in the Research section is pulled from a CMS — in which case it needs id, title, severity or "Tooling" tag, and a link.

## Design Tokens
Colors — see the Theme toggle table above for the dark/light pair of every token. Dark values:
- Ground `#0f0c09` · elevated surface `#1b1512`
- Bone text `#f0e7dc` (body copy at `opacity:.6–.7`, meta at `.5`)
- Amber accent `#d98a3d` · amber light `#e8b478` · rust `#b4552a` · deep rust `#a04b23` · storm `#8f3a1d`
- Divider `rgba(240,231,220,.14)` · button hover `rgba(217,138,61,.12)` · button active `rgba(217,138,61,.22)`

Type — Inter throughout (headings weight 500, never bolder; body 400):
- H1 62px / 1.03 / -.03em · CTA H2 40px / -.025em · H2 32px / -.02em · H2 small 28px · stat 30px · row title 19px · card title 17px
- Body 17px / 1.6 (hero) · 15px / 1.55 (base) · 14px (section intro, nav, buttons) · 13px (descriptions) · 12px (meta) · 11px (kickers, monospace ids)
- Kickers: 11px, `letter-spacing:.14em`, uppercase. Monospace ids use the system mono stack.

Spacing — 56px page gutter; section padding 76–104px top, 76–88px bottom; row padding 22px; grid gaps 1px (hairline grids), 16–24px (rows), 56–64px (columns).

Radius 8px (`--radius-md`), 4px on small pills. No shadows anywhere — elevation is an edge plus ambient darkness.

## Assets
No raster images or icon fonts. Every graphic is inline SVG defined in the files. The underlying design system (Nocturne) specifies Phosphor icons if icons are added later; none are used here. Inter is loaded from Google Fonts by the design system stylesheet — self-host it in production.

## Screenshots
`screenshots/` holds reference captures. `01–05-homepage.png` walk the homepage top to bottom in the dark theme (hero, service lines, method + stats, research + credentials, closing CTA and footer); `06–08-homepage.png` are the same page in the light theme. `01-marks.png` is the approved hero option 2a and its alternatives; `02–03-marks.png` are the six logo constructions and the three colorway lockups. Screenshots are captured by a DOM renderer that does not apply the Inter webfont, so type may render in a fallback serif — trust the HTML files and the token list for typography, not the screenshots.

## Files
- `Jovian Home.dc.html` — the homepage (the thing to build).
- `Jovian Marks.dc.html` — brand mark and colorway exploration (reference).
- `_ds/nocturne-.../styles.css` — the Nocturne design-system token sheet the pages link for type, spacing and radius variables. The homepage overrides its dark blue-grey palette with the Jupiter-bands colors listed above; port the tokens, not the default palette.
- `support.js` — runtime for the `.dc.html` prototype format. Needed only to open the prototypes in a browser; nothing to port.
