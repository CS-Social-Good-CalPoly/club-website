import React from 'react'
import '../../assets/WhatWeDo/WhatWeDo.css';
import '../../assets/Projects/Projects.css';
import default_photo from '../../images/gray-wave.svg';
import project_photo from '../../images/project-team-photo.png';
import whatwedo_photo from '../../images/whiteblock-img.png';
import tsa_photo from '../../images/tsa-photo.svg';
import BlueWaveBlock from './BlueWaveBlock';
import WhiteWaveBlock from './WhiteWaveBlock';
import TechShift from './Techshift';
import BlueNewsletterSubBox from './BlueNewsletterSubBox';
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
                text="We are currently looking for a Communications VP and a Program and Events Officer to join our 2021-2022 officer team. These two positions are on the social side of our club, so if that appeals to you, don't hesitate to apply!"
                buttonUrl={default_photo}
                buttonText="Learn more"
                buttonStyle={"filled"}
            />
            <WhiteWaveBlock
                imageUrl={whatwedo_photo}
                title="What we do"
                text="At the start of the school year, we open up applications for students can fill out an application to join a project team, where they'll have the opportunity to embody our school's 'Learn By Doing' mantra while working on a web development project in a team setting. We have projects fit for all skill levels, and we also hold workshops and social events where you can learn new skills and connect with fellow club members."
                buttonUrl={default_photo}
                buttonText="View our projects"
                buttonStyle={"filled"}
            />
            <BlueNewsletterSubBox/>
        </div>
    )
}
