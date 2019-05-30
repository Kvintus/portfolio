import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Divider from '../../components/ParallaxDivider/ParallaxDivider'
import BasicButton from '../../components/Misc/BasicButton/BasicButton';
import './Available.scss';

const Available = (props: any) => {
    return (
        <Divider
            image="https://images.wallpaperscraft.com/image/laptop_apple_canon_table_73452_1920x1080.jpg"
        >
           <Container className="available-container">
                <Row>
                    <Col lg={12} className="text-center">
                        <h3>Available Freelancer</h3>
                        <BasicButton
                            text="Contact Me"
                        ></BasicButton>
                    </Col>
                </Row>
           </Container> 
        </Divider>
    )
}

export default Available;