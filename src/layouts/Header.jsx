import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { HiReply } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <button className="btn btn-primary">
          Hire Me <HiReply />
        </button>
      </nav>
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <IoMdMenu size={24} />
      </button>
    </header>
  );
};

export default Header;
