# Plan: NEON TERMINAL NOIR — React + TypeScript

Replace the current macOS-card portfolio UI with the multi-window CRT desktop validated in `prototypes/neon-terminal/03-multi-window-hud.html`.

**Reference prototype:** `prototypes/neon-terminal/03-multi-window-hud.html`  
**Stack (unchanged):** React 19, TypeScript (strict), Styled Components v6, Vite, Vitest, HashRouter  
**Scope:** visual + interaction redesign of the home experience; keep `ProjectData` and deploy pipeline.

---

## 1. Goals

| Goal | Detail |
|------|--------|
| Aesthetic | Full-viewport `#0a0a0c`, cyan `#00f0ff`, magenta `#ff2e88`, scanlines + vignette + flicker |
| Layout | Multi-window HUD: operator · explorer · terminal · inspector · syslog |
| Interaction | Shell commands + click-to-open projects; inspector mirrors selection |
| Data | Drive UI from `@data/ProjectsData` (no hardcoded project list in components) |
| Scale | 1440p-first type scale via CSS `clamp()`; mobile stack order fixed |
| Quality | Typed shell, unit tests for command parser, no new runtime deps if avoidable |

### Non-goals (v1)

- Real OS / process metrics (PROCS, MEM stay cosmetic or derived simply)
- Drag-resize windows
- Audio / WebGL CRT shaders
- Keeping the old card grid / SearchBar / Modal as primary UX (can delete or archive after cutover)
- i18n

---

## 2. Target UX (from prototype)

```
┌─────────────────────────────────────────────────────────┐
│ TOPBAR  SIG/NEON-7 · UPTIME · PROCS · MEM · LINK · VER  │
├─────────────────────────────────────────────────────────┤
│ OPERATOR (full width)  name · role · bio · links/chips  │
├──────────────┬────────────────────────┬─────────────────┤
│ EXPLORER     │ TERMINAL (tty0)        │ INSPECTOR       │
│ project list │ boot log → prompt      │ selected project│
├──────────────┴────────────────────────┴─────────────────┤
│ SYSTEM LOG (tail -f style events)                       │
└─────────────────────────────────────────────────────────┘
```

**Mobile (`max-width: 1100px`) stack order:**

1. Operator  
2. Explorer  
3. Inspector  
4. Terminal  
5. Syslog  

Heights: larger `vh`-based panels so bio/list/detail remain readable (see prototype media queries).

### Shell commands (v1)

| Command | Aliases | Behavior |
|---------|---------|----------|
| `help` | — | List commands |
| `projects` | `ls` | List projects in terminal (explorer is always visible) |
| `open <id\|name>` | `cat` | Select project → inspector + log |
| `neon` | — | Palette / aesthetic dump |
| `whoami` | — | Identity one-liner |
| `contact` | — | GitHub (and other links if added) |
| `clear` | — | Clear terminal buffer only |
| _(unknown)_ | — | RGB-split glitch: `command not found` |

---

## 3. Architecture

### 3.1 State ownership

Lift desktop state into `Main` (or a thin `NeonDesktop` page container). No Redux/Zustand required.

```ts
// conceptual
type LogLevel = 'ok' | 'warn' | 'info';

interface TerminalLine {
  id: string;
  text: string;
  variant: 'boot' | 'cyan' | 'mag' | 'dim' | 'err' | 'default';
}

interface SysLogEntry {
  id: string;
  ts: string;       // mm:ss from session start
  message: string;
  level: LogLevel;
}

interface DesktopState {
  lines: TerminalLine[];
  sysLog: SysLogEntry[];
  selectedProjectId: number | null;
  bootDone: boolean;
  sessionStartedAt: number;
}
```

**Selection is single source of truth:** explorer click and `open` both set `selectedProjectId`. Inspector is a pure view of that id + `ProjectsData`.

### 3.2 Component tree

```
App
├── GlobalStyle          (void bg, fonts, scrollbar; drop old light rules)
├── CrtOverlay           (scanlines + vignette + flicker — fixed, pointer-events: none)
└── Routes
    └── Main  →  NeonDesktop
         ├── TopBar              (uptime ticker, VER 1.0, link live)
         ├── OperatorPanel       (bio from constants / site config)
         ├── ExplorerPanel       (ProjectsData map, active row)
         ├── TerminalPanel
         │    ├── WindowChrome
         │    ├── TerminalScreen (lines)
         │    └── TerminalPrompt (input, focus mgmt)
         ├── InspectorPanel      (project detail or idle)
         └── SysLogPanel         (sysLog entries)
```

Optional shared:

- `WindowFrame` — border, glow, traffic lights, title, meta slot  
- `useUptime(sessionStartedAt)`  
- `useBootSequence(bootLines, onDone)`  
- `parseCommand(input) → { name, args }` + `executeCommand(cmd, ctx) → effects`

### 3.3 File layout (proposed)

```
src/
  data/
    ProjectsData.ts          # keep as-is
    site.ts                  # NEW: operator bio, role, links, version, boot lines
  theme/
    neon.ts                  # NEW: color tokens, glow shadows
  hooks/
    useUptime.ts
    useBootSequence.ts
    useSysLog.ts             # append + optional ambient ticks
  lib/
    terminal/
      types.ts
      parseCommand.ts
      executeCommand.ts
      bootLines.ts
  components/
    neon/
      CrtOverlay/
      WindowFrame/
      TopBar/
      OperatorPanel/
      ExplorerPanel/
      TerminalPanel/
      InspectorPanel/
      SysLogPanel/
  pages/
    Main/
      index.tsx              # compose NeonDesktop
      styles.ts              # desktop grid + mobile order
  styles/
    global.ts                # reset + #0a0a0c + mono font
```

**Remove or stop mounting after cutover:** `SearchBar`, `Projects`, `Project`, `Modal`, `SlideShow` (unless inspector reuses slideshow later), current `FollowMe`/`Footer` placement (socials move into Operator / `contact`).

### 3.4 Styling conventions

- Stay on **Styled Components**; co-located `styles.ts`
- Transient props: `$active`, `$variant`, `$level`
- Tokens from `theme/neon.ts` injected via props or a small `ThemeProvider`
- Type scale (mirror prototype):

```ts
// theme/neon.ts (sketch)
export const neon = {
  bg: '#0a0a0c',
  cyan: '#00f0ff',
  magenta: '#ff2e88',
  green: '#39ff14',
  text: '#e8f7f8',
  muted: '#a8b8c4',
  fs: 'clamp(15px, 0.95vw + 4px, 18px)',
  fsSm: 'clamp(13px, 0.75vw + 4px, 15px)',
  // ...
} as const;
```

- High-contrast window chrome and syslog (prototype lessons): titles not gray-on-black; log messages near-white / bright green / bright pink
- Font: IBM Plex Mono (Google Fonts link in `index.html` or `@fontsource`)

### 3.5 Shell design (testable core)

Keep DOM out of the executor:

```ts
// executeCommand.ts
export interface CommandContext {
  projects: ProjectData[];
  selectedProjectId: number | null;
}

export interface CommandResult {
  lines: Omit<TerminalLine, 'id'>[];
  selectProjectId?: number | null;
  clearTerminal?: boolean;
  sysLog?: { message: string; level: LogLevel };
}

export function executeCommand(
  raw: string,
  ctx: CommandContext,
): CommandResult
```

`TerminalPanel` only: append lines, apply `clearTerminal`, call `onSelectProject`, push syslog.

**Boot:** `useBootSequence` pushes lines on an interval (~35–80ms jitter), then sets `bootDone` and focuses the input.

---

## 4. Implementation phases

### Phase 0 — Prep

- [ ] Add `docs/` plan (this file) ✓  
- [ ] Add `src/theme/neon.ts` + `src/data/site.ts` (copy bio/links from current Main)  
- [ ] Add IBM Plex Mono to `index.html`  
- [ ] Extend `GlobalStyle` for void background + mono (keep reset)

### Phase 1 — Shell primitives (no full layout yet)

- [ ] `lib/terminal/types.ts`, `parseCommand.ts`, `executeCommand.ts`, `bootLines.ts`  
- [ ] Unit tests: `parseCommand` / `executeCommand` (`help`, `projects`, `open` by id/name, unknown → err, `clear`)  
- [ ] `WindowFrame`, `CrtOverlay`  
- [ ] `useUptime`, `useBootSequence`, `useSysLog`

### Phase 2 — Panels

- [ ] `TopBar`  
- [ ] `OperatorPanel` (from `site.ts`)  
- [ ] `ExplorerPanel` (list + `$active`)  
- [ ] `InspectorPanel` (idle + project: stack chips, skills, demo/github)  
- [ ] `SysLogPanel`  
- [ ] `TerminalPanel` (boot → prompt → command loop)

### Phase 3 — Compose + responsive

- [ ] `Main` grid matching prototype (operator full width; 3 columns; syslog full width)  
- [ ] Mobile order + heights (`order` + `vh` clamps)  
- [ ] Wire selection: explorer ↔ terminal `open` ↔ inspector  
- [ ] Ambient syslog interval (optional, clear on unmount)  
- [ ] Focus: click terminal focuses input; after boot autofocus

### Phase 4 — App cutover

- [ ] `App.tsx`: render new Main only; remove or gate `FollowMe` / old `Footer` (footer content → operator/contact)  
- [ ] Delete or move unused components to `src/_legacy/` if you want a rollback path  
- [ ] Update `AGENTS.md` structure section  
- [ ] Visual QA: 1440p desktop + narrow mobile

### Phase 5 — Polish + ship

- [ ] Accessibility: focus ring on prompt, `aria-live` on terminal/syslog (polite), contrast check  
- [ ] Prefer-reduced-motion: disable flicker / shorten boot  
- [ ] `npm test` + `npm run build`  
- [ ] Deploy when ready

---

## 5. Data & content

### Keep

```ts
// ProjectsData.ts — unchanged contract
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

Inspector v1 can show description + tech + skills + links. **Images/slideshow optional v1.1** (reuse `SlideShow` inside inspector if desired).

### New `site.ts`

```ts
export const site = {
  codename: 'SIG / NEON-7',
  version: '1.0',
  operator: {
    name: 'BUFIGE',
    role: 'FullStack Developer',
    bio: 'Software Engineer with years of experience. ...',
    chips: ['react', 'node', 'ts'],
    github: 'https://github.com/bufige',
  },
} as const;
```

---

## 6. Testing plan

| Area | Approach |
|------|----------|
| `parseCommand` | Pure unit tests |
| `executeCommand` | Table-driven: each command + unknown + `open` miss |
| `TerminalPanel` | RTL: type `help` + Enter → line appears; `open 1` calls select |
| `ExplorerPanel` | Click row fires `onSelect` |
| `useBootSequence` | Fake timers |
| Visual | Manual vs prototype 03 |

Avoid screenshot tests in v1 unless you already have a pipeline.

---

## 7. Migration / rollback

1. Build Neon desktop behind the same route `/` once feature-complete.  
2. Optional short-lived flag: `const USE_NEON = true` in `App.tsx` if you want instant rollback while QA’ing production.  
3. After confidence: delete legacy components and flag.

Do **not** keep two competing home UIs long-term.

---

## 8. Risks & decisions

| Risk | Mitigation |
|------|------------|
| Boot animation annoying on repeat visits | `sessionStorage` skip boot after first run, or reduce line count |
| Mobile terminal hard to use | Large tap targets; explorer+inspector work without typing |
| Scanlines hurt readability | Keep overlay opacity modest; respect `prefers-reduced-motion` |
| Syslog noise | Cap buffer (e.g. last 100 lines); ambient every 8s only after boot |
| SEO | SPA already HashRouter; no change. Titles/meta stay in `index.html` |

**Open decisions (confirm before Phase 3):**

1. Inspector: text-only v1 vs embed project images  
2. Keep `FollowMe` floating icons or fold into operator only  
3. Skip-boot on return visits? default **yes** via `sessionStorage`

---

## 9. Definition of done

- [ ] Desktop matches prototype 03 layout and palette at 1440p  
- [ ] All v1 commands work; unknown commands glitch  
- [ ] Explorer click and `open` stay in sync with inspector  
- [ ] Mobile order: operator → explorer → inspector → terminal → syslog  
- [ ] Projects come only from `ProjectsData`  
- [ ] Tests green for terminal lib + critical panels  
- [ ] `npm run build` succeeds  
- [ ] `AGENTS.md` updated  

---

## 10. Suggested commit sequence

1. `chore: add neon theme tokens and site config`  
2. `feat(terminal): parse and execute commands with tests`  
3. `feat(neon): window frame, crt overlay, hooks`  
4. `feat(neon): panels (operator, explorer, terminal, inspector, syslog)`  
5. `feat(neon): compose desktop layout + responsive`  
6. `refactor: cut over Main/App to neon desktop`  
7. `docs: update AGENTS.md for neon architecture`  

---

## 11. Reference checklist (parity with prototype)

- [x] Void black + cyan/magenta  
- [x] Scanlines + vignette + flicker  
- [x] Boot log then prompt  
- [x] Commands including `projects` (not `files`)  
- [x] RGB-split on unknown command  
- [x] Uptime HUD + SIG / NEON-7 + VER 1.0  
- [x] Operator full-width top strip  
- [x] High-contrast chrome + syslog  
- [x] 1440p clamp scale  
- [x] Mobile inspector after explorer  
- [x] Larger mobile panel heights  

Prototype path: `prototypes/neon-terminal/03-multi-window-hud.html`
