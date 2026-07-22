import styled from 'styled-components';

interface DotStyleProps {
  color?: string;
  width?: string;
  height?: string;
}

export const Container = styled.i<DotStyleProps>`
  height: ${({ height }) => height || '12px'};
  width: ${({ width }) => width || '12px'};
  display: inline-block;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-left: 5px;
  margin-top: 5px;

  &.active {
    transform: scale(1.3);
    opacity: 0.7;
  }
`;
