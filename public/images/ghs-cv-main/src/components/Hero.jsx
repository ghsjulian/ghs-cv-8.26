import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
/* Import React Icons */
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Hero = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section id="hero">
            <div className="hero-text">
                <h2>Welcome To My Portfolio</h2>
                <h3 className="sub-title">
                    <ReactTyped
                        strings={[
                            "MERN Stack Developer",
                            "Freelacer & Programmer",
                            "Full Stack Developer",
                            "Developer - Designer",
                            "Website Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "PHP Developer",
                            "SEO Expert"
                        ]}
                        cursorChar="|"
                        typeSpeed={70} // Adjust typing speed here (milliseconds)
                        backSpeed={60} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h3>
                {/*<h4>Let's Know More About Myself</h4>*/}
                <article>
                    Hello! I’m Ghs Julian, a high-performance Full-Stack Web
                    Developer based in Sylhet, Moulovibazar, Komolgonj,
                    Madhabpur. With a track record of over 150+ successful
                    projects on GitHub, I specialize in building scalable,
                    secure, and futuristic web applications using the MERN
                    stack, PHP, and Python. Whether you're looking for a robust
                    e-commerce platform or a real-time custom engine, I turn
                    complex requirements into seamless digital reality.
                </article>
                <div className="btn-area">
                    <NavLink
                        id="view"
                        to="https://wa.me/8801302661227?text=I%20am%20interested%20in%20hiring%20a%20full%20stack%20web%20developer."
                    >
                        Contact Me
                    </NavLink>
                    <NavLink
                        id="shop"
                        target="_blank"
                        download="ghsjulian-web-developer-resume.pdf"
                        to="/data/ghsjulian-web-developer-resume.pdf"
                    >
                        Download CV
                    </NavLink>
                </div>
                <div className="social">
                    <NavLink
                        to="https://web.facebook.com/ghs.julian.85"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </NavLink>
                    <NavLink
                        to="https://twitter.com/@ghsjulian"
                        target="_blank"
                    >
                        <IoLogoTwitter />
                    </NavLink>
                    <NavLink
                        to="https://linkedin.com/in/gobindo.bhor"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </NavLink>
                    <NavLink
                        to="https://youtube.com/@ghsjulian"
                        target="_blank"
                    >
                        <FaYoutube />
                    </NavLink>
                    <NavLink to="https://github.com/ghsjulian" target="_blank">
                        <FaGithub />
                    </NavLink>
                </div>
            </div>
            <div className="hero-img">
                {/*
                <img id="hero-logo" src="/images/ghs-passport-photo-2.jpg" />
                */}
                {/*
                <img id="hero-logo" src="/images/ghs-logo-hero.png" />
                */}
                
                <img id="hero-logo" src="/images/ghs-hero2.png" />
            </div>
        </section>
    );
};

export default Hero;
