import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
  const navigate = useNavigate();
  //const totalVisitor = parseInt(localStorage.getItem("total-visitor")) || 0;

  const downloadCV = () => {
    const pdfUrl = "/ghs-cv-26.09.17.pdf";
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
          {/* <span data-aos="zoom-in-up" className="badge">
            <LiaUsersCogSolid size={22} />
            Total Visitors :{" "}
            <strong
              style={{
                color: "#ff29c6",
                fontWeight: 900,
              }}
            >
              {1743 + totalVisitor}
            </strong>
          </span>
          <br /> */}
          <span data-aos="zoom-in-up" className="badge">
            <span className="badge-icon"></span>
            Available for new opportunities
          </span>
          <h1 data-aos="zoom-in-up" className="hero-title">
            <span>I'm A </span>
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Freelacer & Programmer",
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
            in scalable web applications, real-time systems, and e-commerce
            platforms built with the MERN stack, PHP, and Python. With 150+
            open-source projects on GitHub, I turn complex technical
            requirements into high-performance, secure, and production-ready
            digital products — from architecture and API design to deployment.
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
            <img
              src="/images/ghs-820w.webp"
              srcSet="/images/ghs-410w.webp 410w,/images/ghs-820w.webp 820w"
              sizes="(max-width: 600px) 410px, 410px"
              width="410"
              height="410"
              alt="Ghs Julian"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
