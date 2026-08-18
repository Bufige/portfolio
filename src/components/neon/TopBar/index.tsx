import { site } from '@data/site';
import { useUptime } from '@hooks/useUptime';
import { Bar, Brand, Pulse, Right, Sep, Stat } from './styles';

interface TopBarProps {
  startedAt: number;
}

const TopBar = ({ startedAt }: TopBarProps) => {
  const uptime = useUptime(startedAt);

  return (
    <Bar>
      <Brand>{site.codename}</Brand>
      <Sep>//</Sep>
      <Stat>
        UPTIME <b>{uptime}</b>
      </Stat>
      <Stat>
        PROCS <b>4</b>
      </Stat>
      <Stat>
        MEM <b>41%</b>
      </Stat>
      <Right>
        <Stat>
          <Pulse />
          LINK LIVE
        </Stat>
        <Stat>
          VER <b>{site.version}</b>
        </Stat>
      </Right>
    </Bar>
  );
};

export default TopBar;
