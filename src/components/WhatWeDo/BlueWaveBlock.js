import React from 'react'
import '../../assets/WhatWeDo/BlueWaveBlock.css'
import CallToAction from "../SharedComponents/CallToAction"
import Waves from "../SharedComponents/Waves"

const BlueWaveBlock = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle}) => {
    return (
        <div className="bluewaveblock-main">
            <div className="bluewaveblock-parent">
                <div className="bluewaveblock-child">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="bluewaveblock-child">
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
                <Waves color='light-blue'/>
            </div>
        </div>
    )
}

export default BlueWaveBlock;
