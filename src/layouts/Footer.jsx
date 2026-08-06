import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer data-aos="zoom-in-up" className="app-footer">
      <div className="status-indicator">
        <span className="pulse-dot"></span>
        <span>Find Me On </span>
      </div>
      <div className="social-links">
        <NavLink to="https://web.facebook.com/ghs.julian.85" target="_blank">
          <FaFacebook />
          <span>Facebook</span>
        </NavLink>
        <NavLink to="https://www.instagram.com/ghs.julian.85" target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </NavLink>
        <NavLink to="https://github.com/ghsjulian" target="_blank">
          <FaGithub />
          <span>GitHub</span>
        </NavLink>
        <NavLink to="https://linkedin.com/in/gobindo.bhor" target="_blank">
          <TbBrandLinkedin />
          <span>LinkedIn</span>
        </NavLink>
        <NavLink to="https://youtube.com/@ghsjulian" target="_blank">
          <FaYoutube />
          <span>YouTube</span>
        </NavLink>
        <NavLink to="https://twitter.com/@ghsjulian" target="_blank">
          <BsTwitterX />
          <span>Twitter</span>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
