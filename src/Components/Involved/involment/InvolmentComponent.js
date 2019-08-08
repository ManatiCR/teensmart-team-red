import React from 'react';
import axios from 'axios';

import { Col, Row } from 'reactstrap';
import Card from 'react-bootstrap/Card';

import Donation from '../../../assets/involved/donation.svg';
import VolunteerBox from '../../../assets/involved/volunteer-1.svg';
import VolunteerTrash from '../../../assets/involved/volunteer-2.svg';
import VolunteerPaint from '../../../assets/involved/volunteer.svg';

import './Involment.css';


class InvolmentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            involvement: []
        }
    };

    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/fellowship-info`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ involvement: res.data });
        });
    }

    render() {
        const { involvement } = this.state.involvement;
        
        return (
            involvement ? involvement.map((item, index) => (
                <Col key={index} md={6} lg={3}>
                    <Card>
                        <Card.Body className="Card-Volunteer">
                            <Card.Title className="Card-Volunteer_card-title"><h3>{item.title}</h3></Card.Title>
                            <div className="Card-Volunteer_img-wrapper">
                                <Card.Img className="Involment_Card-Icon" variant="top" src={`http://teensmartred.tk${item.image_url}`} alt={'volunteer'} />
                            </div>
                            <Card.Text className="Card-Volunteer_Text-P" dangerouslySetInnerHTML={{__html: item.description}}/>
                            <div className="d-flex justify-content-center">
                                <a className={`d-flex align-items-center Card-Volunteer__card-btn--involved-${index % 2 === 0 ? "red" : "blue"}`} href={item.link}>
                                    {item.title}
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )) : null
        )
    }
}

export default InvolmentComponent;