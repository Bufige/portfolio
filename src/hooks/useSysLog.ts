import { useCallback, useEffect, useRef, useState } from 'react';
import type { LogLevel, SysLogEntry } from '@lib/terminal/types';
import { nextId } from '@lib/terminal/id';

const MAX = 100;

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function formatTs(startedAt: number): string {
  const s = Math.floor((Date.now() - startedAt) / 1000);
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}

export function useSysLog(startedAt: number, ambient = true) {
  const [entries, setEntries] = useState<SysLogEntry[]>([]);
  const startedAtRef = useRef(startedAt);
  startedAtRef.current = startedAt;

  const push = useCallback((message: string, level: LogLevel = 'ok') => {
    setEntries((prev) => {
      const next: SysLogEntry = {
        id: nextId('log'),
        ts: formatTs(startedAtRef.current),
        message,
        level,
      };
      const merged = [...prev, next];
      return merged.length > MAX ? merged.slice(merged.length - MAX) : merged;
    });
  }, []);

  useEffect(() => {
    if (!ambient) return;
    const messages = [
      'phosphor refresh 60Hz',
      'scanline pass ok',
      'github bridge idle',
      'crt heat nominal',
      'guest sandbox intact',
    ];
    const id = window.setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)] ?? 'tick';
      push(msg, Math.random() > 0.85 ? 'warn' : 'ok');
    }, 8000);
    return () => window.clearInterval(id);
  }, [ambient, push]);

  return { entries, push };
}
