import styled, { keyframes } from 'styled-components';
import WindowFrame from '@components/neon/WindowFrame';
import type { LineVariant } from '@lib/terminal/types';

const rgbSplit = keyframes`
  0% { text-shadow: 3px 0 #ff2e88, -3px 0 #00f0ff; transform: translateX(0); }
  25% { text-shadow: -4px 0 #ff2e88, 4px 0 #00f0ff; transform: translateX(-3px); }
  50% { text-shadow: 4px 0 #ff2e88, -2px 0 #00f0ff; transform: translateX(3px); }
  100% { text-shadow: none; transform: none; }
`;

export const Shell = styled(WindowFrame)`
  grid-column: 2;
  grid-row: 2;
  min-height: 0;
`;

export const Screen = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 14px 18px;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.cyan} transparent;
`;

const variantColor = (v: LineVariant, theme: { green: string; cyan: string; magenta: string; muted: string; text: string }) => {
  switch (v) {
    case 'boot':
      return theme.green;
    case 'cyan':
      return theme.cyan;
    case 'mag':
      return theme.magenta;
    case 'dim':
      return theme.muted;
    case 'err':
      return '#fff';
    default:
      return theme.text;
  }
};

export const Line = styled.p<{ $variant: LineVariant }>`
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fs};
  color: ${({ $variant, theme }) => variantColor($variant, theme)};
  text-shadow: ${({ $variant }) =>
    $variant === 'boot' ? '0 0 4px rgba(57, 255, 20, 0.35)' : 'none'};
  animation: ${({ $variant }) => ($variant === 'err' ? rgbSplit : 'none')} 0.4s
    steps(2) 3;
  margin: 0;
`;

export const PromptRow = styled.div<{ $ready?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px 14px;
  border-top: 1px solid rgba(0, 240, 255, 0.18);
  font-size: ${({ theme }) => theme.fs};
  opacity: ${({ $ready }) => ($ready ? 1 : 0.35)};
  cursor: text;
`;

export const PromptLabel = styled.span`
  color: ${({ theme }) => theme.magenta};
  white-space: nowrap;
  text-shadow: ${({ theme }) => theme.glowM};
  flex-shrink: 0;

  .u {
    color: ${({ theme }) => theme.cyan};
    text-shadow: ${({ theme }) => theme.glowC};
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  font: inherit;
  font-size: ${({ theme }) => theme.fs};
  caret-color: ${({ theme }) => theme.cyan};
  min-width: 0;
  width: 100%;
  cursor: text;

  &:read-only {
    cursor: default;
  }
`;
