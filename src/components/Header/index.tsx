import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Burger from '../Burger';

const Header = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <Container height={show ? '100%' : '0%'} width={show ? '100%' : '0%'}>
      <div className="burger">
        <Burger onClick={() => setShow(!show)} show={show} />
      </div>
      <div className={'content' + (show ? ' collapse' : ' default')}>
        <div className="menu">
          <Link to="/" onClick={onClose}>
            <div className="item">
              <div className="text">Portifolio</div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
