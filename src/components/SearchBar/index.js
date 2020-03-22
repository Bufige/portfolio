import React, { useState, useEffect } from 'react';

import {Container} from './styles';


import ProjectsData from '../../data/ProjectsData';
import Tag from '../Tag';


const getTechAndSkills = () => {
    let data = new Set();
    ProjectsData.map( (item,index) => {
        item.tech.map( (tech) => data.add(tech));
        item.skills.map( (skill) => data.add(skill));
        return item;
    });
    return Array.from(data);
}

const filterProjects = (filters) => {
    if(filters.length === 0) {
        return ProjectsData;
    } 

    let filteredProjects = ProjectsData.filter( item => {
        let count = 0;
        item.tech.map( (tech) => {
            const found = filters.find(x => tech === x);
            if(found)
                count++;
            return tech;
        });
        item.skills.map( (skill) => {
            const found = filters.find(x => skill === x);
            if(found)
                count++;
            return skill;
        });
        return count === filters.length;
    });
    return filteredProjects;
};

const SearchBar = (props) => {
    const [filters, setFilters] = useState([]);
    const [projects, setProjects] = useState(ProjectsData);

    useEffect( () => {
        const data = filterProjects(filters);
        setProjects(data);
        props.onFilter(data);
    }, [filters]);

    const onClick = (text) => {
        if(text === 'show all') {
            setFilters([]);
        } else {
            const found = filters.find(x => x === text);
            if(found === undefined)
                setFilters([...filters, text]);
            else 
                setFilters(filters.filter( x => x !== text))
        }
    }

    return <Container >
        <div className="tags">
            <Tag text="show all" onClick={onClick} active={filters.length === 0}/>
        
            { getTechAndSkills().map( (item, index) => {
                const found = filters.find(x => item === x);
                return <Tag active={found ? true : false} key={index} text={item} onClick={onClick}/>  
            })}
        </div>
        <div className="showing">
            <small> 
            Showing {projects.length} projects filtered by { filters.map( (item, index) => {
                return <Tag key={index} text={item} />;
            })}
            </small>
        </div> 
    </Container>
}

export default SearchBar;