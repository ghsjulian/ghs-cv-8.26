import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="status-indicator">
        <span className="pulse-dot"></span>
        <span>Find Me On </span>
      </div>
      <div className="social-links">
        <NavLink to="#" target="_blank">
          <FaFacebook />
          <span>Facebook</span>
        </NavLink>
        <NavLink to="#" target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </NavLink>
        <NavLink to="#" target="_blank">
          <FaGithub />
          <span>GitHub</span>
        </NavLink>
        <NavLink to="#" target="_blank">
          <FaLinkedin />
          <span>LinkedIn</span>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
