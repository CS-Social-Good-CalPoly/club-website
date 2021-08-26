import React from 'react';
import ProjectBanner from './ProjectBanner.js';
import ProjectCard from './ProjectCard.js';
import '../../assets/Projects/Projects.css';
import default_photo from '../../images/project-card-default.png';

export default function Projects() {
    return (
        <div>
            <ProjectBanner/>
            <ProjectCard
                title="Vera"
                //techStack="MongoDB, Express.js, React and Node.js" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies."
                url={default_photo}
                openApp="Applications open September 20, 2021"
            />
        </div>
    )

}
