import { useEffect, useRef } from 'react';
import type { SysLogEntry } from '@lib/terminal/types';
import { Log, Msg, Row, Shell, Ts } from './styles';

interface SysLogPanelProps {
  entries: SysLogEntry[];
}

const SysLogPanel = ({ entries }: SysLogPanelProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  return (
    <Shell title="system log" meta="tail -f" dim className="syslog">
      <Log ref={ref} aria-live="polite">
        {entries.map((e) => (
          <Row key={e.id}>
            <Ts>{e.ts}</Ts>
            <Msg $level={e.level}>{e.message}</Msg>
          </Row>
        ))}
      </Log>
    </Shell>
  );
};

export default SysLogPanel;
