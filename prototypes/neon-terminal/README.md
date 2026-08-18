# NEON TERMINAL NOIR — Prototypes

Three self-contained HTML prototypes for a terminal-style portfolio redesign.  
Open any file in a browser (no build step).

## Files

| # | File | Concept |
|---|------|---------|
| 01 | `01-classic-crt.html` | Single CRT terminal, center-left. Pure CLI: boot log → prompt. Minimal chrome. |
| 02 | `02-split-panel.html` | Shell left + live project preview right. `open` / click updates the magenta panel. |
| 03 | `03-multi-window-hud.html` | Full cyberpunk desktop: explorer + terminal + inspector + syslog + operator card. |

## Shared aesthetic (all three)

- Void black `#0a0a0c`
- Neon cyan `#00f0ff` primary, magenta `#ff2e88` accents
- Scanline overlay + radial vignette + opacity flicker
- ~boot lines typed in, then blinking prompt
- Commands: `help`, `files`/`ls`, `open <id>`, `neon`, `clear`, `whoami`, …
- Unknown cmds → RGB-split glitch “command not found”
- HUD uptime + `SIG / NEON-7`
- IBM Plex Mono, 2px neon borders + glow

## Quick preview

```sh
# from repo root
npx --yes serve prototypes/neon-terminal -p 5179
# then open http://localhost:5179
```

Or just double-click / `xdg-open` each HTML file.

## Project data

Prototypes embed a snapshot of `src/data/ProjectsData.ts` (7 projects).  
Real upgrade would import that module instead of hardcoding.

## Decision guide

- **01** — strongest “I’m in a terminal” vibe; weakest for browsing many projects visually.
- **02** — best balance: still terminal-first, but project details are readable without `cat`-spam.
- **03** — richest portfolio UX; densest UI (may feel less “pure CRT” on mobile).
