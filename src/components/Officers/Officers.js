import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerBanner from './OfficerBanner';
import OfficerLayout from './OfficerLayout';
import srirag_photo from "../../images/srirag.jpg";
import '../../assets/Officers/Officers.css';

export default function Officers() {
    const cards = [
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "example.com",
            photo: srirag_photo,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
    ]

    return (
        <div className="officers">
            <OfficerBanner/>
            <OfficerLayout cardInfo={cards}/>
        </div>
    )
}
