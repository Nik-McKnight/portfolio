import React from "react";
import { useState, useEffect } from "react";

export default function Project({ name, description, technologies, links }) {
  const [techsToDisplay, setTechsToDisplay] = useState([]);
  const [linksToDisplay, setLinksToDisplay] = useState([]);
  // useEffect(() => {
  //     const getTech
  // }, [])

  useEffect(() => {
    const getTechsToDisplay = technologies.map((technology, i) => {
      return <li>{technology}</li>;
    });
    const getLinksToDisplay = links.map((link, i) => {
      return (
        <li className="projectItem">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.description}
          </a>
        </li>
      );
    });
    setTechsToDisplay(getTechsToDisplay);
    setLinksToDisplay(getLinksToDisplay);
  }, []);

  return (
    <div>
      <div className="project">
        <h3>{name}</h3>
        <h4>Description</h4>
        <div>{description}</div>
        <h4>Technologies</h4>
        <ul>{techsToDisplay}</ul>
        <h4>Links</h4>
        <ul>{linksToDisplay}</ul>
      </div>
    </div>
  );
}
