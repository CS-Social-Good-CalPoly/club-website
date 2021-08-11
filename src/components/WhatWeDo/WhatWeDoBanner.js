import React from 'react'
import '../../assets/WhatWeDo/WhatWeDoBanner.css'
import Waves from '../SharedComponents/Waves'
import Dots from '../SharedComponents/Dots'

const WhatWeDoBanner = () => {
    return (
        <div className="wwdb">
            <div className="wwdb-container">
                <div className="wwdb-top">
                    <Dots color="dark-blue"/>
                </div>
                <div className="wwdb-description">
                    <h2 className="upper">Welcome to Cal Poly SLO</h2>
                    <h2 className="lower">CS + Social Good.</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.
                    </p>
                </div>
            </div>
            <div className="wwdb-bottom">
                <Dots className="bottom-dots" color="dark-blue"/>
                <Waves className="bottom-wave" color="dark-green"/>
            </div>
        </div>
    )
}

export default WhatWeDoBanner;
