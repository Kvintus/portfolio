import React, { Component } from 'react'
import './SingleProject.scss';
import { Container } from 'react-bootstrap'
import {inject, observer} from 'mobx-react';
import {api} from '../../api';
import {ProjectsStore} from '../../stores/Projects';
import {toJS} from 'mobx';
import {Project} from '../../stores/Projects'

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
            {project: await this.props.ProjectsStore!.getProject('horus')}
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
                    <iframe className="single-project-video" src="https://www.youtube.com/embed/xC8CGv1CyFk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Container className="project-container">
                    <h1 className="project-heading">{this.state.project.name}</h1>


                </Container>
            </div>
        )
    }
}

export default SingleProject
