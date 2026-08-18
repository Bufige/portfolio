import styled from 'styled-components';
import WindowFrame from '@components/neon/WindowFrame';

export const Shell = styled(WindowFrame)`
  grid-column: 1;
  grid-row: 2;
  min-height: 0;
`;

export const List = styled.div`
  overflow-y: auto;
  padding: 10px 8px;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.cyan} transparent;
`;

export const DirLabel = styled.div`
  color: #9ef7ff;
  font-size: ${({ theme }) => theme.fsXs};
  letter-spacing: 0.14em;
  padding: 6px 12px 12px;
  text-transform: uppercase;
  text-shadow: 0 0 6px rgba(0, 240, 255, 0.35);
`;

export const Row = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  cursor: pointer;
  border: 1px solid
    ${({ $active }) => ($active ? 'rgba(255, 46, 136, 0.55)' : 'transparent')};
  background: ${({ $active }) =>
    $active ? 'rgba(255, 46, 136, 0.09)' : 'transparent'};
  color: ${({ $active, theme }) => ($active ? theme.magenta : theme.text)};
  font: inherit;
  font-size: ${({ theme }) => theme.fs};
  text-align: left;
  margin-bottom: 2px;
  transition: 0.12s;
  cursor: pointer;

  &:hover {
    background: rgba(0, 240, 255, 0.07);
    color: ${({ theme }) => theme.cyan};
  }

  @media (max-width: 1100px) {
    padding: 14px;
    font-size: clamp(15px, 3.6vw, 17px);
  }
`;

export const Ico = styled.span<{ $active?: boolean }>`
  color: ${({ $active, theme }) => ($active ? theme.magenta : theme.cyan)};
  opacity: 0.75;
  font-size: ${({ theme }) => theme.fsSm};
`;

export const Idx = styled.span<{ $active?: boolean }>`
  color: ${({ $active, theme }) => ($active ? theme.magenta : theme.muted)};
  font-size: ${({ theme }) => theme.fsXs};
  min-width: 1.6em;
`;
