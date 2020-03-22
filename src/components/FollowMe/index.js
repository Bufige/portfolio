import React from 'react';


import {Container} from './styles';

const FollowMe = () => {
    return <Container>
        <ul>
            <li className="github">
                <a href="https://github.com/Bufige" target="_blank" rel="noopener noreferrer"><span>Github</span><i className="fab fa-github icon github fa-2x"></i></a>
            </li>
            <li className="linkedin">
                <a href="https://www.linkedin.com/in/leonardo-igor-232109102/" target="_blank" rel="noopener noreferrer"><span>Linkedin</span><i className="fab fa-linkedin-in icon linkedin fa-2x"></i></a>
            </li>
            <li className="resume">
                <a href="https://docs.google.com/document/d/15mk8iwLOD-7uwGLREp2gMZnPPQAZM1nQqMREvszkeuY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><span>Resume</span><i className="fas fa-portrait icon resume fa-2x" target="_blank" rel="noopener noreferrer"></i></a>
            </li>
            <li className="email">
                <a href="mailto:bufige1434@gmail.com" target="_blank" rel="noopener noreferrer"><span>Email</span><i className="fas fa-envelope icon email fa-2x" target="_blank" rel="noopener noreferrer"></i></a>
            </li>
        </ul>
    </Container>
}

export default FollowMe;