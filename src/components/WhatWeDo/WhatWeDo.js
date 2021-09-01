import React from 'react'
import '../../assets/WhatWeDo/WhatWeDo.css';
import '../../assets/Projects/Projects.css';
import default_photo from '../../images/gray-wave.svg';
import project_photo from '../../images/project-team-photo.png';
import tsa_photo from '../../images/tsa-photo.svg';
import BlueWaveBlock from './BlueWaveBlock';
import TechShift from './Techshift';
import BlueNewsletterSubBox from './BlueNewsletterSubBox';
import Footer from '../SharedComponents/Footer';
import WhatWeDoBanner from './WhatWeDoBanner';
// import SubscriptionForm from '../SharedComponents/SubscriptionForm'
// import default_photo from '../../images/light-blue-wave.svg';

export default function WhatWeDo() {
    return (
        <div>   
            <WhatWeDoBanner/>
            <TechShift
                imageUrl={tsa_photo}
            />
            <BlueWaveBlock
                imageUrl={project_photo} 
                title="Join our team" 
                text="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Ultrices ipsum, varius congue enim, 
                neque. Tincidunt nisl sit quisque nibh consequat 
                tempor, tortor ultricies." 
                buttonUrl={default_photo} 
                buttonText="Learn more" 
                buttonStyle={"filled"} 
            />
            <BlueNewsletterSubBox/>
            <Footer/>
        </div>
    )
}
