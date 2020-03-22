import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import Project from '../Project';

const Projects = (props) => {
    const [projects,setProjects] = useState();
    useEffect( () => {
        if(props.projects) {
            setProjects(props.projects);
        }
    }, [props.projects]);
    const onClick = (id) => {
        props.onClick(id);
    }
    return <Container>
        { projects && projects.map( (item, index) => {
            return <Project key={index} id={index} project={item} onClick={onClick}/>;
        })}
    </Container>
}

export default Projects;