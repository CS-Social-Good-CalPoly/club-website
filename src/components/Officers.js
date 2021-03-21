import React from 'react'
import '../assets/Officers.css';
import OfficerCard from './OfficerCard';
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
            <OfficerCard link='www.example.com' url= {srirag_photo} name="Srirag Vuppala" title="Community Officer" email="srirag@gmail.com" alt="Photo of Srirag" />
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
        </>
    )
    
}


export default final 
