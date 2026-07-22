# AGENTS.md — Portfolio (Bufige)

## Project Overview

React SPA portfolio for Leonardo Igor ("Bufige"), a full-stack developer. Showcases projects with a dark macOS-inspired theme, tag-based filtering, and modal project details with slideshows.

## Tech Stack

- React 18, React Router DOM v6, Styled Components v6, TypeScript 5
- Font Awesome 6 (React components, not CDN kit), Vite 5, Vitest 2
- jsdom for test environment

## Commands

```sh
npm start          # Dev server (Vite)
npm run dev        # Dev server (Vite)
npm test           # Run tests (Vitest)
npm run test:watch # Watch mode
npm run build      # tsc + Vite production build (output: build/)
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
npm run deploy-bucket  # Build + deploy to AWS S3 (s3://bufige.portifolio)
```

## Project Structure

```
index.html              # Vite entry HTML (root, not in public/)
vite.config.ts          # Vite + Vitest config
tsconfig.json           # TypeScript strict mode
flake.nix / flake.lock  # Nix shell for Node.js 24
deploy.ts               # Build + S3 sync script

src/
  index.tsx             # Entry point: createRoot from react-dom/client
  App.tsx               # Root: HashRouter, Routes/Route, global layout
  vite-env.d.ts         # Vite type references
  test-setup.ts         # Vitest setup (jsdom + #modal container)
  data/
    ProjectsData.ts     # Typed project array (ProjectData[])
  pages/
    Main/               # Home page: state for filters, modal, selected project
      index.tsx, styles.ts
  components/
    Dot/                # Colored circle (window bar dots + slideshow nav)
    FollowMe/           # Fixed left sidebar social links
    Footer/             # Bottom bar with copyright + contact
    Modal/              # Project detail modal via createPortal
    Project/            # Project card (macOS window bar, hover overlay with tags)
    Projects/           # CSS Grid container for Project cards
    SearchBar/          # Tag-based filter bar
    SlideShow/          # Image carousel with auto-advance, arrows, dot nav
    Tag/                # Pill/chip button
  styles/
    global.ts           # Global reset, dark bg (#2a2a2a), custom scrollbars
```

## Conventions

- **Styled Components**: co-located `styles.ts` per component directory; transient props use `$` prefix
- **Imports**: `@components/`, `@data/`, `@pages/`, `@styles/` aliases map to `src/{dir}` (e.g. `@components/Modal`, `@data/ProjectsData`)
- **Exports**: default export for every component
- **Naming**: PascalCase for components, camelCase for data/utilities
- **Routing**: `HashRouter` (static hosting compat) with single route `/`
- **State**: local state in `Main` (no state management library used)
- **TypeScript**: strict mode enabled; all components typed with interfaces

## Data Model

Each project in `ProjectsData.ts`:
```ts
interface ProjectData {
  id: number;
  name: string;
  description: string;
  tech: string[];
  skills: string[];
  images: string[];
  demo: string;
  github: string;
}
```
Array is reversed on export (newest first).

## Deployment

- `deploy.ts` runs `npm run build` then `aws s3 sync build/ s3://bufige.portifolio --delete`
- GitHub Pages: `npm run deploy` (via `gh-pages`)
- CloudFront distribution: `E3UCLWQQJUTX7O` (domain: `d3ql6soerdgvpl.cloudfront.net`)
- Skill: `.opencode/skills/deploy/` for full deploy + CF invalidation

## Nix

A `flake.nix` provides Node.js 24 for development:
```sh
nix develop
```
