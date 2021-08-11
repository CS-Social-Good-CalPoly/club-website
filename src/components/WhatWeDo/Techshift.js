import React from 'react'
import '../../assets/WhatWeDo/Techshift.css'

const TechShift = ({imageUrl}) => {
    return (
        <>
            <div className="tsa">
                <div className="tsa-left">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="tsa-right">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies. tempor, tortor ultricies. tempor, tortor ultricies.
                    </p> 
                </div>
            </div>
        </>
    )
}

export default TechShift;
