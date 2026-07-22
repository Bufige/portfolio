import { useState, useCallback } from 'react';
import { Container } from './styles';
import Modal from '@components/Modal';
import Projects from '@components/Projects';
import ProjectsData from '@data/ProjectsData';
import SearchBar from '@components/SearchBar';
import type { ProjectData } from '@data/ProjectsData';

const Main = () => {
  const [projects, setProjects] = useState<ProjectData[]>(ProjectsData);
  const [selectedProject, setSelectedProject] = useState<ProjectData>(ProjectsData[0]);
  const [showModal, setShowModal] = useState(false);

  const onFilter = useCallback((filtered: ProjectData[]) => {
    setProjects(filtered);
  }, []);

  const onSelectedProject = useCallback((projectIndex: number) => {
    setSelectedProject(projects[projectIndex]);
    setShowModal(true);
  }, [projects]);

  const onModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
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
              <h1>FullStack Developer</h1>
            </div>
            <div className="description">
              Software Engineer with years of experience. Each project reflects a skill I learned at the time and used in freelance projects and through my career. You may check my resume for proper work references and what I actually do in my jobs and freelancing.
            </div>
          </div>
          <SearchBar onFilter={onFilter} />
          <div className="content">
            <Projects projects={projects} onClick={onSelectedProject} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
