import React from 'react'
import { Container } from 'react-bootstrap'

import * as TypeIt from 'typeit';
import "react-typeit/build/styles.min.css"

import './Banner.scss'
import SocialMediaButton from '../Misc/SocialMediaButton'
import {api} from '../../api'
import {inject, observer} from 'mobx-react';
import {SocialMediaStore} from '../../stores/SocialMedia'

interface Props {
    SocialMediaStore: SocialMediaStore
}

@inject('SocialMediaStore')
@observer
class Banner extends React.Component<Props> {
    
    state = {
        socialMedia: [],
        text: "",
        typeitStrings: [],
        banner_image: "http://abhtheme.com/html-preview/tm/dekha/dekha/images/banner.jpg?fbclid=IwAR2X1kiAv1QjNBCiTbRO-PfijGIbYo7bU82kUSaOHP9CGYBQQ6Nx5vKYTgc"
    }

    initializeTypeIt(strings) {
        new TypeIt('#typeit', {
            strings,
            loop: true,
            speed: 75,
            breakLines: false,
            lifeLike: false,
            nextStringDelay: [1500, 500]
        }).go()
    }

    async fetchSocialMedia() {
        if (!this.props.SocialMediaStore.fetching) {
            this.props.SocialMediaStore.fetch()
            console.log('Fetching from Banner');
        }
        // let {data} = await api.get('social_media')
        // this.setState({socialMedia: data});
    }

    async fetchBasicInfo() {
        let {data} = await api.get('section/home')
       
        this.setState({
            text: data.text,
            banner_image: data.banner_image,
            typeitStrings: data.what_i_am.split(', ')
        })
    }
    
    async componentWillMount() {
        await this.fetchSocialMedia();
        await this.fetchBasicInfo();
        this.initializeTypeIt(this.state.typeitStrings);
    }

    renderSocialMediaButtonList() {
        return this.props.SocialMediaStore.accounts.map(account => {
            return (
                <li key={account.name}>
                    <SocialMediaButton link={account.link} iconClasses={account.iconClasses}/>
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