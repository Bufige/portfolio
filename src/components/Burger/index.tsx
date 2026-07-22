import { Container } from './styles';

interface BurgerProps {
  show?: boolean;
  onClick?: () => void;
}

const Burger = ({ show = false, onClick }: BurgerProps) => (
  <Container onClick={onClick}>
    <div className={'line' + (show ? ' collapse' : '')} />
    <div className={'line' + (show ? ' collapse' : '')} />
    <div className={'line' + (show ? ' collapse' : '')} />
  </Container>
);

export default Burger;
