import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section>
      <div className="skills-container">
        <div data-aos="zoom-in-up" className="skills-header">
          <span className="badge-pill">Capabilities</span>
          <h2>
            Technical Proficiency & <span>Stack Expertise</span>
          </h2>
          <p>
            Architecting scalable solutions with clean code, robust backend
            engineering, and modern full-stack workflows. Transforming complex
            ideas into seamless digital experiences with maintainable backends
            and responsive frontend solutions.
          </p>
        </div>
        <div className="skills-grid">
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3>Frontend Development</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>React.js & Architecture</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>JavaScript (ES6+)</span>
                <span>92%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>HTML5 / Modern CSS</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-brands fa-react"></i> React
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-js"></i> ES6+
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-html5"></i> HTML5
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-css3-alt"></i> CSS3
              </span>
              <span className="tech-tag">REST APIs</span>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3>Backend Development</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Node.js & Express</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>PHP</span>
                <span>80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Python</span>
                <span>78%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "78%" }}></div>
              </div>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-brands fa-node-js"></i> Node.js
              </span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">
                <i className="fa-brands fa-php"></i> PHP
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-python"></i> Python
              </span>
              <span className="tech-tag">JWT Auth</span>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3>Databases & DevOps</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>MongoDB (NoSQL)</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Git & GitHub Workflow</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Linux & Bash Scripting</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-solid fa-leaf"></i> MongoDB
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-git-alt"></i> Git
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-github"></i> GitHub
              </span>
              <span className="tech-tag">
                <i className="fa-solid fa-terminal"></i> Bash
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-linux"></i> Linux
              </span>
            </div>
          </div>
          {/* Card 4: Specialized & Tools */}
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <h3>Development & Tools</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Git & Version Control</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Command Line & Bash</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>API Testing & Postman</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-brands fa-git-alt"></i> Git
              </span>
              <span className="tech-tag">
                <i className="fa-brands fa-github"></i> GitHub
              </span>
              <span className="tech-tag">
                <i className="fa-solid fa-terminal"></i> Terminal
              </span>
              <span className="tech-tag">Postman</span>
              <span className="tech-tag">NPM/Yarn</span>
            </div>
          </div>

          {/* Card 5: Soft Skills & Engineering Practices */}
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3>Architecture & Practices</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>RESTful API Design</span>
                <span>92%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Responsive & Adaptive Design</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Performance & Code Optimization</span>
                <span>86%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "86%" }}></div>
              </div>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-solid fa-network-wired"></i> System Design
              </span>
              <span className="tech-tag">
                <i className="fa-solid fa-mobile-screen"></i> Mobile First
              </span>
              <span className="tech-tag">Clean Code</span>
              <span className="tech-tag">Debugging</span>
            </div>
          </div>

          {/* Card 6: UI/UX & Styling Frameworks */}
          <div data-aos="zoom-in-up" className="skill-card">
            <div className="card-header">
              <div className="icon-box">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3>UI/UX & Design Systems</h3>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Modern CSS Layouts (Grid/Flexbox)</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Component Libraries</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>Interactive Web Animations</span>
                <span>82%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">
                <i className="fa-solid fa-layer-group"></i> CSS Grid
              </span>
              <span className="tech-tag">Flexbox</span>
              <span className="tech-tag">CSS Animations</span>
              <span className="tech-tag">UI Prototyping</span>
            </div>
          </div>
        </div>
      </div>
      {/* Programming Languages Skills */}
      <div className="skills-container">
        <div data-aos="zoom-in-up" className="skills-header">
          <span className="badge-pill">Stack</span>
          <h2>
            Programming <span>Languages</span>
          </h2>
        </div>
        <div className="languages-grid">
          {/* JavaScript */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <span className="lang-name">JavaScript</span>
            <span className="lang-badge">Advanced</span>
          </div>

          {/* Node.js */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
            </div>
            <span className="lang-name">Node.js</span>
            <span className="lang-badge">Backend</span>
          </div>

          {/* PHP */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP"
              />
            </div>
            <span className="lang-name">PHP</span>
            <span className="lang-badge">Web Scripting</span>
          </div>

          {/* Python */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
            </div>
            <span className="lang-name">Python</span>
            <span className="lang-badge">Scripting</span>
          </div>

          {/* Bash / Shell */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                alt="Bash"
              />
            </div>
            <span className="lang-name">Bash / Shell</span>
            <span className="lang-badge">Automation</span>
          </div>

          {/* HTML5 */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
            </div>
            <span className="lang-name">HTML5</span>
            <span className="lang-badge">Markup</span>
          </div>

          {/* XML */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg"
                alt="XML"
              />
            </div>
            <span className="lang-name">XML</span>
            <span className="lang-badge">Data Holder</span>
          </div>

          {/* CSS3 */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
            </div>
            <span className="lang-name">CSS3</span>
            <span className="lang-badge">Styling</span>
          </div>

          {/* C */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C"
              />
            </div>
            <span className="lang-name">C</span>
            <span className="lang-badge">Mother Language</span>
          </div>

          {/* C++ */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
              />
            </div>
            <span className="lang-name">C++</span>
            <span className="lang-badge">Core Logic</span>
          </div>

          {/* MongoDB */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
            </div>
            <span className="lang-name">MongoDB</span>
            <span className="lang-badge">NoSQL Database</span>
          </div>

          {/* MySQL */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
            </div>
            <span className="lang-name">MySQL</span>
            <span className="lang-badge">Relational Database</span>
          </div>
          {/* Nginx */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                alt="Nginx"
              />
            </div>
            <span className="lang-name">Nginx</span>
            <span className="lang-badge">Web Server / Proxy</span>
          </div>

          {/* Ubuntu */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
                alt="Ubuntu"
              />
            </div>
            <span className="lang-name">Ubuntu</span>
            <span className="lang-badge">Linux Distro</span>
          </div>

          {/* Linux */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
              />
            </div>
            <span className="lang-name">Linux</span>
            <span className="lang-badge">OS / Core Kernel</span>
          </div>

          {/* VPS Server */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg"
                alt="VPS Server"
              />
            </div>
            <span className="lang-name">VPS / Server</span>
            <span className="lang-badge">SSH & Management</span>
          </div>

          {/* Apache */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
                alt="Apache"
              />
            </div>
            <span className="lang-name">Apache</span>
            <span className="lang-badge">HTTP Server</span>
          </div>

          {/* VS Code */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
              />
            </div>
            <span className="lang-name">VS Code</span>
            <span className="lang-badge">Code Editor</span>
          </div>

          {/* Git */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              />
            </div>
            <span className="lang-name">Git</span>
            <span className="lang-badge">Version Control</span>
          </div>

          {/* GitHub */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </div>
            <span className="lang-name">GitHub</span>
            <span className="lang-badge">Code Hosting</span>
          </div>

          {/* Postman */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                alt="Postman"
              />
            </div>
            <span className="lang-name">Postman</span>
            <span className="lang-badge">API Testing</span>
          </div>

          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="DSA"
                style={{ filter: "hue-rotate(180deg)" }}
              />
            </div>
            <span className="lang-name">DSA</span>
            <span className="lang-badge">Problem Solving</span>
          </div>

          {/* UI / UX Design */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="UI/UX Design"
              />
            </div>
            <span className="lang-name">UI / UX Design</span>
            <span className="lang-badge">Figma & Wireframing</span>
          </div>

          {/* Cyber Security */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg"
                alt="Cyber Security"
              />
            </div>
            <span className="lang-name">Cyber Security</span>
            <span className="lang-badge">System Defense</span>
          </div>

          {/* Web Architecture */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Web Architecture"
              />
            </div>
            <span className="lang-name">Web Architecture</span>
            <span className="lang-badge">System Design</span>
          </div>

          {/* RESTful API Design */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                alt="API Design"
              />
            </div>
            <span className="lang-name">API Design</span>
            <span className="lang-badge">REST & API</span>
          </div>

          {/* DevOps & CI/CD */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="DevOps"
              />
            </div>
            <span className="lang-name">DevOps</span>
            <span className="lang-badge">CI / CD Pipelines</span>
          </div>
          {/* Redux */}
          <div className="lang-card" data-aos="zoom-in-up">
            <div className="logo-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="Redux"
              />
            </div>
            <span className="lang-name">Redux</span>
            <span className="lang-badge">State Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
