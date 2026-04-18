# Footer Component - Responsive Documentation

## 📋 Overview

The `Footer` component is a comprehensive footer section that adapts to different screen sizes and provides navigation, social links, and copyright information.

## 🎯 Features

### Responsive Behavior
- **Mobile (< 1024px)**: Single column layout with stacked content
- **Tablet (640px - 1023px)**: Adjusted spacing and layout
- **Desktop (≥ 1024px)**: Multi-column horizontal layout

### Sections

#### 1. **Brand Section**
- Logo with accent color highlight
- Subtitle with year and profession
- Responsive font sizing
- Visual hover effects

#### 2. **Navigation Links** (Desktop Only)
- Portfolio, Articles, About, Contact
- Hidden on mobile devices
- Hover effects with color transition
- Uppercase text with letter-spacing

#### 3. **Mobile Navigation** (Mobile Only)
- Navigation links in a separate section
- Styled with background color badges
- Located below brand section
- Better touch targets

#### 4. **Social Links**
- GitHub, Telegram, LinkedIn, Email
- Interactive hover states
- Scale and translate animations
- Touch-friendly sizing (36x36px)
- Appear on all device sizes

#### 5. **Footer Bottom**
- Copyright information
- Privacy and Terms links
- Flex layout adapts to screen size
- Responsive alignment

## 📱 Responsive Sizing

### Typography
```typescript
// Brand Name
Desktop: 18px
Mobile: 16px

// Subtitle
Desktop: 12px
Mobile: 11px

// Navigation
Desktop: 11px with 0.06em letter-spacing

// Copyright
11px with 0.04em letter-spacing
```

### Spacing
```typescript
// Padding
Desktop: 48px 24px
Mobile: 40px 16px

// Margin Top
Desktop: 80px
Mobile: 60px

// Gaps
Desktop: 24px
Mobile: 16-32px
```

## 🎨 Colors

Uses CSS variables from root:
- `--bg`: Background
- `--border`: Border color
- `--text`: Main text
- `--text-muted`: Muted text
- `--text-subtle`: Subtle text
- `--accent`: Highlight color (#ff8d78)
- `--bg-2`, `--bg-3`: Secondary backgrounds

## ✨ Interactive Effects

### Social Links
```typescript
// Hover State
backgroundColor: rgba(255, 141, 120, 0.1)
color: var(--accent)
transform: scale(1.1) translateY(-2px)

// Active State
transform: scale(0.95) translateY(0)
```

### Navigation Links
```typescript
// Hover State
color: var(--accent)
transition: all 0.3s ease
```

## 📱 Layout Structure

### Mobile Layout
```
┌─────────────────────────────────┐
│  Ilyas.dev                      │
│  Full Stack Developer · 2026    │
├─────────────────────────────────┤
│  [GitHub] [Telegram] [LinkedIn] │
│  [Email]                        │
├─────────────────────────────────┤
│  [Portfolio] [Articles]         │
│  [About]     [Contact]          │
├─────────────────────────────────┤
│  © 2026 Ilyas Dev...            │
│  [Privacy] [Terms]              │
└─────────────────────────────────┘
```

### Desktop Layout
```
┌────────────────────────────────────────────────────────┐
│ Ilyas.dev          [Portfolio] [Articles]   [GitHub]   │
│ Full Stack Dev...  [About]     [Contact]    [Telegram] │
│                                             [LinkedIn]  │
│                                             [Email]     │
├────────────────────────────────────────────────────────┤
│ © 2026 Ilyas Dev...          [Privacy] [Terms]         │
└────────────────────────────────────────────────────────┘
```

## 🔧 State Management

Uses `useState` and `useEffect` to:
- Detect screen size changes
- Manage `isMobile` state
- Update layout dynamically
- Handle window resize events

```typescript
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };
  
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

## 🔗 External Links

All social links open in new tabs:
- `target="_blank"`
- `rel="noopener noreferrer"` (security)

## ♿ Accessibility

- ✅ Semantic `<footer>` element
- ✅ ARIA labels on social icons
- ✅ Proper heading hierarchy
- ✅ Title attributes on hover
- ✅ Keyboard accessible links
- ✅ Color contrast compliant
- ✅ Supports `prefers-reduced-motion`

## 📊 Component Props

Currently no props - static content, but can be extended:

```typescript
interface FooterProps {
  showNavigation?: boolean;
  compactMode?: boolean;
  customLinks?: Array<{label: string, href: string}>;
}
```

## 🚀 Performance

- Lightweight component
- No unnecessary re-renders
- Event listener cleanup
- CSS-based animations (GPU accelerated)
- Minimal DOM elements

## 🎨 Styling Files

### Footer.module.css
- Comprehensive footer styles
- Responsive media queries
- Accessibility rules
- Print styles
- Animation effects

### Footer.tsx
- Inline styles for dynamic responsive behavior
- Controlled by `isMobile` state

## 📱 Device Support

- ✅ Mobile phones (320px+)
- ✅ Tablets (640px+)
- ✅ Laptops (1024px+)
- ✅ Desktops (1440px+)
- ✅ Large monitors (1920px+)

## 🔄 Future Enhancements

- [ ] Newsletter signup form
- [ ] Language selector
- [ ] Theme toggle
- [ ] Sitemap links
- [ ] RSS feed link
- [ ] Back to top button
- [ ] Footer analytics tracking
