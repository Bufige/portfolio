import { useState, useEffect } from 'react';
import { Container } from './styles';
import ProjectsData from '@data/ProjectsData';
import Tag from '../Tag';
import type { ProjectData } from '@data/ProjectsData';

interface SearchBarProps {
  onFilter: (projects: ProjectData[]) => void;
}

const getTechAndSkills = (): string[] => {
  const data = new Set<string>();
  for (const item of ProjectsData) {
    for (const tech of item.tech) data.add(tech);
    for (const skill of item.skills) data.add(skill);
  }
  return Array.from(data);
};

const ALL_TAGS = getTechAndSkills();

const filterProjects = (filters: string[]): ProjectData[] => {
  if (filters.length === 0) return ProjectsData;

  return ProjectsData.filter(item => {
    const all = [...item.tech, ...item.skills];
    return filters.every(f => all.includes(f));
  });
};

const SearchBar = ({ onFilter }: SearchBarProps) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectData[]>(ProjectsData);

  useEffect(() => {
    const data = filterProjects(filters);
    setProjects(data);
    onFilter(data);
  }, [filters, onFilter]);

  const handleClick = (text: string) => {
    if (text === 'show all') {
      setFilters([]);
    } else {
      setFilters(prev =>
        prev.includes(text) ? prev.filter(x => x !== text) : [...prev, text],
      );
    }
  };

  return (
    <Container>
      <div className="tags">
        <Tag text="show all" onClick={handleClick} active={filters.length === 0} />
        {ALL_TAGS.map((item, index) => (
          <Tag
            key={index}
            text={item}
            onClick={handleClick}
            active={filters.includes(item)}
          />
        ))}
      </div>
      <div className="showing">
        <small>
          Showing {projects.length} projects
          {filters.length > 0 && (
            <> filtered by {filters.map((item, index) => <Tag key={index} text={item} />)}</>
          )}
        </small>
      </div>
    </Container>
  );
};

export default SearchBar;
