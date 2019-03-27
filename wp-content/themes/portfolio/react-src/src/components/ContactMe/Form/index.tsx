import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import Button from '../../Misc/BasicButton/BasicButton';
import './Form.scss'
import BasicButton from '../../Misc/BasicButton/BasicButton';

class ContactForm extends React.Component {
    render() {
        return (
            <Form className="contact-me-form">
                <Row>
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Control placeholder="Name"/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Control placeholder="Email"/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Control placeholder="Subject"/>
                        </Form.Group>
                    </Col>
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Your message..."/>
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