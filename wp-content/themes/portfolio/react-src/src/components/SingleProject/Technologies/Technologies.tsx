import React from "react";
import { Technologies, Technology } from "../../../stores/Projects";
import './Technologies.scss'

interface Props {
    technologies: Technologies;
}

function generateTechnologyList(technologyList: Technology[]) {
    return technologyList.map(technology => {
        return (
            <img className="technology-icon" src={technology.icon} alt={technology.name}/>
        );
    });
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

function generateTechnologiesSections(technologies: Technologies) {
    return Object.keys(technologies).map(technologyName => {
        return (
            <div>
                <h5>{capitalize(technologyName)}</h5>
                {generateTechnologyList(technologies[technologyName])}
            </div>
        );
    });
}

export default function TechnologiesElement(props: Props) {
    return (
        <div>
            <h3 className="project-heading">Technologies</h3>
            {generateTechnologiesSections(props.technologies)}            
        </div>
    );
}
