import React from 'react'
import '../../assets/ContactUs/ContactUsBanner.css'
import CallToAction from "../SharedComponents/CallToAction"
import Waves from "../SharedComponents/Waves"
import linkedin from "../../images/linkedin.svg"
import discord from "../../images/discord.svg"
import facebook from "../../images/facebook.svg"
import slack from "../../images/slack.svg"

export const ContactUsBanner = () => {
    return (
        <div className="contactusbanner-container">
            <h3>Connect with us on social media!</h3>
            <div className="socialmedia-parent">              
                <a href="#" className="socialmedia-child">
                    <img src={linkedin}/>
                </a>
                <a href="#" className="socialmedia-child">
                    <img src={discord}/>
                </a> 
                <a href="#" className="socialmedia-child">
                    <img src={facebook}/>
                </a> 
                <a href="#" className="socialmedia-child">
                    <img src={slack}/>
                </a> 
            </div>
            <p>© 2021 Cal Poly SLO CS + Social Good.</p>
        </div>
    )
};

