import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Services.scss'
import SectionIntro from '../../components/SectionIntro/SectionIntro.tsx'
import { api } from '../../api';


class Services extends React.Component {

    state = {
        services: []
    }

    async fetchServices() {
        let { data } = await api.get('services');
        this.setState({ services: data });
    }

    async componentWillMount() {
        await this.fetchServices()
    }

    generateCardCols() {
        return this.state.services.map(service => {
            return (
                <Col lg={4} md={6} xs={12} key={service.id}>
                    <div className="service">
                        <i className={`${service.iconClasses}`}></i>
                        <h4>{service.title}</h4>
                        <p>{service.text}</p>
                    </div>
                </Col>
            )
        })
    }

    render() {
        return (
            <section className="section text-center">
                <Container>
                    <Col xs={12}>
                        <SectionIntro
                            subHeading="What I Do"
                            heading="My Services"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iste quaerat, repellat consectetur sapiente delectus debitis facilis ad cum quia explicabo, eos laborum eligendi vel commodi distinctio expedita tempore aliquid?"
                        />
                    </Col>
                    <Row>
                        {this.generateCardCols()}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Services;