import React from 'react'
import '../../assets/SharedAssets/Footer.css'
import linkedin from "../../images/linkedin.svg"
import discord from "../../images/discord.svg"
import facebook from "../../images/facebook.svg"
import slack from "../../images/slack.svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h3>Connect with us on social media!</h3>
                <div className="socialmedia-parent">
                    <a href="#" className="socialmedia-child">
                        <img src={linkedin}/>
                    </a>
                    <a href="#" className="socialmedia-child">
                        <img src={discord}/>
                    </a>
                    <a href="https://www.facebook.com/CSSGCalPoly/" className="socialmedia-child">
                        <img src={facebook}/>
                    </a>
                    <a href="#" className="socialmedia-child">
                        <img src={slack}/>
                    </a>
                </div>
                <p>© 2021 Cal Poly SLO CS + Social Good.</p>
            </div>
            <h3>Connect with us on social media!</h3>
            <div className="socialmedia-parent">
                {/* <a href="#" className="socialmedia-child">
                    <img src={linkedin}/>
                </a> */}
                <a href="#" className="socialmedia-child">
                    <img src={discord}/>
                </a>
                <a href="https://www.facebook.com/CSSGCalPoly/" className="socialmedia-child">
                    <img src={facebook}/>
                </a>
                <a href="#" className="socialmedia-child">
                    <img src={slack}/>
                </a>
                <a href="https://www.instagram.com/calpoly.cssg/" className="socialmedia-child">
                    <img src={instagram}/>
                </a>
                <a href="#" className="socialmedia-child">
                    <img src={linktree}/>
                </a>
            </div>
            <p>© 2021 Cal Poly SLO CS + Social Good.</p>
        </div>
    )
}

export default Footer;
