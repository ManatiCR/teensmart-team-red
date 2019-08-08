import React from 'react';
import axios from 'axios';

import { Card, CardFooter, CardBody, CardText } from 'reactstrap';

import './TestimoniesComponent.css';

class TestimoniesComponents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testimony: []
        }
    };

    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/testimonies`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ testimony: res.data });
        });
    }

    render() {
        const { testimony } = this.state.testimony;

        return (
            testimony ? testimony.map((item, index) => (
                <Card key={index} className="TestimoniesComponent__cardQuote">
                    <CardBody>
                        <CardText dangerouslySetInnerHTML={{ __html: item.description }}/>
                    </CardBody>

                    <CardFooter className="TestimoniesComponent__cardAuthor"> {item.title} </CardFooter>
                </Card>
            )) : null
        )
    }
}

export default TestimoniesComponents;