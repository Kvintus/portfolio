import React, { Component } from 'react'
import './SingleProject.scss';
import { Container, Row, Col } from 'react-bootstrap'
import {inject, observer} from 'mobx-react';
import {api} from '../../api';
import {ProjectsStore} from '../../stores/Projects';
import {toJS} from 'mobx';
import {Project, Technology} from '../../stores/Projects'

import Technologies from './Technologies/Technologies'

interface Props {
    ProjectsStore?: ProjectsStore
}

interface State {
    project?: Project
}


@inject('ProjectsStore')
@observer
export class SingleProject extends Component<Props, State> {
    state: State ={
        project: null
    }

    async componentWillMount() {
        this.setState(
            { project: await this.props.ProjectsStore!.getProject('horus') }
        );
    }
    render() {
        if (!this.state.project) {
            return <div/>
        }
        return (
            <div>
                {/* Header Video */}
                <div className="single-project-header">
                    <iframe className="single-project-video" src="https://www.youtube.com/embed/xC8CGv1CyFk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>
                <div className="project-container">
                    <h1 className="project-heading">{this.state.project.name}</h1>
                    <div className="project-body">
                        <Row>
                            <Col xs={12} md={10}>
                                <h3>Intro</h3>
                                <p>{this.state.project.intro}</p>
                                
                                <h3>Description</h3>
                                <p>{this.state.project.description}</p>
                                {/* TODO: Gallery */}
                            </Col>
                            <Col xs={12} md={2}>
                                <Technologies technologies={this.state.project.technologies}></Technologies>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProject
