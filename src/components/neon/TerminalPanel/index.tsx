import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import type { ProjectData } from '@data/ProjectsData';
import { executeCommand } from '@lib/terminal/executeCommand';
import { nextId } from '@lib/terminal/id';
import type { LogLevel, TerminalLine } from '@lib/terminal/types';
import {
  Input,
  Line,
  PromptLabel,
  PromptRow,
  Screen,
  Shell,
} from './styles';

interface TerminalPanelProps {
  projects: ProjectData[];
  selectedProjectId: number | null;
  bootLines: TerminalLine[];
  bootDone: boolean;
  onSelectProject: (id: number) => void;
  onSysLog: (message: string, level: LogLevel) => void;
  connLabel: string;
}

const TerminalPanel = ({
  projects,
  selectedProjectId,
  bootLines,
  bootDone,
  onSelectProject,
  onSysLog,
  connLabel,
}: TerminalPanelProps) => {
  const [extra, setExtra] = useState<TerminalLine[]>([]);
  const [cleared, setCleared] = useState(false);
  const [value, setValue] = useState('');
  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const lines = cleared ? extra : [...bootLines, ...extra];

  useEffect(() => {
    const el = screenRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!bootDone) return;
    focusInput();
  }, [bootDone, focusInput]);

  const run = useCallback(
    (raw: string) => {
      if (!bootDone) return;
      const result = executeCommand(raw, { projects, selectedProjectId });

      if (result.clearTerminal) {
        setCleared(true);
        setExtra([]);
      } else if (result.lines.length) {
        setExtra((prev) => [
          ...prev,
          ...result.lines.map((l) => ({
            id: nextId('term'),
            text: l.text,
            variant: l.variant,
          })),
        ]);
      }

      if (result.selectProjectId != null) {
        onSelectProject(result.selectProjectId);
      }
      if (result.sysLog) {
        onSysLog(result.sysLog.message, result.sysLog.level);
      }
    },
    [bootDone, projects, selectedProjectId, onSelectProject, onSysLog],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const raw = value;
    setValue('');
    run(raw);
  };

  return (
    <Shell
      title="terminal · tty0"
      meta={connLabel}
      className="term"
      onClick={focusInput}
    >
      <Screen ref={screenRef} aria-live="polite" onClick={focusInput}>
        {lines.map((l) => (
          <Line key={l.id} $variant={l.variant}>
            {l.text}
          </Line>
        ))}
      </Screen>
      <PromptRow $ready={bootDone} onClick={focusInput}>
        <PromptLabel>
          <span className="u">guest</span>@neon-7:~$
        </PromptLabel>
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          readOnly={!bootDone}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command"
        />
      </PromptRow>
    </Shell>
  );
};

export default TerminalPanel;
