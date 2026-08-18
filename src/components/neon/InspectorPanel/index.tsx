import type { ProjectData } from '@data/ProjectsData';
import { Content, Desc, Key, Link, Shell, Tag, Tags, Title } from './styles';

interface InspectorPanelProps {
  project: ProjectData | null;
}

const InspectorPanel = ({ project }: InspectorPanelProps) => (
  <Shell title="inspector" meta="FOCUS" accent className="detail">
    {!project ? (
      <Content $idle>
        SELECT A FILE
        <br />
        OR open &lt;id&gt;
      </Content>
    ) : (
      <Content>
        <Key>PROJECT_{String(project.id).padStart(2, '0')}</Key>
        <Title>{project.name}</Title>
        <Desc>{project.description}</Desc>
        <Key style={{ marginTop: 8 }}>STACK</Key>
        <Tags>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
        <Tags>
          {project.skills.map((s) => (
            <Tag key={s} $mag>
              {s}
            </Tag>
          ))}
        </Tags>
        <Key style={{ marginTop: 8 }}>LINKS</Key>
        {project.demo ? (
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            demo → {project.demo}
          </Link>
        ) : (
          <Link as="span" $off>
            demo offline
          </Link>
        )}
        <Link href={project.github} target="_blank" rel="noopener noreferrer">
          github → {project.github}
        </Link>
      </Content>
    )}
  </Shell>
);

export default InspectorPanel;
