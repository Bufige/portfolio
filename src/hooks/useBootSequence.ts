import { useEffect, useState } from 'react';
import type { BootLine, TerminalLine } from '@lib/terminal/types';
import { nextId } from '@lib/terminal/id';

const BOOT_SKIP_KEY = 'neon-boot-skipped';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useBootSequence(bootLines: BootLine[]) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const finish = (finalLines: TerminalLine[]) => {
      if (cancelled) return;
      setLines(finalLines);
      setBootDone(true);
      try {
        sessionStorage.setItem(BOOT_SKIP_KEY, '1');
      } catch {
        /* ignore */
      }
    };

    const skip =
      prefersReducedMotion() ||
      (typeof sessionStorage !== 'undefined' &&
        sessionStorage.getItem(BOOT_SKIP_KEY) === '1');

    if (skip) {
      finish(
        bootLines.map((l) => ({
          id: nextId('boot'),
          text: l.text,
          variant: l.variant,
        })),
      );
      return () => {
        cancelled = true;
      };
    }

    let i = 0;
    const acc: TerminalLine[] = [];

    const step = () => {
      if (cancelled) return;
      if (i >= bootLines.length) {
        finish(acc.slice());
        return;
      }
      const line = bootLines[i];
      i += 1;
      if (line) {
        acc.push({
          id: nextId('boot'),
          text: line.text,
          variant: line.variant,
        });
        setLines(acc.slice());
      }
      timer = window.setTimeout(step, 35 + Math.random() * 45);
    };

    step();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [bootLines]);

  return { lines, bootDone, setLines };
}
