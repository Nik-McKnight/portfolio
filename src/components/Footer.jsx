import React from "react";
import "../style/App.css";
import "../style/Footer.css";
<a href="https://www.flaticon.com/free-icons/email" title="email icons">
  Email icons created by Uniconlabs - Flaticon
</a>;
export default function Footer() {
  return (
    <footer>
      <div class="icons">
        <a
          href="mailto: nik.mcknight735@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
            alt="Email Icon"
            title="Email Icon by Uniconlabs"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/nik-mcknight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            alt="Linkedin Icon"
            title="Linkedin Icon by Freepik"
          ></img>
        </a>
        <a
          href="https://github.com/Nik-McKnight"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
            alt="GitHub Icon"
            title="GitHub Icon by Pixel perfect"
          ></img>{" "}
        </a>
      </div>
    </footer>
  );
}
