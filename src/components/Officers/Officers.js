import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerCard from './OfficerCard';
import srirag_photo from '../../images/srirag.jpg';
import Footer from '../SharedComponents/Footer';

export default function Officers() {
    return (
        <div>      
            <OfficerCard 
            link='www.example.com' url= {srirag_photo} name="Srirag Vuppala" title="Community Officer" email="@gmail.com" alt="Photo of Srirag" 
            />
            <Footer/>
        </div>
    )
}
