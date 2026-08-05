import React from "react";
import "../styles/services.css";
import servicesData from "../data/services";

const Services = () => {
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
