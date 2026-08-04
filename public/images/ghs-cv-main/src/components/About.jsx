import React from "react";

const AboutSection = () => {
    // Professional Global SEO Title
    document.title = "Ghs Julian | Senior Full-Stack Developer & Software Engineer";

    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2>Expertise & Vision</h2>
                    <h2>Engineering Scalable Solutions for a Global Market</h2>
                    <article>
                        I am <strong>Ghs Julian</strong>, a high-performance <strong>Full-Stack Web Application Developer</strong> and Designer dedicated to building the next generation of digital tools. Based in <strong>Sylhet, Bangladesh</strong>, I operate at a global standard, delivering robust, user-centric solutions to clients worldwide. My journey as a self-taught engineer since 2020 is fueled by a relentless passion for clean code and innovative architecture.
                        <br /><br />
                        Unique among developers, I am currently pursuing a <strong>BA Honours in English</strong>. This academic background provides me with a competitive edge in <strong>cross-cultural communication</strong> and technical documentation, ensuring that every project is backed by clear, professional collaboration.
                    </article>
                </div>
                <div className="hero-img">
                    <img
                        style={{ border: "none" }}
                        id="hero-logo"
                        src="/images/ghsjulian--1.png"
                        alt="Ghs Julian - Full Stack Software Engineer"
                    />
                </div>
            </section>
            
            <section className="article">
                <article>
                    With an extensive portfolio of over <strong>130 GitHub repositories</strong>, my experience spans the entire development lifecycle—from sophisticated database design and secure API integration to high-fidelity frontend animations. I am a specialist in the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>, but my versatility extends to PHP, Python, and automated scripting.
                    <br /><br />
                    I thrive on the "impossible" challenges: debugging complex legacy systems, optimizing performance bottlenecks, and transforming static ideas into dynamic, high-traffic applications. My technical foundation is built on international standards, utilizing resources like W3Schools and industry-leading documentation to stay ahead of the curve. If you are seeking a **disciplined, professional engineer** to scale your business or launch a new venture, I am ready to collaborate. Let’s build something extraordinary.
                </article>
            </section>
        </>
    );
};

export default AboutSection;
