import React from 'react';
import ProjectCard from './ProjectCard.js';
import '../../assets/Projects/ProjectLayout.css';

const ProjectLayout = ({cardInfo}) => {
    return (
        <div className="project-layout-container">
            {
                cardInfo.map((card) => (
                    <ProjectCard
                        key={card.title}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        openApp={card.openApp}
                    />
                ))
            }
        </div>
    )
}

export default ProjectLayout;
