import React, { useRef, useEffect, useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [messages, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const messageRef = useRef(null);

    const showMessage = (type, message) => {
        if (type) {
            messageRef.current.classList.add("success");
            messageRef.current.textContent = message;
        } else {
            messageRef.current.classList.add("error");
            messageRef.current.textContent = message;
        }
        setTimeout(() => {
            setLoading(false);
            messageRef.current.classList.remove("success");
            messageRef.current.classList.remove("error");
            messageRef.current.textContent = "";
        }, 3000);
    };

    const contactNow = e => {
        e.preventDefault();
        if (name.trim() === "") {
            showMessage(false, "Please Enter Your Name!");
            return;
        } else if (email.trim() === "") {
            showMessage(false, "Please Enter Your Email!");
            return;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            showMessage(false, "Invalid Email Address!");
            return;
        } else if (phone.trim() === "") {
            showMessage(false, "Please Enter Your Phone Number!");
            return;
        } else if (messages.trim() === "") {
            showMessage(false, "Please Enter Your Message!");
            return;
        } else {
            setLoading(true);
            // Professional feedback message
            showMessage(true, "Redirecting to primary contact channels...");
            window.location.href = "mailto:ghsjulian@outlook.com";
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // 100% SEO Professional Schema Injection
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ghs Julian",
            jobTitle: "Full-Stack Web Developer",
            url: "https://ghsresume.netlify.app/contact",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Madhabpur, Komolgonj",
                addressRegion: "Maulovibazar, Sylhet",
                addressCountry: "Bangladesh"
            },
            email: "ghsjulian@outlook.com"
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schemaData);
        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, []);

    document.title =
        "Contact Ghs Julian | Professional Full-Stack Developer Inquiry";

    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2>Let's Collaborate</h2>
                    <article data-aos="zoom-in">
                        I am available for global freelance opportunities,
                        full-time roles, and technical consultations. Whether
                        you are looking to build a scalable{" "}
                        <strong>MERN stack</strong> application or need expert{" "}
                        <strong>PHP/Python</strong> integration, I am ready to
                        deliver. For the fastest response, please reach out via{" "}
                        <strong>Email</strong> or <strong>LinkedIn</strong>{" "}
                        below.
                    </article>
                    <div className="contact-info">
                        <h2>Professional Contact Channels</h2>
                        <ul>
                            <li>
                                Professional Line:{" "}
                                <a href="tel:+8801302661227">+8801302661227</a>
                            </li>
                            <li>
                                Primary Email:{" "}
                                <a href="mailto:ghsjulian@outlook.com">
                                    ghsjulian@outlook.com
                                </a>
                            </li>
                            <li>
                                Secondary Email:{" "}
                                <a href="mailto:ghsjulian@gmail.com">
                                    ghsjulian@gmail.com
                                </a>
                            </li>
                            <li>
                                Facebook:{" "}
                                <a
                                    href="https://web.facebook.com/ghs.julian.85"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ghs Julian
                                </a>
                            </li>
                            <li>
                                LinkedIn:{" "}
                                <a
                                    href="https://linkedin.com/in/gobindo.bhor"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Gobindo Bhor
                                </a>
                            </li>
                            <li>
                                GitHub:{" "}
                                <a
                                    href="https://github.com/ghsjulian"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ghsjulian (150+ Projects)
                                </a>
                            </li>
                            <li>
                                Global HQ:{" "}
                                <a>Madhabpur, Komolgonj, Sylhet, Bangladesh</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form">
                    <h2>Direct Inquiry Form</h2>
                    <span ref={messageRef} id="message"></span>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        type="tel"
                        placeholder="Phone/WhatsApp Number"
                    />
                    <textarea
                        onChange={e => setMessage(e.target.value)}
                        value={messages}
                        placeholder="Describe your project or inquiry..."
                    ></textarea>
                    <button onClick={contactNow} className="contact-btn">
                        <div className={loading ? "load" : ""}></div>
                        Send Message
                    </button>
                </div>
            </section>

            <h2>Engineering Philosophy & Passion</h2>
            <section className="article">
                <article>
                    I specialize in transforming complex business logic into
                    seamless, high-performance web ecosystems. From robust{" "}
                    <strong>database architecture</strong> and{" "}
                    <strong>API orchestration</strong> to interactive UI/UX
                    designs, my work is defined by precision and scalability. As
                    a <strong>MERN Stack specialist</strong>
                    and <strong>English Honours student</strong>, I offer a rare
                    combination of technical mastery and elite communication
                    skills. Having successfully deployed{" "}
                    <strong>130+ projects</strong>, I am committed to solving
                    digital challenges for clients across the world. Ready to
                    scale your next big idea? Click the <strong>Hire Me</strong>{" "}
                    button or contact me directly to get started.
                </article>
            </section>
        </>
    );
};

export default Contact;
