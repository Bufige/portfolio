import type { CommandContext, CommandResult, LineVariant } from './types';
import { parseCommand } from './parseCommand';

function line(text: string, variant: LineVariant = 'default') {
  return { text, variant };
}

function findProject(ctx: CommandContext, arg: string) {
  const q = arg.toLowerCase().trim();
  if (!q) return undefined;
  return ctx.projects.find(
    (p) => String(p.id) === q || p.name.toLowerCase().includes(q),
  );
}

export function executeCommand(raw: string, ctx: CommandContext): CommandResult {
  const parsed = parseCommand(raw);
  if (!parsed) {
    return { lines: [] };
  }

  const echo = line(`guest@neon-7:~$ ${parsed.raw}`, 'dim');
  const { name, args } = parsed;

  if (name === 'help') {
    return {
      lines: [
        echo,
        line('help  projects  open <id|name>  neon  clear  whoami  contact', 'cyan'),
      ],
      sysLog: { message: 'help invoked', level: 'ok' },
    };
  }

  if (name === 'projects' || name === 'ls') {
    return {
      lines: [
        echo,
        line('synced with explorer pane', 'boot'),
        ...ctx.projects.map((p) =>
          line(
            `  ${String(p.id).padStart(2, '0')}  ${p.name.padEnd(22)} ${p.tech[0] ?? ''}`,
            'boot',
          ),
        ),
      ],
      sysLog: { message: 'projects listed', level: 'ok' },
    };
  }

  if (name === 'open' || name === 'cat') {
    const project = findProject(ctx, args);
    if (!project) {
      return {
        lines: [
          echo,
          line(`nsh: command path not found: ${args || '(empty)'}`, 'err'),
        ],
        sysLog: { message: `open failed: ${args || '(empty)'}`, level: 'warn' },
      };
    }
    return {
      lines: [echo, line(`mounted ${project.name}`, 'cyan')],
      selectProjectId: project.id,
      sysLog: { message: `open project/${project.id} ${project.name}`, level: 'ok' },
    };
  }

  if (name === 'neon') {
    return {
      lines: [
        echo,
        line('██ NEON TERMINAL NOIR ██', 'mag'),
        line('#0a0a0c  #00f0ff  #ff2e88', 'cyan'),
        line('compositor: multi-window hud · 1440p scale', 'boot'),
      ],
      sysLog: { message: 'neon aesthetic dump', level: 'ok' },
    };
  }

  if (name === 'whoami') {
    return {
      lines: [
        echo,
        line('uid=guest(Bufige) gid=dev groups=fullstack', 'cyan'),
        line('see OPERATOR panel (top strip)', 'dim'),
      ],
      sysLog: { message: 'whoami', level: 'ok' },
    };
  }

  if (name === 'contact') {
    return {
      lines: [
        echo,
        line('github.com/Bufige', 'cyan'),
        line('linkedin · resume · email — see operator panel', 'dim'),
      ],
      sysLog: { message: 'contact channels', level: 'ok' },
    };
  }

  if (name === 'clear') {
    return {
      lines: [],
      clearTerminal: true,
      sysLog: { message: 'screen cleared', level: 'warn' },
    };
  }

  return {
    lines: [
      echo,
      line(`nsh: command not found: ${name}`, 'err'),
    ],
    sysLog: { message: `unknown opcode: ${name}`, level: 'warn' },
  };
}
