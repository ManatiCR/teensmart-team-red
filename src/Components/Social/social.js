import React from 'react';

import NewsComponent from "./News/NewsComponent";

import { Container, Button, Row, Col } from 'reactstrap';

import './social.css';


class SocialComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    };

    render() {
        return (

            <Container className="social">
                <Row className="row-card-social">

                    <Col className="cards-news" xs="12">
                        <Col className="social-title" >
                            <h1>News</h1>
                        </Col>

                        <Col xs="12" sm="12" md="12" lg="12" xl="12" >
                            <NewsComponent></NewsComponent>
                        </Col>

                        <Col className="social-botton" xs="12" sm="12" md="12" lg="12" xl="12">
                            <Button color="danger"> Read all news> </Button>
                        </Col>

                    </Col>

                    <Col className="card-video">
                        <Col className="social-title" >
                            <h1 >Our YouTube Channel</h1>
                        </Col>

                        <Col className="video" xs="12" sm="12" md="12" lg="12" xl="12">
                            <iframe src="https://www.youtube.com/embed/dM76uMCRPmw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>

                        <Col className="social-botton" xs="12" sm="12" md="12" lg="12" xl="12">
                            <Button color="danger" >Go to our channel > </Button>
                        </Col>

                    </Col>
                </Row>
            </Container>



        )
    }




}


export default SocialComponent;


/*
   <Col className="cards-news" xs="12" sm="12" md="12" lg="5" xl="5">

                        <Col className="social-title" >
                            <h1 >News</h1>
                        </Col>

                        <Col className="news" xs="12" sm="12" md="12" lg="12" xl="12" >

                            <Card className="card-row">
                                <Row>
                                    <Col xs="12" sm="12" md="4" lg="5" xl="5" >
                                        <img width="100%" ClassName="CardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zvqRjbGkXQ74MFfvFtep5YRg2onIMvnIvBLL9rkQQ3Y6la5" alt="Card image cap" />
                                    </Col>
                                    <Col xs="12" sm="12" md="8" lg="7" xl="7">
                                        <CardBody>
                                            <Row className="card-info">
                                                <Col xs="12" sm="12" md="12" lg="12" xl="12" >  <CardTitle className="CardTitle" >Card title</CardTitle>  </Col>
                                                <Col xs="12" sm="12" md="12" lg="12" xl="12" >  <CardText className="CardText" >Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>   </Col>
                                                <Col >  <Button className="button-news" outline color="danger" size="sm" > Leer noticia</Button>  </Col>
                                            </Row>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>

                        </Col>

                        <Col className="social-botton" xs="12" sm="12" md="12" lg="12" xl="12">
                            <Button color="danger" >Read all news > </Button>
                        </Col>

                    </Col>

*/


/*

      <Card className="card-row">
                                <Row>
                                    <Col xs="12" sm="12" md="4" lg="5" xl="5" >
                                        <img width="100%" ClassName="CardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zvqRjbGkXQ74MFfvFtep5YRg2onIMvnIvBLL9rkQQ3Y6la5" alt="Card image cap" />
                                    </Col>
                                    <Col xs="12" sm="12" md="8" lg="7" xl="7">
                                        <CardBody>
                                            <Row className="card-info">
                                                <Col xs="12" sm="12" md="12" lg="12" xl="12" >  <CardTitle className="CardTitle" >Card title</CardTitle>  </Col>
                                                <Col xs="12" sm="12" md="12" lg="12" xl="12" >  <CardText className="CardText" >Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>   </Col>
                                                <Col >  <Button className="button-news" outline color="danger" size="sm" > Leer noticia</Button>  </Col>
                                            </Row>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
*/