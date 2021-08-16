import React from 'react'
import OfficerCard from './OfficerCard';
import srirag_photo from '../../images/srirag.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OfficerLayout = ({cardInfo}) => {


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            cardInfo &&
                                cardInfo.map((card) => (
                                    <OfficerCard
                                        link={card.link}
                                        photo={card.photo}
                                        name={card.name}
                                        title={card.title}
                                        email={card.email}
                                        alt={card.alt}
                                    />
                                )
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OfficerLayout;
