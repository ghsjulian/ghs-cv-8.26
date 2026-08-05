import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Let’s Create Together</h1>
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
            <div className="info-intro">
              <h2>Let's talk about everything!</h2>
              <p>
                Reach out directly through the form below or connect across my
                social channels. Whether it's a new project, a technical
                question, or a potential partnership, I’m always open to talking
                shop. Send your message anytime—I inspect every inquiry and
                typically respond within 24 hours.
              </p>
            </div>

            <div className="info-details">
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
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <span>Moulovibazar, Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="contact-social-links">
              <a href="#" className="contact-social-btn" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="contact-social-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="contact-social-btn" aria-label="Twitter">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="contact-social-btn" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label for="name">Your Name</label>
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
              <label for="email">Your Email</label>
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
              <label for="subject">Subject</label>
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
              <label for="message">Write Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
