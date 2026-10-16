# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pocket Heist ("Tiny missions. Big office mischief.") — starter project for the Claude Code Masterclass. Users create small office "heists" and assign them to others. Currently only routing and page skeletons exist: no auth, no data layer, no API.

## Commands

```bash
npm install
npm run dev                                   # http://localhost:3000
npm run build
npm run lint                                  # ESLint 9 flat config (next core-web-vitals + typescript)
npm test                                      # Vitest in watch mode
npx vitest run                                # run all tests once
npx vitest run tests/components/Navbar.test.tsx   # single file
npx vitest run -t "renders the main heading"      # single test by name
```

## Architecture

- **Next.js 16 App Router, React 19, TypeScript (strict).** Import with the `@/` alias, which maps to the repo root (e.g. `@/components/Navbar`, `@/app/globals.css`).
- **Route groups split the app into two layouts:**
  - `app/(public)/`: logged-out area wrapped in `<main className="public">`. The splash page `/` is intended to redirect logged-in users to `/heists` and everyone else to `/login` (not yet implemented). `/preview` is a scratch page for previewing new UI components.
  - `app/(dashboard)/`: logged-in area. Its layout renders `Navbar` above `<main>`. Routes: `/heists` (sections for active, assigned and expired heists), `/heists/create`, `/heists/[id]`.
- **Components** live in `components/<Name>/` as `<Name>.tsx` (default export) plus `<Name>.module.css` plus an `index.ts` barrel (`export { default } from "./<Name>"`). Recent commits migrated code to this structure; keep following it.
- **Styling** uses Tailwind CSS v4 via `@tailwindcss/postcss`. Theme tokens (`primary`, `secondary`, `dark`, `light`, `lighter`, `success`, `error`, `heading`, `body`) are defined in `@theme` in `app/globals.css`. Use them as Tailwind classes (`bg-dark`, `text-body`) rather than hard-coding colours. CSS Modules use `@apply` and must start with `@reference "../../app/globals.css";` to access those tokens. Shared page classes: `.page-content`, `.center-content`, `.form-title`.
- **Logo:** the "o" in "Pocket" is the lucide-react `Clock8` icon with the `logo` class.
- **Tests** live in `tests/`, mirroring the source layout (`tests/components/...`). They use Vitest with jsdom, Testing Library and jest-dom matchers (loaded via `vitest.setup.ts`). Vitest globals are enabled, though existing tests import `describe/it/expect` explicitly.

## Code style

No semicolons, double quotes, function components with default exports. Match this in new files.
