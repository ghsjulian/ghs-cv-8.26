import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { HiReply } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
        <Link to="services">Services</Link>
        <Link to="/projects">Projects</Link>
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
