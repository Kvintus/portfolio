import React from 'react'
import './SectionIntro.scss'

interface SectionInroInterface {
    subHeading: string
    heading: string
    text: string
}

const SectionInro = (props: SectionInroInterface) => {
    return (
        <div className="section-intro text-center">
            <strong>{props.subHeading}</strong>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <div className="section-intro-border"></div>
        </div>
    )
}

export default SectionInro;