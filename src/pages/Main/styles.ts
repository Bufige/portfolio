import styled from 'styled-components';

export const Desktop = styled.div`
  position: absolute;
  inset: ${({ theme }) => theme.barH} 0 0 0;
  padding: ${({ theme }) => theme.gap};
  display: grid;
  grid-template-columns: minmax(260px, 0.85fr) minmax(0, 1.6fr) minmax(300px, 1fr);
  grid-template-rows: auto minmax(0, 1fr) clamp(150px, 18vh, 200px);
  gap: ${({ theme }) => theme.gap};

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 12px;
    gap: 14px;
    padding-bottom: 28px;

    .identity {
      order: 1;
      min-height: unset;
      flex: 0 0 auto;
    }

    .files {
      order: 2;
      min-height: min(52vh, 420px);
      height: min(52vh, 420px);
      flex: 0 0 auto;
    }

    .detail {
      order: 3;
      min-height: min(56vh, 460px);
      height: min(56vh, 460px);
      flex: 0 0 auto;
    }

    .term {
      order: 4;
      min-height: min(62vh, 520px);
      height: min(62vh, 520px);
      flex: 0 0 auto;
    }

    .syslog {
      order: 5;
      min-height: min(32vh, 260px);
      height: min(32vh, 260px);
      flex: 0 0 auto;
    }
  }
`;
