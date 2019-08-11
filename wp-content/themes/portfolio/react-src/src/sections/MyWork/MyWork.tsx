import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import FlipMove from "react-flip-move";
import { api } from "./../../api";

import "./MyWork.scss";
import SectionInro from "../../components/SectionIntro/SectionIntro";
import WorkCard from "../../components/WorkCard/WorkCard";
import { Project, ProjectsStore } from "../../stores/Projects";
import Filter from "../../components/MyWork/Filter";
import SingleProject from "../../components/SingleProject/SingleProject";

interface Props {
    className?: string;
    id?: string;
    ProjectsStore?: ProjectsStore;
}

interface FilterType {
    active: string;
    items: string[];
}

interface State {
    projects: Project[];
    filters: {
        backend: FilterType;
        [key: string]: FilterType;
    };
    show: boolean;
}

@inject("ProjectsStore")
@observer
class MyWork extends React.Component<Props, State> {
    state: State = {
        projects: [],
        filters: {
            backend: {
                items: ["All", "Node", "PHP", "Go"],
                active: "All"
            }
        },
        show: false
    };

    async componentWillMount() {
        await this.props.ProjectsStore!.fetch();
    }

    generateWorkCards() {
        return this.props.ProjectsStore!.projects.map(project => {
            if (
                this.state.filters.backend.active === "All" ||
                project.all_technologies.includes(
                    this.state.filters.backend.active
                )
            ) {
                return (
                    <Col lg={4} md={6} xs={12} key={project.name}>
                        <WorkCard onClick={async () => {
                            await this.props.ProjectsStore.changeCurrentProject(project.slug)
                            this.setState({show: true})
                        }} project={project} />
                    </Col>
                );
            }
        });
    }

    changeActiveFilter(side: string, filter: string) {
        this.setState(state => ((state.filters[side].active = filter), state));
    }

    closeModal() {
        this.setState({show: false})
    }

    render() {
        return (
            <section className={this.props.className} id={this.props.id}>
                <SectionInro
                    subHeading="work"
                    heading="My Work"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere."
                />
                <Container>
                    <Filter
                        technologies={this.state.filters.backend.items}
                        onChange={filter =>
                            this.changeActiveFilter("backend", filter)
                        }
                        active={this.state.filters.backend.active}
                    />
                    <Row>
                        <FlipMove typeName={null}>
                            {this.generateWorkCards()}
                        </FlipMove>
                    </Row>
                </Container>
                <Modal
                    onHide={() => {this.closeModal()}}
                    show={this.state.show}
                    dialogClassName="custom-modal"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <SingleProject />
                </Modal>
            </section>
        );
    }
}

export default MyWork;
