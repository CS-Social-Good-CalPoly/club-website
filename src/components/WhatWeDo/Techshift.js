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
                    We are partnered with the Tech Shift Alliance, an organization that strives to empower students in using technology to serve our community. Find out more at <a href="https://techshift.org/what-we-do">techshift.org!</a>
                    </p> 
                </div>
            </div>
        </>
    )
}

export default TechShift;
