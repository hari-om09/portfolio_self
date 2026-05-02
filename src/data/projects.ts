export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web';
  gradient: string;
  icon: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Info.me',
    description:
      'Co-founded a clean, minimal, and fast digital identity platform for devs and professionals. Solves the problem of bulky portfolios by creating focused digital profiles optimised for clarity and connection.',
    category: 'web',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1a0f40 100%)',
    icon: '🪪',
    tags: ['React', 'Node.js', 'Tailwind', 'Clerk Auth', 'NodeMailer'],
    githubUrl: null,
    liveUrl: 'https://e-info.me',
    featured: true,
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A clean, modern weather app that fetches real-time data from OpenWeatherMap API. Displays temperature, weather description, humidity, and wind speed with elegant error handling.',
    category: 'web',
    gradient: 'linear-gradient(135deg, #0c2340 0%, #0e4d7a 50%, #0c2d4a 100%)',
    icon: '🌤️',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/hari-om09/weather_app',
    liveUrl: 'https://weather-app-gilt-rho-64.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Birthday Collection App',
    description:
      'A responsive birthday tracking app with secure JWT authentication, real-time MongoDB data management, and a clean modern UI. Built with modular coding practices.',
    category: 'web',
    gradient: 'linear-gradient(135deg, #2d1040 0%, #6b1a4b 50%, #2a0f3a 100%)',
    icon: '🎂',
    tags: ['React.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/hari-om09/Birthday_Collection_',
    liveUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio built with React, TypeScript, Three.js, and GSAP featuring a 3D hero scene, dark/light theme, and scroll-triggered animations.',
    category: 'web',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    icon: '🌐',
    tags: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Vite'],
    githubUrl: 'https://github.com/hari-om09/portfolio',
    liveUrl: null,
    featured: false,
  },
];
