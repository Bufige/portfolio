# AGENTS.md — Portfolio (Bufige)

## Project Overview

React SPA portfolio for Leonardo Igor ("Bufige"), a full-stack developer.  
**NEON TERMINAL NOIR** multi-window CRT desktop: operator strip, project explorer, interactive shell, inspector, and system log.

Reference prototype: `prototypes/neon-terminal/03-multi-window-hud.html`  
Implementation plan: `docs/neon-terminal-react-plan.md`

## Tech Stack

- React 19, React Router DOM v7, Styled Components v6, TypeScript (strict)
- Font Awesome (optional legacy), Vite 8, Vitest 4, jsdom
- IBM Plex Mono

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
index.html
vite.config.ts
docs/neon-terminal-react-plan.md
prototypes/neon-terminal/          # HTML prototypes (03 is source of truth UX)

src/
  index.tsx
  App.tsx                          # ThemeProvider + HashRouter + Main
  theme/neon.ts                    # Color/type tokens + DefaultTheme
  data/
    ProjectsData.ts
    site.ts                        # Operator bio, links, version, codename
  lib/terminal/
    types.ts, parseCommand.ts, executeCommand.ts, bootLines.ts, id.ts
  hooks/
    useUptime.ts, useBootSequence.ts, useSysLog.ts
  pages/Main/                      # Neon desktop composition + grid
  components/neon/
    CrtOverlay/                    # Scanlines + vignette
    WindowFrame/                   # Shared CRT window chrome
    TopBar/
    OperatorPanel/
    ExplorerPanel/
    TerminalPanel/
    InspectorPanel/
    SysLogPanel/
  styles/global.ts
```

Legacy card UI components may still exist under `src/components/` (Project, Modal, etc.) but are not mounted.

## Conventions

- **Styled Components**: co-located `styles.ts`; transient props use `$` prefix
- **Imports**: `@components/`, `@data/`, `@pages/`, `@styles/`, `@theme/`, `@hooks/`, `@lib/`
- **Exports**: default export for components
- **Routing**: `HashRouter`, route `/`
- **State**: local in `Main` (selection, boot, syslog); shell logic pure in `lib/terminal`
- **Theme**: `ThemeProvider` with `neon` tokens

## Shell commands

`help` · `projects` (`ls`) · `open <id|name>` (`cat`) · `neon` · `whoami` · `contact` · `clear`  
Unknown → RGB-split `command not found`

## Data Model

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

## Deployment

- `deploy.ts` → `npm run build` then `aws s3 sync build/ s3://bufige.portifolio --delete`
- GitHub Pages: `npm run deploy`
- CloudFront: `E3UCLWQQJUTX7O` (`d3ql6soerdgvpl.cloudfront.net`)

## Nix

```sh
nix develop
```
