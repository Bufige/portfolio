import React, {useState, useEffect} from 'react';

import { Container } from './styles';

const Burger = (props) => {
    const [show,setShow] = useState(false);
    useEffect( () => {
        setShow(props.show);
    }, [props.show]);
    return <Container onClick={props.onClick}>
        <div className={'line' + (show ? ' collapse' : '' )}></div>
        <div className={'line' + (show ? ' collapse' : '' )}></div>
        <div className={'line' + (show ? ' collapse' : '' )}></div>
    </Container>
}

export default Burger;