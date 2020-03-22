import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

import { Container } from './styles';
import Burger from '../Burger';


const Header = (props) => {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    useEffect( () => {
        setShow(props.show);
    }, [props.show]);
    useEffect(() => {
        if (show) {
            setWidth('100%');
            setHeight('100%');
        } else {
            setWidth('0%');
            setHeight('0%');
        }
    }, [show]);

    const onClose = () => {
        setShow(false);
    };
    return <Container height={height} width={width}>
        <div className="burger">
            <Burger onClick={() => {
                setShow(!show);
            }} show={show} />
        </div>
        
        <div className={"content" + (show ? " collapse" : " default")}>
            <div className="menu">
                
                <Link to="/" onClick={onClose}>
                    <div className="item">
                        <div className="text">
                            Portifolio
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    </Container>
}

export default Header;