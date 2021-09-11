import React from 'react'
import '../../assets/WhatWeDo/GreyWaveBlock.css'
import CallToAction from "../SharedComponents/CallToAction"
import Waves from "../SharedComponents/Waves"

const GreyWaveBlock = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle}) => {
    return (
        <>
            <div className="greywaveblock-container">
                <div className="greywaveblock" >
                    <div className="greywaveblock-img">
                        <img src={imageUrl} alt=""/>
                    </div>
                    <div className="break"></div>
                    <div className="greywaveblock-cta">
                        <CallToAction 
                            title={title} 
                            text={text} 
                            buttonUrl={buttonUrl} 
                            buttonText={buttonText} 
                            buttonStyle={buttonStyle}
                        />
                    </div>
                </div>
                <div className="greywaveblock-wave">
                    <Waves color='light-blue'/>
                </div>
            </div>
        </>
    )
}

export default GreyWaveBlock
