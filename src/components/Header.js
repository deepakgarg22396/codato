import React, { useState, useEffect } from "react";
import "./header.css";
import imgLogo from "../assets/images/codato-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isMobile ? "mobile" : ""}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo" onClick={() => handleScroll("middle")}>
          <img src={imgLogo} alt="Codato Logo" className="logo-image" />
          <span className="logo-text">Codato</span>
        </div>

        {/* Desktop Navigation - shown on larger screens */}
        {!isMobile && (
          <>
            <nav className="nav">
              <ul className="nav-links">
                <li onClick={() => handleScroll("middle")}>Home</li>
                <li onClick={() => handleScroll("about")}>About</li>
                <li onClick={() => handleScroll("services")}>Services</li>
                <li onClick={() => handleScroll("techstack")}>Technology</li>
                <li onClick={() => handleScroll("blogs")}>Blogs</li>
              </ul>
            </nav>

            <button className="cta-button" onClick={() => handleScroll("contact")}>
              Contact Us
            </button>
          </>
        )}

        {/* Mobile Menu Button - shown only on mobile */}
        {isMobile && (
          <button 
            className={`hamburger ${menuOpen ? "open" : ""}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}
      </div>

      {/* Mobile Menu - shown only when menu is open on mobile */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li onClick={() => handleScroll("middle")}>Home</li>
              <li onClick={() => handleScroll("about")}>About</li>
              <li onClick={() => handleScroll("services")}>Services</li>
              <li onClick={() => handleScroll("techstack")}>Technology</li>
              <li onClick={() => handleScroll("blogs")}>Blogs</li>
              <li onClick={() => handleScroll("contact")}>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;