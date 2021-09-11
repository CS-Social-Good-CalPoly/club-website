import React from 'react'
import '../../assets/SharedAssets/Nav.css';
import logoDesktop from '../../images/CSSG.svg';
// import logoMobile from '../../images/logo-mobile.svg';
import menu from '../../images/menu_24px.svg';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

export default function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className="nav-bar" >
                <li style= {{ 'listStyle' : 'none' }}>
                    <Link to ="/">
                        <img 
                            className="logo" 
                            src= {logoDesktop} 
                            alt="temp-logo" 
                        />
                    </Link>
                </li> 
                <ul className="nav-links" 
                    style={{transform: open ? "translateY(0px)" : ""}} 
                    onClick={()=>setOpen(!open)} >
                    {/*<li><Link to ="/WhatWeDo">What We Do</Link></li>*/}
                    <li className="spacer"></li>
                    <li><Link to ="/Projects">Projects</Link></li>
                    <li>
                        <a href="https://calendar.google.com/calendar/u/8?cid=a3JyY2VmMGY2ZmYwZmVwaDl0NWJyM3RsOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                        Calendar</a>
                    </li>
                    <li><Link to ="/Officers">Officers</Link></li>
                    <li><a href="mailto:csplusgoodcalpoly@gmail.com">Contact Us</a></li>
                    {/*<li><img src={menu} alt="Logo"/></li>*/}
                </ul>
                {/* <li></li> */}
                <li style= {{ 'listStyle' : 'none'}}><img onClick={()=>setOpen(!open)} className="burger" src= {menu} alt="menu" /></li> 
            </nav>
        </div>
    )
}
