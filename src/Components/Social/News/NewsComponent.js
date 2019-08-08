import React from 'react';
import axios from 'axios';

import {
    Container, Card, Button, CardText, Row, Col, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import './NewsComponent.css';

class NewsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    };

    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/news`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ news: res.data });
        });
    }

    render() {
        const { news } = this.state.news;
        
        return (
            news ? news.map((item, index) => (
                <Card className="NewsComponent__newsCard" key={index}>
                    <Row>
                        <Col className="NewsComponent__imgWrapper" xs="12" md="4" lg="5">
                            <div className="NewsComponent__newsImg" style={{backgroundImage: `url(http://teensmartred.tk${item.image_url})`}}/>
                        </Col>

                        <Col className="NewsComponent__textWrapper">
                            <CardBody>
                                <CardTitle> 
                                    <h5> {item.title} </h5> 
                                </CardTitle>
                                <CardText dangerouslySetInnerHTML={{ __html:item.description}} />
                                <div className="NewsComponent__buttonWrapper">
                                    <Button outline color="danger" size="sm">Leer noticia</Button>
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            )) : null
        )
    }
}

export default NewsComponent;