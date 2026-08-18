import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0%, 92%, 100% { opacity: 1; }
  93% { opacity: 0.9; }
  94.5% { opacity: 0.65; }
  95% { opacity: 1; }
  98% { opacity: 0.8; }
  98.5% { opacity: 1; }
`;

export const Scanlines = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 200;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 3px
  );
  animation: ${flicker} 7.5s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Vignette = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 199;
  background: radial-gradient(
    ellipse at center,
    transparent 32%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
