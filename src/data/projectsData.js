const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: new URL('../../e commerce.png', import.meta.url).href
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Firebase", "Material-UI", "React DnD"],
    image: new URL('../../task management app.png', import.meta.url).href
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts using multiple weather APIs.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    image: new URL('../../weather dashboard.png', import.meta.url).href
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and styled with CSS. Features smooth animations and optimized performance.",
    technologies: ["React", "CSS", "Framer Motion", "Vite"],
    image: new URL('../../portfolio app.png', import.meta.url).href
  }
];

export default projectsData;