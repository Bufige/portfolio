import { useEffect, useState } from 'react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function formatUptime(elapsedMs: number): string {
  const s = Math.floor(elapsedMs / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

export function useUptime(startedAt: number): string {
  const [label, setLabel] = useState(() => formatUptime(Date.now() - startedAt));

  useEffect(() => {
    const tick = () => setLabel(formatUptime(Date.now() - startedAt));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [startedAt]);

  return label;
}
