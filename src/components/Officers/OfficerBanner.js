import React from 'react'
import '../../assets/Officers/OfficerBanner.css'
import Waves from "../SharedComponents/Waves"

const OfficerBanner = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle}) => {
    return (
        <div className="officerbanner-container">
            <div className="officerbanner">
                <h1>Meet Our Team</h1>
            </div>
            <div className="officerbanner-wave">
                <Waves color='light-blue'/>
            </div>
        </div>
    )
}

export default OfficerBanner;
