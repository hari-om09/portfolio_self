export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'C++',        icon: '⚙️' },
      { name: 'Python',     icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Java',       icon: '☕' },
      { name: 'SQL',        icon: '🗃️' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',        icon: '🌐' },
      { name: 'CSS3',         icon: '🎨' },
      { name: 'React',        icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    skills: [
      { name: 'Node.js',    icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'FastAPI',    icon: '⚡' },
      { name: 'MongoDB',    icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'GraphQL',    icon: '◈'  },
      { name: 'Socket.IO',  icon: '🔌' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',      icon: '📚' },
      { name: 'Docker',   icon: '🐳' },
      { name: 'Linux',    icon: '🐧' },
      { name: 'AWS',      icon: '☁️' },
      { name: 'Azure',    icon: '🔷' },
      { name: 'Redis',    icon: '🔴' },
      { name: 'NGINX',    icon: '🌐' },
      { name: 'RabbitMQ', icon: '🐰' },
    ],
  },
];
