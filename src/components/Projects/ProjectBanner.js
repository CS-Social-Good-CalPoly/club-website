import React from 'react'
import '../../assets/Projects/ProjectBanner.css'
import Waves from '../SharedComponents/Waves'
import Dots from '../SharedComponents/Dots'
import CallToAction from '../SharedComponents/CallToAction'
import image from '../../images/project-team-photo.png';
const ProjectBanner = () => {
    return (
        <div className="project-banner">
            <div className="pb-container">
                <div className="pb-container-left">
                    <h2 className="featured-project">FEATURED PROJECT</h2>
                    <CallToAction 
                        title="Vera"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies. "    
                        // buttonUrl="/Projects"
                        // buttonText="Learn More"
                        // buttonStyle="unfilled"
                    />
                    <p className="applications">Applications open September 20, 2021</p>
                </div>
                <div className="pb-container-right">
                    <Dots color="light-blue" />
                    <img src={image} alt="default project"/>
                </div>
            </div>
            <div className="pb-bottom">
                <Waves color="light-green" />
                <Dots color="light-blue" />
            </div>
        </div>
    )
}

export default ProjectBanner
