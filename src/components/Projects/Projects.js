import React from 'react';
import ProjectBanner from './ProjectBanner.js';
import ProjectLayout from './ProjectLayout.js';
import '../../assets/Projects/Projects.css';
import photo from '../../images/project-card-default.png';
import reCares from '../../images/re-cares.png';
import clubWebsite from '../../images/club-website.png';

export default function Projects() {
    const cards = [ 
        {
            'title': 'RE Cares',
            // 'techStack': 'MERN',
            'url': reCares,
            'description': 'A project where an international group of students and professionals collaborate on designing and implementing a software project for a charitable cause. Participants will be able to attend the conference which will be hosted in South Bend, Indiana from September 20-24th either virtually or in person.',
            'openApp': "Applications open September 20, 2021"   
        },
        {
            'title': 'Club Website',
            // 'techStack': 'MERN',
            'url': clubWebsite,
            'description': 'Our official club website where students can explore our current projects, see upcoming workshops / social events, and meet our team. Applicants do not need any prior web development experience.',
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
