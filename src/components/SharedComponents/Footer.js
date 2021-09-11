import React from 'react'
import '../../assets/SharedAssets/Footer.css'
import discord from "../../images/discord.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import linktree from "../../images/linktree.svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <h3>Connect with us on social media!</h3>
            <div className="socialmedia-parent">
                <a href="https://discord.gg/F5qkNE7rm8" className="socialmedia-child"
                   target="_blank" rel="noopener noreferrer">
                    <img src={discord} alt="discord"/>
                </a>
                <a href="https://www.facebook.com/groups/406614513472946" className="socialmedia-child"
                   target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/calpoly.cssg/" className="socialmedia-child"
                   target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://linktr.ee/csplusgoodcalpoly" className="socialmedia-child"
                   target="_blank" rel="noopener noreferrer">
                    <img src={linktree} alt="linktree"/>
                </a>
                {/* <a href="#" className="socialmedia-child">
                <img src={linkedin}/>
            </a> */}
                {/*<a href="#" className="socialmedia-child">*/}
                {/*    <img src={slack} alt="slack"/>*/}
                {/*</a>*/}
            </div>
            <p>© 2021 Cal Poly SLO CS + Social Good.</p>
        </div>
    )
}

export default Footer;
