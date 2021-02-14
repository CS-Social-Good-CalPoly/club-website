import React from 'react'
import '../assets/OfficerCard.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function OfficerCard() {
    return (
        <div className='card' style={ { borderBottom: 'none' } }>
            <Card style={{ width: '15rem', border: 'none' }}>
                {/* open a new page */}
                {/* <Card.Link target='_blank' href={'https://www.linkedin.com'}> */}
                {/* redirect current page */}
                <Card.Link href={'https://www.linkedin.com'}>
                    <Card.Img id='officer-pic' variant='top' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'/>
                </Card.Link>
                <Card.Body>
                    <Card.Title id='name'>Officer Name</Card.Title>
                    <Card.Subtitle id='position'>Officer Position</Card.Subtitle>
                    <Card.Text id='email'>Email</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OfficerCard;