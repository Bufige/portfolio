import { describe, expect, it } from 'vitest';
import { executeCommand } from './executeCommand';
import { parseCommand } from './parseCommand';
import type { ProjectData } from '@data/ProjectsData';

const projects: ProjectData[] = [
  {
    id: 1,
    name: 'Buvie',
    description: 'movies',
    tech: ['react'],
    skills: ['front-end'],
    images: [],
    demo: 'https://buvie.vercel.app',
    github: 'https://github.com/bufige/buvie',
  },
  {
    id: 0,
    name: 'Portfolio',
    description: 'portfolio',
    tech: ['react'],
    skills: ['front-end'],
    images: [],
    demo: '',
    github: 'https://github.com/bufige',
  },
];

const ctx = { projects, selectedProjectId: null };

describe('parseCommand', () => {
  it('returns null for empty input', () => {
    expect(parseCommand('')).toBeNull();
    expect(parseCommand('   ')).toBeNull();
  });

  it('parses name and args', () => {
    expect(parseCommand('open 1')).toEqual({
      name: 'open',
      args: '1',
      raw: 'open 1',
    });
    expect(parseCommand('  HELP  ')).toEqual({
      name: 'help',
      args: '',
      raw: 'HELP',
    });
  });
});

describe('executeCommand', () => {
  it('help lists commands', () => {
    const r = executeCommand('help', ctx);
    expect(r.lines.some((l) => l.text.includes('projects'))).toBe(true);
    expect(r.sysLog?.message).toBe('help invoked');
  });

  it('projects lists all', () => {
    const r = executeCommand('projects', ctx);
    expect(r.lines.some((l) => l.text.includes('Buvie'))).toBe(true);
    expect(r.lines.some((l) => l.text.includes('Portfolio'))).toBe(true);
  });

  it('ls aliases projects', () => {
    const r = executeCommand('ls', ctx);
    expect(r.sysLog?.message).toBe('projects listed');
  });

  it('open by id selects project', () => {
    const r = executeCommand('open 1', ctx);
    expect(r.selectProjectId).toBe(1);
    expect(r.lines.some((l) => l.text.includes('Buvie'))).toBe(true);
  });

  it('open by name selects project', () => {
    const r = executeCommand('open port', ctx);
    expect(r.selectProjectId).toBe(0);
  });

  it('open miss returns err', () => {
    const r = executeCommand('open nope', ctx);
    expect(r.selectProjectId).toBeUndefined();
    expect(r.lines.some((l) => l.variant === 'err')).toBe(true);
  });

  it('clear flags buffer wipe', () => {
    const r = executeCommand('clear', ctx);
    expect(r.clearTerminal).toBe(true);
    expect(r.lines).toEqual([]);
  });

  it('unknown command glitches', () => {
    const r = executeCommand('sudo rm -rf', ctx);
    expect(r.lines.some((l) => l.variant === 'err')).toBe(true);
    expect(r.lines.some((l) => l.text.includes('command not found'))).toBe(true);
  });

  it('empty input yields no lines', () => {
    expect(executeCommand('   ', ctx).lines).toEqual([]);
  });
});
