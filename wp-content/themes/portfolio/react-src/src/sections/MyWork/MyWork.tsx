import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import FlipMove from 'react-flip-move'
import './MyWork.scss'

import SectionInro from '../../components/SectionIntro/SectionIntro';
import WorkCard, {Project} from '../../components/WorkCard/WorkCard' 

interface Props {
    className?: string
}

interface State {
    projects: Project[]
    activeFilter: String
    filters: String[]
}

class MyWork extends React.Component<Props, State> {
    state: State = {
        projects: [
            {
                name: "Horus",
                categories: ['Python', 'Vue'],
            },
            {
                name: "Moje Sidlo",
                categories: ['WordPress']
            },
            {
                name: "Unicorn",
                categories: ['Laravel', 'Vue', 'PHP']
            },
            {
                name: "Horsus",
                categories: ['Python', 'Vue'],
            },
            {
                name: "Moje sSidlo",
                categories: ['WordPress']
            },
            {
                name: "Unicorsn",
                categories: ['Laravel', 'Vue', 'PHP']
            }
        ],
        activeFilter: "",
        filters: ['All', 'Node', 'PHP', 'Go']
    }

    generateWorkCards() {
        return this.state.projects.map(project=> {
            if (Math.floor(Math.random() * 2)) {
                return (
                    <Col lg={4} md={6} xs={12} key={project.name}>
                        <WorkCard project={project}/>
                    </Col>
                )
            }
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
                <div className="filter text-center">
                    <ul>
                        {
                            this.state.filters.map(filter => {
                                return (
                                    <li
                                        onClick={() => {this.setState({activeFilter: filter})}}
                                        className={this.state.activeFilter === filter ? "active": ''}
                                    >{filter}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                    <Row>
                        <FlipMove typeName={null}>
                            {this.generateWorkCards()}
                        </FlipMove>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MyWork