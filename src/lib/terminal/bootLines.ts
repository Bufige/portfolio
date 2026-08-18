import type { BootLine } from './types';

export const BOOT_LINES: BootLine[] = [
  { text: 'NEON-7 multi-window compositor', variant: 'cyan' },
  { text: '[ OK ] wm.start ............... 5 surfaces', variant: 'boot' },
  { text: '[ OK ] surface operator ....... BUFIGE (primary)', variant: 'boot' },
  { text: '[ OK ] surface explorer ....... /proj', variant: 'boot' },
  { text: '[ OK ] surface terminal ....... tty0', variant: 'boot' },
  { text: '[ OK ] surface inspector ...... bound', variant: 'boot' },
  { text: '[ OK ] surface syslog ......... tail -f', variant: 'boot' },
  { text: '[ OK ] crt pipeline ............ scan+vignette', variant: 'boot' },
  { text: '[ OK ] type scale .............. 1440p clamp', variant: 'boot' },
  { text: '[ OK ] project index ........... loaded', variant: 'boot' },
  { text: '[ OK ] input router ............ keyboard', variant: 'boot' },
  { text: '[WARN] guest privileges only', variant: 'mag' },
  { text: '[ OK ] shell nsh 1.0 ........... ready', variant: 'boot' },
  { text: '', variant: 'dim' },
  { text: 'desktop online · help | projects | open | neon | clear', variant: 'dim' },
  { text: '', variant: 'dim' },
];
