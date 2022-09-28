import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/Header.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* Fix issue with cross button sizing */}
      <Menu noOverlay onStateChange={toggleMenu}>
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/about">
          About
        </Link>
        <Link className="menu-item" to="/projects">
          Projects
        </Link>
        <Link className="menu-item" to="/education">
          Education
        </Link>
        <Link className="menu-item" to="/skills">
          Skills
        </Link>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
      </Menu>
    </>
  );
}
