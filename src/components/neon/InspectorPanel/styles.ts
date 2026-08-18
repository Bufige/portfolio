import styled from 'styled-components';
import WindowFrame from '@components/neon/WindowFrame';

export const Shell = styled(WindowFrame)`
  grid-column: 3;
  grid-row: 2;
  min-height: 0;
`;

export const Content = styled.div<{ $idle?: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.magenta} transparent;

  ${({ $idle, theme }) =>
    $idle
      ? `
    align-items: center;
    justify-content: center;
    color: ${theme.muted};
    text-align: center;
    font-size: ${theme.fsSm};
    letter-spacing: 0.12em;
    line-height: 1.8;
  `
      : ''}
`;

export const Key = styled.div`
  font-size: ${({ theme }) => theme.fsXs};
  color: #ff9ec4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-shadow: 0 0 6px rgba(255, 46, 136, 0.35);
  font-weight: 500;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.cyan};
  text-shadow: ${({ theme }) => theme.glowC};
  font-size: ${({ theme }) => theme.fsLg};
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

export const Desc = styled.div`
  line-height: 1.65;
  opacity: 0.92;
  font-size: ${({ theme }) => theme.fs};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span<{ $mag?: boolean }>`
  font-size: ${({ theme }) => theme.fsXs};
  padding: 5px 12px;
  border: 1px solid
    ${({ $mag }) =>
      $mag ? 'rgba(255, 46, 136, 0.45)' : 'rgba(0, 240, 255, 0.4)'};
  color: ${({ $mag, theme }) => ($mag ? theme.magenta : theme.cyan)};
  letter-spacing: 0.06em;
`;

export const Link = styled.a<{ $off?: boolean }>`
  display: block;
  color: ${({ $off, theme }) => ($off ? theme.dim : theme.green)};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fsSm};
  margin-top: 2px;
  word-break: break-all;
  line-height: 1.5;
  pointer-events: ${({ $off }) => ($off ? 'none' : 'auto')};
  cursor: ${({ $off }) => ($off ? 'default' : 'pointer')};

  &:hover {
    color: ${({ theme, $off }) => ($off ? theme.dim : theme.cyan)};
  }
`;
