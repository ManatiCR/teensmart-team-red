import React from 'react';
import axios from 'axios';

import {Col} from 'reactstrap';

import './SchoolsComponent.css';

class SchoolsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            school: []
        }
    };

    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/schools`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ school: res.data });
        });
    }
    
    render() {
        const { school } = this.state.school;
        
        return (
            school ? school.map((item, index) => (
                <Col>
                    <div key={index} className="SchoolsComponent__schoolInvolved">
                        <div className="SchoolsComponent__imgWrapper">
                            <img className="SchoolsComponent__schoolImg" src={`http://teensmartred.tk${item.image_url}` } alt={item.name}></img>
                        </div>
                        <div className="SchoolsComponent__schoolText"> {item.title} </div>
                    </div>
                </Col>
            )) : null
        )           
    }
}

export default SchoolsComponent;