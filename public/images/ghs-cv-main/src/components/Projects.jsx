import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
    document.title = "Project Portfolio | Full-Stack Applications by Ghs Julian";

    const [loading, setLoading] = useState(false);
    const [Projects_Data, setProject_Data] = useState([]);
    
    // Ensure the path is absolute from the public folder
    const url = "/data/data.json"; 

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            if (data) {
                setProject_Data(data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [fetchData]); // Fixed: fetchData is now a stable dependency

    // SEO Schema Injection (Only runs when data is actually loaded)
    useEffect(() => {
        if (Projects_Data.length > 0) {
            const projectSchema = {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Ghs Julian's Portfolio",
                "itemListElement": Projects_Data.slice(0, 10).map((p, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": p.project_name
                }))
            };
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.id = "project-schema";
            script.innerHTML = JSON.stringify(projectSchema);
            document.head.appendChild(script);

            return () => {
                const oldScript = document.getElementById("project-schema");
                if (oldScript) document.head.removeChild(oldScript);
            };
        }
    }, [Projects_Data]);

    return (
        <div data-aos="zoom-in" className="one-section">
            <h2 data-aos="zoom-in" id="heading">
                Enterprise & Open Source Portfolio
            </h2>
            <article>
                Explore a curated selection of my <strong>130+ web development projects</strong>. 
                With over 4 years of dedicated engineering experience, I specialize in 
                transforming complex logic into high-performance applications. 
                <br /><br />
                A unique aspect of my journey includes mastering <strong>mobile-based development 
                environments</strong>, successfully deploying full-stack 
                applications using Termux. Explore live demonstrations below or audit the source code via 
                my <strong>GitHub profile</strong>.
            </article>

            <div className="projects">
                {/* Fixed: Show loading ONLY when fetching, hide when data exists */}
                {loading && Projects_Data.length === 0 && (
                    <div className="loader">
                        <h2>Initializing Portfolio Data...</h2>
                    </div>
                )}
                
                {Projects_Data.length > 0 ? (
                    Projects_Data.map((project) => (
                        <div
                            data-aos="zoom-in"
                            className="project"
                            key={project.project_id}
                        >
                            <img
                                src={project.project_img}
                                alt={`${project.project_name} - Built by Ghs Julian`}
                            />
                            <h3 className="title">{project.project_name}</h3>
                            <div className="project-links">
                                <NavLink to={project.project_url} target="_blank" rel="noreferrer">
                                    Live Demo
                                </NavLink>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <p>No projects found.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
