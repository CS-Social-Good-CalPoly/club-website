import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerBanner from './OfficerBanner';
import OfficerLayout from './OfficerLayout';
import placeholder from "../../images/officer_images/placeholder.png"

export default function Officers() {
    const cards = [
        {
            link: "/",
            photo: placeholder,
            name: "David Nguyen",
            title: "President",
            email: "dnguy260@calpoly.edu",
            alt: "Photo of David"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Anushree Parmar",
            title: "Treasurer",
            email: "aaparmar@calpoly.edu",
            alt: "Photo of Anushree"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Kenny Lau",
            title: "Tech VP | RE Cares Lead",
            email: "klau24@calpoly.edu",
            alt: "Photo of Kenny"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Nick Firme",
            title: "Workshop Lead",
            email: "nfirme@calpoly.edu",
            alt: "Photo of Nick"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Sean Sng",
            title: "Newsletter Manager",
            email: "sksng@calpoly.edu",
            alt: "Photo of Sean"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Ria Bhatt",
            title: "Social Media Manager",
            email: "rbhatt01@calpoly.edu",
            alt: "Photo of Ria"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "/",
            photo: placeholder,
            name: "Srirag Vuppala",
            title: "Community Officer",
            email: "@gmail.com",
            alt: "Photo of Srirag"
        },
        {
            link: "/",
            photo: placeholder,
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
