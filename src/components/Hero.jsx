import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
  const navigate = useNavigate();

  const downloadCV = () => {
    const pdfUrl = "/ghs-cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "ghs-julian-cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <span data-aos="zoom-in-up" className="badge">
            <span className="badge-icon"></span>
            Available for new opportunities
          </span>
          <h1 data-aos="zoom-in-up" className="hero-title">
            <span>I'm A </span>
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
                "SEO Expert",
              ]}
              cursorChar="|"
              typeSpeed={70} // Adjust typing speed here (milliseconds)
              backSpeed={60} // Adjust backspace speed (milliseconds)
              loop // Set to loop through the strings continuously
            />
          </h1>
          <p data-aos="zoom-in-up" className="hero-desc">
            Full-Stack Web Developer based in Sylhet, Bangladesh, specializing
            in scalable web applications, real-time engines, and e-commerce
            platforms using the MERN stack, PHP, and Python. With{" "}
            <span style={{ color: "#ff11bf", fontWeight: 900 }}>150+ </span>
            open-source projects on{" "}
            <span style={{ color: "#019020", fontWeight: 900 }}>Github </span>,
            I transform complex technical requirements into high-performance,
            secure digital products.
          </p>
          <div data-aos="zoom-in-up" className="cta-group">
            <button
              onClick={(e) => navigate("/projects")}
              className="btn btn-primary"
            >
              Explore My Work <FaArrowRightLong />
            </button>
            <button onClick={downloadCV} className="btn btn-secondary">
              Download CV <LuDownload />
            </button>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="hero-right">
          <div className="hero-image-wrapper">
            <img src="/images/ghs-logo-hero.png" alt="Ghs Julian" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
