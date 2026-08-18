import { site } from '@data/site';
import { Bio, Body, Chip, Chips, Links, Mark, Meta, Name, Role, Shell } from './styles';

const OperatorPanel = () => {
  const { operator } = site;

  return (
    <Shell title="operator" meta="IDENTITY · PRIMARY" accent className="identity">
      <Body>
        <Mark>
          <Name>{operator.name}</Name>
          <Role>{operator.role}</Role>
        </Mark>
        <Bio>{operator.bio}</Bio>
        <Meta>
          <Chips>
            {operator.chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </Chips>
          <Links>
            <a href={operator.github} target="_blank" rel="noopener noreferrer">
              github →
            </a>
            <a href={operator.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin →
            </a>
            <a href={operator.resume} target="_blank" rel="noopener noreferrer">
              resume →
            </a>
            <a href={operator.email}>email →</a>
          </Links>
        </Meta>
      </Body>
    </Shell>
  );
};

export default OperatorPanel;
