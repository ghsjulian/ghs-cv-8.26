import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Skills = () => {
    document.title =
        "See My Skills And Experience | Know About And What I Can Do";
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
    }, []);

    return (
        <div className="one-section">
            <h2>My Skills And Experience</h2>
            <article>
                Here's my all skills and experience. As a Full-Stack Web
                Developer i have theses languages and technologies. i have
                achieved theses all technologies from internet with self
                learning and i have made so many projects using this popular
                technologies. Some skills are still required But I'll complete
                it very soon.
            </article>
            <div className="skills">
                {loading && <h2>Please Wait...</h2>}
                {ProjectsData &&
                    ProjectsData.map((skill, index) => {
                        return (
                            <div
                                data-aos="zoom-in"
                                className="skill"
                                key={index + 3}
                            >
                                <img
                                    className="skill-img"
                                    src={skill.project_img}
                                    alt="Web Developer Ghs Julian"
                                />
                                <h3>{skill.project_name}</h3>
                                <h4>{skill.project_persent}</h4>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Skills;
