import React from 'react'
import '../../assets/ContactUs/Contact.css';
import { ContactUsBanner } from './ContactUsBanner';

const Contact = () => {
    return (
        <div>
            <h3>Contact us</h3>
        </div>
    )
}

const Banner = () => {
    return (
        <ContactUsBanner></ContactUsBanner>
    )
}

const final = () => {
    return(
        <>
        <Contact />
        <Banner />
        </>
    ) 
}


export default final;