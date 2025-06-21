import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/main.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAboutDetail = location.pathname === "/about-details";

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getHref = (hash) => (isAboutDetail ? `/${hash}` : hash);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={closeMenu}>
          Reza Alfaridzi
        </a>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleNavbar}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href={getHref("#home")} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href={getHref("#about")} onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href={getHref("#projects")} onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href={getHref("#contact")} onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
