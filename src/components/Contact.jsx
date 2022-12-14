import React from "react";

export default function Contact() {
  return (
    <div class="content">
      <h1>Contact Information</h1>
      <div class="contact">
        <b>Email: </b>
        <a
          href="mailto: nik.mcknight735@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nik.mcknight735@gmail.com
        </a>
      </div>{" "}
      <div class="contact">
        <b>Linkedin: </b>
        <a
          href="https://www.linkedin.com/in/nik-mcknight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/nik-mcknight/
        </a>
      </div>
      <div class="contact">
        <b>GitHub: </b>
        <a
          href="https://github.com/Nik-McKnight"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Nik-McKnight/
        </a>
      </div>
      <div class="contact">
        <b>Phone:</b> +1 (563) 570-7808
      </div>
    </div>
  );
}
