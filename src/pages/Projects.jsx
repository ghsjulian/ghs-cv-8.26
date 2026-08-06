import React, { useState } from "react";
import "../styles/projects.css";
import projectsData from "../data/projects";
import SEO from "../components/SEO";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <SEO
        title="Projects"
        description="Browse through over 130+ projects built by Ghs Julian, ranging from e-commerce platforms to real-time applications."
        keywords="React projects, MERN portfolio, GitHub projects, Node.js applications"
      />
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

                <p className="project-desc">
                  {project.description.slice(0, 145)}
                </p>

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
