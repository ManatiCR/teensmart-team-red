import React from 'react';

import { Row, Col, Container, Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

import './AboutComponent.css'

export default function AboutComponent() {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs="12" md="6" lg="4" className="AboutComponent__cardCol">
                        <Card body outline color="secondary" className="AboutComponent__card">
                            <CardHeader>
                                <h4>
                                    What we do?
                                </h4>
                            </CardHeader>

                            <CardBody>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, mi etiam lacus aliquam taciti nunc scelerisque pretium, praesent bibendum et lacinia vivamus nibh.
                                </CardText>
                            </CardBody>

                            <CardFooter><a href="#">Check out our work >></a></CardFooter>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4" className="AboutComponent__cardCol">
                        <Card body outline color="secondary" className="AboutComponent__card_center">
                            <CardHeader>
                                <h4>
                                    Why we do it?
                                </h4>
                            </CardHeader>

                            <CardBody>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, mi etiam lacus aliquam taciti nunc scelerisque pretium, praesent bibendum et lacinia vivamus nibh.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" lg="4" className="AboutComponent__cardCol">
                        <Card body outline color="secondary" className="AboutComponent__card">
                            <CardHeader>
                                <h4>
                                    What lives we impact?
                                </h4>
                            </CardHeader>

                            <CardBody>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, mi etiam lacus aliquam taciti nunc scelerisque pretium, praesent bibendum et lacinia vivamus nibh.
                                </CardText>
                            </CardBody>

                            <CardFooter>
                                If you know someone that fit's this profile, 
                                <a href="#">
                                    {' '}let them know about JovenSalud.net >>
                                </a>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}