import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
var Banner = require('./components/Banner/index.jsx').default
import "react-typeit/build/styles.min.css"
import Navbar from './components/CustomNavbar/index.jsx'

// Sections
import AboutMe from './sections/AboutMe/AboutMe'
import Services from './sections/Services/Services.jsx'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Banner/>
        <AboutMe className="section"/>
        <Services/>
      </div>
    );
  }
}


export default App;
