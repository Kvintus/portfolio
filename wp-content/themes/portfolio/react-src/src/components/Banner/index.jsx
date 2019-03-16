import React from 'react'
import { Container } from 'react-bootstrap'
import './Banner.scss'

import TypeIt from 'typeit';
import "react-typeit/build/styles.min.css"

import SocialMediaButton from './../Misc/SocialMediaButton'

class Banner extends React.Component {
    
    state = {
        socialMedia: [
            {
                link: "http://facebook.com",
                iconClasses: "fab fa-facebook-f"
            },
            {
                link: "http://linkedin.com",
                iconClasses: "fab fa-linkedin-in"
            },
        ]
    }
    
    componentDidMount() {
        new TypeIt('#typeit', {
            strings: [
                "Frontend Developer",
                "Backend Developer",
                "Passionate Programmer"
            ],
            loop: true,
            speed: 75,
            breakLines: false,
            lifeLike: false,
            nextStringDelay: [1500, 500]
        }).go()
    }

    renderSocialMediaButtonList() {
        return this.state.socialMedia.map(button => {
            return (
                <li key={button.link}>
                    <SocialMediaButton link={button.link} iconClasses={button.iconClasses}/>
                </li>
            )
        });
    }

    render() {
        return (
            <div id="caro-banner">
                <div className="banner-triangle"></div>
                <Container>
                    <div className="row">
                        <div className="col-md-7 col-sm-12 col-xs-12 info">
                            <div className="banner-content">
                                <strong>Hello !</strong>
                                <h1>
                                    I Am
                                    <span id="typeit"></span>
                                </h1>
                                <p>I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design, business card and many more...</p>
                                {/* TODO: Load this dynamically with and render with React */}
                                <div className="social-media-links">
                                    <ul>
                                        {this.renderSocialMediaButtonList()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Banner