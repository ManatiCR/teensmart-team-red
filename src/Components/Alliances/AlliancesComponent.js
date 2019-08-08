import React from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

import './AlliancesComponent.css';

class AlliancesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alliance: []
        }
    };

    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/alliances`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ alliance: res.data });
        });
    }

    render() {
        const { alliance } = this.state.alliance;

        return (
            alliance ? (
                <Col>
                    <Row className="Alliances_RowImg">
                        {alliance.map((item, index) =>
                            <Col key={index} xs="12" sm="6" className="Alliances_Card">
                                <div className="Alliances_CardWrapper">
                                    <div className="Alliances_ImgWrapper">
                                        <img  src={`http://teensmartred.tk${item.image_url}` } alt={item.name} />
                                    </div>
                                    <div>{item.title}</div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Col>
            )  : null
        )
    }
}

export default AlliancesComponent;