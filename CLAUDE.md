# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MOBIVET is an AI-powered cattle disease detection landing page built with Next.js 16 and React 19. The application showcases a mobile app that helps farmers identify cattle diseases using artificial intelligence.

## Development Commands

### Running the Development Server
```bash
pnpm dev
```
The dev server runs on http://localhost:3000

### Building for Production
```bash
pnpm build
```
Note: TypeScript build errors are ignored via `next.config.mjs` (`ignoreBuildErrors: true`). Images are unoptimized.

### Linting
```bash
pnpm lint
```

### Starting Production Server
```bash
pnpm start
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (RSC enabled)
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui component library
- **Component Library**: Radix UI primitives with shadcn/ui wrapper components
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

### Directory Structure

```
app/
  ├── layout.tsx       # Root layout with metadata, fonts (Geist, Geist Mono), and Analytics
  ├── page.tsx         # Home page composing all landing page sections
  └── globals.css      # Global styles and Tailwind configuration

components/
  ├── hero.tsx         # Hero section with CTA and stats
  ├── features.tsx     # Features showcase
  ├── how-it-works.tsx # Process explanation
  ├── team.tsx         # Team section
  ├── cta.tsx          # Call-to-action section
  ├── header.tsx       # Navigation header
  ├── footer.tsx       # Footer with links
  ├── theme-provider.tsx # Theme context provider
  └── ui/              # shadcn/ui components (57 components)

hooks/
  ├── use-mobile.ts    # Mobile breakpoint detection hook
  └── use-toast.ts     # Toast notification hook

lib/
  └── utils.ts         # cn() utility for class name merging (clsx + tailwind-merge)
```

### Path Aliases

TypeScript and shadcn/ui are configured with the following path aliases:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/components/ui` → `./components/ui`

Always use these aliases for imports.

### UI Component System

This project uses **shadcn/ui** (New York style variant) with:
- RSC (React Server Components) support enabled
- Neutral base color scheme
- CSS variables for theming
- Lucide icons as the icon library

Components are located in `components/ui/` and include 50+ Radix UI-based components (accordion, alert-dialog, button, card, dialog, dropdown-menu, form inputs, etc.).

#### Adding New shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

The configuration is stored in `components.json`.

### Page Structure

The landing page (`app/page.tsx`) is composed of section components in this order:
1. Header (navigation)
2. Hero (main headline + CTA)
3. Features (product features)
4. How It Works (process explanation)
5. Team (team members)
6. CTA (final call-to-action)
7. Footer (links and info)

Each section is a standalone React component that can be modified independently.

### Styling Conventions

- Use Tailwind utility classes for styling
- Leverage the `cn()` utility from `@/lib/utils` to merge class names conditionally
- Follow shadcn/ui component patterns for consistency
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Theme-aware: use semantic color tokens (`foreground`, `background`, `primary`, `muted`, etc.)

### Image Handling

Images are unoptimized (`unoptimized: true` in next.config.mjs). The hero section uses Next.js Image component with external images from Vercel blob storage.

### TypeScript Configuration

- Path alias: `@/*` maps to `./*`
- Target: ES6
- Strict mode enabled
- JSX: react-jsx
- Build errors are currently ignored in Next.js config

## Important Notes

- This is a **landing page only** (no backend/API routes currently)
- Forms use React Hook Form + Zod for validation
- The project uses **pnpm** as the package manager
- Vercel Analytics is integrated in the root layout
- Theme support is set up but may need additional configuration for dark mode
