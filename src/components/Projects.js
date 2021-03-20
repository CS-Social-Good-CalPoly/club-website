import React from 'react';
import Card from './ProjectCard.js';
import '../assets/Projects.css';
import default_photo from '../images/project-card-default.png';

export default function Projects() {
    return (
        <div>
            <h3>Projects</h3>        
            <Card title="Vera" techStack="MongoDB, Express.js, React and Node.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies." url={default_photo} />
        </div>
    )
    
}


