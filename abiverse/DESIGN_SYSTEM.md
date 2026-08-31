# ABIVERSE Design System
## XR Developer Portfolio — Editorial + Immersive

---

## 1. TYPOGRAPHY SYSTEM

### Font Family
- **Primary**: Space Grotesk (Google Fonts, variable weight 300–700)
- **Mono**: Space Grotesk (same font, no separate mono family for consistency)
- Fallback: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')

### Type Scale (Major Third: 1.250 ratio)
```
--text-xs:    0.75rem    (12px)  — Metadata, labels, small caps
--text-sm:    0.875rem   (14px)  — Body small, captions
--text-base:  1rem       (16px)  — Body, default
--text-md:    1.125rem   (18px)  — Body large
--text-lg:    1.25rem    (20px)  — Subheading
--text-xl:    1.563rem   (25px)  — Heading 4
--text-2xl:   1.953rem   (31px)  — Heading 3
--text-3xl:   2.441rem   (39px)  — Heading 2
--text-4xl:   3.052rem   (49px)  — Heading 1 / Section title
--text-5xl:   3.815rem   (61px)  — Display
--text-6xl:   4.768rem   (76px)  — Hero display
```

### Font Weights
- **Light (300)**: Not used in body; occasionally for large display
- **Normal (400)**: Body text, default weight
- **Medium (500)**: Subheadings, labels, secondary text
- **Semibold (600)**: UI labels, metadata, buttons
- **Bold (700)**: Headings, section titles, emphasis

### Line Heights
- **Tight (1.1)**: Headings, display
- **Snug (1.3)**: Subheadings
- **Normal (1.5)**: Body text
- **Relaxed (1.65)**: Long-form paragraphs

### Letter Spacing
- **Tight (-0.02em)**: Headings for tighter feel
- **Normal (0)**: Body
- **Wide (0.02em)**: UI elements, buttons
- **Wider (0.05em)**: Section headers, technical labels
- **Widest (0.1em)**: Uppercase labels, tags

### Hierarchy
1. **Hero Title** (`--text-6xl`, bold, tight leading, tight tracking)
2. **Section Title** (`--text-4xl`, bold, tight leading, tight tracking)
3. **Heading 3** (`--text-3xl`, bold)
4. **Heading 4 / Subheading** (`--text-2xl`/`--text-xl`, semibold)
5. **Body Large** (`--text-md`, normal)
6. **Body** (`--text-base`, normal)
7. **Body Small** (`--text-sm`, normal)
8. **Metadata/Labels** (`--text-xs`, semibold, uppercase, widest tracking)

---

## 2. COLOR SYSTEM

### Light Mode (Default)
```
Paper (Background):     #F6F5F2  — Off-white, warm tone
Surface (Cards):        #FFFFFF  — Pure white for elevation
Ink (Text):             #0B0B0C  — Near-black, 18:1 AAA on paper
Ink-2 (Secondary):      #4A4A4E  — 8:1 AAA on paper
Muted (Tertiary):       #6E6E73  — 4.6:1 AA on paper
Border:                 #E0DFD9  — Subtle dividers
Border-Strong:          #7A7A80  — Stronger dividers, 3.9:1 AA-large

ACCENT (Primary CTA):   #1D2BF2  — Vibrant blue
                                   7.2:1 AAA on paper, 7.8:1 AAA on white
ACCENT Hover:           #0A14D1  — Darker for interaction
ACCENT Muted:           rgba(29, 43, 242, 0.1) — 10% opacity for backgrounds
```

### Dark Mode (XR Mode)
```
Void (Background):      #08080A  — Deep black
Void-Raised (Cards):    #121216  — Elevated surfaces
Ink-Inverse (Text):     #F2F1EE  — Light text, 17.7:1 AAA on void
Ink-2 Inverse:          #A3A3A8  — 8:1 AAA on void
Muted-Inverse:          #82828A  — 5.2:1 AA on void
Border-Inverse:         #52525A  — Dark dividers

ACCENT-Inverse:         #6E78FF  — Lighter blue for dark
                                   5.5:1 AA on void (not AAA but readable)
```

### Semantic Colors (reserved for future use)
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`

### Contrast Ratios (WCAG 2.1)
✓ AAA (7:1+):
- Ink on paper: 18:1
- Ink on white: 19.7:1
- ACCENT on paper: 7.2:1
- Ink-inverse on void: 17.7:1

✓ AA (4.5:1):
- Ink-2 on paper: 8:1
- Muted on paper: 4.6:1
- Ink-2-inverse on void: 7.97:1
- Muted-inverse on void: 5.25:1
- ACCENT-inverse on void: 5.52:1

### Color Usage
- **Ink**: Primary text, headings, core UI
- **Ink-2**: Secondary text, descriptions
- **Muted**: Tertiary text, metadata, hints
- **Border**: Subtle structure, lines
- **Border-Strong**: Emphasized separators
- **ACCENT**: CTAs, links, highlights, section tags
- **Paper**: Page background
- **Surface**: Cards, elevated components

---

## 3. SPACING & GRID SYSTEM

### Spacing Scale (8px base)
```
--space-1:   0.5rem   (8px)
--space-2:   1rem     (16px)
--space-3:   1.5rem   (24px)
--space-4:   2rem     (32px)
--space-5:   2.5rem   (40px)
--space-6:   3rem     (48px)
--space-8:   4rem     (64px)
--space-10:  5rem     (80px)
--space-12:  6rem     (96px)
--space-16:  8rem     (128px)
--space-20:  10rem    (160px)
```

### Layout Constants
- **Container Max**: 1440px
- **Container Padding**: 3rem (48px) desktop, 2rem (32px) tablet, 1.5rem (24px) mobile
- **Grid Columns**: 12-column editorial grid
- **Grid Gap**: 2rem (32px) between columns

### Section Spacing
- **Small**: 6rem (96px)
- **Default**: 8rem (128px)
- **Large**: 10rem (160px)

### Component Spacing
- **Button padding**: `--space-2 --space-4` (16px 32px)
- **Card padding**: `--space-4` (32px)
- **Section header margin-bottom**: `--space-8` (64px)
- **Margin between elements**: `--space-3` to `--space-4`

### Whitespace Philosophy
- Strong margins and generous whitespace
- Breathing room between sections
- Asymmetric layouts where appropriate
- Content rarely extends full-width at desktop

---

## 4. BORDER & SHADOW SYSTEM

### Border Widths
- **Thin**: 1px (dividers, subtle borders)
- **Normal**: 2px (component borders, active states)
- **Thick**: 3px (emphasis, focus states)

### Border Radius
- **Small**: 0.25rem (4px)
- **Medium**: 0.5rem (8px)
- **Large**: 1rem (16px)
- **Full**: 9999px (pills, circles)

### Shadows (Minimal, Editorial Style)
- **Small**: `0 1px 2px rgba(0,0,0,0.05)` — Subtle lift
- **Medium**: `0 4px 6px rgba(0,0,0,0.07)` — Soft cards
- **Large**: `0 10px 15px rgba(0,0,0,0.1)` — Modals
- **XL**: `0 20px 25px rgba(0,0,0,0.15)` — Deep elevation

**Philosophy**: Shadows are minimal and used sparingly. Thin borders and whitespace define structure, not heavy shadows.

---

## 5. ANIMATION SYSTEM

### Timing Functions
```
--ease-in:      cubic-bezier(0.4, 0, 1, 1)       — Accelerating
--ease-out:     cubic-bezier(0, 0, 0.2, 1)       — Decelerating
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1)     — Smooth
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1) — Playful bounce
```

### Duration
```
--duration-fast:    150ms   — Quick interactions (hover, focus)
--duration-base:    250ms   — Default transitions
--duration-slow:    350ms   — Considered transitions
--duration-slower:  500ms   — Entrance animations
```

### Keyframes

#### `fadeUp`
Fade in + slide up 30px. Used for:
- Page load
- Scroll-triggered elements
- Project cards (staggered by index)
- Timeline items

```css
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

#### `scaleIn`
Fade + scale 0.9 to 1. Used for:
- Modal opens
- Alert animations

```css
@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
```

#### `scrollBounce`
Bouncing scroll indicator. Used for:
- Hero scroll indicator

```css
@keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(12px); }
}
```

#### `float`
Subtle floating motion. Used for:
- Background orbs
- Decorative elements

```css
@keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
}
```

### Transitions
```
--transition-base:      all 250ms ease-out
--transition-color:     color 150ms ease-out
--transition-transform: transform 250ms ease-out
```

### Interaction Patterns

#### Hover States
- **Links**: Color change (150ms)
- **Buttons**: Opacity/background change + subtle translateY (-1px)
- **Cards**: Translate Y (-2px) + border color change
- **Cursor**: Ring expands to 50px, label fades in

#### Focus States (Accessibility)
- 3px solid ACCENT outline with 3px offset
- Applies to all interactive elements

#### Scroll Triggered
- Elements fade up as they enter viewport
- Stagger applied via CSS custom property `--index`
- Delay: `calc(var(--index, 0) * 100ms)`

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
    /* Animation duration becomes 0.01ms, effectively instant */
}
```

---

## 6. COMPONENT SPECIFICATIONS

### Buttons

#### Primary Button
- **Background**: Ink (#0B0B0C)
- **Text**: Paper (#F6F5F2)
- **Hover**: Darker ink + slight translateY(-1px)
- **Padding**: `--space-2 --space-4` (16px 32px)

#### Secondary Button
- **Background**: Surface white
- **Border**: 2px solid border-strong
- **Text**: Ink
- **Hover**: Background becomes ink, text becomes paper

#### Outline Button
- **Background**: Transparent
- **Border**: 2px solid ink
- **Text**: Ink
- **Hover**: Background becomes ink, text becomes paper

#### Ghost Button
- **Background**: Transparent
- **Border**: None
- **Text**: Ink
- **Hover**: Background becomes accent-muted (10%), text becomes accent

#### Sizes
- **Small**: `--space-1 --space-3` font-xs
- **Default**: `--space-2 --space-4` font-sm
- **Large**: `--space-3 --space-5` font-base
- **XL**: `--space-4 --space-6` font-md

### Filter Buttons
- **Background**: Transparent
- **Border**: 1px solid border
- **Text**: Muted (uppercase, wide tracking)
- **Active**: Background ink, text paper

### Project Cards
- **Layout**: Flex column with gap
- **Image**: 16:10 aspect ratio, border-radius medium
- **Overlay**: On hover, gradient overlay with VIEW PROJECT button
- **Animation**: Fade up on scroll with stagger
- **Hover**: Image scales 1.05, overlay appears
- **Number Badge**: Top-right, ink background, paper text

### Timeline Items
- **Vertical line**: 2px border-color on left with gap
- **Marker**: 12px circle at left, accent background, paper border
- **Spacing**: Large gap between items
- **Arrow bullets**: Accent color (→) for detail items
- **Role**: ARIA list items

### Education & Certification Cards
- **Layout**: Flex column, gap space-2
- **Border**: 1px border
- **Hover**: Border changes to accent, slight lift (translateY -2px)
- **Badge**: "FEATURED" badge on featured cert

### Skill Categories
- **Expandable**: Click header to toggle list
- **Toggle Icon**: "+" to "−" animation
- **Skill Items**: Name + progress bar
- **Progress Bar**: 8px height, accent color fill

---

## 7. NAVIGATION

### Desktop Navigation
- **Fixed top**: Sticky to top with blur background
- **Logo + Dot**: Left side, space-1 gap
- **Menu**: Center, flex gap space-4
- **Actions**: Right side, flex gap space-2
- **Underline hover**: Accent color, scaleX animation

### Mobile Navigation
- **Hamburger**: 3-line button top-right (hidden on desktop)
- **Slide-out menu**: 80% width from right, padding space-8
- **Overlay**: Semi-transparent backdrop
- **Transitions**: 250ms ease-out

---

## 8. HERO SECTION

### Layout
- Centered content over animated canvas
- Stats bottom-right (desktop only)
- Scroll indicator bottom-center
- Full viewport height minimum

### Canvas Background
- Particle animation: ~1 per 10000px²
- Particles have opacity, slight velocity
- Radial gradient overlay from transparent to paper

### Scroll Indicator
- Text "SCROLL" + bouncing dot in border circle
- Animation: scrollBounce 2s ease-in-out infinite

### Stats
- Number counter: Counts up on scroll into view
- Format: Number + label (uppercase, muted)

---

## 9. SECTIONS

### Section Headers
- **Tag**: Accent color, uppercase, small font, widest tracking
- **Title**: Large font, bold, tight leading
- **Spacing**: 64px margin-bottom

### About Section
- Grid 2 columns (desktop)
- Quote on right with floating orb decoration
- Highlights with bullet points (→ symbol in accent)

### Skills Section
- Expandable categories with click-to-toggle
- Skill items with visual progress bars
- Monospace tech names

### Projects Section
- Grid auto-fill (min 400px columns)
- Cards with image overlay on hover
- Filter buttons at top

### Timeline Section
- Left-aligned with vertical line
- Circle markers at each item
- Dates in monospace
- Detail bullets with arrow symbols

### Teaching Section
- Two-column layout
- Learning flow diagram (LEARN → BUILD → EXPERIMENT → CERTIFY)
- Topics as pill badges

### Contact Section
- Centered, single-column
- Large CTA button
- Contact details in grid

---

## 10. DARK MODE (XR MODE)

### Toggle
- Button in top-right nav
- Toggles `xr-mode` class on body
- Persists in localStorage

### Colors Shift
- Paper → Void
- Surface → Void-Raised
- Ink → Ink-Inverse
- Borders → Border-Inverse
- Accent adjusts for contrast (lighter blue)

### Components
- Cards adapt to dark background
- Text colors invert
- Borders use inverse palette
- Buttons adjust for readability

---

## 11. RESPONSIVE DESIGN

### Breakpoints
- **Desktop**: 1024px+ (full grid, animations)
- **Tablet**: 768px–1023px (2-column grids, simplified)
- **Mobile**: <768px (single column, adjusted padding)
- **Small Mobile**: <480px (extra compression, reduced sizing)

### Responsive Adjustments
- **Container Padding**: 3rem → 2rem → 1.5rem
- **Section Spacing**: 8rem → 6rem → auto
- **Typography**: Scaling maintains hierarchy
- **Grid**: 12-col → single column
- **Navigation**: Desktop menu → Hamburger menu
- **Project Grid**: Auto-fill → Single column
- **Hero Stats**: Bottom-right → Centered below content

### Mobile Navigation
- Hamburger menu from right
- Full-height overlay
- Touch-friendly spacing

---

## 12. ACCESSIBILITY

### Color & Contrast
- All text meets WCAG AA minimum (4.5:1)
- Most meets WCAG AAA (7:1)
- Dark mode accent adjusted for readability on void
- Decorative elements properly hidden with `aria-hidden="true"`

### Focus States
- 3px solid accent outline with 3px offset
- Visible on all interactive elements
- High contrast and clear

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3...)
- ARIA labels on buttons, icons, regions
- List semantics for navigation, timelines, projects
- Form inputs properly labeled

### Screen Reader Support
- Alt text on images
- Section landmarks with role="region"
- Buttons with aria-label or visible text
- Hidden decorative elements with aria-hidden
- ARIA live regions for dynamic content

### Keyboard Navigation
- All elements reachable via Tab/Shift+Tab
- Enter/Space activate buttons
- Escape closes modals
- Custom cursor hidden on mobile/keyboard users

### Motion
- `prefers-reduced-motion` support
- Animations disabled or instant when user prefers

---

## 13. IMPLEMENTATION NOTES

### CSS Architecture
- CSS custom properties (CSS variables) for all values
- Structured by section (typography, colors, spacing, animations)
- Mobile-first breakpoints
- No CSS-in-JS or frameworks

### JavaScript Classes
- `XRModeToggle`: Dark mode toggle
- `Navigation`: Scroll spy + mobile menu
- `CustomCursor`: Desktop cursor tracking
- `ScrollAnimations`: Intersection observer for fade-ups
- `HeroCanvas`: Particle animation
- `SkillCategories`: Expandable sections
- `ProjectFilters`: Filter projects by category
- `ProjectModal`: Modal dialog
- `EasterEgg`: Welcome message
- `NumberCounter`: Stat counters

### Performance
- Hardware-accelerated transforms (translate, scale)
- Debounced/throttled scroll handlers
- Lazy-loaded images (loading="lazy")
- Optimized canvas rendering
- Minimal repaints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Fallbacks for CSS variables, grid, etc.

---

## 14. VISUAL IDENTITY SPECIFICS

### Aesthetic
- **Editorial**: Strong typography, whitespace, minimal decorative elements
- **Intentional**: Every element serves purpose
- **Technical**: Monospace used for tech stack, dates, code
- **Immersive**: Subtle animations suggest depth and movement
- **XR-Forward**: Dark mode (XR MODE) emphasizes immersive tech focus

### Key Design Decisions

1. **Single Font (Space Grotesk)**
   - Creates cohesion and clarity
   - Modern, geometric without being cold
   - Variable weight support for hierarchy without loading multiple files

2. **Restrained Color Palette**
   - Black/near-black for professionalism
   - Single vibrant blue accent for XR energy
   - Off-white warm tone prevents harsh contrast

3. **Grid + Whitespace Over Heavy Design**
   - 12-column grid provides structure
   - Large margins create breathing room
   - Thin borders instead of heavy shadows

4. **Asymmetric Layouts**
   - About section with quote on right
   - Stats positioned off-center
   - Creates visual interest without chaos

5. **Subtle Animations**
   - Fade-up on scroll suggests progression
   - Hover states provide feedback
   - No autoplaying animations (respects accessibility)

6. **Technical Labels**
   - Uppercase, wide tracking on metadata
   - Section tags with accent color
   - Monospace for code/tech stacks
   - Reinforces XR/technical expertise

7. **Image Reveals**
   - Project overlay on hover
   - Scales and overlay fade-in
   - Modal presentation of full project

8. **XR Mode**
   - Dark/immersive aesthetic
   - Suggests VR/AR context
   - Maintains all accessibility & functionality

---

## 15. QUICK REFERENCE

### CSS Variables to Override
```css
/* Typography */
--font-primary
--text-xs through --text-6xl
--weight-light through --weight-bold

/* Colors */
--color-paper, --color-surface-raised, --color-ink, --color-accent

/* Spacing */
--space-1 through --space-20
--container-max, --section-spacing

/* Animation */
--ease-out, --duration-base
--transition-base

/* Breakpoints */
1024px (desktop → tablet)
768px (tablet → mobile)
480px (mobile → small mobile)
```

### Accessibility Checklist
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Focus states visible and high-contrast
- [ ] All images have alt text or aria-hidden
- [ ] Semantic HTML with proper heading hierarchy
- [ ] ARIA labels on icon-only buttons
- [ ] Keyboard navigation works throughout
- [ ] prefers-reduced-motion is respected
- [ ] Screen reader tested

### Performance Checklist
- [ ] Images optimized and lazy-loaded
- [ ] CSS is minified
- [ ] JavaScript is minified and deferred
- [ ] Canvas rendering optimized
- [ ] No layout thrashing in scroll handlers
- [ ] Animations use GPU-accelerated properties (transform, opacity)

---

**Design System Version**: 1.0  
**Last Updated**: August 31, 2026  
**Portfolio**: ABIVERSE — XR Developer Portfolio  
**Creator**: Abishek Sivaraj
