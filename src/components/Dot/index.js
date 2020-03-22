import React from 'react';

import { Container } from './styles';

const Dot = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        if(props.onClick) {
            props.onClick(props.id);
        }
    }
    return <Container 
        className={props.active && "active"} 
        color={props.color} 
        width={props.width}
        height={props.height}
        onClick={onClick}>
    </Container>
}


export default Dot;