import React from "react";
import NavBar from "./NavBar";
import "../style/App.css";
import "../style/Header.css";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="logo">Nik McKnight</div>
    </header>
  );
}
