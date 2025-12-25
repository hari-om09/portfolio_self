/**
 * ========================================
 * PROJECTS DATA
 * Portfolio project information loaded dynamically
 * ========================================
 */

const projectsData = [
  {
    id: 1,
    title: "E-Info.me – Digital Identity Platform",
    description:
      "Co-founded a clean, minimal, and fast digital card platform for devs and professionals to showcase identity, work, and links all in one place. Solves the problem of bulky portfolios by creating focused digital profiles optimized for clarity and connection.",
    category: "web",
    image: "🪪",
    tags: ["React", "Node.js", "Tailwind", "Clerk Auth", "NodeMailer"],
    githubUrl: "https://github.com/hari-om09",
    liveUrl: "https://e-info.me",
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A clean and modern weather application that fetches real-time weather data from OpenWeatherMap API. Displays temperature, weather description, humidity, and wind speed with elegant error handling for invalid locations.",
    category: "web",
    image: "🌤️",
    tags: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    githubUrl: "https://github.com/hari-om09/weather_app",
    liveUrl: "https://weather-app-gilt-rho-64.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Birthday Collection App",
    description:
      "A responsive birthday tracking application with secure JWT authentication, real-time data management using MongoDB, and a clean modern UI. Built with modular coding practices and version control.",
    category: "web",
    image: "🎂",
    tags: ["React.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/hari-om09",
    liveUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript featuring dark mode, smooth animations, and dynamic project loading.",
    category: "web",
    image: "🌐",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    githubUrl: "https://github.com/hari-om09/portfolio",
    liveUrl: null,
    featured: false,
  },
];

// Export for module usage (if using modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projectsData };
}
