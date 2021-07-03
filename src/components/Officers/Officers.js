import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerCard from './OfficerCard';
import OfficerBanner from './OfficerBanner';
import srirag_photo from '../../images/srirag.jpg';
import BlueWaveBlock from '../WhatWeDo/BlueWaveBlock';

const Banner = () => {
    return (
        <OfficerBanner></OfficerBanner>
    )
}

const Officers = () => {
    return (
        <div>
            <h3>Part - 1</h3>
            <OfficerCard 
                link="example.com"
                photo={srirag_photo} 
                name="Srirag Vuppala" 
                title="Community Officer" 
                email="@gmail.com" 
                alt="Photo of Srirag" 
            />
        </div>
    )
}
const Bleh = () => {
    return (
        <div>
            <h3>Part - 2</h3>
        </div>
    )
    
}
const final = () => {
    return(
        <>
        <Banner />
        <Officers />
        <Bleh />
        </>
    )
    
}


export default final 
