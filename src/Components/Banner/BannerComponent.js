import React from 'react';
import axios from 'axios';

import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption, Container, Row, Col } from 'reactstrap';

import './BannerComponent.css';

const items = [{
    src: 'https://i.pinimg.com/474x/76/2d/63/762d63f1c04dc5927ba7b4a5cba05ae9--lush-green-a-walk.jpg'
},
{
    src: 'http://www.socialbid.es/wp-content/uploads/2014/12/importancia-de-la-naturaleza-herbolarios-1024x819.jpg'
},
{
    src: 'https://s1.1zoom.me/b5345/364/Autumn_Forests_Trees_Foliage_555935_1280x1024.jpg'
},
{
    src: 'http://4everstatic.com/imagenes/850xX/naturaleza/paisajes/naturaleza,-casa-de-campo-135765.jpg'
},
{
    src: 'https://c.wallhere.com/photos/ac/7b/nature_trees_forest-142598.jpg!d'
}
];

class BannerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, banner:[] };
        /*this.state = {banner: [],activeIndex: 0};*/
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    };


    componentDidMount() {
        axios.get(`http://teensmartred.tk/api/v1/banner`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.setState({ banner: res.data });
        });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    render() {
        /*const { banner } = this.state.banner;*/
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.altText} /> <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
                </CarouselItem>
            );
        });

        const { banner } = this.state.banner;

        return (
            banner ? banner.map((item, index) => (
                <Container className="Banner_Container">
                    <Row className="Banner_Row">
                        <Col md="12" lg="6" className="Banner_Text">
                            <h2>{item.title}</h2>
                            <p className="banner-description" dangerouslySetInnerHTML={{ __html:item.description}}></p>
                        </Col>
                    <Col md="12" lg="6" className="Banner_Image">
                            <Carousel controls= {false} activeIndex = {activeIndex} next = {this.next} previous = {this.previous}>
                                <CarouselIndicators items = {items} activeIndex = {activeIndex} onClickHandler = {this.goToIndex}/>
                                {slides}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            )) : null
        )
    }
}

export default BannerComponent;