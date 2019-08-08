import React from 'react';

import { Col, Row, Container } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Teen_logo from '../../assets/header/teen-logo.png';
import Joven_logo from '../../assets/header/logos-03.png';

import IconFb from '../../assets/header/facebook.svg';
import IconInsta from '../../assets/header/instagram.svg';
import IconYoutube from '../../assets/header/youtube-1.svg';
import IconTwitter from '../../assets/header/twitter.svg' ;
import burgerIcon from '../../assets/header/burger-menu.svg';

import EnglishFlag from '../../assets/header/united-states.png';
import SpanishFlag from '../../assets/header/spain.png';

import './header.css';

class NavigatorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    render() {
        return (
<header>
    <Container className="header_container-fullHeader">
      <Row>
        {/* Rows for the logos, icons and languages */}
        <Col className="d-flex justify-content-sm-center" sm={12} md={5} lg={4}>
            <Row>
                <Col className="" xs={7} sm={7} md={8} lg={7}>
                <img className="Navigator__img--teen" src={Teen_logo} alt="Logo" />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                <img className="Navigator__img--joven" src={Joven_logo} alt="Logo" />
                </Col>
            </Row>
        </Col>

        <Col md={1} lg={2}></Col>
        <Col className="Navigator__icons" xs={12} md={5} lg={6}>
            <Row className="d-flex justify-content-lg-end justify-content-xl-end justify-content-start" >
                <Col className="Navigator__icon-top d-flex algin-items-center" xs={2} md={2} lg={2}>
                <div className="FooterComponent__socialLink FooterComponent__socialLink--face">
                      <img src={IconFb} alt="Facebook Logo" />
                      </div>
                </Col>
                <Col className="Navigator__icon-top d-flex algin-items-center" xs={2} md={2} lg={2}>
                <div className="FooterComponent__socialLink  FooterComponent__socialLink--insta">
                      <img src={IconInsta} alt="Instagram Logo" />
                      </div>
                </Col>
                <Col className="Navigator__icon-top d-flex algin-items-center" xs={2} md={2} lg={2}>
                <div className="FooterComponent__socialLink  FooterComponent__socialLink--yt">
                      <img src={IconYoutube} alt="YouTube Logo" />
                      </div>
                </Col>
                <Col className="Navigator__icon-top d-flex algin-items-center" xs={2} md={2}  lg={2}>
                <div className="FooterComponent__socialLink  FooterComponent__socialLink--twitter">
                      <img src={IconTwitter} alt="Twitter Logo" />
                      </div>
                </Col>
                <Col className="d-flex algin-items-center" xs={2} md={4} lg={4}>
                  <div className="Navigator__idiomas d-flex">
                    <h5 className="Navigator__idiomas-ESP"> Español </h5> <h5> | </h5> <h5 className="Navigator__idiomas-ENG"> English</h5>
                  </div>
                </Col>
            </Row>

        </Col>
      </Row>
    </Container>
      {/* Rows for the logos, icons and languages */}

      <Row className="Navbar">
        <Col md={12} lg={12}>
          <div class="Navbar__menu d-flex justify-content-around">

                    <a className="d-flex align-items-center" href="#home">Home</a>

                    <a className="d-flex align-items-center" href="#news">About Teensmart</a>

                    <a className="d-flex align-items-center" href="#contact">Volunteer</a>

                    <a className="d-flex align-items-center" href="#about">Get Involved</a>

                    <a className="d-flex align-items-center" href=""> Our work</a>

                    <a className="d-flex align-items-center" href=""> News</a>

                    <a className="d-flex align-items-center Navbar__menu-btn--donate" href=""> DONATE </a>

          </div>
        </Col>
      </Row>

{/* <!-- Simulate a smartphone / tablet --> */}
<div className="Mobile_Navbar">
    <Navbar color="faded" light>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <NavbarBrand href="/" className="">
              <a className="d-flex align-items-center Navbar__menu-btn--donate" href=""> DONATE </a>
              </NavbarBrand>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="Mobile_Navbar-items" navbar>
                  {/* <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink className="d-flex align-items-center">
                    Home
                    </NavLink>
                    <NavLink className="d-flex align-items-center">
                    About Teensmart
                    </NavLink>
                    <NavLink className="d-flex align-items-center">
                     Volunteer
                    </NavLink>
                    <NavLink className="d-flex align-items-center">
                    Get Involved
                    </NavLink>
                    <NavLink className="d-flex align-items-center">
                      Our work
                    </NavLink>
                    <NavLink className="d-flex align-items-center">
                    News
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
</header>
        );
    }
}





export default NavigatorComponent;
