import React from 'react'
import './WorkCard.scss'

export interface Project {
    name: string
    technologies: string[]
    images: string[]
    title_image: string
}

interface Props {
    project: Project
}

const WorkCard = (props: Props) => {
    let technologiesString = props.project.technologies ? props.project.technologies.join(', ') : '';

    return (
        <div className="work-card">
            <img src={props.project.title_image} alt=""/>
            <div className="overlay">
                <div className="info full-width">
                    <p>{technologiesString}</p>
                    <h4>{props.project.name}</h4>
                    <span className="icon">
                        <i className="fa fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WorkCard