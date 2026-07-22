import { Container } from './styles';

interface TagProps {
  text: string;
  active?: boolean;
  onClick?: (text: string) => void;
}

const Tag = ({ text, active = false, onClick }: TagProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.(text);
  };

  return (
    <Container className={active ? 'active' : undefined} onClick={handleClick}>
      {text}
    </Container>
  );
};

export default Tag;
