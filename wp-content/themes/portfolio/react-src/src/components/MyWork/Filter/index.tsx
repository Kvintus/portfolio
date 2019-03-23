import React from 'react'
import './index.scss'

interface FilterProps {
    heading?: string
    technologies: string[]
    onChange(filter: string): void
    active: string
}

const Filter = (props: FilterProps) => {
    const heading = props.heading ? <h4>{props.heading}</h4> : null;
    return (
        <div className="filter text-center">
            {heading}
            <ul>
                {
                    props.technologies.map(filter => {
                        return (
                            <li
                                onClick={() => props.onChange(filter)}
                                key={filter}
                                className={props.active === filter ? "active" : ''}
                            >{filter}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Filter;