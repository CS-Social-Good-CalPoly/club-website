import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerBanner from './OfficerBanner';
import OfficerLayout from './OfficerLayout';
import Footer from '../SharedComponents/Footer';

export default function Officers() {
    return (
        <div>      
            <OfficerBanner/>
            <OfficerLayout/>
            <Footer/>
        </div>
    )
}
