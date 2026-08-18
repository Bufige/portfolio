import type { ProjectData } from '@data/ProjectsData';

export type LineVariant = 'boot' | 'cyan' | 'mag' | 'dim' | 'err' | 'default';
export type LogLevel = 'ok' | 'warn' | 'info';

export interface TerminalLine {
  id: string;
  text: string;
  variant: LineVariant;
}

export interface SysLogEntry {
  id: string;
  ts: string;
  message: string;
  level: LogLevel;
}

export interface ParsedCommand {
  name: string;
  args: string;
  raw: string;
}

export interface CommandContext {
  projects: ProjectData[];
  selectedProjectId: number | null;
}

export interface CommandResult {
  lines: Array<{ text: string; variant: LineVariant }>;
  selectProjectId?: number | null;
  clearTerminal?: boolean;
  sysLog?: { message: string; level: LogLevel };
}

export interface BootLine {
  text: string;
  variant: LineVariant;
}
