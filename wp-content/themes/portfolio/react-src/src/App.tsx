import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
var Banner = require('./components/Banner/index.jsx').default
import "react-typeit/build/styles.min.css"
import Navbar from './components/CustomNavbar/index.jsx'

// Sections
import AboutMe from './sections/AboutMe/AboutMe'
import Services from './sections/Services/Services.jsx'
import Available from './sections/Available/Available'
import MyWork from './sections/MyWork/MyWork';
import Store from './redux/reducers'

declare global {
  interface Window { store: any; }
}

window.store = Store; 

class App extends Component {
 
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Navbar/>
          <Banner/>
          <AboutMe className="section"/>
          <Services/>
          <Available></Available>
          <MyWork className="section"/>
        </div>
      </Provider>
    );
  }
}


export default App;
