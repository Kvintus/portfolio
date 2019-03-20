import React from 'react'
import './WorkCard.scss'

export interface Project {
    name: string
    categories: string[]
}

interface Props {
    project: Project
}

const WorkCard = (props: Props) => {
    let categoriesString = props.project.categories.join(', ');

    return (
        <div className="work-card">
            <img src="http://abhtheme.com/html-preview/tm/dekha/dekha/images/portfolio/work-2.jpg" alt=""/>
            <div className="overlay">
                <div className="info full-width">
                    <p>{categoriesString}</p>
                    <h5>{props.project.name}</h5>
                    <span className="icon">
                        <i className="fa fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WorkCard