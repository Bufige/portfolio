import styled from 'styled-components';
import WindowFrame from '@components/neon/WindowFrame';

export const Shell = styled(WindowFrame)`
  grid-column: 1 / -1;
  grid-row: 3;
  min-height: 0;
`;

export const Log = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 18px;
  font-size: ${({ theme }) => theme.fs};
  color: ${({ theme }) => theme.text};
  background: rgba(0, 0, 0, 0.25);
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.cyan} transparent;
`;

export const Row = styled.div`
  line-height: 1.8;
  font-weight: 500;
`;

export const Ts = styled.span`
  color: #7ff8ff;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.55);
  margin-right: 14px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
`;

export const Msg = styled.span<{ $level: 'ok' | 'warn' | 'info' }>`
  color: ${({ $level }) =>
    $level === 'ok' ? '#6dff4a' : $level === 'warn' ? '#ff8fbc' : '#7ff8ff'};
  text-shadow: ${({ $level }) =>
    $level === 'ok'
      ? '0 0 8px rgba(57, 255, 20, 0.55)'
      : $level === 'warn'
        ? '0 0 8px rgba(255, 46, 136, 0.55)'
        : '0 0 8px rgba(0, 240, 255, 0.45)'};
`;
