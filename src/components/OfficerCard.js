import React from 'react'
import '../assets/OfficerCard.css';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imager from '../images/CSSG.png';

function OfficerCard(props) {
    /**
     * props
     *  url: image url
     *  alt: alternative text for image
     *  name: Name of Person
     *  title: Title within club
     *  email: Email address
     *  link: Linkedin URL
     */


    return (
        <>
        <div className='card' style={ { borderBottom: 'none' } }>
            <Card style={{ width: '15rem', border: 'none' }}>
                <Card.Link href={props.link}>
                    {/* Need to figure out a way to overlay the linkedin logo on the image */}
                    <Card.Img as={Image} id='officer-pic' variant="top" fluid={true} src={props.url} alt={props.alt} rounded/>
                </Card.Link>
                <Card.Body>
                    <Card.Title id='name'>{props.name}</Card.Title>
                    <Card.Subtitle id='position'>{props.title}</Card.Subtitle>
                    <Card.Text id='email'>{props.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default OfficerCard;