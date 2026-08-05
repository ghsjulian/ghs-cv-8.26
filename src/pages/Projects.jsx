import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      category: "fullstack",
      title: "Aura's Beauty Studio Platform",
      subtitle: "Full-Stack Booking & Management Web App",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      description:
        "A comprehensive booking platform featuring dynamic service scheduling, customer dashboards, automated invoice generation, and full admin control.",
      duration: "3 Weeks",
      tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://example.com/aura-studio",
      github: "https://github.com/ghsjulian/aura-beauty-studio",
      featured: true,
    },
    {
      id: 2,
      category: "frontend",
      title: "Scorpio Canvas Animation Engine",
      subtitle: "Interactive Anatomical Canvas Rendering",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
      description:
        "An advanced JavaScript HTML5 Canvas project featuring segmented anatomical movement, custom math vectors, and smooth, high-FPS physics animations.",
      duration: "1 Week",
      tools: ["HTML5 Canvas", "JavaScript (ES6+)", "CSS3", "Math Vectors"],
      liveDemo: "https://example.com/scorpio-anim",
      github: "https://github.com/ghsjulian/scorpio-canvas",
      featured: true,
    },
    {
      id: 3,
      category: "fullstack",
      title: "Real-Time Chat & Collaboration App",
      subtitle: "WebSocket Powered Messaging Application",
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=700&q=80",
      description:
        "Scalable real-time application with instant room creation, online presence tracking, media sharing, and end-to-end JWT security.",
      duration: "2 Weeks",
      tools: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      liveDemo: "https://example.com/chat-app",
      github: "https://github.com/ghsjulian/realtime-chat-app",
      featured: false,
    },
    {
      id: 4,
      category: "mobile",
      title: "HackerKey Android Terminal Keyboard",
      subtitle: "System-Level Android Utility Keyboard APK",
      image:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=700&q=80",
      description:
        "A custom Android system keyboard optimized for terminal environments like Termux, featuring control keys, macros, and customizable themes.",
      duration: "2 Weeks",
      tools: ["Apache Cordova", "JavaScript", "Android SDK", "GitHub Actions"],
      liveDemo: "https://example.com/hackerkey-apk",
      github: "https://github.com/ghsjulian/hackerkey-android",
      featured: true,
    },
    {
      id: 5,
      category: "frontend",
      title: "Modern Mobile Web IDE Workspace",
      subtitle: "Code Editor UI Optimized for Touch & Termux",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=700&q=80",
      description:
        "Lightweight, mobile-first browser code editor equipped with syntax highlighting, auto-closing tags, dynamic output rendering, and local storage state.",
      duration: "5 Days",
      tools: ["React", "Monaco Editor", "Tailwind CSS", "Vite"],
      liveDemo: "https://example.com/mobile-ide",
      github: "https://github.com/ghsjulian/mobile-web-ide",
      featured: false,
    },
    {
      id: 6,
      category: "devops",
      title: "Automated VPS Deployment Suite",
      subtitle: "Nginx & SSL Auto-Configuration Script",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=700&q=80",
      description:
        "Custom Shell script suite for automated Ubuntu VPS setup, configuring PM2 process managers, firewall rules, Let's Encrypt SSL, and Nginx proxies.",
      duration: "3 Days",
      tools: ["Bash Scripting", "Linux", "Nginx", "PM2", "UFW Firewall"],
      liveDemo: "https://example.com/vps-script-demo",
      github: "https://github.com/ghsjulian/vps-deployment-bash",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* SEO Header */}
        <div className="projects-header" data-aos="fade-up">
          <span className="badge-pill">
            <i className="fa-solid fa-code-branch"></i> Selected Work & Case
            Studies
          </span>
          <h2 className="section-title">
            Featured Web Engineering <span>& Full-Stack Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore a selection of real-world applications, custom APIs, and
            client systems. Built with modern JavaScript frameworks, clean
            architecture, and responsive UX.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-wrapper" data-aos="fade-up">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend & UI
          </button>
          <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={`filter-btn ${filter === "devops" ? "active" : ""}`}
            onClick={() => setFilter("devops")}
          >
            DevOps & Scripts
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              data-aos="fade-up"
            >
              {/* Image & Overlay Container */}
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="image-overlay">
                  <div className="overlay-actions">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-circle live-btn"
                      title="Live Demo"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-circle github-btn"
                      title="View Source Code"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <span className="featured-chip">Featured</span>
                )}
              </div>

              {/* Card Details */}
              <div className="card-content">
                <div className="meta-bar">
                  <span className="duration-tag">
                    <i className="fa-regular fa-clock"></i> {project.duration}
                  </span>
                  <span className="category-tag">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="project-title">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="tech-stack-container">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="card-footer">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live-view"
                  >
                    <span>Live View Demo</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-view"
                    title="GitHub Code"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
