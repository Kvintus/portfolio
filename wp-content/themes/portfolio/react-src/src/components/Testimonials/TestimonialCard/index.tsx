import React from 'react'
import './index.scss'

export interface Testimonial {
    name: string
    image: string
    position: string
    text:string
    linkedin_url: string
}

interface Props {
    testimonial: Testimonial
}

function navigateToUrl(url: string) {
    if (url) {
        window.open(url, '_blank');
    }
}

const TestimonialCard = (props: Props) => {
    return (
        <div 
            className="testimonial" 
            onClick={() => navigateToUrl(props.testimonial.linkedin_url)}
            style={{
                'cursor': `${props.testimonial.linkedin_url ? 'pointer': 'default'}`
            }}
        >
            <div className="testimonial-picture">
                <img src={props.testimonial.image} alt={`${props.testimonial.name}'s picture`}/>
            </div>
            <h5 className="testimonial-title">{props.testimonial.name}</h5>
            <span className="testimonial-position">{props.testimonial.position}</span>
            <p className="testimonial-text">{props.testimonial.text}</p>
        </div>
    )
}

export default TestimonialCard