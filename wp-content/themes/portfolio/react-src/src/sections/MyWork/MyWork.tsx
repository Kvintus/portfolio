import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './MyWork.scss'

import SectionInro from '../../components/SectionIntro/SectionIntro';
import WorkCard, {Project} from '../../components/WorkCard/WorkCard' 

interface Props {
    className?: string
}

interface State {
    projects: Project[]
}

class MyWork extends React.Component<Props, State> {
    state: State = {
        projects: [
            {
                name: "Horus",
                categories: ['Python', 'Vue']
            },
            {
                name: "Moje Sidlo",
                categories: ['WordPress']
            },
            {
                name: "Unicorn",
                categories: ['Laravel', 'Vue', 'PHP']
            }
        ]
    }

    generateWorkCards() {
        return this.state.projects.map(project=> {
            return (
                <Col lg={4} md={6} xs={12} key={project.name}>
                    <WorkCard project={project}/>
                </Col>
            )
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                <SectionInro
                    subHeading="work"
                    heading="My Work"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere."
                />
                <Container>
                    <Row>
                       {this.generateWorkCards()}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyWork