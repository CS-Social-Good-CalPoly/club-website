import React from 'react'
import '../../assets/WhatWeDo/WhatWeDoBanner.css'
import Waves from '../SharedComponents/Waves'
import Dots from '../SharedComponents/Dots'

const WhatWeDoBanner = () => {
    return (
        <div className="wwdb">
            <div className="wwdb-container">
                <div className="wwdb-top">
                    <Dots color="light-green"/>
                </div>
                <div className="wwdb-description">
                    <h2 className="upper">Welcome to Cal Poly SLO</h2>
                    <h2 className="lower">CS + Social Good.</h2>
                    <p> CS + Social Good encourages students to leverage technology for social good through thought provoking discussion, community, and meaningful projects.
                    </p>
                </div>
            </div>
            <div className="wwdb-bottom">
                <Dots className="bottom-dots" color="light-green"/>
                <Waves className="bottom-wave" color="dark-green"/>
            </div>
        </div>
    )
}

export default WhatWeDoBanner;
