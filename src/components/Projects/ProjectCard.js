import React from 'react';
import '../../assets/Projects/ProjectCard.css';
import FilledButton from '../SharedComponents/FilledButton';

const ProjectCard = ({title, url, description, openApp, buttonUrl}) => {
  /**
   * Props: 
   *  title: Title of the card
   *  url: Image URL for the projects
   *  description: A brief description of the project
   * openApp: the date that apps open
   */
  return (
    <div className="project-card">
      <img src={url} alt="project"/>
      <div className="project-card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{openApp}</h3>
        <FilledButton url={buttonUrl} text="Join this project team"/>
      </div>
    </div>
  )
}

export default ProjectCard;
