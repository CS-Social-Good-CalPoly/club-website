import React from 'react'
import '../../assets/Projects/ProjectBanner.css'
import Waves from '../SharedComponents/Waves'
import Dots from '../SharedComponents/Dots'
import CallToAction from '../SharedComponents/CallToAction'
import image from '../../images/vera.png';

const ProjectBanner = () => {
    return (
        <div className="project-banner">
            <div className="pb-top">
                <Dots color="light-blue" />
            </div>
            <div className="pb-container">
                <div className="pb-container-left">
                    <div className="all-text">
                        <h2 className="featured-project">FEATURED PROJECT</h2>
                        <CallToAction 
                            title="Vera"
                            text="A student-designed website centered on the goal of making mental health resources more accessible to Cal Poly students. Applicants should have some prior experience with React and a basic understanding of databases."    
                            // buttonUrl="/Projects"
                            // buttonText="Learn More"
                            // buttonStyle="unfilled"
                        />
                        <p className="applications">Applications open September 20, 2021</p>
                    </div>
                </div>
                <div className="pb-container-right">
                    {/* <Dots color="light-blue" /> */}
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

export default ProjectBanner;
