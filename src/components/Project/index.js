import React from 'react';

import { Container } from './styles';

import Tag from '../Tag';
import Dot from '../Dot';


const generateFixedTags = (tech, skills, maximum) => {
    let tags = [];

    tech.map( (item) => {
        if(tags.length < maximum)
            tags.push(item);
        return item;
    });
    if(tags.length < maximum)
        skills.map( (item) => {
            if(tags.length < maximum)
                tags.push(item);
            return item;
        });
    if(tags.length < tech.length + skills.length) {
        tags.push('...More');
    }
    return tags;
};
const Project = (props) => {
    const dots = <>
        { <Dot color={'#ff5f57'}/>}
        { <Dot color={'#ffbd2e'}/>}
        { <Dot color={'#28ca41'}/>}
    </>;
    const mainImageIndex = Math.floor(Math.random() * Math.floor(props.project.images.length));
    const overlayImageIndex = (mainIndex) => {
        if(props.project.images.length <= 1 ) {
            return 0;
        }
        while(true) {
            const index = Math.floor(Math.random() * Math.floor(props.project.images.length));
            if(index !== mainIndex) {
                return index;
            }
        }
    };

    const onClick = (e) => {
        e.preventDefault();
        props.onClick(props.id);
    };

    return <Container 
    mainImage={props.project.images[mainImageIndex]} 
    overlayImage={props.project.images[overlayImageIndex(mainImageIndex)]}
    onClick={onClick}
    >
        <div className="bar">
            <div className="dots">
                {dots}
            </div>
            <div className="title">
                <h2>
                    {props.project.name}
                </h2>
            </div>
        </div>
        <div className="content">
            <div className="overlay">
                <div className="tags">
                    { generateFixedTags(props.project.tech, props.project.skills, 8).map( (item, index) => <Tag key={index} text={item}/>
                    )}
                </div>
            </div>
        </div>
    </Container>
}


export default Project;