import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { HiReply } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [path, setPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goContact = () => {
    navigate(
      "https://wa.me/8801302661227?text=Hi%20there,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20web%20development%20project.%20Are%20you%20currently%20available%20for%20freelance%20work%3F",
    );
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <div className="brand-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="brand-title">
            ghs.<span>dev</span>
          </span>
        </Link>
      </div>
      <nav className={isMenuOpen ? "active-menu" : ""}>
        <Link
          onClick={toggleMenu}
          className={path === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={toggleMenu}
          className={path === "/about" ? "active" : ""}
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={toggleMenu}
          className={path === "/contact" ? "active" : ""}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          onClick={toggleMenu}
          className={path === "/skills" ? "active" : ""}
          to="/skills"
        >
          Skills
        </Link>
        <Link
          onClick={toggleMenu}
          className={path === "/services" ? "active" : ""}
          to="/services"
        >
          Services
        </Link>
        <Link
          onClick={toggleMenu}
          className={path === "/projects" ? "active" : ""}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          to="https://wa.me/8801302661227?text=Hi%20there,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20web%20development%20project.%20Are%20you%20currently%20available%20for%20freelance%20work%3F"
          className="btn btn-primary"
          target="_blank"
        >
          Hire Me <HiReply />
        </Link>
      </nav>
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <button
        aria-label="Toggle navigation menu"
        className="menu-toggle"
        onClick={toggleMenu}
      >
        <IoMdMenu size={24} />
      </button>
    </header>
  );
};

export default Header;
