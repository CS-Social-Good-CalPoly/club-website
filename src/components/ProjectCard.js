import React from 'react';
import '../assets/ProjectCard.css';

const ProjectCard = ({title, techStack, url, description}) => {
  /**
   * Props: 
   *  title: Title of the card
   *  techStack: the tech stack used for the project
   *  url: Image URL for the projects
   *  description: A brief description of the project
   */
  return (
    <div className="card">
      <img src={url} alt="project"/>
      <div className="card-body">
        <h2>{title}</h2>
        <h3>{techStack}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard