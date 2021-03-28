import React from 'react'
import '../../assets/WhatWeDo/BlueWaveBlock.css'
import CallToAction from "../SharedComponents/CallToAction"
import Waves from "../SharedComponents/Waves"

const BlueWaveBlock = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle}) => {
    return (
        <>
            <div className="bluewaveblock-container">
                <div className="bluewaveblock" >
                    <div className="bluewaveblock-img">
                        <img src={imageUrl} alt=""/>
                    </div>
                    <div className="break"></div>
                    <div className="bluewaveblock-cta">
                        <CallToAction 
                            title={title} 
                            text={text} 
                            buttonUrl={buttonUrl} 
                            buttonText={buttonText} 
                            buttonStyle={buttonStyle}
                        />
                    </div>
                
                </div>
                <div className="bluewaveblock-wave">
                        <Waves 
                            color='light-blue'
                        />
                </div>
            </div>
        </>
    )
}

export default BlueWaveBlock
