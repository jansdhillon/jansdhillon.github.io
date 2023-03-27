import React, { useState } from "react";
import "./ProjectCard.css";
import github from "./assets/github.png";
import styled from "styled-components";


type ProjectCardProps = {
  title: string;
  description: string;
  details: string;
  link: string;
}

const Icon = styled.a`
    align-content: center;
`;

const IconImage = styled.img`
    width: 30px;
    margin: 10px;
    padding: 10px;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, details, link }) => {
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
      <Icon href={link} target={"_blank"}><IconImage src={github} alt={title} style={{width: "30px", margin: "10px", paddingBottom: "5px"}}/></Icon>
    </div>
  );
};

export default ProjectCard;
