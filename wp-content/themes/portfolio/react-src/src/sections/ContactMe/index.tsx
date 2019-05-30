import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import SectionIntro from '../../components/SectionIntro/SectionIntro'
import ContactMeForm from '../../components/ContactMe/Form'
import ContactMeWidget from '../../components/ContactMe/Widget'
import './index.scss'

interface Props {
    className?: string
}

class ContactMe extends React.Component<Props, {}> {
    render() {
        return (
            <section className={this.props.className}>
                <SectionIntro
                    subHeading="Contact"
                    heading="Get In Touch"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint quibusdam unde quia doloremque eius architecto labore. Asperiores ab at ratione corrupti deserunt. Pariatur, facilis harum odio est aliquam maiores?"
                />
                <Container>
                    <Row>
                        <Col md={7} sm={12}>
                            <ContactMeForm></ContactMeForm>
                        </Col>
                        <Col md={5} sm={12}>
                            <ContactMeWidget></ContactMeWidget>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default ContactMe;