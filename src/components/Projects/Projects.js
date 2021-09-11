import React from 'react';
import ProjectBanner from './ProjectBanner.js';
import ProjectLayout from './ProjectLayout.js';
import '../../assets/Projects/Projects.css';
import photo from '../../images/project-card-default.png';

export default function Projects() {
    const cards = [ 
        {
            'title': 'RE Cares',
            // 'techStack': 'MERN',
            'url': photo,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies.',
            'openApp': "Applications open September 20, 2021"   
        },
        {
            'title': 'Club Website',
            // 'techStack': 'MERN',
            'url': photo,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies.',
            'openApp': "Applications open September 20, 2021"
        }
    ];
    return (
        <div className="projects">
            <ProjectBanner/>
            <ProjectLayout cardInfo={cards}/>
        </div>
    )
};
