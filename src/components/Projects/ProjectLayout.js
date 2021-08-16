import React from 'react';
import ProjectCard from './ProjectCard.js';
import photo from '../../images/project-card-default.png';
import {Container, Row, Col} from "react-bootstrap";

const cards = [ 
    {
        'title': 'RE Cares',
        // 'techStack': 'MERN',
        'url': photo,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies.',
        'openApp': "Applications open September 20, 2021"   
    },
    {
        'title': 'Club Website',
        // 'techStack': 'MERN',
        'url': photo,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ipsum, varius congue enim, neque. Tincidunt nisl sit quisque nibh consequat tempor, tortor ultricies.',
        'openApp': "Applications open September 20, 2021"
    }
];

const ProjectLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={5.2} md={5.1}>
                        <ProjectCard 
                            title={cards[0]['title']} 
                            // techStack={cards[0]['techStack']} 
                            url={cards[0]['url']} 
                            description={cards[0]['description']} 
                            openApp="Applications open September 20, 2021"
                        />
                    </Col>
                    <Col sm={5.2} md={5.1}>
                        <ProjectCard 
                            title={cards[1]['title']} 
                            // techStack={cards[1]['techStack']} 
                            url={cards[1]['url']} 
                            description={cards[1]['description']} 
                            openApp="Applications open September 20, 2021"
                        />
                    </Col>
                </Row>
                {/* ---- for testing ----  */}
                {/* <Row>
                    <Col sm={5.2}>
                        <ProjectCard 
                            title={cards[0]['title']} 
                            // techStack={cards[0]['techStack']} 
                            url={cards[0]['url']} 
                            description={cards[0]['description']} 
                            openApp="Applications open September 20, 2021"
                        />
                    </Col>
                    <Col sm={5.2}>
                        <ProjectCard 
                            title={cards[1]['title']} 
                            // techStack={cards[1]['techStack']} 
                            url={cards[1]['url']} 
                            description={cards[1]['description']} 
                            openApp="Applications open September 20, 2021"
                        />
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default ProjectLayout;
