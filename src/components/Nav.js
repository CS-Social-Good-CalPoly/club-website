import React from 'react'
import '../assets/Nav.css';
import imager from '../images/logo-placeholder-1.png';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div>
            <nav className = "nav-bar">
                <img src= {imager} alt="temp-logo" />
                <ul className="nav-links">
                    <Link to = "/WhatWeDo">
                        <li>What We Do</li>
                    </Link>
                    <Link to = "/Projects">
                        <li>Projects</li>
                    </Link>
                    <Link to = "/Officers">
                        <li>Officers</li>
                    </Link>
                    <Link to = "/Calendar">
                        <li>Calendar</li>
                    </Link>
                    <Link to = "/Contact">
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
