import React from 'react';
import ProjectBanner from './ProjectBanner.js';
// import ProjectCard from './ProjectCard.js';
import ProjectLayout from './ProjectLayout.js';
import '../../assets/Projects/Projects.css';
import photo from '../../images/project-card-default.png';
import Footer from '../SharedComponents/Footer';

export default function Projects() {
    return (
        <div>
            <ProjectBanner/>
            <ProjectLayout/>
            <Footer/>
        </div>
    )
    
};
