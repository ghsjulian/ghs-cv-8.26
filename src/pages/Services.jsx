import React from "react";
import "../styles/services.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Full-Stack Web Application",
      badge: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      description:
        "Custom scalable web applications built with MERN (MongoDB, Express, React, Node.js). High performance, secure authentication, and robust REST APIs.",
      deliveryTime: "5 - 10 Days",
      price: "$299",
      priceSuffix: "starts at",
      tools: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
      features: [
        "Responsive React & Tailwind UI",
        "JWT / OAuth Authentication",
        "Database Architecture & API Integration",
        "Deployment to VPS / Vercel / Render",
      ],
    },
    {
      id: 2,
      title: "Backend API & Database Architecture",
      badge: "Core Logic",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      description:
        "Secure backend services, database schema design, microservices, and high-throughput RESTful/GraphQL API development.",
      deliveryTime: "3 - 7 Days",
      price: "$199",
      priceSuffix: "starts at",
      tools: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
      ],
      features: [
        "RESTful API & Endpoint Security",
        "Database Optimization (SQL / NoSQL)",
        "Server Setup (Nginx / Apache / Ubuntu)",
        "API Documentation & Integration",
      ],
    },
    {
      id: 3,
      title: "UI/UX to Responsive Frontend",
      badge: "Pixel Perfect",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      description:
        "Converting Figma, XD, or PSD files into lightning-fast, pixel-perfect modern responsive web applications with dynamic animations.",
      deliveryTime: "2 - 4 Days",
      price: "$149",
      priceSuffix: "starts at",
      tools: [
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
      features: [
        "100% Mobile & Tablet Responsive",
        "Cross-Browser Compatibility",
        "AOS & CSS Micro Animations",
        "Clean, Maintainable Code",
      ],
    },
    {
      id: 4,
      title: "VPS Setup, Nginx & DevOps",
      badge: "Deployment",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
      description:
        "Complete VPS server configuration, Linux shell automation, Nginx reverse proxy configuration, SSL certificates, and CI/CD pipelines.",
      deliveryTime: "1 - 3 Days",
      price: "$120",
      priceSuffix: "fixed package",
      tools: [
        {
          name: "Linux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Nginx",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "Ubuntu",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
        },
        {
          name: "Bash",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        },
      ],
      features: [
        "Ubuntu/Debian VPS Hardening",
        "Nginx Reverse Proxy & SSL Setup",
        "Node / PM2 Process Manager",
        "Domain DNS & Firewall Setup",
      ],
    },
    {
      id: 5,
      title: "Cross-Platform Mobile App",
      badge: "High Growth",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      description:
        "Native-like mobile applications built for Android & iOS using React Native / Cordova. Smooth performant UI, offline functionality, and push notifications.",
      deliveryTime: "7 - 14 Days",
      price: "$349",
      priceSuffix: "starts at",
      tools: [
        {
          name: "React Native",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Android",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
      features: [
        "Single Codebase for Android & iOS",
        "Push Notifications & Offline Support",
        "REST / GraphQL API Backend Sync",
        "App Store & Play Store Deployment",
      ],
    },
    {
      id: 6,
      title: "E-Commerce & Payment Integration",
      badge: "High Conversion",
      image:
        "https://www.bicakhukuk.com/wp-content/uploads/2025/07/Electronic-Payment-Law-Turkey-1536x960.png",
      description:
        "Complete online shopping solutions featuring custom product catalogs, inventory management, secure checkout, and local/global payment gateways.",
      deliveryTime: "5 - 10 Days",
      price: "$279",
      priceSuffix: "starts at",
      tools: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
      features: [
        "Shopping Cart & Admin Dashboard",
        "Stripe / PayPal / Bkash Integration",
        "Order Tracking & Invoice Generation",
        "SEO-Optimized Product Pages",
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header" data-aos="fade-up">
          <span className="badge-pill">My Services & Offerings</span>
          <h2>
            Transform Your Vision Into , <span>Scalable</span>
          </h2>
          <p>
            Custom web development and full-stack solutions crafted for modern
            businesses. From RESTful APIs and database architecture to
            responsive React frontends, we turn complex ideas into
            high-converting digital products.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              className="service-card"
              data-aos="zoom-in-up"
              key={service.id}
            >
              {/* Card Banner Image */}
              <div className="card-banner">
                <img src={service.image} alt={service.title} />
                <span className="featured-badge">{service.badge}</span>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                {/* Meta: Delivery Time & Price */}
                <div className="service-meta">
                  <div className="meta-item">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                      <small>Delivery Time</small>
                      <strong>{service.deliveryTime}</strong>
                    </div>
                  </div>
                  <div className="meta-price">
                    <small>{service.priceSuffix}</small>
                    <span className="price">{service.price}</span>
                  </div>
                </div>

                {/* Features Check List */}
                <ul className="feature-list">
                  {service.features.map((feat, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Tools Used */}
                <div className="tools-row">
                  <span className="tools-label">Tech Stack:</span>
                  <div className="tools-icons">
                    {service.tools.map((tool, idx) => (
                      <div className="tool-icon" key={idx} title={tool.name}>
                        <img src={tool.logo} alt={tool.name} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <a href="#contact" className="order-btn">
                  <span>Order Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout Footer */}
        <div className="custom-order-box" data-aos="fade-up">
          <div className="custom-order-content">
            <h3>Need a Custom Solution or Specialized Stack?</h3>
            <p>
              Have a custom idea, complex web app, or ongoing freelance project?
              Let's discuss your custom requirements directly.
            </p>
          </div>
          <a href="#contact" className="custom-btn">
            <i className="fa-solid fa-comments"></i> Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
