import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div class="content">
      <h1>My Projects</h1>
      <div className="category">
        <h2>Full Stack Web Development</h2>
        <Project
          name="E-Commerce Site"
          description="This website was built as my group's capstone project for Fullstack
              Academy. My work on this project covered the entire stack, except for CSS. I
              designed and created the database using PostgreSQL and Prisma, designed and created
              the REST API using Express.js, JSON Web Token, Prisma, and bcrypt, set up routes using React Router, 
              built custom hooks and most of the components using React, and built custom middleware using Express. 
              The most difficult part of this project was creating a functional cart and checkout."
          technologies={[
            "Javascript",
            "HTML",
            "Node.js",
            "React",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "bcrypt",
            "Express.js",
          ]}
          links={[
            {
              description: "Website (it may take a second to wake up)",
              url: "https://tagn.herokuapp.com/products",
            },
            {
              description: "GitHub Repository",
              url: "https://github.com/Nik-McKnight/graceShopper",
            },
            {
              description: "Database Schema",
              url: "https://app.quickdatabasediagrams.com/#/d/iV7QRV",
            },
          ]}
        ></Project>
      </div>
      <div className="category">
        <h2>Front End Web Development</h2>
        <Project
          name="This Website!"
          description="My portfolio site. A work-in-progress."
          technologies={["Javascript", "HTML", "CSS", "React"]}
          links={[
            {
              description: "GitHub Repository",
              url: "https://github.com/Nik-McKnight/portfolio",
            },
          ]}
        ></Project>
      </div>
      <div className="category">
        <h2>Back End Web Development</h2>
        {/* <Project></Project> */}
      </div>
      <div className="category">
        <h2>Other Software Development</h2>
        <Project
          name="Calculator"
          description="This is a basic calculator built entirely in C#. It uses a Model-View-Controller architecture and Object-Oriented Programming. The formula class (which does the bulk of the calculations) is from a school project where we created a spreadsheet program. I was tasked with implementing the class based on the professor's specifications, but the bulk of the code in that class is my own. I did not implement the regex in the formula class. The remaining classes in this project are 100% my own work."
          technologies={["C#"]}
          links={[
            {
              description: "Calculator GitHub Repository",
              url: "https://github.com/Nik-McKnight/Calculator",
            },
            {
              description: "Spreadsheet GitHub Repository",
              url: "https://github.com/Nik-McKnight/Spreadsheet-Project",
            },
          ]}
        ></Project>
      </div>
    </div>
  );
}
