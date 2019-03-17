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
        let {data} = await api.get('about-me');
        this.setState({...data});
    }

    async componentWillMount() {
        await this.fetchData();
    }

    render() {
        console.log(this.calculateAge());
        
        return (
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti quos reprehenderit et a voluptate, maiores alias quo commodi, repellat architecto amet? Laudantium quaerat quibusdam laborum, ullam magnam modi animi.
                Quia ea dolores at voluptatem, nostrum est libero soluta praesentium esse tenetur ullam obcaecati, magnam cumque ex eligendi! Cum exercitationem modi earum tempora recusandae culpa praesentium voluptatum, iste nam doloribus.
                Corporis, voluptatem aut voluptate inventore dicta cumque eligendi nulla impedit laudantium iste omnis ipsum praesentium aspernatur sequi. Itaque facilis corrupti, ipsum eaque dolorem tempore at, amet dicta inventore maxime illum.
                Pariatur possimus ex totam doloremque eaque adipisci eligendi numquam voluptas, accusamus maiores vitae, similique voluptates. Nisi similique minima dicta exercitationem sit totam quasi, saepe non minus. Dolore sed asperiores beatae.
                Dolore, dolorum fugiat? Hic odit ex accusantium eaque quia dicta, quisquam dolores, repellat obcaecati illo, perferendis neque magni asperiores dolorum ducimus? Accusantium obcaecati ipsa ullam praesentium dolor. Consequatur, asperiores temporibus?
                A repellat reiciendis vitae, et quis autem consectetur! Odio deserunt labore minima ea provident esse, non sint, totam nulla quos tenetur. Assumenda, minus? Expedita reiciendis, provident unde soluta aperiam itaque?
                Iusto harum, libero sunt nesciunt eligendi ullam incidunt delectus aliquid beatae? Nihil natus, incidunt adipisci quaerat rem officia maxime deserunt aliquid exercitationem ab inventore officiis, dolorum nisi soluta. Modi, aperiam!
                Autem velit recusandae itaque magnam magni illum nam blanditiis delectus in praesentium laudantium voluptatibus, amet officia, quasi quod sequi nemo quis voluptate dolorem provident dicta esse enim, impedit eveniet! Ipsa!
                Explicabo minus quas cum! Repellendus, commodi consequatur doloremque magnam quasi nostrum molestias odit at, doloribus itaque est nulla! Possimus alias dicta quas repellat voluptatibus. Quasi, nisi? Necessitatibus quis ad consequatur!
                Voluptatum, nesciunt obcaecati, quasi pariatur quo architecto autem sint delectus vitae blanditiis sequi rem voluptate explicabo molestiae! Autem mollitia ut libero rerum voluptate commodi laboriosam harum aspernatur, nobis magnam quod!
            </Container>
        )
    }
}

export default AboutMe