import React, { useState, useEffect } from "react";

const Skills = () => {
    // Professional SEO Title
    document.title = "Technical Skills & Tech Stack | Ghs Julian - Full-Stack Developer";

    const [ProjectsData, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "./data/icons.json";

    const fetchData = async url => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setProject(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Injecting Technical Skills Schema for Google
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Full-Stack Web Development",
            "provider": {
                "@type": "Person",
                "name": "Ghs Julian"
            },
            "description": "Expert web development using MERN Stack, PHP, and Python. Specialized in scalable architectures and responsive design.",
            "offers": {
                "@type": "Offer",
                "areaServed": "Worldwide"
            }
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schemaData);
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
    }, []);

    return (
        <div className="one-section">
            <h2>Technical Expertise & Tech Stack</h2>
            <article>
                My development philosophy centers on building <strong>scalable, high-performance applications</strong> 
                using modern industry standards. Through years of self-driven engineering and deploying over 
                <strong> 130+ projects</strong>, I have mastered a diverse ecosystem of technologies. 
                From robust backend logic with the <strong>MERN Stack</strong> to complex data analysis with <strong>Python</strong>, 
                my skill set is constantly evolving to meet global digital demands.
            </article>

            <div className="skills">
                {loading && <h2 className="loading-text">Optimizing Skill View...</h2>}
                
                {ProjectsData &&
                    ProjectsData.map((skill, index) => {
                        return (
                            <div
                                data-aos="zoom-in"
                                className="skill"
                                key={index}
                            >
                                <img
                                    className="skill-img"
                                    src={skill.project_img}
                                    /* SEO Dynamic Alt Tag */
                                    alt={`${skill.project_name} Expert Developer - Ghs Julian`}
                                />
                                <h3>{skill.project_name}</h3>
                                {/* Using <span> for professional percentage display */}
                                <div className="proficiency-bar">
                                    <h4>Proficiency: {skill.project_persent}</h4>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Skills;
