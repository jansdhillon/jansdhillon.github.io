import React, { useState } from "react";
import "./ProjectCard.css";
import github from "./assets/github.png";

const ProjectCard = ({ title, description, details, link }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    setShowMore(!showMore);

  };

  return (
    <div className={`project-card ${expanded ? "expanded" : ""}`} >
      <h3>{title}</h3>
      <p>{showMore?  "" : description}</p>
      {expanded && <p className="project-details">{details}</p>}
      <button onClick={handleClick}>{showMore? "Hide" : "Read more"}</button>
      <a href={link} target={"_blank"}><img src={github} style={{width: "30px", margin: "10px", paddingBottom: "5px"}}/></a>
    </div>
  );
};

export default ProjectCard;
