import React from 'react'
import '../../assets/WhatWeDo/WhiteWaveBlock.css'
import CallToAction from "../SharedComponents/CallToAction"
import Waves from "../SharedComponents/Waves"

const WhiteWaveBlock = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle}) => {
    return (
        <>
            <div className="whitewaveblock-container">
                <div className="whitewaveblock" >
                    <div className="whitewaveblock-cta">
                        <CallToAction 
                            title={title} 
                            text={text} 
                            buttonUrl={buttonUrl} 
                            buttonText={buttonText} 
                            buttonStyle={buttonStyle}
                        />
                    </div>
                    <div className="break"></div>
                    <div className="whitewaveblock-img">
                        <img src={imageUrl} alt=""/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default WhiteWaveBlock