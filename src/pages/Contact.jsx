import React, { useState, useRef } from "react";
import "../styles/contact.css";
import SEO from "../components/SEO";
import Popup from "../components/Popup";

const Contact = () => {
  const [type, setType] = useState(false);
  const [isSubmited, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "31b9f4b2-cc34-4e32-9c14-4faa261cdd49");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    const data = await response.json();
    setType(data.success ? true : false);
    setSubmit(true);
    setTimeout(() => {
      setType(false);
      setSubmit(false);
    }, 4000);
  };
  return (
    <section>
      <SEO
        title="Contact"
        description="Get in touch with Ghs Julian for web development projects, freelance collaborations, or full-stack software development consulting."
        keywords="Contact Ghs Julian, Hire Full Stack Developer, Freelance MERN Developer, Web Developer Contact"
      />
      <div className="contact-container">
        <div data-aos="zoom-in-up" className="contact-header">
          <h1>
            Let’s Create <span>Together</span>
          </h1>
          <p>
            Great digital experiences start with a simple conversation. Whether
            you need a full-stack solution from scratch or want to overhaul an
            existing platform, I’m here to help. Reach out with your ideas,
            questions, or project specs—let's create something extraordinary
            together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div data-aos="zoom-in-up" className="info-intro">
              <h2>Let's talk about everything!</h2>
              <p>
                Reach out directly through the form below or connect across my
                social channels. Whether it's a new project, a technical
                question, or a potential partnership, I’m always open to talking
                shop. Send your message anytime—I inspect every inquiry and
                typically respond within 24 hours.
              </p>
            </div>

            <div data-aos="zoom-in-up" className="info-details">
              <div className="info-item">
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h4>Email Me</h4>
                  <a href="mailto:your-email@example.com">
                    ghsjulian@outlook.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-text">
                  <h4>Call Me</h4>
                  <a href="tel:+8801234567890">+8801302661227</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="info-text">
                  <h4>WhatsApp</h4>
                  <a
                    href="https://wa.me/8801302661227?text=Hi%20there,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20web%20development%20project.%20Are%20you%20currently%20available%20for%20freelance%20work%3F"
                    target="_blank"
                  >
                    +8801302661227
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <span>Moulovibazar, Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="contact-social-links">
              <a
                href="https://github.com/ghsjulian"
                className="contact-social-btn"
                aria-label="GitHub"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/gobindo.bhor"
                target="_blank"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/ghs.julian.85"
                target="_blank"
                className="contact-social-btn"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/ghs.julian.85"
                target="_blank"
                className="contact-social-btn"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            className="contact-form"
            onSubmit={onSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Project Inquiry / Hiring"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Write Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            {isSubmited && <Popup type={type} />}
            <button
              type="submit"
              disabled={isLoading}
              className="contact-submit-btn"
            >
              {isLoading ? "Sending..." : "Send Message"}{" "}
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
