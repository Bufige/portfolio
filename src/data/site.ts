export const site = {
  codename: 'SIG / NEON-7',
  version: '1.0',
  operator: {
    name: 'BUFIGE',
    role: 'FullStack Developer',
    bio: 'Software Engineer with years of experience. Each project reflects a skill I learned at the time and used in freelance projects and through my career. You may check my resume for proper work references and what I actually do in my jobs and freelancing.',
    chips: ['react', 'node', 'ts'],
    github: 'https://github.com/Bufige',
    linkedin: 'https://www.linkedin.com/in/leonardo-igor-232109102/',
    resume:
      'https://docs.google.com/document/d/1LwXp9HUGBlvqpxtWMUVjGnOcD-WI-JTvrxBrImMFynE/edit?usp=sharing',
    email: 'mailto:bufige1434@gmail.com',
  },
} as const;

export type SiteConfig = typeof site;
