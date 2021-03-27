import React from 'react'
import '../../assets/WhatWeDo/WhiteBlock.css'
import CallToAction from "../SharedComponents/CallToAction"

const WhiteBlock = ({ imageUrl, title, text, buttonUrl, buttonText, buttonStyle }) => {
    return (
        <div className="whiteblock" >
            <div className="whiteblock-cta">
                <CallToAction 
                    title={title} 
                    text={text} 
                    buttonUrl={buttonUrl} 
                    buttonText={buttonText} 
                    buttonStyle={buttonStyle}
                />
            </div>
            <div className="whiteblock-img">
                <img src={imageUrl} alt=""/>
            </div>
        </div>
    )
}

export default WhiteBlock
