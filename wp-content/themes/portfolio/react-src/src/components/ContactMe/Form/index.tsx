import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import Button from '../../Misc/BasicButton/BasicButton';
import './Form.scss'
import BasicButton from '../../Misc/BasicButton/BasicButton';

interface State {
    name: string
    email: string
    subject: string
    message: string
}

type formName = 'name' | 'email' | 'subject' | 'message'

class ContactForm extends React.Component<{}, State> {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    render() {
        return (
            <Form className="contact-me-form">
                <Row>
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Control name="name" value={this.state.name} placeholder="Name" onChange={(e) => {
                                this.setState({name: e.target.value})
                            }}/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Control name="email" placeholder="Email" value={this.state.email} onChange={e => {
                                this.setState({email: e.target.value})
                            }}/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Control name="subject" placeholder="Subject" value={this.state.subject} onChange={e => {
                                this.setState({subject: e.target.value})
                            }}/>
                        </Form.Group>
                    </Col>
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Control name="message" as="textarea" rows="3" placeholder="Your message..." value={this.state.message} onChange={e => {
                                this.setState({message: e.target.value})
                            }}/>
                        </Form.Group>
                    </Col>
                    <Col sm={12}>
                        <Form.Group>
                            <BasicButton text="Send Message"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default ContactForm;