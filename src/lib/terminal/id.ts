let n = 0;

export function nextId(prefix = 'id'): string {
  n += 1;
  return `${prefix}-${n}-${Date.now().toString(36)}`;
}
