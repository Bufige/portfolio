import type { ReactNode } from 'react';
import { Bar, Body, Dot, Dots, Frame, Meta, Title } from './styles';

interface WindowFrameProps {
  title: string;
  meta?: ReactNode;
  accent?: boolean;
  dim?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const WindowFrame = ({
  title,
  meta,
  accent,
  dim,
  className,
  children,
  onClick,
}: WindowFrameProps) => (
  <Frame $accent={accent} $dim={dim} className={className} onClick={onClick}>
    <Bar $accent={accent}>
      <Dots>
        <Dot $c="r" />
        <Dot $c="y" />
        <Dot $c="g" />
      </Dots>
      <Title>{title}</Title>
      {meta != null && meta !== '' ? <Meta $accent={accent}>{meta}</Meta> : null}
    </Bar>
    <Body>{children}</Body>
  </Frame>
);

export default WindowFrame;
