import React from 'react'
import OfficerCard from './OfficerCard';
import srirag_photo from '../../images/srirag.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OfficerLayout = () => {
    return (
        <div>
            <Container>
                <Row>
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

export default OfficerLayout;
