import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faCode,
  faGraduationCap,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { id: "home", icon: faHome, label: "Home" },
  { id: "about", icon: faUser, label: "About Me" },
  { id: "experience", icon: faBriefcase, label: "Experience" },
  { id: "projects", icon: faCode, label: "Projects" },
  { id: "education", icon: faGraduationCap, label: "Education" },
  { id: "contact", icon: faEnvelope, label: "Contact" },
];

const socialItems = [
  {
    id: "linkedin",
    icon: faLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aravindan-os-8256a2182/?trk=opento_sprofile_topcard",
  },
  {
    id: "github",
    icon: faGithub,
    label: "GitHub",
    link: "https://github.com/aravindanos",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`floating-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-center">
        {navItems.map((item) => (
          <div key={item.id} className="nav-item">
            <a href={`#${item.id}`}>
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            </a>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </header>
     <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="nav-links">
        {socialItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-1"
          >
            <FontAwesomeIcon icon={item.icon} className="nav-icon-1" />
            <span className="nav-text">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
    </>
  );
};

export default Header;
