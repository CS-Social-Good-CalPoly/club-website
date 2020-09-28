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
                    <Link to = "/Home">
                        <li>Home</li>
                    </Link>
                    <Link to = "/Team">
                        <li>Team</li>
                    </Link>
                    <Link to = "/Projects">
                        <li>Projects</li>
                    </Link>
                    <Link to = "/Contact">
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
