import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import FlipMove from 'react-flip-move'
import './MyWork.scss'
import {api} from './../../api'

import SectionInro from '../../components/SectionIntro/SectionIntro';
import WorkCard, {Project} from '../../components/WorkCard/WorkCard' 
import Filter from '../../components/MyWork/Filter'

interface Props {
    className?: string
}

interface FilterType {
    active: string
    items: string[]
}

interface State {
    projects: Project[]
    filters: {
        backend: FilterType
        [key: string]: FilterType;
    }
}

class MyWork extends React.Component<Props, State> {
    state: State = {
        projects: [],
        filters: {
            backend: {
                items: ['All', 'Node', 'PHP', 'Go'],
                active: "All"
            }
        }
    }

    async componentWillMount() {
        let {data} = await api.get('projects');
        this.setState({projects: data});
    }

    generateWorkCards() {
        return this.state.projects.map(project=> {
            if (this.state.filters.backend.active === "All" || project.technologies.includes(this.state.filters.backend.active)) {
                return (
                    <Col lg={4} md={6} xs={12} key={project.name}>
                        <WorkCard project={project}/>
                    </Col>
                )
            }
        })
    }

    changeActiveFilter(side: string, filter: string) {
        this.setState(state => (state.filters[side].active = filter, state))
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
                    <Filter
                        technologies={this.state.filters.backend.items} 
                        onChange={(filter) => this.changeActiveFilter('backend', filter)}
                        active={this.state.filters.backend.active}
                    />
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