import React from 'react'
import '../assets/Officers.css';
import Card from './OfficerCard';
import srirag_photo from '../images/srirag.jpg';

// export default function Officers() {
//     return (
//         <div>
//             <h3>Hello Officers</h3>
//         </div>
//     )
// }

const Officers = () => {
    return (
        <div>
            <h3>Part - 1</h3>
            <Card link='www.example.com' url= {srirag_photo} name="Srirag Vuppala" title="Community Officer" email="srirag@gmail.com" alt="Srirag"></Card>
            {/* <img className="logo" src= {srirag_photo} alt="temp-logo" />  */}
        </div>
    )
}
const Bleh = () => {
    return (
        <div>
            <h3>Part - 2</h3>
        </div>
    )
    
}
const final = () => {
    return(
        <>
        <Officers />
        <Bleh />
        <Card />

        </>
    )
    
}


export default final 
