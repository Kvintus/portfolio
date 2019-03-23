import React from 'react'
import Divider from "../../components/ParallaxDivider/ParallaxDivider";
import { Col, Row, Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import TestimonialCard, { Testimonial } from '../../components/Testimonials/TestimonialCard'
import { api } from '../../api';
import './Testimonials.scss'

interface State {
    testimonials: Testimonial[]
}

class Testimonials extends React.Component<{}, State> {
    state = {
        testimonials: []
    }

    async componentWillMount() {
        let { data } = await api.get('testimonials');
        this.setState({ testimonials: data })
    }

    renderCarousel() {
        if(this.state.testimonials.length) {
            return (
                <OwlCarousel
                    loop
                    margin={30}
                    nav={true}
                    items={3}
                    >
                    {
                        this.state.testimonials.map((testimonial: Testimonial) => {
                            return (
                                    <div className="item" key={testimonial.name}>
                                        <TestimonialCard testimonial={testimonial}/>
                                    </div>
                                )
                            })
                        }
                </OwlCarousel>
            )
        }
    }

    render() {
        console.log(this.state.testimonials)
        return (
            <Divider
                image="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
            >
                <Container className="testimonials-wrapper">
                    <Row>
                        <Col md={12}>
                            {this.renderCarousel()}
                        </Col>
                    </Row>
                </Container>
            </Divider>
        )
    }
}

export default Testimonials