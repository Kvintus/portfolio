import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react';
import SocialMediaStore from './stores/SocialMedia'
import ProjectsStore from './stores/Projects'

require('et-line');
require('animate.css')

const Root= (
    <Provider SocialMediaStore={SocialMediaStore} ProjectsStore={ProjectsStore}>
        <App/>
    </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
