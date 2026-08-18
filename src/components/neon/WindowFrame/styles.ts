import styled from 'styled-components';

export const Frame = styled.section<{ $accent?: boolean; $dim?: boolean }>`
  border: 2px solid
    ${({ theme, $accent, $dim }) =>
      $accent
        ? theme.magenta
        : $dim
          ? 'rgba(0, 240, 255, 0.38)'
          : theme.cyan};
  box-shadow: ${({ theme, $accent, $dim }) =>
    $accent
      ? `${theme.glowM}, inset 0 0 48px rgba(255, 46, 136, 0.04)`
      : $dim
        ? '0 0 14px rgba(0, 240, 255, 0.14)'
        : `${theme.glowC}, inset 0 0 48px rgba(0, 240, 255, 0.03)`};
  background: ${({ theme }) => theme.panel};
  display: flex;
  flex-direction: column;
  min-height: 0;
  position: relative;
`;

export const Bar = styled.div<{ $accent?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: ${({ theme }) => theme.winBarH};
  padding: 0 14px;
  border-bottom: 1px solid
    ${({ $accent }) =>
      $accent ? 'rgba(255, 46, 136, 0.45)' : 'rgba(0, 240, 255, 0.35)'};
  background: ${({ $accent }) =>
    $accent ? 'rgba(255, 46, 136, 0.12)' : 'rgba(0, 240, 255, 0.1)'};
  font-size: ${({ theme }) => theme.fsSm};
  font-weight: 600;
  letter-spacing: 0.14em;
  color: ${({ $accent }) => ($accent ? '#ff7ab0' : '#7ff8ff')};
  text-shadow: ${({ $accent }) =>
    $accent
      ? '0 0 8px rgba(255, 46, 136, 0.7), 0 0 18px rgba(255, 46, 136, 0.35)'
      : '0 0 8px rgba(0, 240, 255, 0.65), 0 0 18px rgba(0, 240, 255, 0.35)'};
  text-transform: uppercase;
  flex-shrink: 0;
  user-select: none;
`;

export const Dots = styled.span`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`;

export const Dot = styled.span<{ $c: 'r' | 'y' | 'g' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $c, theme }) =>
    $c === 'r' ? theme.magenta : $c === 'y' ? '#e6b800' : theme.green};
  box-shadow: 0 0 5px
    ${({ $c, theme }) =>
      $c === 'r' ? theme.magenta : $c === 'y' ? '#e6b800' : theme.green};
`;

export const Title = styled.span`
  margin-left: 4px;
`;

export const Meta = styled.span<{ $accent?: boolean }>`
  margin-left: auto;
  color: ${({ $accent }) => ($accent ? '#ffc0d8' : '#b8faff')};
  letter-spacing: 0.1em;
  font-size: ${({ theme }) => theme.fsXs};
  font-weight: 500;
  text-shadow: ${({ $accent }) =>
    $accent
      ? '0 0 6px rgba(255, 46, 136, 0.45)'
      : '0 0 6px rgba(0, 240, 255, 0.4)'};
`;

export const Body = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;
