import React, {useState} from 'react'
import '../../assets/SharedAssets/Nav.css';
import logoDesktop from '../../images/CSSG.svg';
import menu from '../../images/menu_24px.svg';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className="nav-bar">
                <li style={{'listStyle': 'none'}}>
                    <Link to="/">
                        <img
                            className="logo"
                            src={logoDesktop}
                            alt="temp-logo"
                        />
                    </Link>
                </li>
                <ul className="nav-links"
                    style={{transform: open ? "translateY(0px)" : ""}}
                    onClick={() => setOpen(!open)}>
                    {/*<li><Link to ="/WhatWeDo">What We Do</Link></li>*/}
                    <li className="spacer"/>
                    <li><Link to="/Projects">Project</Link></li>
                    <li><Link to="/Calendar">Calendar</Link></li>
                    <li><Link to="/Officers">Officers</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    {/*<li><img src={menu} alt="Logo"/></li>*/}
                </ul>
                {/* <li></li> */}
                <li style={{'listStyle': 'none'}}><img onClick={() => setOpen(!open)} className="burger" src={menu}
                                                        alt="menu"/></li>
            </nav>
        </div>
    )
}
