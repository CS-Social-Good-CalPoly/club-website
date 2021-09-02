import React from 'react'
import '../../assets/WhatWeDo/WhatWeDo.css';
import '../../assets/Projects/Projects.css';
import default_photo from '../../images/gray-wave.svg';
import project_photo from '../../images/project-team-photo.png';
import tsa_photo from '../../images/tsa-photo.svg';
import BlueWaveBlock from './BlueWaveBlock';
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
                text="CS + Social Good is currently looking for a Communications VP and a Program and Events Officer to join our 2021-2022 officer team. These two positions are on the social side of our club, so if that appeals to you, don't hesitate to apply!"
                buttonUrl={default_photo}
                buttonText="Learn more"
                buttonStyle={"filled"}
            />
            <BlueNewsletterSubBox/>
        </div>
    )
}
