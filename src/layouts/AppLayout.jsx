import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Heart from "../components/Heart";

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
    </main>
  );
};

export default AppLayout;
