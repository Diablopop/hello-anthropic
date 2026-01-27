# Anthropic Job Pitch Landing Page

A terminal-themed landing page showcasing Andrew Schauer's candidacy for the "Product Manager, Claude Code Growth" role at Anthropic.

## Features

- **Terminal Aesthetic**: Mac Terminal-inspired design with VT323 font and green glow effects
- **Engagement Tracker**: Real-time metrics tracking (time on site, scroll depth, clicks) with status transitions and celebrations
- **Interactive Prototype Viewer**: Showcase of Claude Code improvement concepts
- **Responsive Design**: Optimized for both desktop and mobile
- **Smooth Animations**: Framer Motion animations throughout

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Framer Motion (animations)
- Canvas Confetti (celebrations)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173/` to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Update Social Links and URLs

Edit `/src/utils/constants.ts`:

```typescript
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  github: 'https://github.com/YOUR_USERNAME',
  email: 'mailto:YOUR_EMAIL@example.com',
};
```

### 2. Add Your Resume

Replace `/public/assets/resume.pdf` with your actual resume PDF file.

### 3. Update Copy

Edit `/src/App.tsx` to update the content in the "Why This Role" section (lines 60-73):

```typescript
<p>
  [PLACEHOLDER: Add your compelling copy about why you're
  interested in this specific role and what you bring to the table]
</p>
```

### 4. Replace Prototype Screens

Replace the placeholder SVG files in `/public/assets/prototype-screens/` with your actual concept images:
- `home.svg` → Your home screen
- `screen-1.svg` → Concept 1 (Onboarding improvements)
- `screen-2.svg` → Concept 2 (Feature discovery)
- `screen-3.svg` → Concept 3 (Collaboration workflows)
- `screen-4.svg` → Concept 4 (Growth opportunities)

Update descriptions in `/src/components/PrototypeViewer/prototypeConfig.ts`.

### 5. Adjust Tracker Card Thresholds (Optional)

Edit `/src/utils/constants.ts` to adjust engagement scoring:

```typescript
export const STATUS_THRESHOLDS = {
  INTEREST: 80,      // Score needed to reach INTEREST status
  CONSIDERATION: 200, // Score needed to reach CONSIDERATION status
};

export const SCORE_WEIGHTS = {
  time: 0.5,   // Weight for time on site (seconds)
  scroll: 2,   // Weight for scroll depth (percentage)
  clicks: 3,   // Weight for click count
};
```

## Deployment to Vercel

### Step 1: Create GitHub Repository

```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

In Vercel project settings:
1. Go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── BackgroundPattern.tsx    # Tiled background
│   │   └── TerminalContainer.tsx    # Main content container
│   ├── TrackerCard/
│   │   ├── TrackerCard.tsx          # Desktop tracker
│   │   ├── TrackerDrawer.tsx        # Mobile tracker
│   │   ├── ProgressTracker.tsx      # Progress visualization
│   │   └── useTrackerMetrics.ts     # Metrics hook
│   ├── PrototypeViewer/
│   │   ├── PrototypeViewer.tsx      # Main viewer component
│   │   ├── PrototypeFrame.tsx       # Screen frame
│   │   └── prototypeConfig.ts       # Screen configuration
│   ├── CTA.tsx                      # Call-to-action button
│   ├── Logo.tsx                     # Claude Code logo
│   └── ScrollArrow.tsx              # Animated scroll indicator
├── hooks/
│   ├── useTimeOnSite.ts
│   ├── useScrollDepth.ts
│   ├── useClickTracking.ts
│   └── useEngagementStatus.ts
├── utils/
│   ├── celebrations.ts              # Confetti animations
│   └── constants.ts                 # Configuration constants
└── App.tsx                          # Main application
```

## Testing Checklist

- [ ] All images load correctly
- [ ] Resume downloads with correct filename
- [ ] Tracker card appears on desktop (right side)
- [ ] Tracker drawer works on mobile (eye icon tab)
- [ ] Prototype viewer navigates between screens
- [ ] Scroll arrows animate on scroll
- [ ] CTAs link to correct URLs
- [ ] Background pattern tiles correctly
- [ ] Logo animation plays on load
- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Test on mobile device (iPhone/Android)
- [ ] Lighthouse score >90

## Engagement Tracker Details

The tracker card monitors user engagement and transitions through 3 states:

1. **AWARENESS** (default)
2. **INTEREST** (score ≥ 80)
   - Small celebration with vibration
3. **CONSIDERATION** (score ≥ 200)
   - Large pixelated confetti celebration

**Score Formula:**
```
score = (time_in_seconds × 0.5) + (scroll_depth_percent × 2) + (click_count × 3)
```

## Performance Optimization

- Images are optimized (WebP for background)
- Lazy loading for prototype screens
- Framer Motion animations use GPU-accelerated properties (transform, opacity)
- Minimal dependencies for fast load times

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. ✅ Foundation complete
2. ✅ Core content and tracker card complete
3. ✅ Prototype viewer complete
4. 🔄 **YOU ARE HERE**: Customize content and deploy
   - Add your LinkedIn and GitHub URLs
   - Replace placeholder copy
   - Add your resume PDF
   - Replace prototype screen images
5. 🚀 Deploy to Vercel
6. 📱 Test on multiple devices
7. ✉️ Submit with job application!

## License

Personal project for job application purposes.

---

Built with Claude Code 🤖
