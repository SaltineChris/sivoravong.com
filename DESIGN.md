---
name: sivoravong.com
description: Personal domain landing page and digital calling card for sivoravong.com
colors:
  primary: "#223D33"
  accent: "#B8860B"
  neutral-bg: "#F5EEDC"
  neutral-text: "#36454F"
  primary-dark: "#12211B"
  primary-light: "#2D5245"
  accent-hover: "#C9930F"
  success: "#2E624C"
typography:
  display:
    fontFamily: "'Lora', Georgia, serif"
    fontSize: "clamp(1.85rem, 4vw + 1rem, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  body:
    fontFamily: "'Roboto', system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 0.5vw + 0.9rem, 1.05rem)"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "'Roboto', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.8px"
  caption:
    fontFamily: "'Roboto', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
rounded:
  sm: "4px"
  pill: "50px"
  circle: "50%"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-copy:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.circle}"
    size: "40px"
  button-copy-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-bg}"
  card-stationery:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "48px 40px"
---

# Design System: sivoravong.com

## Overview

**Creative North Star: "Premium Heritage Stationery"**

The visual world of sivoravong.com reflects an intimate, bespoke, and discerning personal calling card. Rooted in the timeless tactility of private archival stationery, it evokes the presence of a secluded personal estate rather than a commercial enterprise. The interface acts as a physical parchment artifact suspended against a deep, sheltering botanical atmosphere.

Every surface decision honors quiet authority and material restraint. Space is deliberate and uncluttered, framing the primary invitation to connect without unnecessary adornment. In place of aggressive modern UI trends or high-gloss commercial signifiers, the aesthetic relies on rich botanical color depth, metallic accents, and classical serif proportions.

Explicitly rejected is brash commercial luxury: high-gloss faux chrome, heavy skeuomorphic bevels, flashy motion graphics, and saturated tech-gradient fills have no place here.

**Key Characteristics:**
- Deep botanical canopy canvas with subtle atmospheric radial depth.
- Tactile archival parchment calling card centered with classical proportions.
- Metallic burnished gold accents used sparingly for seals, borders, and focused interactions.
- Monolithic planar stability punctuated by soft, luminous ambient blooms.

## Colors

The palette is anchored in an earthy, prestigious botanical foundation balanced by warm historical paper tones and muted metallic warmth.

### Primary
- **Deep Botanical Anchor (Mulberry Green)** (`#223D33`): The dominant brand color establishing visual weight and deep atmospheric background presence. Extended with a radial gradient from luminous foliage (`#2D5245`) down into deep forest shadow (`#12211B`).

### Secondary
- **Burnished Gold Accent** (`#B8860B`): The solitary metallic accent used for key interactive highlights, the card perimeter boundary, and copy trigger accents. Transitions to warm amber gold (`#C9930F`) on interactive focus.

### Neutral
- **Warm Archival Parchment** (`#F5EEDC`): The physical base neutral for the calling card, offering warm tactile relief and high legibility without cold artificial brightness.
- **Slate Charcoal** (`#36454F`): The dark neutral used for primary text and secondary informational copy, delivering crisp contrast without the harshness of pure black.

### Named Rules
**The 60-30-10 Distribution Rule.** Color space strictly follows a 60% Mulberry Green (dominant atmosphere), 30% Warm Parchment (card surface area), and 10% Burnished Gold (focal accents and hairline boundaries) balance.

**The Slate Contrast Rule.** All textual copy on Warm Parchment must use Slate Charcoal (`#36454F`). Burnished Gold text is forbidden on light parchment to ensure strict AA accessibility.

## Typography

**Display Font:** Lora (Serif) with Georgia, serif fallback  
**Body Font:** Roboto (Sans-serif) with system-ui, sans-serif fallback  
**Label/Mono Font:** Roboto (Sans-serif)

**Character:** A dignified dialogue between authoritative classical literature and functional modern legibility. Lora delivers aristocratic elegance to display headings, while Roboto supplies clear, unobtrusive clarity for communications.

### Hierarchy
- **Display / Heading 1** (Medium 500, `2.25rem` / `36px`, line-height `1.2`, letter-spacing `-0.5px`): Main welcome greeting and section titles.
- **Body** (Light 300, `1.05rem` / `16.8px`, line-height `1.6`): Primary explanatory text, greeting message, and instructions.
- **Email Link** (Medium 500, `1.05rem` / `16.8px`, letter-spacing `0.2px`): Contact anchor link with direct color transitions.
- **Label / Footer** (Regular 400, `0.8rem` / `12.8px`, letter-spacing `0.8px`, uppercase): Legal and domain identity metadata, rendered in warm parchment at muted opacity (`rgba(245, 238, 220, 0.4)`).

### Named Rules
**The Strict Role Division Rule.** Lora is strictly reserved for display headings. Roboto is strictly reserved for body text, interactive controls, and metadata. Roles must never be interchanged.

## Layout

The spatial composition is centered, singular, and immersive. It avoids complex grid fragmentation in favor of an uninterrupted calling-card presentation.

- **Container Model:** Viewport-centered flexbox layout with vertical stacking (`min-height: 100vh`, padding `2rem 1.5rem`).
- **Card Bounds:** Maximum width capped at `520px` to maintain comfortable reading line lengths (`~45-60ch`) and classical stationery proportions.
- **Card Internal Padding:** Generous internal padding of `3rem 2.5rem` (`48px 40px`) framing the text within a clean hairline border.
- **Responsive Adaptations:** At small breakpoints (`<= 576px`), horizontal padding contracts to `1.5rem 1rem`, card padding scales to `2.25rem 1.5rem`, and heading scales to `1.85rem`.

## Elevation & Depth

The design philosophy favors monolithic flat planes paired with gentle luminous focal blooms, rejecting aggressive drop-shadow stacking.

Depth is communicated through tonal stratification (deep green beneath warm ivory cardstock) rather than dramatic physical suspension. Shadows are soft, diffuse, and serve to ground the parchment onto the forest floor.

### Shadow & Atmosphere Vocabulary
- **Card Grounding** (`box-shadow: 0 25px 50px -12px rgba(18, 33, 27, 0.35)`): Deep, diffuse ambient shadow that anchors the stationery card to the canvas.
- **Pill Hover Float** (`box-shadow: 0 8px 20px rgba(34, 61, 51, 0.08)`): Subtle micro-lift when interacting with the contact pill container.
- **Atmospheric Botanical Canvas**: Subtle, slow-drifting gilded botanical micro-particles rendered on a fixed Canvas 2D background, providing organic depth with fluid cursor interaction and automatic reduced-motion pausing.

### Named Rules
**The Monolithic Flatness Rule.** Surfaces rest flat and stable at rest. Depth is expressed through color values and hairline borders. Motion and elevation changes occur only in direct response to user interaction.

## Shapes

- **Card Corners:** Micro-radiused edges (`4px` / `0.25rem`) mimicking the slight soften of hand-cut archival paper.
- **Interactive Containers:** Full pill radius (`50px` / `3.125rem`) for the contact container, providing a protective, capsule-like boundary around the email address.
- **Action Buttons:** Perfectly circular action buttons (`width: 40px`, `height: 40px`, `border-radius: 50%`) centered inside the contact pill.
- **Borders & Insets:**
  - Card border: Solid hairline border in Burnished Gold (`1px solid #B8860B`). Clean unnested boundary.

## Components

### Card (Stationery Cardstock)
- **Character:** Tactile letterpress cardstock resting on a botanical canvas.
- **Shape:** Soft-corner rectangle (`border-radius: 4px`).
- **Color:** Warm Archival Parchment (`#F5EEDC`) background with Burnished Gold outer border.
- **Padding:** `48px 40px` (`3rem 2.5rem`).
- **Motion:** Enters with a smooth slide-up fade (`fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)`).

### Contact Pill & Copy Button
- **Character:** Discreet, high-craft utility badge.
- **Shape:** Full pill shape (`border-radius: 50px`) enclosing email text and a circular action trigger.
- **Interactive States:**
  - **Resting:** Mulberry green button with Warm Parchment copy icon.
  - **Hover:** Button shifts to Burnished Gold (`#B8860B`), scales slightly (`scale(1.08)`), and reveals a dark tooltip (`#36454F`).
  - **Copied State:** Transitions button to deep pine green (`#2E624C`), morphs icon to a clean checkmark, and displays persistent "Copied!" feedback.

## Do's and Don'ts

### Do:
- **Do** preserve the strict 60-30-10 palette ratio with Mulberry Green as the dominant atmosphere.
- **Do** use Lora for all future heading additions and keep Roboto for all functional UI and metadata.
- **Do** keep card containers flat and unnested, relying on generous internal padding rather than decorative inner frames.
- **Do** provide smooth, deliberate bezier easing curves (`cubic-bezier(0.16, 1, 0.3, 1)`) for all hover and active states.
- **Do** ensure high-contrast Slate Charcoal (`#36454F`) text on all Warm Parchment backgrounds.

### Don't:
- **Don't** introduce high-gloss chrome, metallic gradients, or neon hues into the brand system.
- **Don't** use cold pure white (`#FFFFFF`) or pure black (`#000000`) for surfaces or typography.
- **Don't** add generic tech SaaS elements like floating 3D icons, purple/cyan gradients, or badge spam.
- **Don't** use fast, aggressive, or spinning animations; keep motion dignified, organic, and serene.
- **Don't** place Burnished Gold body text on Warm Parchment backgrounds due to low contrast.
