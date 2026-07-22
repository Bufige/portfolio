import { Container } from './styles';
import Tag from '../Tag';
import Dot from '../Dot';
import type { ProjectData } from '@data/ProjectsData';

interface ProjectProps {
  id: number;
  project: ProjectData;
  onClick: (id: number) => void;
}

const generateFixedTags = (tech: string[], skills: string[], maximum: number): string[] => {
  const tags: string[] = [];
  for (const item of tech) {
    if (tags.length < maximum) tags.push(item);
  }
  for (const item of skills) {
    if (tags.length < maximum) tags.push(item);
  }
  if (tags.length < tech.length + skills.length) {
    tags.push('...More');
  }
  return tags;
};

const Project = ({ id, project, onClick }: ProjectProps) => {
  const dots = (
    <>
      <Dot color="#ff5f57" />
      <Dot color="#ffbd2e" />
      <Dot color="#28ca41" />
    </>
  );

  const mainImageIndex = Math.floor(Math.random() * project.images.length);

  const overlayImageIndex = (mainIndex: number): number => {
    if (project.images.length <= 1) return 0;
    let index: number;
    do {
      index = Math.floor(Math.random() * project.images.length);
    } while (index === mainIndex);
    return index;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <Container
      $mainImage={project.images[mainImageIndex]}
      $overlayImage={project.images[overlayImageIndex(mainImageIndex)]}
      onClick={handleClick}
    >
      <div className="bar">
        <div className="dots">{dots}</div>
        <div className="title">
          <h2>{project.name}</h2>
        </div>
      </div>
      <div className="content">
        <div className="overlay">
          <div className="tags">
            {generateFixedTags(project.tech, project.skills, 8).map((item, index) => (
              <Tag key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
