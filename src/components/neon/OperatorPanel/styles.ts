import styled from 'styled-components';
import WindowFrame from '@components/neon/WindowFrame';

export const Shell = styled(WindowFrame)`
  grid-column: 1 / -1;
  grid-row: 1;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: clamp(20px, 2.5vw, 40px);
  align-items: center;
  padding: clamp(16px, 1.6vh, 24px) clamp(18px, 1.8vw, 28px);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 18px 16px 20px;
  }
`;

export const Mark = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.cyan};
  text-shadow: ${({ theme }) => theme.glowC};
  font-size: ${({ theme }) => theme.fsXl};
  font-weight: 600;
  letter-spacing: 0.14em;
  line-height: 1.15;

  @media (max-width: 1100px) {
    font-size: clamp(28px, 8vw, 36px);
  }
`;

export const Role = styled.div`
  color: ${({ theme }) => theme.magenta};
  text-shadow: ${({ theme }) => theme.glowM};
  font-size: ${({ theme }) => theme.fsSm};
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const Bio = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fs};
  line-height: 1.65;
  max-width: 72ch;
  opacity: 0.92;
  border-left: 2px solid rgba(255, 46, 136, 0.45);
  padding-left: clamp(14px, 1.2vw, 20px);

  @media (max-width: 1100px) {
    border-left: none;
    border-top: 2px solid rgba(255, 46, 136, 0.4);
    padding-left: 0;
    padding-top: 12px;
    font-size: clamp(15px, 3.8vw, 17px);
    line-height: 1.7;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  text-align: right;
  font-size: ${({ theme }) => theme.fsXs};
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.muted};
  white-space: nowrap;

  @media (max-width: 1100px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Chips = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;

export const Chip = styled.span`
  border: 1px solid rgba(0, 240, 255, 0.4);
  color: ${({ theme }) => theme.cyan};
  padding: 3px 10px;
  font-size: ${({ theme }) => theme.fsXs};
  letter-spacing: 0.08em;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
  justify-content: flex-end;

  a {
    color: ${({ theme }) => theme.green};
    text-decoration: none;
    text-shadow: 0 0 6px rgba(57, 255, 20, 0.35);
    cursor: pointer;
  }

  a:hover {
    color: ${({ theme }) => theme.cyan};
  }

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;
