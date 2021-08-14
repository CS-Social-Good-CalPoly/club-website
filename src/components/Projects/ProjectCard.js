import React from 'react';
import '../../assets/Projects/ProjectCard.css';

const ProjectCard = ({title, techStack, url, description, openApp}) => {
  /**
   * Props: 
   *  title: Title of the card
   *  techStack: the tech stack used for the project
   *  url: Image URL for the projects
   *  description: A brief description of the project
   * openApp: the date that apps open
   */
  return (
    <div className="project-card">
      <img src={url} alt="project"/>
      <div className="project-card-body">
        <h2>{title}</h2>
        <h3>{techStack}</h3>
        <p>{description}</p>
        <h3>{openApp}</h3>
      </div>
    </div>
  )
}

export default ProjectCard