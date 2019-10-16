import React, { Component } from "react";
import "./SingleProject.scss";
import { Container, Row, Col } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import { api } from "../../api";
import { ProjectsStore } from "../../stores/Projects";
import { toJS } from "mobx";
import Gallery from "react-grid-gallery";

import { Project, Technology } from "../../stores/Projects";
import Technologies from "./Technologies/Technologies";

interface Props {
    ProjectsStore?: ProjectsStore;
}

interface GalleryItem {
    src: string;
    thumbnail: string;
    caption?: string;
}

interface State {
    project?: Project;
    images: GalleryItem[];
}

const IMAGES = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
            "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
            "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
            "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg"
    }
];

@inject("ProjectsStore")
@observer
export class SingleProject extends Component<Props, State> {
    state: State = {
        project: null,
        images: []
    };

    async componentWillMount() {
        let proj = this.props.ProjectsStore!.currentProject
        
        this.setState({
            project: proj
        });
    }
    render() {
        if (this.props.ProjectsStore!.currentProject == undefined) {
            return <div />;
        }
        return (
            <div>
                {/* Header Video */}
                <div className="single-project-header">
                    <iframe
                        className="single-project-video"
                        src={this.state.project.video.length ? this.state.project.video : 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    />
                </div>
                <div className="project-container">
                    <div className="project-body">
                        <Row>
                            <Col md={12} xl={10}>
                                <h1 className="project-heading">
                                    {this.state.project.name}
                                </h1>
                                <h3>Intro</h3>
                                <p>{this.state.project.intro}</p>
                                <h3>Description</h3>
                                <p>{this.state.project.description}</p>
                                {/* TODO: Gallery */}
                                <h3>Showcase</h3>
                                <Gallery
                                    rowHeight={130}
                                    showLightboxThumbnails={true}
                                    enableImageSelection={false}
                                    images={this.state.project.images}
                                />
                                ,
                            </Col>
                            <Col className="project-sidebar" md={12} xl={2}>
                                <Technologies
                                    technologies={
                                        this.state.project.technologies
                                    }
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProject;
