import React from 'react'
import '../../assets/Officers/OfficerCard.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin_logo from '../../images/linkedin-logo.svg';

function OfficerCard(props) {
    /**
     * props
     *  photo: officer's profile pic
     *  alt: alternative text for image
     *  name: officer's name
     *  title: officer's role
     *  email: email address
     *  link: LinkedIn URL
     */
    return (
        <>
            <div className='officer-card' style={ { borderBottom: 'none' } }>
                <Card style={{ width: '13rem', border: 'none' }}>
                    <Card.Link href={props.link}>
                        <Card.Img id='officer-pic' variant='top' src={props.photo} alt={props.alt}/>
                        <Card.Img id='linkedin-logo' src={linkedin_logo}/>
                    </Card.Link>
                    <Card.Title id='name'>{props.name}</Card.Title>
                    <Card.Subtitle id='position'>{props.title}</Card.Subtitle>
                    <Card.Text id='email'>{props.email}</Card.Text>
                </Card>
            </div>
        </>
    );
}

export default OfficerCard;