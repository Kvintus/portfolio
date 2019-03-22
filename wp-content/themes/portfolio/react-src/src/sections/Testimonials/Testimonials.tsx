import React from 'react'
import './Testimonials.scss'

import TestimonialCard, {Testimonial} from '../../components/Testimonials/TestimonialCard'
import {api} from '../../api';

interface State {
    testimonials: Testimonial[]
}

class Testimonials extends React.Component<{},State> {
    state = {
        testimonials: []
    }

    async componentWillMount() {
        let {data} =  await api.get('testimonials');
        this.setState({testimonials: data})
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}

export default Testimonials