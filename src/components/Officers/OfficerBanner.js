import React from 'react'
import '../../assets/Officers/Officers.css';
import OfficerBanner from './OfficerBanner';
import OfficerCard from './OfficerCard';
import srirag_photo from '../../images/srirag.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Officerbanner = () => {
    return (
        <div>
            <OfficerBanner
            />
        </div>
    )
}
const Officers = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><OfficerCard 
                        link="example.com"
                        photo={srirag_photo} 
                        name="Srirag Vuppala" 
                        title="Community Officer" 
                        email="@gmail.com" 
                        alt="Photo of Srirag" 
                    /></Col>
                    <Col>
                        <OfficerCard 
                            link="example.com"
                            photo={srirag_photo} 
                            name="Srirag Vuppala" 
                            title="Community Officer" 
                            email="@gmail.com" 
                            alt="Photo of Srirag" 
                        />
                    </Col>
                    <Col>
                        <OfficerCard 
                            link="example.com"
                            photo={srirag_photo} 
                            name="Srirag Vuppala" 
                            title="Community Officer" 
                            email="@gmail.com" 
                            alt="Photo of Srirag" 
                        />
                    </Col>
                </Row>
            </Container>
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
        <Officerbanner/>
        <Officers />
        <Bleh />
        </>
    )
    
}

export default final;
