# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build with source maps
npm run lint         # ESLint
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Architecture

This is a **GulfWebCo landing page** - a Vite + React + TypeScript SPA with RTL Arabic support.

### Tech Stack
- **Build:** Vite 5 with SWC
- **UI:** React 18, shadcn-ui (60+ components in `src/components/ui/`), Tailwind CSS
- **Routing:** React Router v6 (`src/App.tsx`)
- **State:** TanStack React Query (configured, not actively used yet)
- **Forms:** react-hook-form + Zod (available, not actively used yet)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **PWA:** vite-plugin-pwa with Workbox caching

### Directory Structure
```
src/
├── components/       # Section components (Header, Hero, Features, etc.)
│   └── ui/          # shadcn-ui primitives
├── pages/           # Route pages (Index, Install, NotFound)
├── hooks/           # use-mobile, use-toast
├── lib/utils.ts     # cn() class merge utility
└── index.css        # Global styles, theme variables, custom utilities
```

### Routing Pattern
Routes defined in `src/App.tsx`. Add new routes BEFORE the catch-all `*` route.

### Theming
- CSS variables in `src/index.css` for light/dark modes
- Theme toggle stores preference in localStorage key `gulfwebco-theme`
- RTL direction set in HTML, uses IBM Plex Sans Arabic font

### Component Patterns
- **Section components:** Named exports with Framer Motion animations
- **Page components:** Default exports
- **UI components:** Use shadcn-cli to add new ones, they use CVA for variants
- **Class merging:** Always use `cn()` from `@/lib/utils` for conditional classes

### Animation Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

### Path Aliases
`@/*` maps to `src/*` (configured in tsconfig and vite.config)
