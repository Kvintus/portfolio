import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import './AboutMe.scss'
import Button from './../../components/Misc/BasicButton/BasicButton'
import {api} from '../../api';

class AboutMe extends React.Component {
    state = {
        info: {
            phone: "",
            email: "",
            location: "",
            year_of_birth: 1999,
        },
        heading: "",
        text: ""
    }

    calculateAge() {
        return (new Date().getFullYear()) - this.state.info.year_of_birth;
    }

    async fetchData() {
        let {data} = await api.get('section/about-me');
        this.setState({...data});
    }

    async componentWillMount() {
        await this.fetchData();
    }

    render() {
        console.log(this.calculateAge());
        
        return (
            <section className={this.props.className}>
                <Container>
                    <Row>
                        <Col md={5} xs={12}>
                            {/* Image */}
                            <div className="about-me-image">
                                <img src={require('./about.png')} alt="me"/>
                            </div>
                        </Col>
                        <Col className="about-me-description" md={7} xs={12}>
                            {/* About Me */}
                            <h4>About Me</h4>
                            <h3>{this.state.heading}</h3>
                            <p>{this.state.text}</p>
                            <Row>
                                <Col md={6}>
                                    <div className="about-info">
                                        <span><i className="fas fa-phone"></i>Phone</span>{this.state.info.phone}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-info">
                                        <span><i className="fas fa-at"></i>Email</span>{this.state.info.email}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-info">
                                        <span><i className="fa fa-map-marker-alt"></i>Location</span>{this.state.info.location}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-info">
                                        <span><i className="far fa-calendar-alt"></i>Age</span>{this.calculateAge()}
                                    </div>
                                </Col>
                            </Row>
                            <Button text="Download Resume" atClick={() => {console.log('hi9')}}></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default AboutMe