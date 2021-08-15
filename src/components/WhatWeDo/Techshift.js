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
                    {/* We are partned with the Tech Shift Alliance, an organization that strives to empower students in using technology to serve our community. */}
                    </p> 
                </div>
            </div>
        </>
    )
}

export default TechShift;
