import React from 'react'
import '../assets/Nav.css';
import imager from '../images/CSSG.png';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div>
            <nav className = "nav-bar">
                <li style= {{ 'list-style' : 'none' }}><Link to ="/WhatWeDo"><img className="logo" src= {imager} alt="temp-logo" /></Link></li> 
                <ul className="nav-links">
                    <li><Link to ="/WhatWeDo">What We Do</Link></li>
                    <li><Link to ="/Projects">Project</Link></li>
                    <li><Link to ="/Calendar">Calendar</Link></li>
                    <li><Link to ="/Officers">Officers</Link></li>
                    <li><Link to ="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}
