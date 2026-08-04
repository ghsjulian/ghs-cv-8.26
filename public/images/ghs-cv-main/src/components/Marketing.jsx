import React, { useEffect } from "react";

const Marketing = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Professional SEO Schema for Services
        const serviceSchema = {
          "@context": "https://schema.org/",
          "@type": "Service",
          "serviceType": "Full-Stack Web Development",
          "provider": {
            "@type": "Person",
            "name": "Ghs Julian",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Madhabpur, Komolgonj",
              "addressRegion": "Maulovibazar, Sylhet",
              "addressCountry": "Bangladesh"
            }
          },
          "description": "Custom web development services specializing in MERN stack, PHP, and responsive UI/UX design.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom React Development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend API Architecture" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Solutions" } }
            ]
          }
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(serviceSchema);
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
    }, []);

    document.title = "Hire Ghs Julian | Professional Full-Stack Web Development Services";

    return (
        <section id="about">
            <div className="hero-text">
                <h2>Premium Web Solutions</h2>
                <article>
                    <strong>Elevate Your Brand with Performance-Driven Web Engineering.</strong>
                    <br /><br />
                    I specialize in transforming complex business visions into high-performance digital realities. 
                    Utilizing industry-leading technologies like <strong>React, Node.js, PHP, and Python</strong>, 
                    I build custom ecosystems that are secure, scalable, and optimized for maximum conversion.
                    <br /><br />
                    <strong>What You Get with My Service:</strong>
                    <br />
                    🚀 <strong>Speed & SEO:</strong> Lightning-fast load times optimized for Google ranking.
                    <br />
                    📱 <strong>Responsive Design:</strong> Flawless performance across all mobile and desktop devices.
                    <br />
                    🛠️ <strong>Tailored Architecture:</strong> Custom-coded solutions—no restrictive templates.
                    <br />
                    🤝 <strong>Global Reliability:</strong> Professional communication and 24/7 technical support.
                    <br /><br />
                    <strong>Core Technology Stack:</strong>
                    <br />
                    🔹 <strong>Frontend:</strong> React.js, JavaScript (ES6+), jQuery, HTML5/CSS3 (Sass).
                    <br />
                    🔹 <strong>Backend:</strong> Node.js, PHP, Python, Express.js.
                    <br />
                    🔹 <strong>Database:</strong> MongoDB, MySQL, Firebase.
                    <br />
                    🔹 <strong>Workflow:</strong> Git/GitHub, CI/CD, VS Code, Linux Terminal.
                    <br /><br />
                    <strong>Start Your Project Today:</strong>
                    <br />
                    Consultations are free. Let’s discuss your project requirements and build a solution that scales.
                    <br /><br />
                    📞 <strong>Direct Call:</strong> <a href="tel:+8801302661337">+8801302661337</a>
                    <br />
                    📧 <strong>Enterprise Email:</strong> <a href="mailto:ghsjulian@outlook.com">ghsjulian@outlook.com</a>
                    <br />
                    💬 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gobindo-bhor" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </article>
            </div>
            <div className="market-img">
                <img 
                    src="/images/Marketing.jpg" 
                    alt="Professional Web Development Services by Ghs Julian" 
                />
            </div>
        </section>
    );
};

export default Marketing;
