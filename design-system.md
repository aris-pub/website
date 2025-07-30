# Aris Organization Design System

The foundational design system for the Aris umbrella organization. This system
establishes core visual identity, shared principles, and reusable components that
individual products (Scroll Press, RSM Studio) can inherit and customize for their
specific needs.

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Layout & Grid](#layout--grid)
6. [Components](#components)
7. [Interactive States](#interactive-states)
8. [Responsive Design](#responsive-design)
9. [Dark Mode](#dark-mode)
10. [Implementation Guidelines](#implementation-guidelines)
11. [Product System Extensions](#product-system-extensions)

---

## Design Philosophy

### Core Principles

**Universal**: Works on any device, for any user, in any context. No barriers to access.
**Transparent**: Your research, your control. Everything exportable and built on open standards.
**Interactive**: Research is conversation. Enable dialogue and knowledge that builds over time.
**Inviting**: Beautiful, effortless experiences that respect your time and focus.

### Visual Identity
- Clean, readable typography with generous spacing
- Warm off-white backgrounds with subtle texture
- Purposeful use of color as accent and interaction cues
- Consistent geometric shapes and proportions
- Professional yet approachable aesthetic

### Organizational Role
This design system serves as the foundation for all Aris properties:
- **Organization website**: Full implementation of all patterns
- **Product websites**: Inherit core elements, customize for product-specific needs
- **Shared identity**: Consistent brand recognition across the ecosystem
- **Independent evolution**: Products can extend/modify while maintaining family resemblance

---

## Color Palette

### Primary Colors
```css
--text-primary: #0a0a0a;     /* Primary text - near black */
--text-secondary: #4a4a4a;   /* Secondary text - medium gray */
--text-tertiary: #7a7a7a;    /* Tertiary text - light gray */
```

### Background Colors
```css
--bg-primary: #fafaf8;       /* Main background - warm off-white */
--bg-card: #ffffff;          /* Card backgrounds - pure white */
--bg-subtle: #f5f5f2;        /* Subtle sections - slightly darker off-white */
--border-light: #e8e8e4;     /* Light borders - warm gray */
```

### Brand Colors
```css
--accent: #AD71F2;           /* Primary accent - purple */
--accent-dark: #8B4DBF;      /* Darker purple for interactions */
```

### Product Colors
```css
/* Preview Press - Coral */
#FF6B6B

/* RSM Studio - Blue */
#4A90E2
```

### Status Badge Colors
```css
/* Beta status */
color: #059669;              /* Green text */
background: rgba(5, 150, 105, 0.05);  /* Light green background */
border: 1px solid #059669;

/* Dev status */
color: #4a4a4a;              /* Gray text */
background: rgba(74, 74, 74, 0.05);   /* Light gray background */
border: 1px solid #4a4a4a;
```

### Dark Mode Colors
```css
--text-primary: #f0f0f0;     /* Light text */
--text-secondary: #b0b0b0;   /* Medium light text */
--text-tertiary: #808080;    /* Medium text */
--bg-primary: #0f0f0d;       /* Dark background */
--bg-card: #1a1a18;          /* Card backgrounds */
--bg-subtle: #141412;        /* Subtle sections */
--border-light: #2a2a26;     /* Dark borders */
```

---

## Typography

### Font Families
```css
--font-serif: 'Georgia', 'Garamond', 'Times New Roman', serif;
--font-sans: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

### Typography Scale

#### Headers
- **Hero H1**: `clamp(3rem, 6vw, 4.5rem)` - Serif, weight 400, line-height 1.1
- **Section Title**: `3rem` - Serif, weight 400, line-height 1.2
- **Hero Secondary**: `2rem` - Serif, weight 300, line-height 1.3
- **Subsection**: `1.4rem` - Sans-serif, weight 500

#### Body Text
- **Body**: `19px` - Sans-serif, weight 400, line-height 1.7
- **Hero Subtitle**: `1.4rem` - Sans-serif, weight 300, line-height 1.6
- **Section Subtitle**: `1.3rem` - Sans-serif, weight 300
- **Small Text**: `0.95rem` - Sans-serif, weight 400

#### Speciality Text
- **Logo**: `1.75rem` - Serif, weight 400, letter-spacing -0.01em
- **Product Names**: `1.5rem` - Serif, weight 400, letter-spacing -0.01em
- **Pillar Names**: `1.4rem` - Sans-serif, weight 300, uppercase, letter-spacing 0.05em

### Typography Rules
1. Use serif fonts for headers and brand elements
2. Use sans-serif for body text and UI elements
3. Apply negative letter-spacing to large text (-0.01em to -0.03em)
4. Maintain consistent line-height ratios (1.1 for headers, 1.7 for body)
5. Purple dot accent after all section titles using `::after` pseudo-element

---

## Spacing System

### Spacing Scale
```css
--space-xs: 0.75rem;   /* 12px */
--space-sm: 1.25rem;   /* 20px */
--space-md: 2.5rem;    /* 40px */
--space-lg: 5rem;      /* 80px */
--space-xl: 10rem;     /* 160px */
```

### Mobile Adjustments
```css
/* Mobile: 768px and below */
--space-xl: 4rem;      /* 64px */
--space-lg: 2.5rem;    /* 40px */
--space-md: 2rem;      /* 32px */
--space-sm: 1rem;      /* 16px */

/* Extra small: 480px and below */
--space-xl: 3rem;      /* 48px */
--space-lg: 2rem;      /* 32px */
--space-md: 1.5rem;    /* 24px */
```

### Spacing Applications
- **Section padding**: `var(--space-lg) 0`
- **Card padding**: `var(--space-md)`
- **Button padding**: `var(--space-sm) var(--space-lg)`
- **Element gaps**: `var(--space-md)` for large, `var(--space-sm)` for small

---

## Layout & Grid

### Container System
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
}
```

### Grid Patterns

#### Products Grid
```css
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--space-lg);
}
```

#### Philosophy Pillars Grid
```css
.pillars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
}
```

#### Problem-Solution Grid
```css
.problem-solution {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-lg);
    align-items: center;
}
```

### Layout Rules
1. Use CSS Grid for complex layouts
2. Employ `auto-fit` with `minmax()` for responsive behavior
3. Maintain consistent gaps using spacing variables
4. Stack elements vertically on mobile (< 768px)

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
    background: #2a2a2a;
    color: #f8f8f6;
    border: 2px solid #2a2a2a;
    padding: var(--space-sm) var(--space-lg);
    font-size: 1.05rem;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--accent);
    border-color: var(--accent);
    transform: scale(1.01);
}
```

#### Secondary Button
```css
.btn-secondary {
    background: #f8f8f6;
    color: #2a2a2a;
    border: 2px solid #2a2a2a;
}

.btn-secondary:hover {
    background: var(--accent);
    color: #ffffff;
    border-color: var(--accent);
}
```

#### Product-Specific Buttons
- **Press buttons**: Hover to coral (#FF6B6B)
- **Studio buttons**: Hover to blue (#4A90E2)
- **Hero buttons**: Outlined style with product colors

### Cards

#### Product Cards
```css
.product-card {
    background: var(--bg-card);
    padding: var(--space-md);
    border: 1px solid var(--border-light);
    border-top: 4px solid transparent;
    border-radius: 8px;
    min-height: 500px;
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-top: 4px solid [product-color];
}
```

#### Pillar Cards
```css
.pillar {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 4px;
    transition: all 0.3s ease;
}

.pillar:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.pillar:hover::before {
    transform: translateY(0); /* Purple top border on hover */
}
```

### Status Badges
```css
.status-badge {
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.15rem 0.5rem;
    border-radius: 3px;
    border: 1px solid;
    display: inline-block;
}
```

### Navigation
- **Fixed header**: `height: 80px` (70px mobile)
- **Desktop nav**: Horizontal with underline hover effects
- **Mobile nav**: Collapsible hamburger menu
- **Logo**: Serif typeface with purple dot accent

---

## Interactive States

### Hover Effects
- **Cards**: `translateY(-3px)` with enhanced shadows
- **Buttons**: `scale(1.01)` with color transitions
- **Links**: Color change with underline animations
- **Icons**: Background color shifts for pillar icons

### Transitions
```css
transition: all 0.3s ease;  /* Standard for most elements */
transition: color 0.2s ease;  /* Fast for text color changes */
```

### Focus States
- **Touch devices**: 2px solid accent outline with 2px offset
- **Keyboard navigation**: Enhanced visibility for accessibility

### Problem-Solution Hover
```css
.problem-solution:hover {
    background: rgba(173, 113, 242, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}
```

---

## Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px
- **Extra Small**: ≤ 480px

### Mobile-First Approach
1. Design for mobile first, enhance for larger screens
2. Stack grid layouts vertically on mobile
3. Reduce font sizes and spacing on smaller screens
4. Optimize touch targets (minimum 44px)
5. Hide/show appropriate UI elements per screen size

### Typography Scaling
```css
/* Desktop */
font-size: 19px;

/* Mobile */
font-size: 17px;

/* Extra Small */
font-size: 16px;
```

### Touch Optimizations
- Remove hover effects on touch devices
- Larger touch targets for interactive elements
- Enhanced focus states for accessibility
- Optimized mobile menu with overlay

---

## Dark Mode

### Implementation
- Automatic detection: `prefers-color-scheme: dark`
- Manual toggle: `data-theme="dark"` attribute
- Consistent across all components and states

### Dark Mode Enhancements
- Enhanced shadows for depth: `rgba(0, 0, 0, 0.5)`
- Special button treatments in Join Movement section
- Inverted icons where appropriate
- Maintained contrast ratios for accessibility

### Color Mapping
All CSS custom properties are redefined for dark mode while maintaining the same
semantic meaning and contrast relationships.

---

## Implementation Guidelines

### CSS Architecture
1. **CSS Custom Properties**: Use variables for all colors, spacing, and typography
2. **Mobile-First**: Write base styles for mobile, use `@media` to enhance for desktop
3. **Component-Based**: Group related styles together by component
4. **Consistent Naming**: Use BEM-style naming for classes

### Development Rules
1. Always use spacing variables instead of hardcoded values
2. Implement hover effects with `transition` for smooth interactions
3. Test all components in both light and dark modes
4. Ensure minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
5. Use `clamp()` for responsive typography
6. Implement proper focus states for accessibility

### Performance Considerations
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Minimize layout shifts with consistent spacing
- Optimize font loading with system font stacks
- Use CSS Grid for complex layouts instead of flexbox nesting

### Accessibility Standards
- Semantic HTML structure with proper heading hierarchy
- Sufficient color contrast in all modes
- Keyboard navigation support
- Touch target sizing (minimum 44px)
- Screen reader compatible markup
- Reduced motion respect: `prefers-reduced-motion`

---

---

## Product System Extensions

### Inheritance Model
Each Aris product inherits this foundation and can:

#### Core Elements (Inherit As-Is)
- Typography hierarchy and font families
- Spacing system and layout principles
- Base color palette (text, backgrounds, borders)
- Accessibility standards and responsive patterns
- Four foundational principles

#### Customizable Elements
- **Primary brand color**: Products use their assigned colors (#FF6B6B for Press, #4A90E2 for Studio)
- **Button treatments**: Product-specific hover states and color schemes
- **Component variations**: Adapted card layouts, navigation patterns
- **Content-specific UI**: Publishing workflows, writing interfaces, etc.

#### Product-Specific Extensions
- **Scroll Press**: Coral accent (#FF6B6B), publication-focused components, reader interface patterns
- **RSM Studio**: Blue accent (#4A90E2), editor-focused components, collaboration interface patterns
- **Future products**: Will receive assigned brand colors and develop specialized component libraries

### Maintaining Consistency
1. **Shared foundations**: Never deviate from core typography, spacing, or accessibility standards
2. **Brand recognition**: Always maintain visual family resemblance through shared elements
3. **Independent innovation**: Products free to develop specialized UI patterns for their unique needs
4. **Documentation**: Each product should maintain its own design system documentation extending this foundation

---

*This foundational design system enables the Aris ecosystem to maintain unified brand identity while allowing each product the flexibility to serve its users' specific needs. Every decision prioritizes clarity, accessibility, and the seamless flow of academic knowledge across all platforms.*
