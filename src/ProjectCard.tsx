import React, { useState } from "react";
import "./ProjectCard.css";
import githubImg from "./assets/github.png";
import linkImg from "./assets/link.png";


type ProjectCardProps = {
  title: string;
  description: string;
  details: string;
  github?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, details, github, link }) => {
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
      {github? <a href={github} target={"_blank"}><img src={githubImg} alt={title} style={{width: "30px", margin: "10px", paddingBottom: "5px"}}/></a> : ""}
      {link? <a href={link} target={"_blank"}><img src={linkImg} alt={title} style={{width: "30px", margin: "10px", paddingBottom: "5px"}}/></a> : ""}
    </div>
  );
};

export default ProjectCard;
