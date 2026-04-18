# Navbar - Responsive Design Documentation

## 📱 Breakpoints & Behavior

### Mobile (< 640px)
- **Menu Type**: Hamburger icon (always visible)
- **Desktop Links**: Hidden
- **Logo Size**: 18px (scaled down)
- **Navbar Height**: 70px
- **Features**:
  - Hamburger menu icon in top right
  - Slide-down animation when menu opens
  - Full-width dropdown menu
  - Touch-friendly tap targets (min 44x44px)

### Tablet (640px - 1023px)
- **Menu Type**: Hamburger icon (always visible)
- **Desktop Links**: Hidden
- **Logo Size**: 20px
- **Navbar Height**: 70px
- **Features**:
  - Same as mobile experience
  - Hamburger menu for navigation
  - Optimized for landscape orientation
  - Proper spacing for touch interaction

### Desktop (≥ 1024px)
- **Menu Type**: Horizontal navigation bar
- **Hamburger Icon**: Hidden
- **Desktop Links**: Visible with smooth hover effects
- **Logo Size**: 24px (full size)
- **Navbar Height**: 70px
- **Features**:
  - Full navigation links visible
  - Animated underline on hover
  - Gradient effect on active link
  - No hamburger menu

## 🎨 Visual States

### Scroll States
- **At Top (0-10px)**: 
  - Background opacity: 80%
  - No shadow
  - Border: transparent

- **Scrolled Down (>10px)**:
  - Background opacity: 98%
  - Shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
  - Border: 1px solid var(--border)

### Active States
- **Active Link**:
  - Color: `var(--accent)` (#ff8d78)
  - Gradient underline

- **Hover Link (Desktop)**:
  - Color: var(--text)
  - Transform: translateY(-2px)

- **Menu Button**:
  - Background: rgba(255, 141, 120, 0.1)
  - Color: var(--accent)
  - Transform: scale(1.1)

## 🔧 Technical Details

### Responsive Logic
```typescript
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };
  
  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

### Dynamic Rendering
- Desktop links render only when `!isMobile`
- Menu button renders only when `isMobile`
- Mobile menu renders only when `isMobile && open`

### Auto-close Behavior
- Menu automatically closes when window is resized to desktop
- Menu closes when a link is clicked

## 📊 CSS Breakpoints

```css
/* Mobile: up to 639px */
@media (max-width: 639px)

/* Tablet: 640px to 1023px */
@media (min-width: 640px) and (max-width: 1023px)

/* Desktop: 1024px and above */
@media (min-width: 1024px)

/* Large Desktop: 1440px and above */
@media (min-width: 1440px)
```

## ✨ Animation Details

### slideDown
- Mobile menu entrance animation
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### slideIn
- Individual menu items cascade animation
- Duration: 300ms
- Stagger: 50ms per item

### float
- Logo hover effect
- Subtle up/down movement
- Duration: 600ms

## 🚀 Performance Optimizations

- `will-change: transform, box-shadow` on header
- Event listeners properly cleaned up
- No unnecessary re-renders
- CSS animations for smooth 60fps
- Hardware acceleration via transforms

## ♿ Accessibility

- Proper ARIA labels on menu button
- `aria-expanded` attribute
- Touch-friendly tap targets (44x44px minimum)
- Support for `prefers-reduced-motion`
- Proper focus management

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android)
- Supports backdrop-filter with webkit prefix

## 📝 Color Scheme

- **Background**: #FAF7F2 (cream-beige)
- **Accent**: #ff8d78 (warm coral)
- **Text**: #4a4541 (dark brown)
- **Text Muted**: #8b8076 (light brown)
- **Border**: #E8E0D5 (soft taupe)
