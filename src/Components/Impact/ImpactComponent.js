import React from 'react';

import SchoolComponent from "./Schools/SchoolsComponent";
import TestimoniesComponent from "./Testimonies/TestimoniesComponent";

import { Row, Col, Container } from 'reactstrap';

import './ImpactComponent.css';

import MapImage from '../../assets/impact/map.png';

export default function ImpactComponent() {
    return(
        <section>
            <Container>
                <h2 className="ImpactComponent__impactTitle">Our Impact</h2>
                <Row>
                    <Col sm="hidden" md="6" style={{backgroundImage: `url(${MapImage})`}} className="ImpactComponent__mapImg"> 
                    </Col>
                    <Col>
                        <h3>What they say about us?</h3>
                        <TestimoniesComponent/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="ImpactComponent__wrapperSchools">
                            <SchoolComponent/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}