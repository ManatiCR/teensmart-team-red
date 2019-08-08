import React from 'react';

import InvolmentComponent from "./involment/InvolmentComponent";

import { Row, Container } from 'reactstrap';

import './involment/Involment.css';



class TitleInvolvedComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    };

    render() {
  return(
      <div className="">
            <Container>
                <div className="Section_TitleInvolved">
                    <h2>How to get involved?</h2>
                    <Row className="Card-Volunteer">
                        <InvolmentComponent></InvolmentComponent>
                    </Row>
                </div>
            </Container>
      </div>


  )
    }
}


export default TitleInvolvedComponent;