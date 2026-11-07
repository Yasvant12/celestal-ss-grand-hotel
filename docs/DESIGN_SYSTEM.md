# Hotel Celestial Casa — Design System Specification

Extracted directly from the authoritative Google Stitch HTML prototype (`reference/stitch-homepage.html`). All subsequent modules and page templates must strictly adhere to these design tokens and visual hierarchy.

---

## 1. Color Palette

The color system embodies royal Awadhi aristocracy with warm champagne and ivory surfaces, deep metallic gold accents, and grounding charcoal noir tones.

### 1.1 Primary & Metallic Gold Accents
| Token | Hex / Value | Usage & Visual Role |
| :--- | :--- | :--- |
| `primary` | `#7a5508` | Primary luxury gold/bronze branding; dominant CTA buttons and icons |
| `primary-container` | `#966d23` | Active navigation pills, badge containers, secondary emphasis |
| `primary-fixed` | `#ffdeac` | High-contrast gold accents over dark charcoal surfaces |
| `primary-fixed-dim` | `#f0be6c` | Soft gold glow, animated status indicators, star rating icons |
| `gold-light` | `#E8D3A2` | Delicate champagne-gold text, eyebrow labels on dark backdrops |
| `gold-deep` | `#7B5719` | Hover states for primary gold buttons and interactive elements |
| `gold-metallic` | `#B38728` | Accent borders and metallic badges |
| `border-hairline-gold`| `rgba(179, 135, 40, 0.28)` | Hairline dividers and luxury card borders |

### 1.2 Surface & Background Tones
| Token | Hex / Value | Usage & Visual Role |
| :--- | :--- | :--- |
| `surface` | `#fcf9f4` | Base body background (warm off-white pearl) |
| `surface-ivory` | `#FAF7F2` | Ivory card backgrounds and subtle tonal elevation |
| `surface-champagne` | `#F5EFEB` | Soft champagne tint for cards, input surfaces, and pills |
| `surface-container-lowest` | `#ffffff` | Pure white card surfaces, form input focus states |
| `surface-container-low` | `#f6f3ee` | Alternating section backgrounds, form fields |
| `surface-container` | `#f0ede9` | Intermediate neutral container fill |
| `surface-container-high` | `#ebe8e3` | Header utility bar backdrop, hover highlights |
| `surface-container-highest`| `#e5e2dd` | Subtle borders, light card dividers |
| `surface-dim` | `#dcdad5` | Muted background boundary |

### 1.3 Dark & Grounding Noir Tones
| Token | Hex / Value | Usage & Visual Role |
| :--- | :--- | :--- |
| `noir-charcoal` | `#111827` | Full-bleed hero backdrop, gourmet dining banner, footer |
| `on-surface` | `#1c1c19` | Deep charcoal primary body copy and high-emphasis headings |
| `on-surface-variant` | `#4f4538` | Warm charcoal-brown for secondary copy, captions, and subtext |
| `outline` | `#817566` | Mid-tone neutral border |
| `outline-variant` | `#d3c4b3` | Soft hairline dividers between contact items |
| `overlay-scrim` | `rgba(17, 24, 39, 0.65)` | Dark image overlays and hero vignette |

### 1.4 Status & Brand Accents
| Token | Hex / Value | Usage & Visual Role |
| :--- | :--- | :--- |
| `whatsapp-brand` | `#25D366` | Official WhatsApp concierge button and direct chat icons |
| `error` | `#ba1a1a` | Form validation error indicators and required asterisks |
| `error-container` | `#ffdad6` | Error message banner backgrounds |

---

## 2. Typography Hierarchy

### 2.1 Font Families
- **Editorial Headings**: `Playfair Display` (`serif`, weights: 400, 500, 600, 700)
- **Body & Controls**: `Plus Jakarta Sans` (`sans-serif`, weights: 300, 400, 500, 600, 700, 800)

### 2.2 Typographic Scales & Styles
| Class Name | Font Family | Size | Line Height | Letter Spacing | Weight | Typical Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Playfair Display | 56px | 64px | -0.02em | 600 | Desktop Hero H1 |
| `display-hero-mobile` | Playfair Display | 36px | 44px | -0.01em | 600 | Mobile Hero H1 |
| `headline-lg` | Playfair Display | 40px | 48px | -0.01em | 500 | Major Section H2 |
| `headline-lg-mobile` | Playfair Display | 28px | 36px | 0 | 600 | Mobile Section H2 |
| `headline-md` | Playfair Display | 28px | 36px | 0 | 500 | Card & Subsection H3 |
| `headline-sm` | Playfair Display | 22px | 30px | 0 | 600 | Feature & Venue H3/H4 |
| `title-editorial` | Playfair Display | 18px | 26px | +0.01em | 500 | Narrative leads, logo title |
| `eyebrow-luxury` | Plus Jakarta Sans | 11px | 16px | +0.20em | 700 | Uppercase section badges |
| `label-button` | Plus Jakarta Sans | 13px | 18px | +0.08em | 600 | Primary & secondary CTAs |
| `label-compact` | Plus Jakarta Sans | 12px | 16px | 0 | 500 | Utility bar, badges, captions |
| `body-lg` | Plus Jakarta Sans | 18px | 28px | 0 | 400 | Hero introductory subcopy |
| `body-md` | Plus Jakarta Sans | 15px | 24px | 0 | 400 | Standard paragraph copy |
| `body-sm` | Plus Jakarta Sans | 13px | 20px | 0 | 400 | Supporting descriptions, inputs |

---

## 3. Spacing System

| Token | Rem | Pixels | Application |
| :--- | :--- | :--- | :--- |
| `space-xs` | `0.25rem` | 4px | Icon and inline label gaps |
| `space-sm` | `0.5rem` | 8px | Button padding, badge gaps, element stacks |
| `space-md` | `1rem` | 16px | Standard card content padding, field gaps |
| `space-lg` | `1.5rem` | 24px | Card paddings, feature item spacing |
| `space-xl` | `2.5rem` | 40px | Banner paddings, major card inner spacing |
| `space-2xl` | `4rem` | 64px | Subsection breaks, grid vertical spacing |
| `space-3xl` | `6rem` | 96px | Major section vertical padding (`py-space-3xl`) |
| `gutter` | `1.5rem` | 24px | Desktop container horizontal padding |
| `gutter-mobile` | `1rem` | 16px | Mobile container horizontal padding |
| `margin` | `3rem` | 48px | Outer editorial margin |
| `margin-mobile` | `1.25rem` | 20px | Mobile outer margin |

---

## 4. Border Radius & Shadows

### 4.1 Border Radii
- `rounded` (`DEFAULT`): `0.125rem` (2px) — Badges, subtle dividers
- `rounded-lg`: `0.25rem` (4px) — Buttons, navigation items, inputs
- `rounded-xl`: `0.5rem` (8px) — Cards, media wrappers, banners
- `rounded-full`: `9999px` / `0.75rem` — Status chips, pill badges, round avatars

### 4.2 Elevation & Shadows
- **Card Base Shadow**: `shadow-md` (`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`)
- **Card Hover Elevation**: `hover:shadow-xl` (`0 20px 25px -5px rgba(0, 0, 0, 0.1)`)
- **Floating Availability Bar**: `shadow-2xl` (`0 25px 50px -12px rgba(0, 0, 0, 0.25)`)
- **Header Drop**: `shadow-[0_1px_8px_rgba(0,0,0,0.04)]`

---

## 5. Reusable Component Patterns

### 5.1 Luxury Eyebrow Badge
```html
<div class="inline-flex items-center gap-2 text-primary font-eyebrow-luxury text-eyebrow-luxury uppercase">
  <span class="w-8 h-[2px] bg-primary"></span>
  <span>Section Category Name</span>
</div>
```

### 5.2 Primary Luxury Gold CTA Button
```html
<button class="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider hover:bg-gold-deep shadow-md transition-all hover:scale-[1.02]">
  <span>Action Title</span>
  <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
```

### 5.3 Champagne Secondary CTA Button
```html
<a class="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-surface-champagne text-on-surface hover:bg-surface-container-high font-label-button text-label-button uppercase transition-colors">
  <span>Explore Details</span>
  <span class="material-symbols-outlined text-primary text-[18px]">explore</span>
</a>
```

### 5.4 WhatsApp Quick Action
```html
<a class="inline-flex items-center gap-space-xs px-3.5 py-2 rounded-lg bg-surface-champagne text-on-surface font-label-button text-label-button hover:bg-surface-container-high transition-colors" href="https://wa.me/917054250911" target="_blank" rel="noopener noreferrer">
  <span class="material-symbols-outlined text-whatsapp-brand text-[18px]">chat</span>
  <span>WhatsApp</span>
</a>
```

