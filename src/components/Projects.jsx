import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div class="content">
      <h1>My Projects</h1>
      <div className="category">
        <h2>Full Stack Web Development</h2>
        <div className="project">Nothing to show right now :(</div>
      </div>
      <div className="category">
        <h2>Front End Web Development</h2>
        <div className="project">This website!</div>
      </div>
      <div className="category">
        {/* <h3>Back End</h3>
        <div className="project">
          <h4>E-Commerce Site</h4>
          <div>
            <h5>Description</h5>
            <div>
              This website was built as my capstone project for Fullstack
              Academy. My work on this project was purely in the back end. I
              designed and created the database using PostgreSQL
            </div>
            <h5>Links</h5>
            <ul>Website</ul>
            <h5>Technologies Used</h5>
            <ul>Website</ul>
          </div>
        </div> */}
        <h2>Back End Web Development</h2>
        <Project
          name="E-Commerce Site"
          description="This website was built as my group's capstone project for Fullstack
              Academy. My work on this project was mostly in the back end. I
              designed and created the database using PostgreSQL and Prisma, designed and created
              the REST API using Express.js, JSON Web Token, Prisma, and bcrypt, set up routes using React Router, 
              built most of the components using React, built custom middleware in Express, 
              and created custom hooks using React. The most difficult part of this project was 
              creating a functional cart and checkout."
          technologies={[
            "Javascript",
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
