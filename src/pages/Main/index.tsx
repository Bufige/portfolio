import { useCallback, useEffect, useMemo, useState } from 'react';
import CrtOverlay from '@components/neon/CrtOverlay';
import ExplorerPanel from '@components/neon/ExplorerPanel';
import InspectorPanel from '@components/neon/InspectorPanel';
import OperatorPanel from '@components/neon/OperatorPanel';
import SysLogPanel from '@components/neon/SysLogPanel';
import TerminalPanel from '@components/neon/TerminalPanel';
import TopBar from '@components/neon/TopBar';
import ProjectsData from '@data/ProjectsData';
import { useBootSequence } from '@hooks/useBootSequence';
import { useSysLog } from '@hooks/useSysLog';
import { BOOT_LINES } from '@lib/terminal/bootLines';
import type { LogLevel } from '@lib/terminal/types';
import { Desktop } from './styles';

const Main = () => {
  const startedAt = useMemo(() => Date.now(), []);
  const projects = ProjectsData;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { lines: bootLines, bootDone } = useBootSequence(BOOT_LINES);
  const { entries, push } = useSysLog(startedAt, bootDone);

  useEffect(() => {
    push('compositor boot', 'ok');
  }, [push]);

  useEffect(() => {
    if (!bootDone) return;
    push('nsh ready — guest session', 'ok');
    push('operator strip mounted (primary)', 'ok');
  }, [bootDone, push]);

  const onSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const onExplorerSelect = useCallback(
    (id: number) => {
      setSelectedId(id);
      const p = projects.find((x) => x.id === id);
      push(
        p
          ? `inspector focus project/${id} ${p.name}`
          : `inspector focus project/${id}`,
        'ok',
      );
    },
    [projects, push],
  );

  const onSysLog = useCallback(
    (message: string, level: LogLevel) => {
      push(message, level);
    },
    [push],
  );

  const selected = projects.find((p) => p.id === selectedId) ?? null;
  const connLabel = bootDone ? 'ONLINE' : 'BOOT';

  return (
    <>
      <CrtOverlay />
      <TopBar startedAt={startedAt} />
      <Desktop>
        <OperatorPanel />
        <ExplorerPanel
          projects={projects}
          selectedId={selectedId}
          onSelect={onExplorerSelect}
        />
        <TerminalPanel
          projects={projects}
          selectedProjectId={selectedId}
          bootLines={bootLines}
          bootDone={bootDone}
          onSelectProject={onSelect}
          onSysLog={onSysLog}
          connLabel={connLabel}
        />
        <InspectorPanel project={selected} />
        <SysLogPanel entries={entries} />
      </Desktop>
    </>
  );
};

export default Main;
