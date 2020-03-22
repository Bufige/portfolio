import React, {useState } from 'react';

import { Container } from './styles';

import Modal from '../../components/Modal';
import Projects from '../../components/Projects';

import ProjectsData from '../../data/ProjectsData';

import SearchBar from '../../components/SearchBar';


export default function Main() {
    const [projects, setProjects] = useState(ProjectsData);
    const [selectedProject, setSelectedProject] = useState(ProjectsData[0]);
    const [showModal, setShowModal] = useState(false);

    const onFilter = (filteredProjects) => {
        setProjects(filteredProjects);
    };
    const onSelectedProject = (projectIndex) => {
        setSelectedProject(projects[projectIndex]);
        setShowModal(true);
    }
    const onModalClose = () => {
        if(onModalClose) {
            setShowModal(false);
        }
    }
    return <>
        <Modal 
            show={showModal} 
            project={selectedProject} 
            onClose={onModalClose}
            interval={5000}
            />

        <Container>
            <div className="wrapper">
                <div className="info">
                    <div className="profession">
                        <h1>
                            FullStack Developer
                        </h1>
                    </div>
                    <div className="description">
                    My name is Leonardo Igor, i'm a full-stack web developer and desktop developer. This is my portfolio containing some of my projects.

                    </div>
                </div>
                <SearchBar onFilter={onFilter}/>
                <div className="content">
                    <Projects 
                        projects={projects} 
                        onClick={onSelectedProject}/>
                </div>
            </div>
        </Container>
    </>
}
