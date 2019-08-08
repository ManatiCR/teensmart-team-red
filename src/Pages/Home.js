import React from 'react';

import AlliancesComponent from '../Components/Alliances/AlliancesComponent';
import BannerComponent from '../Components/Banner/BannerComponent';
import AwardsComponent from '../Components/Awards/AwardsComponent';
import SocialComponent from '../Components/Social/social';
import AboutComponent from '../Components/About/AboutComponent';
import ImpactComponent from '../Components/Impact/ImpactComponent';
import FooterComponent from '../Components/Footer/FooterComponent';
import TitleInvolvedComponent from '../Components/Involved/TitleinvolvedComponent';
import NavigatorComponent from '../Components/Header/header';
import '../Components/Awards/AwardsComponent.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './mediaqueries.css';
import { Container, Row, Col } from 'reactstrap';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (


            <html>

                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>Your Website</title>
                </head>

                <body>
                    <header>
                        <NavigatorComponent></NavigatorComponent>
                        {/* //bayron      */}

                    </header>

                    <section>
                        {/* //hero baner oscar */}

                        <BannerComponent></BannerComponent>
                    </section>

                    <AboutComponent></AboutComponent>

                    <ImpactComponent></ImpactComponent>

                    <section>
                        {/* //inpact involved marcelo */}

                        <TitleInvolvedComponent></TitleInvolvedComponent>
                    </section>
                    <section className="Alliances_section">
                        {/* //Alliances samantha    <AlliancesComponent></AlliancesComponent>  */}




                        <Container  className="Alliances_Container">
                            <Row className="Alliances_Row">
                                <Col md="12" lg="4" className="Alliances_Text">
                                    <h2>Alliances</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <a className="Alliances_link" href="www.google">See all our allies >></a>
                                </Col>
                               
                                <AlliancesComponent></AlliancesComponent> 
                     
                            </Row>
                        </Container>


                    </section>

                    <section>
                        {<AwardsComponent> </AwardsComponent> }
                    </section>

                    <section>
                        {/* //Social mariana */}
                        <SocialComponent></SocialComponent>
                    </section>

                    <FooterComponent></FooterComponent>


                </body>

            </html>

        )

    }

}


export default HomeComponent;


/*
<InvolmentComponent> </InvolmentComponent>
<AlliancesComponent></AlliancesComponent>
<NewComponent></NewComponent>
<SchoolsComponent></SchoolsComponent>
<BannerComponent></BannerComponent>
<AwardsComponent></AwardsComponent>
<TestimoniesComponent></TestimoniesComponent>

*/