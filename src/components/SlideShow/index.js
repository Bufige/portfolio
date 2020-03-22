import React, {useState, useEffect} from 'react';


import {Container} from './styles';
import Dot from '../Dot';

const INTERVAL = 3000;

const SlideShow = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setTimeout(() => {
            if(currentIndex < props.images.length) {
                setCurrentIndex(currentIndex => {
                    const v = currentIndex + 1;
                    return v === props.images.length ? 0 : v;
                });
            }
        }, props.interval === undefined ? INTERVAL : props.interval);
        return () => {
          clearInterval(interval);
        };
    }, [currentIndex, props]);

    const onClick = (id) => {
        setCurrentIndex(id);
    }

    const goToImage = (index) => {
        const n = props.images.length;
        if(index < 0) {
            index = n - 1;
        }
        else if(index >= n) {
            index = 0;
        }
        setCurrentIndex(index);
    }
    return <Container>
        <div className="images">
            <img src={props.images[currentIndex]} alt="project"/>
            <i className="fas fa-angle-left fa-3x arrow left" onClick={ () => goToImage(currentIndex - 1)}></i>
            <i className="fas fa-angle-right fa-3x arrow right" onClick={ () => goToImage(currentIndex + 1)}></i>
        </div>
        <div className="dots">
            { props.images.map( (item, index) => {

                return <Dot 
                    key={index} 
                    id={index} 
                    width={'16px'}
                    height={'16px'}
                    active={index === currentIndex}
                    color="rgb(63, 63, 63)" 
                    onClick={onClick}/>
            })}
        </div>
    </Container>
}

export default SlideShow;