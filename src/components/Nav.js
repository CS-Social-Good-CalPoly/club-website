import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div>
            <nav className = "nav-bar">
                <h3>Logo</h3>
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
