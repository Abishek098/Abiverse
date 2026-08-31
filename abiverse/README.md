# ABIVERSE — XR Portfolio Website

A professional, modern, editorial-style portfolio website showcasing **Abishek Sivaraj** as a **Unity XR Developer** specializing in AR/VR, 3D, and immersive experience design.

## 🎯 Project Overview

**ABIVERSE** is a redesigned portfolio website that communicates:
- **3D + Design + Unity + XR + Interactive Experiences** = Immersive Applications
- Professional expertise in AR/VR development and spatial computing
- Training and mentoring capabilities
- Educational background and certifications

The website uses an **editorial design aesthetic** inspired by experimental developer portfolios, with a restrained color palette, strong typography hierarchy, and intentional whitespace.

## 📁 Project Structure

```
abiverse/
├── index.html              # Main HTML structure (semantic, accessible)
├── style.css               # Complete design system (50KB)
├── script.js               # Interactive features and rendering (25KB)
├── projects.js             # Centralized project data structure (11KB)
├── DESIGN_SYSTEM.md        # Design system documentation
├── DEPLOYMENT_CHECKLIST.sh # Verification checklist
└── assets/
    ├── projects/           # 5 project placeholder images
    ├── profile/            # Profile photo placeholder
    └── certification/      # Certification badge placeholder
```

## 🎨 Design System

### Typography
- **Font**: Space Grotesk (Variable, 300–700 weight)
- **Scale**: Major Third (1.250) | 12px – 76px
- **Use**: Single font with weight/width variations for hierarchy

### Color Palette
- **Light Mode**: Off-white (#F6F5F2) + Black (#0B0B0C) + Blue accent (#1D2BF2)
- **Dark Mode (XR)**: Deep black (#08080A) + Light text + Lighter blue
- **Contrast**: All WCAG AA+, most AAA

### Grid System
- **Desktop**: 12-column editorial grid (1440px max-width)
- **Tablet**: 6-column grid (768px–1023px)
- **Mobile**: Single column (<768px)
- **Spacing**: 8px base scale, strong margins and whitespace

### Animations
- **Page Load**: Fade, reveal, translate (250–500ms)
- **Scroll**: Fade-up, stagger (triggered by intersection observer)
- **Hover**: Micro-interactions on interactive elements
- **Respects**: prefers-reduced-motion media query

## 🚀 Features

### Dynamic Content Rendering
- **Projects**: Rendered from centralized `projects.js` data structure
- **Experience**: Timeline rendered from experience array
- **Extensible**: Easy to add new projects or experiences

### Interactive Features
- ✅ **Project Filtering**: Filter by AR, VR, Education, Training
- ✅ **XR Mode**: Dark mode toggle with localStorage persistence
- ✅ **Custom Cursor**: Desktop-only enhanced cursor (mobile-aware)
- ✅ **Smooth Navigation**: Scroll spy, smooth scrolling
- ✅ **Mobile Menu**: Hamburger navigation with slide-in overlay
- ✅ **Scroll Animations**: Intersection observer for fade-up effects
- ✅ **Hero Canvas**: Particle animation background
- ✅ **Number Counter**: Animated stat counters (hero section)

### Accessibility
- ✅ **Semantic HTML**: Proper landmarks, headings, structure
- ✅ **ARIA Labels**: 69+ ARIA attributes for screen readers
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Focus States**: 3px accent outline on all interactive elements
- ✅ **High Contrast**: WCAG AA+ compliance
- ✅ **Motion**: Reduced motion media query support

### Performance
- ✅ **Optimized Images**: SVG placeholders (fast loading)
- ✅ **Lazy Loading**: Images load on demand
- ✅ **Minimal Dependencies**: No frameworks, vanilla HTML/CSS/JS
- ✅ **Total Size**: ~176KB (HTML + CSS + JS + placeholder images)
- ✅ **Vercel Ready**: Static site deployment

## 📋 Sections

1. **Hero** — Typography-driven intro with scroll indicator
2. **About** — Professional background and story
3. **Projects** — 5 XR projects with filtering and case studies
4. **Experience** — Professional timeline (5 positions)
5. **Skills** — Grouped expertise (XR, Development, 3D, Creative Tools)
6. **Education & Certifications** — Academic background + Unity certification
7. **Teaching & Mentoring** — Training experience and methodology
8. **Contact** — Call-to-action and contact information
9. **Footer** — Navigation and social links

## 🎯 Content Areas

### Projects (5 XR Experiences)

| # | Title | Tech | Category |
|---|-------|------|----------|
| 01 | AR Alphabets | Unity + Vuforia | AR / Education |
| 02 | AR Indoor Navigation | Unity + Multiset VPS | AR / Spatial |
| 03 | VR Stroke Rehabilitation | Unity + Meta Quest | VR / Healthcare |
| 04 | VR Biosafety Cabinet | Unity + Meta Quest | VR / Training |
| 05 | VR Bird Anatomy | Unity + Meta Quest | VR / Education / 3D |

### Experience (5 Roles)

- **Training and Development Associate** | PSGR Krishnammal (2023–Present)
- **Adjunct Faculty (3D Animation)** | PSGR Krishnammal (2021–2023)
- **3D Faculty and Designer** | Adoro Institute (2019–2021)
- **Adjunct Faculty (3D Animation)** | Campus Images (2018–2019)
- **3D Designer** | Falcon Expo (2018)

## 🛠️ Technology Stack

- **HTML5**: Semantic structure with ARIA
- **CSS3**: Custom properties, grid, flexbox, animations
- **Vanilla JavaScript**: No frameworks (for simplicity and performance)
- **Deployment**: Vercel (static site)
- **Domain**: abiverse.in

## 📦 Placeholder Assets

All image assets are currently **SVG placeholders** with project/category branding. Replace with actual screenshots:

- `assets/projects/ar-alphabets.jpg` → Screenshot of AR app
- `assets/projects/ar-navigation.jpg` → Navigation UI screenshot
- `assets/projects/vr-stroke.jpg` → VR environment screenshot
- `assets/projects/vr-biosafety.jpg` → Equipment visualization
- `assets/projects/vr-bird-anatomy.jpg` → 3D anatomy model
- `assets/profile/abishek-profile.jpg` → Professional headshot
- `assets/certification/unity-certification.jpg` → Cert badge

## 🚀 Deployment

### Prerequisites
- GitHub repository connected to Vercel
- Domain: abiverse.in (already configured)

### Steps
1. **Local Testing**: Open `index.html` in a modern browser
2. **Git Workflow**: 
   ```bash
   git add .
   git commit -m "feat: redesigned XR portfolio with dynamic rendering"
   git push origin main
   ```
3. **Vercel Deployment**: Auto-deploys on push
4. **Verify**: Visit https://abiverse.in

### Post-Launch
1. Replace placeholder images with actual screenshots
2. Add detailed project case study content
3. Monitor performance and analytics
4. Update content as projects/experience evolve

## 📝 Data Structure

### projects.js
Centralized project data with fields:
- `id`, `title`, `slug`, `number`
- `category`, `categories` (for filtering)
- `description`, `year`, `role`, `duration`
- `technologies`, `technologies_display`
- `thumbnail`, `heroImage`, `gallery`
- Case study fields: `problem`, `goal`, `process`, `challenges`, `solution`, `result`, `learnings`

### script.js (EXPERIENCE array)
Experience timeline data with:
- `role`, `company`, `period`, `year`
- `responsibilities` (array of bullet points)

## 🎯 Design Philosophy

**"Same level of design thinking and sophistication as the reference, but original for Abishek's story."**

The portfolio communicates:
- **Editorial aesthetic** over corporate template
- **Intentional typography hierarchy** as visual design
- **Minimal color, maximum impact** with single accent
- **Strong whitespace** and breathing room
- **Technical labels** and metadata (uppercase, monospace where appropriate)
- **Asymmetric layouts** and unconventional grids
- **Subtle animations** that respect motion preferences
- **XR-themed aesthetic** suggesting immersive technology expertise

## ✅ Verification Checklist

- [x] HTML semantic and accessible (69 ARIA attributes)
- [x] CSS variables properly defined (typography, colors, spacing)
- [x] JavaScript functions syntax validated
- [x] Project data structure complete (5 projects, 5 experiences)
- [x] Placeholder images in place
- [x] All links and navigation functional
- [x] Responsive design (tested: 375px–1440px)
- [x] XR mode toggle works
- [x] Project filtering implemented
- [x] Scroll animations smooth
- [x] Performance acceptable (~176KB total)

## 🔧 Customization Guide

### Add a New Project
Edit `projects.js`:
```javascript
{
  id: 'your-project-id',
  title: 'YOUR PROJECT TITLE',
  // ... fill in all required fields
}
```

### Update Colors
Edit `:root` in `style.css`:
```css
--color-accent: #yourcolor;
--color-ink: #yourcolor;
```

### Modify Typography
Edit `style.css` type scale variables:
```css
--text-6xl: 4.768rem;  /* Hero display */
```

### Change Content
All text content is in `index.html` or rendered from JS data structures.

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ❌ Internet Explorer (not supported)

## 📞 Contact

- **Email**: abishek.sivaraj.02@gmail.com
- **LinkedIn**: linkedin.com/in/abishek-sivaraj
- **Location**: Coimbatore, Tamil Nadu

---

**Built with editorial design principles, modern web standards, and a focus on immersive experience.**

*Last Updated: August 31, 2026*
