import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div class="content">
      <h2>My Projects</h2>
      <div className="category">
        <h3>Full Stack</h3>
        <div className="project">Nothing to show right now :(</div>
      </div>
      <div className="category">
        <h3>Front End</h3>
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
        <h3>Back End</h3>
        <Project
          name="E-Commerce Site"
          description="This website was built as my group's capstone project for Fullstack
              Academy. My work on this project was purely in the back end. I
              designed and created the database using PostgreSQL and Prisma."
          technologies={["1", "2", "3"]}
          links={[]}
        ></Project>
      </div>
      <div className="category">
        <h3>Other</h3>
        <div className="project"></div>
      </div>
    </div>
  );
}
