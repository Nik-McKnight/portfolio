import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
