import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
        <li>
          {link.description}: {link.url}
        </li>
      );
    });
    setTechsToDisplay(getTechsToDisplay);
    setLinksToDisplay(getLinksToDisplay);
  }, [technologies]);

  return (
    <div>
      <div className="project">
        <h4>{name}</h4>
        <div>
          <h5>Description</h5>
          <div>{description}</div>
          <h5>Technologies Used</h5>
          <ul>{techsToDisplay}</ul>
          <h5>Links</h5>
          <ul>{linksToDisplay}</ul>
        </div>
      </div>
    </div>
  );
}
