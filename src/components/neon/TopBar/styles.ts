import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

export const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.barH};
  z-index: 80;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.pad};
  gap: clamp(16px, 1.5vw, 28px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.22);
  background: rgba(5, 6, 8, 0.9);
  font-size: ${({ theme }) => theme.fsXs};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const Brand = styled.span`
  color: ${({ theme }) => theme.cyan};
  text-shadow: ${({ theme }) => theme.glowC};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fsSm};
`;

export const Sep = styled.span`
  color: ${({ theme }) => theme.muted};
`;

export const Stat = styled.span`
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  opacity: 0.92;

  b {
    color: ${({ theme }) => theme.magenta};
    text-shadow: ${({ theme }) => theme.glowM};
    font-weight: 600;
  }
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  gap: clamp(14px, 1.2vw, 24px);
  align-items: center;
`;

export const Pulse = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.green};
  box-shadow: 0 0 10px ${({ theme }) => theme.green};
  animation: ${pulse} 2s ease-in-out infinite;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
