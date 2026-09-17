import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Heart from "../components/Heart";
// import TrackVisitor from "../components/TrackVisitor";

const AppLayout = () => {
  const location = useLocation();
  const layoutRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 0,
      once: false,
    });

    const scrollContainer = layoutRef.current;

    // Refresh AOS whenever the user scrolls inside .app-layout
    const handleScroll = () => {
      AOS.refresh();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!layoutRef.current) return;

    layoutRef.current.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className="app-layout" ref={layoutRef}>
      <Heart />
      <Header />
      <Outlet />
      {/* SETUP AUTO USER DATA CAPTURE */}
      <form
        name="portfolio-tracker"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="location" />
        <input type="text" name="ip" />
        <input type="text" name="referrer" />
        <input type="text" name="screen" />
        <input type="text" name="time" />
      </form>
    </main>
  );
};

export default AppLayout;
