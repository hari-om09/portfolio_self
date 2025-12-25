/**
 * ========================================
 * PROJECTS DATA
 * Portfolio project information loaded dynamically
 * ========================================
 */

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration using Stripe.",
    category: "web",
    image: "🛒",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    category: "web",
    image: "📋",
    tags: ["React", "Firebase", "Material-UI", "WebSocket"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application that displays current weather, 7-day forecast, and weather maps using OpenWeatherMap API.",
    category: "web",
    image: "🌤️",
    tags: ["JavaScript", "REST API", "CSS3", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    featured: false,
  },
  {
    id: 4,
    title: "Expense Tracker Mobile App",
    description:
      "A cross-platform mobile application for tracking personal expenses with visual analytics and budget management.",
    category: "app",
    image: "💰",
    tags: ["React Native", "Expo", "SQLite", "Chart.js"],
    githubUrl: "https://github.com/yourusername/expense-tracker",
    liveUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "Sentiment Analysis Tool",
    description:
      "Machine learning project that analyzes sentiment of text data using NLP techniques and provides visualization of results.",
    category: "ml",
    image: "🧠",
    tags: ["Python", "NLTK", "scikit-learn", "Flask"],
    githubUrl: "https://github.com/yourusername/sentiment-analysis",
    liveUrl: "https://sentiment-demo.herokuapp.com",
    featured: true,
  },
  {
    id: 6,
    title: "Image Classification CNN",
    description:
      "Deep learning model for classifying images into multiple categories using Convolutional Neural Networks with 95% accuracy.",
    category: "ml",
    image: "🖼️",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    githubUrl: "https://github.com/yourusername/image-classifier",
    liveUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging app with private/group chats, file sharing, and online status indicators.",
    category: "web",
    image: "💬",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-demo.onrender.com",
    featured: false,
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description:
      "Mobile app for tracking workouts, setting fitness goals, and monitoring progress with detailed analytics.",
    category: "app",
    image: "🏋️",
    tags: ["Flutter", "Dart", "Firebase", "Health API"],
    githubUrl: "https://github.com/yourusername/fitness-app",
    liveUrl: null,
    featured: false,
  },
  {
    id: 9,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript with dark mode support.",
    category: "web",
    image: "🌐",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.netlify.app",
    featured: false,
  },
];

// Export for module usage (if using modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projectsData };
}
