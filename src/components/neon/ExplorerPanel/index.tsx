import type { ProjectData } from '@data/ProjectsData';
import { DirLabel, Ico, Idx, List, Row, Shell } from './styles';

interface ExplorerPanelProps {
  projects: ProjectData[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const ExplorerPanel = ({ projects, selectedId, onSelect }: ExplorerPanelProps) => (
  <Shell title="explorer" meta="/proj" dim className="files">
    <List>
      <DirLabel>./projects</DirLabel>
      {projects.map((p) => {
        const active = p.id === selectedId;
        return (
          <Row
            key={p.id}
            type="button"
            $active={active}
            onClick={() => onSelect(p.id)}
          >
            <Ico $active={active}>▣</Ico>
            <Idx $active={active}>{String(p.id).padStart(2, '0')}</Idx>
            <span>{p.name}</span>
          </Row>
        );
      })}
    </List>
  </Shell>
);

export default ExplorerPanel;
