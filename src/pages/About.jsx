import React from "react";
import "../styles/about.css";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <section className="about-hero">
        <SEO
          title="About Me"
          description="Learn more about Ghs Julian, a Full Stack Web Developer proficient in MERN stack, PHP, Python, and modern software development."
          keywords="About Ghs Julian, Full Stack Developer background, MERN Stack Developer, Software Engineer profile"
        />
        <div className="about-container">
          <div className="about-hero-grid">
            <div data-aos="zoom-in-up" className="about-hero-content">
              <span className="badge">About Me</span>
              <h1>
                Hi, I'm <span className="highlight">Ghs Julian</span>
              </h1>
              <p className="about-hero-subtitle">
                Full Stack Web Developer & Software Engineer
              </p>
              <p className="about-bio-lead">
                I specialize in building robust, scalable, and high-performance
                web applications using modern technologies. With a strong
                foundation in both front-end aesthetics and back-end
                architecture, I bring complex ideas to life through clean code
                and intuitive user experiences.
              </p>
              <a
                href="https://wa.me/8801302661227?text=Hi%20there,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20web%20development%20project.%20Are%20you%20currently%20available%20for%20freelance%20work%3F"
                target="_blank"
                className="about-btn-primary"
              >
                Let's Work Together
              </a>
            </div>
            <div data-aos="zoom-in-up" className="about-hero-image-wrapper">
              <div className="about-image-frame">
                <img src="/images/ghs-hero-2.png" alt="Ghs Julian Profile" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-full-width-section">
          <div className="about-full-width-inner">
            <h2 data-aos="zoom-in-up" className="about-full-width-title">
              Driven by <span>Passion & Experience</span>
            </h2>
            <p data-aos="zoom-in-up" className="about-section-desc">
              Over the years, I have continuously developed dynamic web
              platforms and systems designed to deliver exceptional efficiency
              and user engagement.
            </p>

            <div className="about-stats-grid">
              {/* Option 1: Development Experience */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">4+</div>
                <div className="about-stat-label">Years of Coding</div>
              </div>

              {/* Option 2: Code Quality / Repositories */}
              <div
                className="about-stat-card"
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <div className="about-stat-number">150+</div>
                <div className="about-stat-label">GitHub Repositories</div>
              </div>

              {/* Option 3: Code Efficiency / Clean Code */}
              <div
                className="about-stat-card"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              >
                <div className="about-stat-number">Clean</div>
                <div className="about-stat-label">Maintainable Code</div>
              </div>

              {/* Option 4: Client / User Focus */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">Problem Solving Mindset</div>
              </div>

              {/* Option 5: Mobile & Server / Scripting */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Linux</div>
                <div className="about-stat-label">Bash & Shell Automation</div>
              </div>

              {/* Option 6: Full Stack / Modern Web */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">REST</div>
                <div className="about-stat-label">API Architecture</div>
              </div>

              {/* Option 7: Open Source & Code Contributions */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Open</div>
                <div className="about-stat-label">Source Contributor</div>
              </div>

              {/* Option 8: Performance / Optimization Focus */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Fast</div>
                <div className="about-stat-label">Performance Optimized</div>
              </div>

              {/* Option 9: UI/UX & Responsive Web Design */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">
                  Responsive & Mobile First
                </div>
              </div>

              {/* Option 10: Backend / Database Security */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Secure</div>
                <div className="about-stat-label">Database & API Design</div>
              </div>

              {/* Option 11: Continuous Learning */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Always</div>
                <div className="about-stat-label">Learning New Stacks</div>
              </div>

              {/* Option 12: Modern Web Animations */}
              <div className="about-stat-card" data-aos="zoom-in-up">
                <div className="about-stat-number">Interactive</div>
                <div className="about-stat-label">Canvas & UI Animations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
