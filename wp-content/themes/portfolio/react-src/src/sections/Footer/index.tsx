import React from 'react'
import {inject, observer} from 'mobx-react'
import {Container, Row, Col} from 'react-bootstrap';

import {SocialMediaStore} from '../../stores/SocialMedia'
import SocialMediaButton from '../../components/Misc/SocialMediaButton'
import './index.scss'

interface Props {
    SocialMediaStore?: SocialMediaStore
}

@inject('SocialMediaStore')
@observer
class Footer extends React.Component<Props> {
    componentWillMount() {
        if (!this.props.SocialMediaStore.fetching) {
            this.props.SocialMediaStore.fetch()
            console.log('Fetching from Footer');
        }
    }

    private get currentYear() {
        return (new Date()).getFullYear()
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
            <footer>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="copyright-text">
                                <p>CopyRight © {this.currentYear} Jakob Rolik All Rights Reserved</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="pull-right">
                                <ul>
                                    {this.renderSocialMediaButtonList()}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;