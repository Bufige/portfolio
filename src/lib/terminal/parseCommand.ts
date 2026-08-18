import type { ParsedCommand } from './types';

export function parseCommand(raw: string): ParsedCommand | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const [name = '', ...rest] = trimmed.split(/\s+/);
  return {
    name: name.toLowerCase(),
    args: rest.join(' '),
    raw: trimmed,
  };
}
