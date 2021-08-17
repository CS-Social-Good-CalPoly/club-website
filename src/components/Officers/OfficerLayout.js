import React from 'react'
import OfficerCard from './OfficerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../assets/Officers/OfficerLayout.css'

const OfficerLayout = ({cardInfo}) => {

    return (
        <div>
            <Container>
                    <div className="officer-layout-container">
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
                    </div>
            </Container>
        </div>
    )
}

export default OfficerLayout;
