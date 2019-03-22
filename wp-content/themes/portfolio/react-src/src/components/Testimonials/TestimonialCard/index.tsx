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
    testimonia: Testimonial
}

const TestimonialCard = (props: Props) => {
    return (
        <div>Hi</div>
    )
}

export default TestimonialCard