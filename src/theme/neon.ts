export const neon = {
  bg: '#0a0a0c',
  cyan: '#00f0ff',
  magenta: '#ff2e88',
  green: '#39ff14',
  text: '#e8f7f8',
  muted: '#a8b8c4',
  dim: '#8b9aa8',
  panel: 'rgba(8, 10, 14, 0.94)',
  glowC: '0 0 8px #00f0ff, 0 0 28px rgba(0, 240, 255, 0.3)',
  glowM: '0 0 8px #ff2e88, 0 0 22px rgba(255, 46, 136, 0.35)',
  fs: 'clamp(15px, 0.95vw + 4px, 18px)',
  fsSm: 'clamp(13px, 0.75vw + 4px, 15px)',
  fsXs: 'clamp(12px, 0.65vw + 3px, 14px)',
  fsLg: 'clamp(20px, 1.35vw + 4px, 28px)',
  fsXl: 'clamp(26px, 1.8vw + 4px, 36px)',
  pad: 'clamp(14px, 1.1vw, 22px)',
  gap: 'clamp(12px, 1vw, 18px)',
  barH: 'clamp(44px, 3.2vh, 52px)',
  winBarH: 'clamp(36px, 2.6vh, 42px)',
} as const;

export type NeonTheme = typeof neon;

declare module 'styled-components' {
  export interface DefaultTheme extends NeonTheme {}
}
