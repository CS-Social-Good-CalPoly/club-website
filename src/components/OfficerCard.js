import React from 'react'
import '../assets/OfficerCard.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OfficerCard(props) {
    return (
        <div className='card' style={ { borderBottom: 'none' } }>
            <Card style={{ width: '15rem', border: 'none' }}>
                {/* open a new page */}
                {/* <Card.Link target='_blank' href={props.link}> */}
                {/* redirect current page */}
                <Card.Link href={props.link}>
                    <Card.Img id='officer-pic' variant='top' src={props.url}/>
                </Card.Link>
                <Card.Body>
                    <Card.Title id='name'>{props.name}</Card.Title>
                    <Card.Subtitle id='position'>{props.title}</Card.Subtitle>
                    <Card.Text id='email'>{props.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OfficerCard;