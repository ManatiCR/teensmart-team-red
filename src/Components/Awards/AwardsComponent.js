import React from 'react';
import { awaitExpression } from '@babel/types';
import axios from 'axios';
import './AwardsComponent.css';
import { Row, Col, Container } from 'reactstrap';


class AwardsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            award: [0]
        }
    };

    componentDidMount() {
        axios.get(`http://dev-teensmart-team-red.pantheonsite.io:90/api/v1/awards`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log("datos: " + res);
                this.setState({ award: res.data });
            });
    }
    render() {
        const { award } = this.state.award;
        console.log("personas" + this.state.award)
        return (award ? award.map((item, index) => (

            <div key={index}>
                <h1> {item.title}</h1>
                <p> {item.description} </p>
                <p> {item.link} </p>
                <img src={`http://dev-teensmart-team-red.pantheonsite.io:90${item.image_url}`} alt={item.name}></img>
            </div>


        )) : //  Only HTML goes in this area
        <div className = "AwardImageContainer">
        <section className="seccion-awards">
                 <Container>
                <Row className="d-flex justify-content-sm-center">
                    <Col id="parentTitleAward" className="d-flex justify-content-center" xs="12" sm="12"  md="6" lg="10" >
                    <h2 className="AwardComponent__cardTitle">Awards</h2>
                        </Col>
                </Row>
            <Row className = "d-flex justify content-lg-around">
                    <Col xs="12" sm="12" md="3" lg="3" className="AwardComponent__cardCol">
                    <img className="d-flex justify-content-center" className="card-awards-img" src="https://dotcms.com/blog/images/Myplanet%20Logo.png?language_id=1"></img>
                    </Col>
                <Col md={1} lg= {1} ></Col>
                    <Col className="d-flex justify-content-center" xs="12" sm="12" md="3" lg="3" className="AwardComponent__cardCol">
                    <img className="card-awards-img" src="http://gratitude-network.org/wp-content/uploads/2017/02/gratitude_network_logo-blue.png"></img>
                    </Col>
                <Col  md={1}  lg= {1} ></Col>
                    <Col className="d-flex justify-content-center" xs="12" sm="12" md="3" lg="3" className="AwardComponent__cardCol">
                    <img className="card-awards-img" src="https://pieenso.org/platform/images/logo-fundacion_carlos_slim_negro.png"></img>
                    </Col>
            </Row>
            </Container>
        </section>

        </div>

        )
    };
}

export default AwardsComponent;





