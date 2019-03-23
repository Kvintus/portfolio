import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
var Banner = require('./components/Banner').default
import "react-typeit/build/styles.min.css"
import Navbar from './components/CustomNavbar/index.jsx'

// Sections
import AboutMe from './sections/AboutMe/AboutMe'
import Services from './sections/Services/Services.jsx'
import Available from './sections/Available/Available'
import MyWork from './sections/MyWork/MyWork';
import Testimonials from './sections/Testimonials/Testimonials'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
// import Store from './redux/reducers'

 

class App extends Component {
 
  render() {
    return (
        <div className="App">
          <Navbar/>
          <Banner/>
          <AboutMe id="about-me" className="section"/>
          <Services id="services"/>
          <Available></Available>
          <MyWork className="section" id="work"/>
          <Testimonials></Testimonials>
          <ContactMe className="section"/>
          <Footer/>
        </div>
    );
  }
}


export default App;
