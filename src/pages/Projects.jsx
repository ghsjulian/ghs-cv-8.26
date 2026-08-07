import React, { useState, useMemo } from "react";
import "../styles/projects.css";
import projectsData from "../data/projects";
import SEO from "../components/SEO";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const PROJECTS_PER_PAGE = 6;

  // 1. SAFELY IMPORT AND DEDUPLICATE THE DATA
  const uniqueProjects = useMemo(() => {
    // Determine raw array source
    let raw = [];
    if (Array.isArray(projectsData)) {
      raw = projectsData;
    } else if (projectsData && Array.isArray(projectsData.projects)) {
      raw = projectsData.projects;
    } else if (projectsData && Array.isArray(projectsData.default)) {
      raw = projectsData.default;
    }

    // Deduplicate array based on unique ID or Title
    const seen = new Set();
    return raw.filter((item) => {
      const identifier = item.id || item.title || JSON.stringify(item);
      if (seen.has(identifier)) {
        return false;
      }
      seen.add(identifier);
      return true;
    });
  }, []);

  // 2. FILTER PROJECTS ACCORDING TO SELECTED TAB
  const filteredProjects = useMemo(() => {
    if (filter === "all") return uniqueProjects;

    return uniqueProjects.filter((item) => {
      if (!item.category) return false;
      const cat = String(item.category)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      const target = String(filter)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      return cat === target || cat.includes(target) || target.includes(cat);
    });
  }, [uniqueProjects, filter]);

  // 3. PAGINATION CALCULATIONS (EXACTLY 6 PER PAGE)
  const totalProjects = filteredProjects.length;
  const totalPages = Math.max(1, Math.ceil(totalProjects / PROJECTS_PER_PAGE));

  // Ensure current page never exceeds valid range
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  // Exact slicing for current page display
  const startIndex = (safePage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  // Handlers
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset page counter to 1 when changing filters
  };

  const handlePageChange = (newPage) => {
    const section = document.getElementById("projects");
    section.scrollTo({ top: 0, behavior: "smooth" });
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="projects-section" id="projects">
      <SEO
        title="Projects"
        description="Browse through over 130+ projects built by Ghs Julian."
        keywords="React projects, MERN portfolio, GitHub projects, Node.js applications"
      />
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="badge-pill">
            <i className="fa-solid fa-code-branch"></i> Selected Work & Case
            Studies
          </span>
          <h2 className="section-title">
            Featured Web Engineering <span>& Full-Stack Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore a selection of real-world applications, custom APIs, and
            client systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-wrapper">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All Projects ({uniqueProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => handleFilterChange("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => handleFilterChange("frontend")}
          >
            Frontend & UI
          </button>
          <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => handleFilterChange("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={`filter-btn ${filter === "devops" ? "active" : ""}`}
            onClick={() => handleFilterChange("devops")}
          >
            DevOps & Scripts
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, idx) => {
              // Create a guaranteed unique React key
              const uniqueKey = project.id
                ? `project-${project.id}`
                : `project-${startIndex}-${idx}`;

              return (
                <article key={uniqueKey} className="project-card">
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title || "Project"}
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="overlay-actions">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-circle live-btn"
                            title="Live Demo"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-circle github-btn"
                            title="View Source Code"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <span className="featured-chip">Featured</span>
                    )}
                  </div>

                  <div className="card-content">
                    <div className="meta-bar">
                      {project.duration && (
                        <span className="duration-tag">
                          <i className="fa-regular fa-clock"></i>{" "}
                          {project.duration}
                        </span>
                      )}
                      {project.category && (
                        <span className="category-tag">
                          {String(project.category).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <h3 className="project-title">
                      <a
                        href={project.liveDemo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="project-desc">
                      {project.description
                        ? project.description.slice(0, 145) + "..."
                        : ""}
                    </p>

                    <div className="tech-stack-container">
                      {Array.isArray(project.tools) &&
                        project.tools.map((tool, toolIdx) => (
                          <span
                            key={`${uniqueKey}-tool-${toolIdx}`}
                            className="tech-chip"
                          >
                            {tool}
                          </span>
                        ))}
                    </div>

                    <div className="card-footer">
                      <a
                        href={project.liveDemo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live-view"
                      >
                        <span>Live View Demo</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                      <a
                        href={project.github || "#"}
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
              );
            })
          ) : (
            <div
              className="no-projects"
              style={{
                textAlign: "center",
                padding: "40px",
                gridColumn: "1 / -1",
              }}
            >
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination-wrapper">
            <button
              className="pagination-btn prev-btn"
              onClick={() => handlePageChange(safePage - 1)}
              disabled={safePage === 1}
            >
              <i className="fa-solid fa-chevron-left"></i> Prev
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={`page-${pageNum}`}
                    className={`page-num ${safePage === pageNum ? "active" : ""}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              className="pagination-btn next-btn"
              onClick={() => handlePageChange(safePage + 1)}
              disabled={safePage === totalPages}
            >
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
      <br />
    </section>
  );
};

export default Projects;
