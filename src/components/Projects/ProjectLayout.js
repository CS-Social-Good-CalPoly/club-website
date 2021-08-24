import React from 'react';
import ProjectCard from './ProjectCard.js';
import photo from '../../images/project-card-default.png';
import {Container, Row, Col} from "react-bootstrap";
import OfficerCard from '../Officers/OfficerCard.js';
import '../../assets/Projects/ProjectLayout.css';

const ProjectLayout = ({cardInfo}) => {
    return (
       
                <div className="project-layout-container">
                    {
                        cardInfo && 
                            cardInfo.map((card) => (
                                <ProjectCard
                                    title={card.title}
                                    url={card.url}
                                    description={card.description}
                                    openApp={card.openApp}
                                />
                            )
                        )
                    }
                </div>

    )
}

export default ProjectLayout;
