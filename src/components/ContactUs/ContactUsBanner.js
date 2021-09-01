import React from 'react'
import '../../assets/ContactUs/ContactUsBanner.css'
// import CallToAction from "../SharedComponents/CallToAction"
// import Waves from "../SharedComponents/Waves"
import linkedin from "../../images/linkedin.svg"
import discord from "../../images/discord.svg"
import facebook from "../../images/facebook.svg"
import slack from "../../images/slack.svg"

export const ContactUsBanner = () => {
    return (
        <div className="contactusbanner-container">
            <h3>Connect with us on social media!</h3>
            <div className="socialmedia-parent">              
                <a href="https://www.google.com/" className="socialmedia-child">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://www.google.com/" className="socialmedia-child">
                    <img src={discord} alt="discord"/>
                </a> 
                <a href="https://www.google.com/" className="socialmedia-child">
                    <img src={facebook} alt="facebook"/>
                </a> 
                <a href="https://www.google.com/" className="socialmedia-child">
                    <img src={slack} alt="slack"/>
                </a> 
            </div>
            <p>© 2021 Cal Poly SLO CS + Social Good.</p>
        </div>
    )
};
