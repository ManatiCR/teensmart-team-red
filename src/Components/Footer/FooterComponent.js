import React from 'react';

import { Row, Col, Container } from 'reactstrap';

import Teen_logo from '../../assets/header/logos-04.png';
import Joven_logo from '../../assets/header/logos-03.png';
import IconFb from '../../assets/header/facebook.svg';
import IconInsta from '../../assets/header/instagram.svg';
import IconYoutube from '../../assets/header/youtube-1.svg';
import IconTwitter from '../../assets/header/twitter.svg' ;

import './FooterComponent.css';

export default function FooterComponent() {
    return(
        <footer>
            <Container fluid={true}>
                <Row>
                    <Col xs={{ size: 11, offset: 1 }}>
                        <Row className="FooterComponent__topWrapper">
                            <Col className="FooterComponent__footerCol" xs="12" md="7">
                                <img src={Teen_logo} alt="TeenSmart Logo" className="FooterComponent__logo FooterComponent__firstLogo"></img>
                                <img src={Joven_logo} alt="Joven Salud Logo" className="FooterComponent__logo"></img>
                            </Col>

                            <Col className="FooterComponent__footerCol">
                                <div>
                                    <div>
                                        <h5 className="FooterComponent__socialTitle">Keep In Touch</h5>
                                        <Row className="FooterComponent__socialWrapper">
                                            <Col xs="auto">
                                                <div className="FooterComponent__socialLink FooterComponent__socialLink--face">
                                                    <img src={IconFb} alt="Facebook Logo" />
                                                </div>
                                            </Col>
                                            
                                            <Col xs="auto">
                                                <div className="FooterComponent__socialLink  FooterComponent__socialLink--insta">
                                                    <img src={IconInsta} alt="Instagram Logo" />
                                                </div>
                                            </Col>
                                            
                                            <Col xs="auto">
                                                <div className="FooterComponent__socialLink  FooterComponent__socialLink--yt">
                                                    <img src={IconYoutube} alt="YouTube Logo" />
                                                </div>
                                            </Col>

                                            <Col xs="auto">
                                                <div className="FooterComponent__socialLink  FooterComponent__socialLink--twitter">
                                                    <img src={IconTwitter} alt="Twitter Logo" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                        <nav>
                            <ul className="FooterComponent__navList">
                                <Row>
                                    <Col xs={12} sm="auto" md="auto" lg="auto">
                                    <Col className="FooterComponent__navItem" xs="12" sm="auto" md="auto">
                                        <li className="FooterComponent__navItem-link">
                                            <a href="#">Contact&nbsp;Us</a>
                                        </li>
                                    </Col>

                                    <Col className="FooterComponent__navItem" xs="12" sm="auto" md="auto">
                                        <li className="FooterComponent__navItem-link">
                                            <a href="#">Volunteer</a>
                                        </li>
                                    </Col>

                                    <Col className="FooterComponent__navItem" xs="12" sm="auto" md="auto">
                                        <li className="FooterComponent__navItem-link">
                                            <a href="#">Get&nbsp;Involved</a>
                                        </li>
                                    </Col>
                                    </Col>
                                </Row>
                            </ul>
                        </nav>

                        <div className="FooterComponent__pageOwner">
                            TeenSmart&nbsp;@&nbsp;2019
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}