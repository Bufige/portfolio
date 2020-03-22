import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

import { Container } from './styles';
import SlideShow from '../SlideShow';
import Tag from '../Tag';

const generateTags = (tech, skills) => {
    let tags = [];
    tech.map( (item) => {
        tags.push(item);
        return item;
    });
    skills.map( (item) => {
        tags.push(item);
        return item;
    });
    return tags;
};
const ModalInner = (onClose, cn, props) => <Container>
    <div className={cn}>
        <i className="fas fa-times fa-2x btn close" onClick={onClose}></i>
        <div className="header">
        </div>
        <div className="content">
            <div className="slideshow">
                <SlideShow images={props.project.images} interval={props.interval}/>
            </div>
            <div className="details">
                <div className="project-name">
                    <h1>{props.project.name}</h1>
                </div>
                <div className="tags">
                    {generateTags(props.project.tech, props.project.skills).map( (item, index) => <Tag key={index} text={item}/>)}
                </div>
                <div className="about">
                    About
                </div>
                <p className="project-summary">
                    { props.project.description }
                </p>
                <div className="links">
                    <a href={props.project.demo} target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i> Demo</a>
                    <a href={props.project.github} target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> Code</a>
                </div>
            </div>
        </div>
    </div>
</Container>;

 const Modal = (props) => {
    const [cn, setCn] = useState('modal hide');

    useEffect( () => {
        if(props.show === true)
            setCn('modal show');
        else if(props.show === false)
            setCn('modal hide');
    }, [props.show])
    const onClose = (e) => {
        e.preventDefault();
        setCn('modal hide');
        if(props.onClose) {
            props.onClose();
        }
    };
    return ReactDOM.createPortal(ModalInner(onClose, cn, props), document.querySelector("#modal"));
}


export default Modal;