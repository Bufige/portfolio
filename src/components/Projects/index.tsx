import { Container } from './styles';
import Project from '../Project';
import type { ProjectData } from '@data/ProjectsData';

interface ProjectsProps {
  projects: ProjectData[];
  onClick: (id: number) => void;
}

const Projects = ({ projects, onClick }: ProjectsProps) => (
  <Container>
    {projects.map((item, index) => (
      <Project key={index} id={index} project={item} onClick={onClick} />
    ))}
  </Container>
);

export default Projects;
