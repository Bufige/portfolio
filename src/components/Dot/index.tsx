import { Container } from './styles';

interface DotProps {
  id?: number;
  active?: boolean;
  color?: string;
  width?: string;
  height?: string;
  onClick?: (id: number) => void;
}

const Dot = ({ id, active, color, width, height, onClick }: DotProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.(id ?? 0);
  };

  return (
    <Container
      className={active ? 'active' : undefined}
      color={color}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};

export default Dot;
