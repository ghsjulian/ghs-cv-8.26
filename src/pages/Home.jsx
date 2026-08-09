import React from "react";
import Hero from "../components/Hero";
import Footer from "../layouts/Footer";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <section>
      <SEO
        path="/"
        title="Home"
        description="Welcome to Ghs Julian's developer portfolio. Explore my full-stack MERN projects, skill set, and experience."
      />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
