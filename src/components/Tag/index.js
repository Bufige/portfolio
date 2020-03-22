import React, {useState, useEffect} from 'react';

import {Container} from './styles';


const Tag = (props) => {
    const [active, setActive] = useState(false);
    useEffect( () => {
        setActive(props.active);
    }, [props.active]);
    const onClick = (e) => {
        e.preventDefault();
        if(props.onClick)
            props.onClick(props.text);
    };

    return <Container className={active && 'active'} onClick={onClick}>
        {props.text}
    </Container>
}

export default Tag;